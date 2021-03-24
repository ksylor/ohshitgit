---
tags: tip
title: ale li pakala. mi ken ala.
id: forget-this-noise
note: this should always be the last one in the list, so setting order to 20 so I don't have to re-name/re-order it
order: 20
---

```git
cd ..
sudo rm -r lipu-git-pakala
git clone https://github.url/lipu-git-pakala.git
cd lipu-git-pakala
```

jan Eric V. li pana e nasin ni. sina pona! sina pilin ike tan ilo `sudo` lon musi ni la, o toki tawa ona.

musi ala la, nasin pali sina li pakala mute, sina ken ijo pi ilo ante e ijo pi ilo sina kepeken nasin ni. taso, o sona e ni: nasin ni li ken pakala e ijo pona! pakala li kama tan nasin ni la ona li ken ala kama pona!

```git
# o kama jo e ijo pi ilo ante pi tenpo ni
git fetch origin
git checkout master
git reset --hard origin/master
# o weka mute e ijo ni: ilo git li sona ala e lon ona
git clean -d --force
# o pali sin e nasin ni tawa nasin pali pakala ale
```
