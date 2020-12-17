---
tags: tip
title: Қарғыс атқыр, мен коммит жасадым, содан кейін бір зат ұмытып кеткенім есіме түсті!
id: соңғы-коммитті-өзгерту
order: 2
---

```git
# өз өзгерісіңізді енгізіңіз
git add . # немесе жеке-жеке файлдарды қосыңыз
git commit --amend --no-edit
# енді осы өзгеріс сіздің соңғы коммитіңіздің ішінде
# АЛДЫН АЛА САҚТАНДЫРУ: жарияланған коммиттерді ешқашан өзгертпеңіз!
```

Егер мен коммит жасасам, содан кейін тесттер, линтерлар қоссам осындай бәле шығады. Ой тең белгісінің алдында пробел қоюға ұмытып кеттім. Жаңа өзгерісті енгізунің басқа да әдісі бар. Жаңа коммит жасаңыз, содан кейін `rebase -i` теріңіз. Сонда екі коммит қосылады. Бірақ бірінші әдіс тезірек.

*Алдын ала сақтандыру: Ортақ тармаққа кеткен коммиттарды ешқашан өзгертпеңіз! Тек локал тармақтағы коммиттерді өзгертіңіз, немесе таяқ жейсіз.*