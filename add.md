---
layout: base
title: Adding Plugins
permalink: /add
---

# How to add your plugins

1. [Fork](https://github.com/chatsurfapp/plugins/fork) this repo.
2. Upload your `.js` file into the `_plugins` folder. (Make sure you don't overwrite anything else).
3. Add a file with the same name as your `.js` file, but replacing the `.js` with `.md`. This file should look like this:
   ```markdown
   ---
   layout: plugin
   title: The name of your plugin
   author: Your (nick)name
   version: The version number
   category: The category (new ones can be created if needed)
   description: |
       A description of your plugin.
       This supports multiline.
       And **markdown**
   ---
   ```
4. [Create a pull request](https://github.com/ChatSurfApp/plugins/compare) and wait for approval.
