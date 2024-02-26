import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('quick-import.insertImport', () => {
        // Get the active text editor
        const from_folder_name = vscode.workspace.getConfiguration('quick-import').get('from_folder_name', "@mui/material/");
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage("No active text editor.");
            return;
        }

        // Get the selected text
        const selection = editor.selection;
        const selectedText = editor.document.getText(selection);

        // Check if selected text is alphabetic
        if (!/^[a-zA-Z]+$/.test(selectedText)) {
            vscode.window.showErrorMessage("Selected text must be alphabetic only.");
            return;
        }

        // Construct import statement
        const baseImportStatement = `import ${selectedText} from "${from_folder_name}${selectedText}"`;
        const importStatement = baseImportStatement+";\n";
        const importStatementAlreadyExists = editor.document.getText().includes(baseImportStatement);
        if (importStatementAlreadyExists) {
            vscode.window.showInformationMessage(`${selectedText} is already imported.`);
            return;
        }
        editor.edit(editBuilder => {
            editBuilder.insert(new vscode.Position(0, 0), importStatement);
        });

        vscode.window.showInformationMessage(`Imported ${selectedText} successfully.`);
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}