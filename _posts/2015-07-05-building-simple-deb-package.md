---
layout: post
title: Building simple .deb package
category: tech
---

Instructions for buliding simple deb package from compiled binary with dpkg-deb. Only recommended for personal use.

1. Create folder structure and copy binaries and libraries. Example:

        (pkgname)/usr/local/bin/(binary)
        (pkgname)/usr/local/share/(appname)/(stuff)
        etc.
        
2. Create control file in (pkgname)/DEBIAN/control. Example fields:

        Package: <appname>-<version>-<rev>
        Version: x.y.z-n
        Priority: optional
        Architecture: amd64, i386, all
        Depends: libabc (>=x.y.z), libother
        Maintainer: <name> <<email>>
        Description: Short description
         A little longer description
         .
         Some more stuff
         
3. Possibly need to change ownership to root:

        chown -R root:root (pkgname)
        
4. Build package:

        dpkg-deb --build (pkgname)
