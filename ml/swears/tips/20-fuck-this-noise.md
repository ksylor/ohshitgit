---
tags: tip
title: ഇതൊക്കെ മതി, ഞാൻ quit ചെയ്യുന്നു.
id: fuck-this-noise
note: this should always be the last one in the list, so setting order to 20 so I don't have to re-name/re-order it
order: 20
---

```git
cd ..
sudo rm -r fucking-git-repo-dir
git clone https://some.github.url/fucking-git-repo-dir.git
cd fucking-git-repo-dir
```

ഇതിന് Eric V.-ന് നന്ദി. `sudo` ഉപയോഗിച്ചതിൽ ആർക്കെങ്കിലും പരാതിയുണ്ടെങ്കിൽ അദ്ദേഹത്തോട് പറഞ്ഞോളൂ.


ഗൗരവമായി, നിങ്ങളുടെ branch ഇത്ര കുളമായെങ്കിൽ repo-ഇ remote-ന്റെ state-ലേക്ക് "git-approved" വഴിയിൽ reset ചെയ്യണമെങ്കിൽ, ഇത് ശ്രമിക്കൂ, പക്ഷേ ഇവ destructive, unrecoverable actions ആണ്!

```git
# origin-ന്റെ ഏറ്റവും പുതിയ state എടുക്കുക
git fetch origin
git checkout master
git reset --hard origin/master
# untracked files, directories ഇല്ലാതാക്കുക
git clean -d --force
# കുളമായ ഓരോ branch-നും checkout/reset/clean ആവർത്തിക്കുക
```
