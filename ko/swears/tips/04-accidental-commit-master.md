---
tags: tip
title: 젠장, 다른 브랜치에 커밋해야 하는 걸 실수로 master에 커밋해 버렸어!
id: accidental-commit-master
order: 4
---

```git
# 현재 master의 상태로 새로운 브랜치를 만든다
git branch some-new-branch-name
# master 브랜치의 마지막 커밋을 제거한다
git reset HEAD~ --hard
git checkout some-new-branch-name
# 이 브랜치에는 그 커밋이 남아있다 :)
```

주의: 이미 원격 저장소에 커밋을 push 했다면 슬프게도 이 방법은 소용이 없다. 또, 만약 여러 개의 커밋을 했다면, `HEAD~` 대신 `git reset HEAD@{돌아갈-커밋-수}`를 사용하면 된다. 수많은 사람들이 (내가 몰랐던 방식으로) 이 방법을 최대한 간결하게 만드는 데 기여해주었다. 감사를 표한다!