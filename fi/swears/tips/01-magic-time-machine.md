---
tags: tip
title: Voi vittu, tein jotain väärin, kai tässä ohjelmassa on joku aikakone!?!
id: magic-time-machine
order: 1
---

```git
git reflog
# näet listan kaikesta mitä olet
# tehnyt git:ssä kaikissa haaroissa!
# Jokaisella haaralla on indeksi osoitteessa HEAD@{index}
# etsi se kohta jossa kaikki toimi, ennen kuin rikoit kaiken
git reset HEAD@{index}
# maaginen aikakone
```

Voit käyttää tätä komentoa saadaksesi takaisin jotain jonka poistit vahingossa, tai siirtääksesi kamaa jota kokeilit ennen kuin rikoit repon, tai toipuaksesi pahasta mergestä, tai muuten vaan palataksesi kohtaan jossa asiat oikeasti toimivat. Käytän `reflog`-komentoa PALJON. Iso hatunnosto niille monille monille monille monille monille ihmisille, jotka ehdottivat tämän komennon lisäämistä!
