---
layout: base
title: Message
category: Classes
---

# Message

## Message.io ([Server](https://socket.io/docs/v4/server-api/#new-serverhttpserver-options))

Socket.io instance.

## Message.author ([Socket](/plugins/developers/socket))

Message author's socket.

## Message.content (string)

Message content.

## Message.cancel (Function)

Stops message from being sent.

## Message.reply (Function)

Parameters: message (string)

Sends message to the message author.

## Message.to (Function)

Parameters: socket (string\|[Socket](/plugins/developers/socket))

Returns: [ToReturn](#toreturn)

---

# ToReturn

## ToReturn.send (AsyncFunction)

Parameters: message (string)

Throws an error if user does not exist.

## ToReturn.socket (AsyncFunction)

Returns: [Socket](/plugins/developers/socket)

Throws an error if user does not exist.