# Quick Import README

This extension is quite simple
you just press the chosen shortcut for inserting an import (by default it is `ctrl+g`) than it will take the selected text when that shortcut was pressed and it will import the selected text at the top with the chosen variable name if the `from_folder_name` (defaults to `"@mui/material/"`) and adds it to the selected text, so in the end you get
```
`import ${selected_text} from "${from_folder_name}${selected_text}`
```
It than gets added to the top of your code (with ";\n" added) only if it doesn't exist.
 