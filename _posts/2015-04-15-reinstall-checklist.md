---
layout: post
title: Checklist for clean os install
---

##### Applications
- System: synaptic, dconf-editor, laptop-mode-tools, lm-sensors
- Terminal: guake/tilda
- Networking: pia [build], ufw
- Web browser: chrome/chromium, firefox
- Document processing: texlive, xetex, memoir, biber, texworks, geany, atom, haroopad
- Atom packages: language-latex, pdf-view, terminal-status
- Media: mpv, vlc, livestreamer
- Programming: ruby (-dev), jekyll, git
- Gaming: steam, wine-staging [ppa:pipelight/stable], ppsspp [ppa:ppsspp/stable], retroarch [ppa:libretro/stable]
- Theme: numix [ppa:numix/ppa]
- Google Drive: drive [ppa:twodopeshaggy/drive]

##### Settings
- xkb: copy [custom layout](bochen.dk/public/al) to /usr/share/X11/xkb/symbols/
- xkb-options="caps:backspace"
- xmodmap -e "clear Lock" to .profile or .bashrc
- org.mate.desktop.media-handling: automount 0, automount-open 0, automount-never 1
- for ssd: add mount options noatime,discard in /etc/fstab
- symlink fonts folder
- copy trackball config to /usr/share/X11/xorg.conf.d/
