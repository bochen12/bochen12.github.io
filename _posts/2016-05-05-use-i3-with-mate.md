---
layout: post
title: Using i3 wm with mate
category: tech
---

Instructions for changing the window manager in mate from marco to i3:

1. Open dconf-editor.
2. Set org.mate.desktop.session.required-components.windowmanager to i3.
3. Remove 'filemanager' and 'dock' from org.mate.desktop.session.required-components-list.
4. Log out.
