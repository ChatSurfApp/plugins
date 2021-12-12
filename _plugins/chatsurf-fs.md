---
layout: plugin
title: ChatSurf File System
author: ChatSurf
version: 1.0.0
description: |
    A basic json config storage plugin
    
    ## Usage
    
    ```js
    // Setup
    const config = require(\"./chatsurf-fs\").loadConfig(__filename);
    
    // Getter
    config.get(\"path.to.something[0]\");
    
    // Setter
    config.set(\"path.to.something[0]\", \"my data\");
    ```
---
