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
- Google Drive: drive [ppa:twodopeshaggy/drive]

##### Settings
- xkb: copy custom layout to /usr/share/X11/xkb/symbols/
- xkb-options="caps:backspace"
- xmodmap -e "clear Lock" to .profile
- org.mate.desktop.media-handling: automount 0, automount-open 0, automount-never 1
- for ssd: add mount options noatime,discard in /etc/fstab
- symlink fonts folder
- copy trackball config to /usr/share/X11/xorg.conf.d/
