import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('script2markdown.exportToMd', async (uri: vscode.Uri) => {
        
        let inputFolder = uri?.fsPath;
        if (!inputFolder) {
            vscode.window.showErrorMessage('Script2Markdown: Please run this command by right-clicking a folder in the Explorer.');
            return;
        }

        const csFiles: string[] = [];
        function findCsFiles(dir: string) {
            const files = fs.readdirSync(dir);
            for (const file of files) {
                const fullPath = path.join(dir, file);
                const stat = fs.statSync(fullPath);
                if (stat.isDirectory()) {
                    findCsFiles(fullPath);
                } else if (file.endsWith('.cs')) {
                    csFiles.push(fullPath);
                }
            }
        }

        try {
            findCsFiles(inputFolder);
        } catch (error) {
            vscode.window.showErrorMessage('Script2Markdown: Error reading directories.');
            return;
        }

        if (csFiles.length === 0) {
            vscode.window.showInformationMessage('Script2Markdown: No .cs files found in the selected directory.');
            return;
        }

        const fileUri = await vscode.window.showSaveDialog({
            defaultUri: vscode.Uri.file(path.join(inputFolder, 'Script2Markdown_Output.md')),
            saveLabel: 'Save Export',
            filters: {
                'Markdown Files': ['md'],
                'All Files': ['*']
            },
            title: 'Save Script2Markdown Output'
        });

        if (!fileUri) {
            return; 
        }
        
        const outputPath = fileUri.fsPath;

        let projectName = 'Project';
        if (vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders.length > 0) {
            projectName = vscode.workspace.workspaceFolders[0].name;
        }

        let mdContent = `# ${projectName} - Script2Markdown Export\n\n`;
        for (const file of csFiles) {
            const relativePath = path.relative(inputFolder, file);
            const fileContent = fs.readFileSync(file, 'utf8');
            
            mdContent += `## ${relativePath}\n\n\`\`\`csharp\n${fileContent}\n\`\`\`\n\n`;
        }

        fs.writeFileSync(outputPath, mdContent, 'utf8');

        const outputFileName = path.basename(outputPath);
        vscode.window.showInformationMessage(`Script2Markdown: Success! ${csFiles.length} files exported to ${outputFileName}`);
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}