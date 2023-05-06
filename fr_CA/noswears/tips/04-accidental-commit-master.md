---
tags: tip
title: Ben coudonc, j'ai commité sur le master alors que ça aurait dû aller sur une nouvelle branche&nbsp;!
id: erreur-commit-master
order: 4
---

```git
# créer une nouvelle branche à partir du master actuel
git branch un-nom-de-nouvelle-branche
# supprimer le dernier commit du master
git reset HEAD~ --hard
git checkout un-nom-de-nouvelle-branche
# votre commit est désormais dans cette branche :)
```

Note&nbsp;: cela ne fonctionne pas si vous avez déjà poussé le commit
vers une branche publique/partagée, et si vous avez essayé d'autres
trucs avant. Vous devrez sans doute faire un `git reset
HEAD@{number-of-commits-back}` au lieu de `HEAD~`. Gros malaise. Et
aussi, beaucoup beaucoup beaucoup de personnes ont proposé une méthode
géniale pour que ce soit plus court que ce que j'avais réussi à
faire. Merci à tous&nbsp;!
