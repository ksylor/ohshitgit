---
tags: tip
title: もーーまじこいつ無理。諦めたわ。
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

Eric V、これありがとね。仮にこのジョークを真に受けて *sudo* しちゃったとしても、みんな文句は彼に言うんだよ。

真面目の話、ブランチがめちゃくちゃになって、repoの状態をリモートと同じように "git的に正しい状態" に戻さなくいけなくなったら、以下を試してみて。でもこれは破壊的な変更で、一度やると元に戻せないので要注意！

```git
# originの最新の状態を取ってくる
git fetch origin
git checkout master
git reset --hard origin/master
# 追跡されていないファイルやディレクトリを削除
git clean -d --force
# 腐った全ブランチに対し checkout/reset/clean を繰り返そう
```
