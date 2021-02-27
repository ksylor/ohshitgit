---
tags: tip
title: 아 몰라 좆까, 다 포기할래.
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

Eric V. 가 이 방법(장난)을 알려줬다. 그러니 `sudo`를 쓰는 것에 대해서 불평하고 싶다면 부디 그에게 하기를.

좀 더 진지한 버전으로, 만약에 레포지토리가 너무 너무 엉망이 돼서 원격 레포지토리 버전으로 "git에서 허락해준 방식"으로 초기화하고 싶다면, 아래 방법을 쓰면 된다. 단, 이건 되돌릴 수 없는 명령어니 주의할 것!

```git
# origin에서 최신 상태를 받아온다
git fetch origin
git checkout master
git reset --hard origin/master
# 추적되고 있지 않은 파일/폴더를 모두 삭제한다
git clean -d --force
# 초기화하고 싶은 각 branch에 대해서 checkout/reset/clean을 반복
```