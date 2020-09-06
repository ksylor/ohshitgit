---
tags: tip
title: O jebote otac te jebo da te jebo, sad moram da poništim komit od prije 5 komita!
id: ponisti-komit
order: 7
---

```git
# nađi komit koji želiš da poništiš
git log
# koristi tipke za gore i dole kako bi skrolovao kroz istoriju
# kada nađeš komit, snimi heš
git revert [saved hash]
# git će kreirati novi komit koji će poništiti stari
# isprati upute kako bi promjenio komit poruku
# ili samo snimi i komituj
```

Izgleda da ne moraš da tražiš sadržaj starog fajla i da copy-paste-aš u postojeći fajl kako bi poništio izmjene! Ako si komitao bag, možeš da poništiš komit u jednom potezu sa `revert`.

Takođe možeš vratiti samo jedan fajl umjesto cijelog komita! Ali naravno, u istinskom git modu, to je potpuno drugačiji skup jebenih komandi...