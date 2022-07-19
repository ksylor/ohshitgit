---
tags: tip
title: Heille mon osti d'tabarnak, je fais un diff mais rien ne se passe&nbsp;?!
id: rendez-moi-mon-diff
order: 6
---

Quand t'as modifié des fichiers, mais que `diff` ne renvoie rien,
c'est sans doute que t'as déjà "ajouté" ces fichiers à l'Index (stage
area) et qu'il faut utiliser une option spéciale.

```git
git diff --staged
```

Classé dans &macr;\\\_(ツ)\_/&macr; (oui, je sais, c'est un feature,
pas une bogue, mais ostie que ça te fais chier la première fois où ça
t'arrive&nbsp;!)
