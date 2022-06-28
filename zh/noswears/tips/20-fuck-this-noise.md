---
tags: tip
title: 这些乱七八糟的文件太烦人了, 我放弃啦。（那些 untracked 的文件）
id: fuck-this-noise
note: this should always be the last one in the list, so setting order to 20 so I don't have to re-name/re-order it
order: 20
---

```git
cd ..
sudo rm -r annoying-git-repo-dir
git clone https://some.github.url/annoying-git-repo-dir.git
cd annoying-git-repo-dir
```

感谢 Eric V. 提供了这个事例，如果对 `sudo` 的使用有什么的质疑的话，可以去向他提出。


不过说真的，如果你的分支真的这么糟糕的话，你应该使用 "git-approved" 的方法来重置你的 repo，可以试试这么做，但要注意这些操作都是破坏性的，不可逆的！ 

```git
# 获取远端库最新的状态
git fetch origin
git checkout master
git reset --hard origin/master
# 删除 untracked 的文件和目录
git clean -d --force
# 对每一个有问题的分支重复上述 checkout/reset/clean 操作
```