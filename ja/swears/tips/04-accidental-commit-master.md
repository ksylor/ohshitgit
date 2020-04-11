---
tags: tip
title: くっそー、新しいブランチにコミットするはずだったやつ、間違えてMasterにコミットしちゃったよ！
id: accidental-commit-master
order: 4
---

```git
# 今の状態のmasterから新しいブランチを作成
git branch some-new-branch-name
# masterブランチから最後のコミットを消去
git reset HEAD~ --hard
git checkout some-new-branch-name
# あなたのコミットはこのブランチにあるはず :)
```

注: publicだったり共有されてたりするブランチへ既にpushされてるコミットの場合にはこの方法はうまくいかないし、もし先に他のことを試してた場合は `HEAD~` の代わりに `git reset HEAD@{戻すコミットの数}` をやらないといけないかもしれない。無限のつらみだね。それと、超超超他大勢の人たちがこの手順を短くできるように、私の知らなかったイケてる方法を提案してくれた。みんなありがとうね！
