---
tags: tip
title: Que merda, fiz um diff e não aparece nada?!
id: dude-wheres-my-diff
order: 6
---

Se fizeste alterações nos ficheiros, mas o `diff` aparece vazio tens de começar o teu projeto do zero! Okay, provavelmente adicionaste-os aos stage e precisas apenas de usar uma flag especial.

```git
git diff --staged
```

FFicheiro em &macr;\\\_(ツ)\_/&macr; (Sim, eu sei que isto é uma funcionalidade, mas não é óbvio da primeira vez que te acontece!)
