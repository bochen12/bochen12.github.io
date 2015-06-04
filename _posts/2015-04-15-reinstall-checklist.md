---
layout: post
title: Checklist for clean os install
---

##### Applications
- System: synaptic, dconf-editor, laptop-mode-tools, lm-sensors
- Launcher: gnome-do
- Terminal: guake/tilda
- Networking: pia [build], ufw
- Web browser: chrome/chromium, firefox
- Document processing: texlive, xetex, memoir, biber, texworks, atom, haroopad
- Atom packages: language-latex, pdf-view, terminal-status
- Media: mpv, vlc, livestreamer
- Programming: ruby (-dev), jekyll, git
- Gaming: steam, wine-staging [ppa:pipelight/stable], ppsspp [ppa:ppsspp/stable]
- Theme: numix [ppa:numix/ppa]

##### Settings
- xkb: copy custom layout to /usr/share/X11/xkb/symbols/
- xkb-options="caps:backspace"
- org.mate.desktop.media-handling: automount 0, automount-open 0, automount-never 1
