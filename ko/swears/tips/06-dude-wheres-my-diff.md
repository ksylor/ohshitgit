---
tags: tip
title: 젠장, diff를 실행했는데 아무 것도 안 보이잖아?!
id: dude-wheres-my-diff
order: 6
---

분명히 뭔가를 바꿨는데, `diff`의 결과가 아무 것도 나타나지 않는다면, 아마 `add`를 실행해서 파일을 staging 상태로 만들었을 가능성이 높다. 이 경우에는 특별한 옵션을 주어야 한다.

```git
git diff --staged
```

&macr;\\\_(ツ)\_/&macr; (물론 이건 버그가 아니라 옳바른 기능인데, 처음 겪으면 존나 당혹스럽고 이상할 거다!)
