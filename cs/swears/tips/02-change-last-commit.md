---
tags: tip
title: Do hajzlu, commitnul jsem a pak jsem si hned uvědomil, že ještě potřebuji udělat jednu malou změnu!
id: change-last-commit
order: 2
---

```git
# udelej potrebnou zmenu
git add . # nebo pridej jednotlive soubory
git commit --amend --no-edit
# nyni tvuj posledni commit obsahuje i tuto zmenu!
# VAROVANI: nikdy nepouzivej na sdilene/verejne commity
```

Toto se mi většinou stane, když commitnu, a potom spustím testy/lintery... a sakra, nedal jsem mezeru za rovnítko. Toto by šlo vyřešit také přidáním změny v novém commitu a následně spuštěním `rebase -i` abych commity spojil (squash) dohromady. Ale amend je milionkrát rychlejší na provedení. 

*Varování: Nikdy bys neměl měnit commity, které jsou již nahrané do veřejné/sdílené větve! Měň jen commity, které jsou jen v tvé lokální kopii repozitáře, jinak hrozí nepříjemnosti.*
