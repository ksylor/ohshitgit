---
tags: tip
title: 糟糕，我嘗試執行 diff 來比較差異，怎麼什麼事都沒有發生？！
id: diff在哪裡
order: 6
---

如果你對檔案做了更動，但是 `diff` 卻是空白的，你可能是已經用 `add` 將檔案移至暫存區（staging）了，你必須額外加上特別的參數。

```git
git diff --staged
```

檔案在這裡 &macr;\\\_(ツ)\_/&macr; （對，我知道這是個 feature，不是 bug，但第一次遇到真的會覺得莫名其妙！）
