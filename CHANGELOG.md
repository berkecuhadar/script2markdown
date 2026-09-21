# Changelog

## [0.0.1] - Initial Release
### Added
- **Recursive Scanning:** Added the ability to right-click a folder in the Explorer and recursively find all `.cs` files inside it.
- **LLM-Ready Formatting:** Scripts are now automatically wrapped in Markdown C# code blocks (` ```csharp `) to provide clean context for AI models.
- **Intelligent File Paths:** The Markdown file now uses relative paths (e.g., `Scripts/Player.cs`) instead of just file names, helping LLMs understand the project architecture.
- **Dynamic Project Header:** The extension now dynamically fetches the active workspace/project root name and adds it as the main Header (`# ProjectName - Script2Markdown Export`).
- **Custom Save Dialog:** Integrated VS Code's native save dialog, allowing users to choose their preferred output directory and file name (defaults to `Script2Markdown_Output.md`).
- **Context Menu Integration:** Added the "Script2Markdown: Export C# to MD" command to the Explorer context menu for quick access.