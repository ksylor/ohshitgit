---
tags: tip
title: 這些亂七八糟的文件太煩人了, 我放棄啦。 （那些 untracked 的文件）
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

感謝 Eric V. 提供了這個事例，如果對 `sudo` 的使用有什麼的質疑的話，可以去向他提出。


不過說真的，如果你的分支真的這麼糟糕的話，你應該使用 "git-approved" 的方法來重置你的 repo，可以試試這麼做，但要注意這些操作都是破壞性的，不可逆的！

```git
# 獲取遠端庫最新的狀態
git fetch origin
git checkout master
git reset --hard origin/master
# 刪除 untracked 的文件和目錄
git clean -d --force
# 對每一個有問題的分支重複上述 checkout/reset/clean 操作
```