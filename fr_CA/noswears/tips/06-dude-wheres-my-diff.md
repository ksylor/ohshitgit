---
tags: tip
title: Viande à chien, je fais un diff mais rien ne se passe&nbsp;?!
id: rendez-moi-mon-diff
order: 6
---

Quand vous avez modifié des fichiers, mais que `diff` ne renvoie rien, c'est sans doute que vous avez déjà "ajouté" ces fichiers et qu'il faut utiliser une option spéciale.

```git
git diff --staged
```

Classé dans &macr;\\\_(ツ)\_/&macr; (oui, je sais, c'est un feature et pas une bogue, mais c'est pas du tout évident la première fois où ça vous arrive&nbsp;!)