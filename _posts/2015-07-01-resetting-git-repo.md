---
layout: post
title: Resetting git repo
---

1. delete .git directory
2. initiate
    git init
    git add --all
    git commit -m '<message>'
3. push and overwrite
    git remote add origin <url>
    git push --force --set-upstream origin master
