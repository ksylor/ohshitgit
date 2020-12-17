---
tags: tip
title: Қарғыс атқыр, мен мастерға коммит жасадым, бірақ ол жаңа тармақта болу керек!
id: мастерге-жасалған-байқаусыз-коммит
order: 4
---

```git
# бұл команда мастердің қазіргі күйінен жаңа тармақ ашады
git branch жаңа-тармақтың-аты
# мастердың соңғы коммитің жояды
git reset HEAD~ --hard
git checkout жаңа-тармақтың-аты
# енді сіздің коммитіңіз осы тармақта болады :)
```

Егер қашықтағы/ортақ тармаққа коммитті уже жіберіп қойсаңыз, онда бұл жұмыс істемейді.
`git reset HEAD@{артқа-қайтуға-коммиттер-саны}` көмектесе алады. Көп адамдар маған осының қысқа жолын ұсынды. Бәріне рақмет!