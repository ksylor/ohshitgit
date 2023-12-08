---
tags: tip
title: För sjuttsingen, jag måste ångra mina ändringar av en fil!
id: undo-a-file
order: 8
---

```git
# hitta en hash från en commit innan filen ändrades
git log
# använd piltangenterna för att scrolla upp och ned i historiken
# när du har hittat din commit, spara hashen
git checkout [saved hash] -- path/to/file
# den gamla versionen av filen kommer att vara i ditt index
git commit -m "Wow, du behöver inte copy-paste:a för att ångra"
```

När jag äntligen upptäckte detta var det STORT. STORT. S-T-O-R-T. Men helt ärligt, på vilken planet är det mest logiskt att `checkout --` är bästa sättet att undo:a en fil? :skakar-näven-åt-linus-torvalds: