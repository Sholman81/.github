# GitHub Code Search Syntax Cheat Sheet

This file provides a quick reference to the most common and useful GitHub Code Search syntax.

## Basic Searches

*   **Multiple words**: `sparse index` - Finds files containing both "sparse" and "index".
*   **Exact phrase**: `"sparse index"` - Finds files containing the exact phrase "sparse index".

## Boolean Operations

*   **AND**: `sparse AND index` - Same as `sparse index`.
*   **OR**: `sparse OR index` - Finds files containing either "sparse" or "index".
*   **NOT**: `sparse NOT index` - Finds files containing "sparse" but not "index".
*   **Grouping**: `(sparse OR dense) AND index` - Finds files containing "index" and either "sparse" or "dense".

## Common Qualifiers

Qualifiers narrow down your search to specific parts of the repository.

*   **`repo:`**: Search within a specific repository.
    *   Example: `repo:owner/repo-name sparse` - Finds "sparse" in the `repo-name` repository.
*   **`language:`**: Search within a specific programming language.
    *   Example: `language:python sparse` - Finds "sparse" in Python files.
*   **`path:`**: Search within a specific file path.
    *   Example: `path:src/ sparse` - Finds "sparse" in files within the `src/` directory.
    *   Example: `path:*.js sparse` - Finds "sparse" in any file with the `.js` extension.
*   **`user:`**: Search in repositories owned by a specific user.
    *   Example: `user:octocat sparse`
*   **`org:`**: Search in repositories owned by a specific organization.
    *   Example: `org:github sparse`

## Regular Expressions

For more advanced searches, you can use regular expressions by enclosing them in slashes (`/`).

*   Example: `/sparse.*index/` - Finds files containing "sparse" followed by any characters and then "index".

## Combining Qualifiers

You can combine multiple qualifiers to further refine your search.

*   Example: `repo:owner/repo-name language:javascript "error message"` - Finds the exact phrase "error message" in JavaScript files within the `repo-name` repository.
