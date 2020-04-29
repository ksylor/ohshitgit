---
tags: tip
title: Forget this noise, I give up.
id: forget-this-noise
note: this should always be the last one in the list, so setting order to 20 so I don't have to re-name/re-order it
order: 20
---

```git
cd ..
sudo rm -r stupid-git-repo-dir
git clone https://some.github.url/stupid-git-repo-dir.git
cd stupid-git-repo-dir
```

Thanks to Eric V. for this one. All complaints about the use of `sudo` in this joke can be directed to him. 


For real though, if your branch is sooo borked that you need to reset the state of your repo to be the same as the remote repo in a "git-approved" way, try this, but beware these are destructive and unrecoverable actions!

```git
# get the lastest state of origin
git fetch origin
git checkout master
git reset --hard origin/master
# delete untracked files and directories
git clean -d --force
# repeat checkout/reset/clean for each borked branch
```