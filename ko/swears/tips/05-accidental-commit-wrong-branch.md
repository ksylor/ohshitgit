---
tags: tip
title: 젠장, 실수로 이상한 브랜치에 커밋을 해버렸어!
id: accidental-commit-wrong-branch
order: 5
---

```git
# 마지막 커밋을 취소하되, 변경된 사항은 남겨둔다
git reset HEAD~ --soft
git stash
# 올바른 브랜치로 이동
git checkout name-of-the-correct-branch
git stash pop
git add . # 또는 각각의 파일들을 add
git commit -m "your message here";
# 이제 올바른 브랜치에 커밋이 됐다
```

이 상황에서 `cherry-pick`을 사용하는 방법을 많은 사람들이 추천해주었다. 원하는 방법을 골라 사용하길!

```git
git checkout name-of-the-correct-branch
# master의 마지막 커밋을 선택
git cherry-pick master
# master에서 해당 커밋을 제거
git checkout master
git reset HEAD~ --hard
```