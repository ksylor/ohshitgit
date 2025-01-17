---
tags: tip
title: Förmårrat, jag måste ångra en commit från typ 5 commits tillbaks!
id: undo-a-commit
order: 7
---

```git
# hitta committen som du måste ångra
git log
# använd pilknapparna för att scrolla upp och ner i historiken
# när du har hittat din commit, spara hashen
git revert [sparad hash]
# git kommer att skapa en ny commit som ställer tillbaka ändringarna från den committen
# följ instruktionerna för att ändra meddelandet för committen
# eller bara spara filen och committa
```

Det visar sig att du inte behöver leta upp och copy-paste:a den gamla filens innehåll i den nuvarande filen för att ångra ändringar! Om du har committat en bugg, kan du ångra hela committen med `revert`.

Du kan också ångra en enstaka fil istället för en hel commit! Det här är förstås en helt annan kombination av kommandon, typiskt git!