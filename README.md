# Script2Markdown

**Script2Markdown** is a lightweight Visual Studio Code extension that recursively scans a selected directory, aggregates all C# (`.cs`) files, and bundles them into a single, well-structured Markdown (`.md`) file. 

It is specifically designed to streamline the workflow of developers who need to feed entire codebases—such as Unity, Godot, or .NET project scripts—into Large Language Models (LLMs) like ChatGPT, Claude, or Gemini for code reviews, debugging, and refactoring.

---

## Features

*   **One-Click Export:** Simply right-click any folder in the VS Code Explorer to initiate the export.
*   **Recursive Scanning:** Automatically traverses all subdirectories to locate every `.cs` file within the selected folder.
*   **Intelligent File Paths:** Uses relative paths (e.g., `Scripts/Player/Movement.cs`) as Markdown headers, helping AI models understand your project's architecture and file relationships.
*   **LLM-Ready Formatting:** Wraps each file's content in proper Markdown C# code blocks (` ```csharp `), ensuring AI models can easily parse the context.
*   **Custom Save Destination:** Utilizes the native VS Code save dialog, allowing you to choose the exact output location and filename (defaults to `Script2Markdown_Output.md`).

## Usage

1. Open your C# project in VS Code.
2. In the **Explorer** pane on the left, right-click on the folder containing the scripts you want to analyze.
3. Select **"Script2Markdown: Export C# to MD"** from the context menu.
4. A save dialog will appear. Choose your desired output location and file name.
5. The extension will generate the `.md` file, and a success notification will appear in the bottom right corner of VS Code.

## Installation

You can install **Script2Markdown** directly from the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=berkecuhadar.script2markdown).

**Install via VS Code Extensions View:**
1. Open VS Code.
2. Navigate to the Extensions view (`Ctrl+Shift+X` on Windows/Linux or `Cmd+Shift+X` on macOS).
3. Search for **Script2Markdown**.
4. Click **Install**.

**Install via Command Palette:**
1. Press `Ctrl+P` (or `Cmd+P` on macOS) to open the Quick Open dialog.
2. Type `ext install berkecuhadar.script2markdown` and press Enter.


## Example Output

The generated Markdown file will look like this:

# Script2Markdown Export

## Player/PlayerController.cs

```csharp
using UnityEngine;

public class PlayerController : MonoBehaviour {
    // Code here...
}
```
## Core/GameManager.cs
```csharp
using UnityEngine;

public class GameManager {
    // Code here...
}
```
## Contributing

Pull requests are welcome! If you have suggestions, feature requests, or encounter issues, please feel free to open an issue on the GitHub repository.

## License
MIT - do whatever you want.