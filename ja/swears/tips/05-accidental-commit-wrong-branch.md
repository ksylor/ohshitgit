---
tags: tip
title: くっそー、コミットするブランチ間違えたし！
id: accidental-commit-wrong-branch
order: 5
---

```git
# 最後のコミットは取り消しつつ、変更内容はあとから使えるようにしよう
git reset HEAD~ --soft
git stash
# 正しいブランチに移動
git checkout [正しいブランチ名]
git stash pop
git add . # あるいは個々のファイルをadd
git commit -m "ここにメッセージを書いてね";
# これで正しいブランチに変更内容が反映されたよ
```

この状況だと `cherry-pick` を使うっていう人も多かった。だから自分に合うほうを選んでね。

```git
git checkout [正しいブランチ名]
# masterブランチから最後のコミットをピックして
git cherry-pick master
# masterからは変更内容を消そう
git checkout master
git reset HEAD~ --hard
```
