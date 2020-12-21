---
tags: tip
title: Oh shit, Ek het commit en onmiddelik besef ek moet een klein verandering maak!
id: wysig-die-laaste-commit
order: 2
---

```git
# maak jou verandering
git add . # of voef individuele leêrs by
git commit --amend --no-edit
# nou bevat jou laaste commit die verandering!
# WAARSKUWING: moet nooit openbare commits wysig nie
```

Dit gebeur gewoonlik met my as ek commit en dan toetse/linters uitvoer... en dan sien jy dat jy fokken vergeet het om 'n spasie voor die isgelykaanteken te sit. Jy kan ook die verandering maak as 'n nuwe commit en dan 'n `rebase -i` doen om albei saam te smelt, maar hierdie is baie vinniger.

*Waarskuwing: Jy moet nooit commits wat tot gestoot om 'n openbare/gedeel tak wysig! Wysig slegs commits wat slegs in jou plaaslike kopie voorkom, of anders gaan dit na slegte tye lei.*