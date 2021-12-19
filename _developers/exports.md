---
layout: base
title: Exports
category: Development
---

# Exports

In ChatSurf exports are used to register events and tell ChatSurf
what to do with the plugin. It is recommended to export data like
this:
```js
module.exports = { ... };
```

All exports are listed below:

| Export       | Description                                           |
|--------------|-------------------------------------------------------|
| onConnect    | [Event](/plugins/developers/events#onconnect)         |
| onMessage    | [Event](/plugins/developers/events#onmessage)         |
| ignoreplugin | Tells ChatSurf not to load plugin. Used in libraries. |