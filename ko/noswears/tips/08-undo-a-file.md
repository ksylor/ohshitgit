---
tags: tip
title: 이런, 파일을 수정한 걸 되돌려야 하잖아!
id: undo-a-file
order: 8
---

```git
# 해당 파일이 수정되기 전의 커밋 해시를 찾는다
git log
# 방향키로 예전 커밋을 살펴보고
# 커밋을 찾으면, 해시를 기록
git checkout [saved hash] -- path/to/file
# 예전 버전 파일로 바뀌어 있을 것이다
git commit -m "Wow, you don't have to copy-paste to undo"
```

이 방법을 알고 모르고 차이는 엄청 크다. 엄-청. 근데 솔직히 `checkout --`은 봐도 봐도 이상하다. 진짜 파일 하나 되돌리는데 이런 요상한 명령어를 써야할까요, 리누스 토르발즈씨?