#!/bin/bash

# Copier les hooks depuis githooks/ vers .git/hooks/
cp githooks/* .git/hooks/

# Rendre les hooks exécutables
chmod +x .git/hooks/post-commit

echo "Git hooks installed successfully."
