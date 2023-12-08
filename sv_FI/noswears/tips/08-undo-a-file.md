---
tags: tip
title: Förmårrat, jag måste ångra mina ändringar av en fil!
id: undo-a-file
order: 8
---

```git
# hitta en hash från en commit innan filen ändrades
git log
# använd pilknapparna för att scrolla upp och ned i historiken
# när du har hittat din commit, spara hashen
git checkout [sparad hash] -- path/till/filen
# den gamla versionen av filen kommer att vara i ditt index
git commit -m "Wow, du behöver inte copy-paste:a för att ångra"
```

När jag äntligen fattade det här var det STORT. STORT. S-T-O-R-T. Men helt påriktigt, på vilken planet är det mest logiskt att `checkout --` ska användas för att undo:a en fil? :skakar-näven-åt-linus-torvalds: