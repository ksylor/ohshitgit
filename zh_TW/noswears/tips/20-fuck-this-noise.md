---
tags: tip
title: 搞砸的檔案，我放棄了！
id: 全部重來
note: this should always be the last one in the list, so setting order to 20 so I don't have to re-name/re-order it
order: 20
---

```git
cd ..
sudo rm -r stupid-git-repo-dir
git clone https://some.github.url/stupid-git-repo-dir.git
cd stupid-git-repo-dir
```

感謝 Eric V. 提供這個方法，所有跟這個玩笑中用到 `sudo` 有關的抱怨都可以去找他。


認真的說，如果你的分支真的這麼糟糕的話，你應該利用更「git」的方法來重置你的 repo。試試看這麼做，但要小心這是具破壞性且無法復原的操作！

```git
# 取得 origin 最新的狀態
git fetch origin
git checkout master
git reset --hard origin/master
# 刪除未追蹤（untracked）的檔案和目錄
git clean -d --force
# 針對每一個搞砸的分支重複上述 checkout/reset/clean 的步驟
```