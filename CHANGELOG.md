v6.5.9

↩️ Fixes Revert failing for changes at end of file.

v6.5.8 November 4th, 2025

🐛 Fix issue where content mode switching would fail when picking Other modes.

v6.5.7 November 1st, 2025

🔎 Search improvements with better highlight handling and navigation.

👓 Dynamic Type support for branch list and branch detail screen improves accessibility.

⌨️ Improved scroll position handling after editing text.

v6.5.6 October 24th, 2025

🗒️ Fix file icons not showing in bookmark menu for recently opened files.

🎨 Color theme editor improvements.

✨ Content tab bar is always at the bottom where it would previously move to the top on iPadOS 26.

v6.5.5 October 15th, 2025

🤖 Reset Branch action for Shortcuts app supports commit-ish.

🐛 Correctly wrap diff lines on commit detail screen on iPadOS 26.

⬆️ Fix issue making large pushes over https introduced in last update.

💥 Fix crash when trying to indent/unindent in editor.

v6.5.4 October 9th, 2025

📝 Improvements to commit dialog

🌥️ Git transfers adjusted to work better through CloudFlare

📺 Preview rendering refreshes correctly after app has been in the background on iPad

🤖 Reset Branch action for Shortcuts app

📦 Improved submodule handling in Shortcuts app actions

🐛 Fixed issue where content mode switching button would sometimes show incorrect title

v6.5.2 October 3rd, 2025

📘 Users' Guide updated.

v6.5.1 September 28th, 2025

🐛 Tab bar is no longer covered by sidebar on iPadOS 26 for some window sizes.

v6.5.0 September 26th, 2025

Working Copy is ready for iOS and iPadOS 26.

💎 Enjoy the liquid-glass design with playful animations, while still interacting quickly with repositories.

💻 The new menu bar in iPadOS 26 makes features easier to find and use.

📱 Quickly open files in other apps from the context menu, skipping the share sheet. Configure default apps for file types directly in the Files app.

🤖 When inserting files from the clipboard, supported iPhones and iPads can suggest filenames using an on-device language model.

🎨 Editor themes now support P3 colors for richer, more vibrant syntax highlighting.

📜 Support for Tcl and Zig syntax modes.

v6.3.5 August 1st, 2025

⚙️ Configure default setting for whether repositories Merge or Rebase on Pull next to repo specific setting inside Status & Configuration > Configuration. This is available to users that purchased or upgraded their pro unlock on October 17, 2018 or later.

🪣 BitBucket hosting provider can be used with oAuth disabled. Use account email / API token for authentication.

v6.3.4 June 17th, 2025

📱 This is the last version of Working Copy for iOS 16 where next update will require at least iOS 17, which is necessary as testing focus switches to future versions of iOS.

🗒️ Improvements to syntax highlighting of **bold** and *italics* in Markdown.

v6.3.3 June 2nd, 2025

🧜‍♀️ Mermaid charts in Markdown previews adapt to dark mode.

v6.3.2 May 15th, 2025

📈 Mermaid library for charts in Markdown upgraded to 11.5.0

🫖 Improved detection of Gitea hosting providers.

v6.3.1 May 11th, 2025

🤖 AI completions supports Anthropic and Ollama endpoints with easier configuration for Google Gemini. You can pick models from a drop down menu but not every model is useful for text completions. Very simple models are unable to understand completion instructions and thinking models take too long to produce completions.

You configure AI completions in Settings and to avoid leaking information to 3rd party APIs you have to opt in individual repositories.

🗒️ Syntax highlighting improvements to Markdown.

v6.3.0 April 17th, 2025

⚡️ Syntax highlighting for Zig.

🤖 List References action in Shortcuts app can be configured to Resume when pattern doesn't match anything making it easier to check if a branch/tag exists.

🐛 Fix issue where picking PCB app icon would make the icon-picker button invisible.

v6.2.9 April 1st, 2025

🌁 LFS smudge filter detects invalid pointers and pretend LFS isn't used for such files to better handle situations where .gitattributes patterns incorrectly matches.

✍️ Improvements when renaming from title menu when showing the Changes or Status tab for files.

🐛 Fixes bug where Commit button would become disabled when trying to commit with Sign enabled and no files staged.

v6.2.8 March 13th, 2025

🤖 List Repositories in Shortcuts is clearer about "include" parameter.

v6.2.7 February 24th, 2025

🫖 Uses OAuth authentication for the official gitea.com hosting provider instance.

v6.2.6 February 4th, 2025

🔓 Fix connection issue when SSH remote required no authentication because client was implicitly authenticated, which could happen with Tailscale SSH.

🐛 It is possible to correctly resolve conflicted binary files shown as hex-dumps.

v6.2.5 January 20th, 2025

🔗 Improvements when converting regular repositories to linked repositories to avoid two versions of files.

🤖 Commit Repository shortcuts action fixed to work inside submodules.

⚠️ Improved error handling when Git transfers fail.

v6.2.4 January 4th, 2025

✋ Improvements when dragging files into or out of Working Copy.

v6.2.3 December 30th, 2024

🤖 Use AI suggested commit messages in Shortcuts action to Commit Repository. These AI suggestions are available to users that purchased or upgraded their Pro Unlock after March 2022 and you need to have accepted terms of use inside Working Copy itself.

This Shortcuts action now requires iOS 17 or later which will slowly become a requirement for all Shortcuts actions in Working Copy. Consider upgrading to iOS 17+ or using x-callback-url.

🔐 Fixed import of OpenSSH private keys without comments.

v6.2.1 December 14th, 2024

📱 My main development focus is on the Mac version of Working Copy, but I took a little detour to support Stream Deck for the truly Connected users. Commit, Revert, Fetch, Merge, Pull & Push from your USB connected Stream Deck.

This requires an M-series processor iPad.

v6.2.0 November 23rd, 2024

📈 Mermaid library for charts in Markdown upgraded from 10.6.1 to 11.4.0

✅ Markdown checkboxes for inner lists render correctly in Preview mode.

v6.1.9 November 14th, 2024

⌨️ When looking at files that have both preview and edit modes there is small button on the right edge to switch and swiping from this side of the screen also drags in the other mode.

v6.1.8 October 31st, 2024

📺 Fix preview of Sketch files.

v6.1.7 October 23rd, 2024

🐛 Fixes bug parsing .gitattributes files with respect to Git LFS introduced in last update.

v6.1.6 October 12th, 2024

📦 Improvements to how .gitattributes files are parsed when deciding which LFS blobs to upload during push. Push status message and progress reporting will correctly include LFS blobs.Fix bug

v6.1.5 October 8th, 2024

📂 Pick a Files app folder before cloning to make the new repository start out in another part of the Files app and linked into Working Copy.

This is part of the original linked repository pro feature available to users that purchased or upgraded their unlock after September 2020.

🧑‍🦱 Improvements to how BitBucket hosting providers work when username is baked into Address field.

v6.1.3 September 24th, 2024

🤖 Shortcuts actions to Get Files and Write File have been rewritten to work correctly on iOS 18. Unfortunately it wasn't possible to support both iOS 16 and iOS 18. Users needing these automations either need to upgrade to iOS 17+ or use x-callback-url.

🔐 Improved error handling when SSH host key fingerprint doesn't match. You can now tap to approve the new host key instead of the transfer just failing.

v6.1.2 September 17th, 2024

🤖 Shortcuts action to Get Files and Write File has been disabled on iOS 18 as the Shortcuts app deletes files returned as action results.

v6.1.1 September 12th, 2024

🐛 Fix such that links inside Working Copy open correctly on iOS 18.

v6.1.0 September 11th, 2024

🍃 Allow token authentication for Overleaf remotes.

v6.0.9 September 6th, 2024

📱 Long tap Merge/Fetch/Pull/Push buttons at the top of the screen on iPad for context menu useful when repository has multiple remotes.

v6.0.8 September 4th, 2024

📝 Commit Amend can be started from context menu when repository doesn't have changes.

v6.0.7 August 27th, 2024

📝 Amend the latest commit from the Commit dialog instead of creating a new commit.

You will only be able to push as part of an amend if the original commit hasn’t been pushed previously or is at the head of the remote branch. These conditions are checked when enabling both Amend & Push.

Commit amend is a pro feature available to users who have purchased or upgraded their Pro Unlock within the last 12 months.

🤖 Shortcuts actions to Commit can be configured to fail without stopping Shortcut itself.

v6.0.6 July 25th, 2024

⚠️ Shortcuts actions to Fetch, Pull & Push can be configured to fail without stopping Shortcut itself.

🤖 Specify custom model name for AI Completion when using GPT-4.0

v6.0.5 July 12th, 2024

🎨 Improvements to UI when customising text editor colour themes.

🤖 Specify system prompt for AI Completion when using GPT-4.0

v6.0.4 June 17th, 2024

🐛 Fix bug where syntax highlighting was cleared when making any changes to editor settings.

👓 Improvements to Repository Status & Configuration screen at very large font sizes.

v6.0.3 June 1st, 2024

🐛 Fixes issue where some users got tipped about features multiple times.

v6.0.2 May 29th, 2024

🎨 New pro feature available to everyone that purchased or upgraded the pro unlock within the last year:

Customize color themes for syntax highlighting from the popup where you change editing mode. Switch between built-in themes, make your own and trade with friends as color themes can be shared as small json files.

A preview of your current file is shown when configuring making it clear how colors map for a particular file type being syntax highlighted. Theme choices are remembered by file type and whether the app is in light or dark mode.

✅ List checkboxes in Markdown, org-mode and AsciiDoc are no longer toggled when tapped as it could misinterpret attempts to move cursor. Instead the Copy/Paste menu is shown with a choice to Toggle checkbox.

🤖 AI completion uses gpt-4o instead of gpt-4-turbo when configured for GPT-4.

v6.0.1 May 13th, 2024

🔗 When creating linked repositories from the + button either a Directory or Document Package can be picked. It was previously only possible to link to Document Packages using drag-and-drop. This makes it easier to configure links to Swift Shortcuts and Codea projects.

When setting up linked repositories where the picked folder doesn't already contain a .git directory one will be created. To avoid confusing other apps this .git folder is stored outside the picked folder even though storing them in-place is nicer.

Working Copy now looks at the picked folder to see if this is a Codea project, Swift playground, Obsidian vault or Logseq document to store the .git directory in-place since these apps are not confused by this.

🤖 Shortcuts action to Get Repository Files can filter to only include conflicted files which can be used as an easy way to check if a repository has unresolved conflicts.

🐛 Fixes bug in shortcuts Commit action such that it no longer stages conflicted files when set to commit all modifications. Instead it will fail until conflicts have been resolved.

🥶 Fix application freeze that could happen when opening links from Markdown previews while using Stage Manager.

v6.0.0 May 2nd, 2024

🐛 Fixes bug introduced alongside Ed25519 key creation that broke commit signing with Ed25519 keys.

v5.9.9 May 1st, 2024

🔐 Generate Ecdsa and Ed25519 keys from within the app. Previously it has only been possible to use such SSH keys by importing them.

💡 Markdown Preview supports the Alerts extension to blockquotes for things like:
> [!TIP]
> Helpful advice for doing things better or more easily.

🐛 Improvements to how Shortcuts actions work on submodules.

👓 Commit dialog adapts to dynamic type settings.

⌨️ Keyboard shortcuts from 5.9.7 for scrolling editor adjusted to not collide with system shortcuts.

v5.9.8 April 19th, 2024

🤖 Configure AI Completion to use other services than OpenAI by customising endpoint.

📦 Shortcuts actions are able to work on submodules. Start configuring the shortcut to use the parent repository and when picking a second time submodules are available at the beginning of the list.

🐛 Fix issue where diff for empty files that had never been committed would be shown as if it was images.

v5.9.7 April 8th, 2024

Upgraded to libgit2 1.8.0

🔼 This enables push options (equivalent to --push-option= and -o) from the Push To… dialog that are useful for continuous integration. Multiple options are written with space between them and options that include space should be "double quoted" where special characters can be backslash escaped.

Push options are remembered for each repository and previously used options are available in the auto complete menu making it easy to pick previously used options.

Push To… with these new capabilities is a pro feature available to users that purchased or upgraded their pro unlock after March 20, 2019.

🤖 AI Completion can be configured to use gpt-4-turbo-preview instead of gpt-3.5-turbo-instruct for more context aware, higher quality but slower and more expensive completions.

🐛 Commit dialog will correctly display staged changes in the special case where a modified line have been staged but changed in the working directory to something else that is different from both staged line and latest commit.

⌨️ Command Up/Down on physical keyboard scrolls the editor one page and Command Left/Right scroll to the top or end of the file.

🧑‍🏫 Screens that show commit lists work better with dynamic type.

Color adjustments to increase contrast and readability.

v5.9.6 February 26th, 2024

🛜 Support for IPv6 addresses in SSH Upload & SSH Command. You need to wrap addresses in square brackets to include custom port.

v5.9.5 February 9th, 2024

🐛 Fix bug introduced in 5.9.4 such that commit changes would take very long to appear.

v5.9.4 February 6th, 2024

🏎️ Faster and more robust calculation of message history when writing commit messages.

📖 .asc files are seen as AsciiDoc by default.

v5.9.3 January 22nd, 2024

📝 Improvements to commit rewriting.

v5.9.2 January 18th, 2024

🤖 AI Completion no longer supports custom Javascript for requesting completion. While I apologise to the few people that used this, performance is much better without it. Check out AI Completion in Settings.

🖼️ WebP images are correctly shown in Content tab.

📺 When following [[Wiki Links]] the file extension is automatically added if needed. Space will also be replaced with - or _ as needed.

🐛 Fix bug configuring SSH key for Git remotes on iPad.

v5.9.1 January 10th, 2024

🐢 Upgrade to libssh2 1.11.1 to mitigate CVE-2023-48795 "Terrapin Attack"

🧜‍♀️ Mermaid diagram support in Markdown updated to 10.6.1

🐛 Open in Working Copy shortcuts action correctly works with Mode=Changes.

v5.9.0 January 3rd, 2024

📺 Improved table rendering in Markdown preview and support for [[WikiStyle.md]] links.

v5.8.9 December 20th, 2023

🤖 Improvements to AI Completion making it much easier to pick parts of a completion.

Text colour shows how much is included when you touch the completion, updating as the finger moves and inserting the completion when the finger is lifted.

v5.8.8 December 16th, 2023

📝 When editing the AI Completion script it is possible to import from a javascript file.

v5.8.7 December 13th, 2023

🤖 AI Completion now allows you to customise the prompt, the model and even the service used. Default behaviour is unchanged but by editing Javascript you can control how the context around the cursor is collected, how the API call is made and how the result is returned.

Check out AI Completion in Settings.

✅ Fixed bug where toggling list checkmarks in Markdown/AsciiDoc/orgmode would change the wrong character if there had been very recent edits.

v5.8.6 December 6th, 2023

🎄 Holiday Activity in settings no longer adds empty week in your GitHub activity graph. Reuse the feature to fix your GitHub activity.

v5.8.5 December 4th, 2023

🤖 Enable AI powered auto-completion for code and text in the content popup menu.

This requires your own OpenAI API key and is enabled for repositories individually to make sure nothing is sent to OpenAI without your consent.

Text completions appear as you edit and can be ignored as you keep typing or move the cursor. Tap the completion to insert up to this point, which is useful when only the start of the completion is needed. Tabular on external keyboards will insert the entire completion.

🛜 SSH transport connections are initiated in a way that works better with VPNs.

v5.8.4 November 7th, 2023

✅ Toggle list checkmarks when editing Markdown, org-mode and AsciiDoc by tapping [x]

v5.8.3 November 1st, 2023

🐛 Fix bug from last update such that converting regular repository to linked repository works correctly.

v5.8.2 October 29th, 2023

📦 Squash commits from the context menu of the branch detail screen. This is part of the Commit History Editing feature available to users that purchased or upgraded the Pro Unlock in June 2020 or later.

📜 Avoid problem that could happen when trying to list logs at app launch.

v5.8.0 October 23rd, 2023

☘️ Fix problem cloning from Overleaf.

📱 Widget for checking remote commits and fetching works with repositories outside Working Copy location.

v5.7.9 October 16th, 2023

🐛 Fixed that Preview would sometimes fail to reload after switching away from Content tab and back.

v5.7.8 October 2nd, 2023

🤖 Shortcuts action to List Repositories has a new parameter to only return Current repositories (open in some Working Copy window) or Shown repositories (open in some Working Copy window that is on-screen).

This is useful for making shortcuts that work on the current context activated with voice or the iPhone 15 Pro action button.

v5.7.7 September 29th, 2023

🕓 Improvements to commit graph.

v5.7.6 September 23rd, 2023

🏛 Improved compatibility with old OpenSSH servers.

v5.7.5 September 18th, 2023

📱 Add widget to home screen monitoring remote repository branch. It will efficiently check for remote changes making it easy to Fetch from widget. Repository and Branch is configured on backside.

This requires iOS 17 or iPadOS 17.

v5.7.4 September 9th, 2023

🐛 Fix bug where it wasn't possible to setup linked repository to directory that had previously been linked.

v5.7.3 August 24th, 2023

🔐 SSH key can be specified when cloning.

v5.7.2 August 14th, 2023

🧑‍🏫 Improvements to LaTeX block rendering in Markdown previews.

v5.7.1 July 30th, 2023

🔐 It is now possible to remove the Screen Lock if you forgot the screen code by uninstalling and reinstalling the app. You will be starting over with all repositories missing and all ssh keys and passwords purged.

v5.7.0 July 11th, 2023

👩‍🎓 Fix to correctly check GitHub education status.

📜 Load additional commits when scrolled to the bottom while looking at commit history in Status tab for single file.

v5.6.9 June 30th, 2023

📖 Tap the small book icon while editing commit messages to to pick a recent message.

This is checked for filenames and dates where filename from previous commit message is replaced with filename currently staged for commit. Dates from previous commit message is replaced with current date & time matching the previous date format.

⭐️ Improvements to how starred repositories are read when listing GitHub repos for cloning.

v5.6.8 June 1st, 2023

🪲 Improved resolve for rename conflicts.

📝 Nested markdown lists support indentation with 2, 3 or 4 space characters where it previously only supported 4 character indentation.

v5.6.7 May 25th, 2023

🔎 Configure whether repository search includes full text results, symbol declarations or only filenames. Start search and tap the small book button to the left of search field to change settings.

🪲 Fixed bug where branch reset was refused if it skipped over merge commits.

v5.6.5 May 16th, 2023

🔐 Accepts new BitBucket host keys issued May 15, 2023 2300 UTC. This is required to use SSH remotes at bitbucket.org.

v5.6.4 May 7th, 2023

🪲 Fixed issue that could happen when setting up external linked repository to Obsidian vaults stored on iCloud Drive.

v5.6.3 April 29th, 2023

☕️ Better error messages when using Gitea access tokens that have insufficient scopes.

v5.6.2 April 25th, 2023

🕜 Commit graph sort order uses popup making it easier to understand choices.

🪣 BitBucket integration adjusted to allow wiki access. You need to authenticate BitBucket once more to grant wiki scope.

☕️ Better error message when Gitea authentication fails.

🐛 Fix weird scrolling when editing short lines in landscape mode on modern iPhones.

v5.6.1 April 4th, 2023

🗃️ Configure stash buttons on the navigation bar in iPadOS 16 by picking Customize Toolbar from the (...) menu. iPhone users can stash from the repository context menu as always.

🔖 Working Copy correctly restores your location at launch inside linked external repositories. Part of the improvement happens when exiting Working Copy so you might get one last launch that forgets your location.

v5.6.0 March 25th, 2023

💥 Fix crash that could happen at launch.

v5.5.9 March 24th, 2023

🔐 Support for AES-GCM ciphers during SSH transfers.

💥 Fix crash that could happen when changing current branch while showing commit graph.

v5.5.8 March 15th, 2023

📗 Updated Users' Guide in Settings

💥 Fixed some possible crashes.

v5.5.7 March 6th, 2023

🤖 Use AI generated commit messages derived from the changes you are about to commit. Tap button to the left of summary field that shows a list of previous commit messages and pick AI Suggestions.

Your code and text differences will be going through the OpenAI API so there are privacy issues you have to consider on a project-by-project basis. You still have access to fully local auto-complete based on recent commit messages, modified filenames, diff content & frequent word pairs from public repositories.

AI Generated commit messages is a pro feature available to everyone that purchased or upgraded their Pro Unlock the last 12 months and also works when you edit messages of existing commits from the context menu.

v5.5.6 March 2nd, 2023

📘 Improvements to status and error messages.

v5.5.5 February 26th, 2023

🪲 Fully fix error that could happen when linking repository to Obsidian vault.

v5.5.4 February 25th, 2023

🐛 Fix error that could happen when linking repository to Obsidian vault.

v5.5.3 February 23rd, 2023

📦 Improved behaviour when submodule configuration changes during pull, merge and checkout as well as when using submodules inside submodules.

🕓 Sort commit graph by chronology or topology.

🔥 Avoid crash that could happen when switching from two-panel layout with editor on the right and rotating to one-panel layout.

v5.5.2 January 31st, 2023

🧑‍🎓 Improved error messages when checking GitHub student status.

v5.5.1 January 23rd, 2023

🧜‍♀️ Updated rendering of Mermaid diagrams in Markdown.

👨‍🦱 Improved loading of avatar images from GitHub.

v5.5.0 January 19th, 2023

🔐 Sign commits with SSH keys.

This is configured for each commit identity just like PGP signing keys. Import SSH private keys or use keys already used for SSH authentication by Working Copy.

SSH commit signing is a pro features available to everyone that purchased or upgraded less than 12 months ago.

v5.4.7 January 5th, 2023

🤖 Commit History action in Shortcuts app uses fast default ordering instead of topological ordering when listing current branch.

✍️ Fix bug where editing default commit identity would create a new identity.

v5.4.6 December 30th, 2022

🐛 Fix bug introduced mid December where push sometimes failed to try all authentication methods.

v5.4.5 December 29th, 2022

🐛 Fix bug introduced mid December where push sometimes failed to try all authentication methods.

v5.4.4 December 28th, 2022

📜 Configure whether Repository Status lists commits from all branches or just HEAD in title menu.

v5.4.3 December 27th, 2022

📜 Commit lists use default instead of topological order making them much faster for large repositories.

v5.4.2 December 21st, 2022

💥 Fix crash that could happen when opening list of logs.

v5.4.1 December 19th, 2022

⬆️ When pushing fails because account doesn't have access on GitHub, GitLab or BitBucket you are prompted to complete push on forked repository.

Pull Request creation from branch list is able to fork a repository such that you don't need to fork and configure the upstream repository ahead of time.

⌨️ Nicer commit autocomplete suggestions.

TreeSitter highlighting has been disabled while I work on a better way to handle injected languages.

🐛 Fix error where it wasn't possible to clone from url having @ in the username.

v5.4.0 December 13th, 2022

🧑‍🎓 Support for math expressions in AsciiDoc Preview.

🐛 Avoid error after renaming remote when repository tried to reload commits from branches using their old name.

v5.3.9 December 10th, 2022

🎄 Users signed into GitHub will find Holiday Activity at the top of settings. Decorate your GitHub Activity Grid for the holidays.

v5.3.8 November 28th, 2022

⌨️ Editor uses TreeSitter for incremental syntax highlighting when editing Java, OCaml, LaTeX and Lua.

You should notice syntax highlighting being available immediately when files of this type are opened
and that highlighting colours update without delay as you type.

TreeSitter support will be added to more languages in the next few updates. I'm intentionally holding back the most popular languages to expose fewer people to potential bugs missed during testing.

📂 Avoid flickering of status when moving file into folder and renaming it.

☕️ Improved auto detection for Gitea hosting providers.

v5.3.7 November 15th, 2022

🔐 Enable signing in Shortcuts commit action. This requires a commit identity with a signing key that doesn't ask for passphrase or requires Face/Touch ID.

🔎 Repository wide search includes text in images. Index will need to rebuild on your first search in each repository because of this.

🐛 Fix bug where repository search failed when renaming a repository until next app launch.

v5.3.6 November 5th, 2022

🐛 Fix editor search broken by last update.

v5.3.5 November 1st, 2022

📦 Bug fixes when adding submodules to repository.

⬇️ Pull down to "Fetch all repositories" works when list is all folders.

🐛 Fix to correctly create draft pull requests on GitHub.

🎨 Rolled back some changes to syntax highlighting colours.

v5.3.4 October 28th, 2022

🐛 Fix commit history rewriting for external repository with .git folder inside Working Copy.