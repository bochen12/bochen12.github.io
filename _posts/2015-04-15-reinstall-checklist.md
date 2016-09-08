---
layout: post
title: Checklist for clean os install
category: tech
---

##### Applications
- System: i3, synaptic, gdebi, dconf-editor, tlp/laptop-mode-tools, lm-sensors
- Terminal: guake/tilda, ranger
- Networking: openvpn, network-manager-openvpn-gnome, ufw
- Web browser: chrome/chromium, firefox
- Document processing: texlive, xetex, memoir, biber, texlive-fonts-extra, texworks, prince
- Editor: vim, geany, haroopad, atom, texworks
- Media: mpv, vlc, livestreamer
- Programming: ruby (-dev), jekyll, git
- Gaming: steam, wine-staging [ppa:pipelight/stable], ppsspp [ppa:ppsspp/stable], retroarch [ppa:libretro/stable]
- Theme: numix [ppa:numix/ppa]
- Syncing: rclone [golang]

##### Settings
- xkb: copy [custom layout](http://www.bochen.dk/public/al) to /usr/share/X11/xkb/symbols/
- xkb-options="caps:backspace"
- org.mate.desktop.media-handling: automount 0, automount-open 0, automount-never 1
- for ssd: add mount options noatime,discard in /etc/fstab
- symlink fonts folder
- copy .bashrc, .vimrc, .vimperatorrc
- .ac-url-text { color: #6b8e23 !important; } as .mozilla/firefox/\*.default/chrome/userChrome.css
- download [radio stream list](http://www.bochen.dk/public/radio.m3u)
- add »alias radio='vlc -I ncurses /path/to/radio.m3u'« to .bashrc
- copy [trackball config](http://www.bochen.dk/public/trackball) to /usr/share/X11/xorg.conf.d/
- xmodmap -e "clear Lock" to .profile or .bashrc
