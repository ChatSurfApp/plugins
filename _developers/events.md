---
layout: base
title: Events
category: Development
---

# Events

| Events                  |
|-------------------------|
| [onConnect](#onconnect) |
| [onMessage](#onmessage) |

## onConnect

Fires on socket connection.

Parameters: [Socket](/plugins/developers/socket)

Example:
```js
function onConnect(socket) {
  // Do something...
}

module.exports = { onConnect };
```

## onMessage

Fires on message receive.

Parameters: [Message](/plugins/developers/message)

Example:
```js
function onMessage(message) {
  // Do something...
}

module.exports = { onMessage };
```