---
layout: post
title: Checklist for clean os install
---

##### Applications
- System: synaptic, dconf-editor, tlp/laptop-mode-tools, lm-sensors
- Terminal: guake/tilda
- Networking: openvpn, network-manager-openvpn-gnome, ufw
- Web browser: chrome, chromium, firefox
- Document processing: texlive, xetex, memoir, biber, texlive-fonts-extra, texworks, atom
- Networking: pia [build], ufw
- Web browser: chrome/chromium, firefox
- Editors: geany, haroopad, atom, texworks
- Document processing: texlive, xetex, memoir, biber, texlive-fonts-extra, pandoc
- Atom packages: language-latex, pdf-view, terminal-status
- Media: mpv, vlc, livestreamer
- Programming: ruby (-dev), jekyll, git
- Gaming: steam, wine-staging [ppa:pipelight/stable], ppsspp [ppa:ppsspp/stable], retroarch [ppa:libretro/stable]
- Theme: numix [ppa:numix/ppa]
- Syncing: rclone [golang]

##### Settings
- xkb: copy [custom layout](http://bochen.dk/public/al) to /usr/share/X11/xkb/symbols/
- xkb-options="caps:backspace"
- org.mate.desktop.media-handling: automount 0, automount-open 0, automount-never 1
- for ssd: add mount options noatime,discard in /etc/fstab
- symlink fonts folder
- update .bashrc
- copy [trackball config](http://bochen.dk/public/trackball) to /usr/share/X11/xorg.conf.d/
- xmodmap -e "clear Lock" to .profile or .bashrc
