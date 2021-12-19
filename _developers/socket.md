---
layout: base
title: Socket
category: Classes
---

# Socket

Socket is an extension of [Socket.io's Socket](https://socket.io/docs/v4/server-api/#socket).

## Socket.sessionID (string)

Used to identify a socket across sessions.

WARNING: Do not use this for punishments as the ID can easily be reset.

## Socket.username (string)

A user's username.

Make sure you use .toLowerCase() when doing comparisons.

## Socket.room (string)

The user's current room.

## Socket.badge (string|null)

Default: null

Set to give a user a badge.

Uses [Material Icons](https:/fonts.google.com/icons).

## Socket.kick (Function)

Parameters: reason (string)

Kicks user for inputted reason.