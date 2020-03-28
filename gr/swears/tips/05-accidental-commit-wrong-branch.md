---
tags: tip
title: Σκατά, έκανα commit σε λάθος branch!
id: ακούσιο-commit-σε-λάθος-branch
order: 5
---

```git
# αναίρεσε το τελευταίο commit, αλλά άφησε τις αλλαγές διαθέσιμες
git reset HEAD~ --soft
git stash
# πήγαινε στο σωστό branch
git checkout όνομα-του-σωστού-branch
git stash pop
git add . # ή πρόσθεσε ένα-ένα τα αρχεία
git commit -m "το μήνυμα σου";
# τώρα οι αλλαγές σου είναι στο σωστό branch
```

Πολλοί προτείνανε τη χρήση του `cherry-pick` για αυτή τη περίσταση, οπότε διάλεξε αυτό που σου βγάζει περισσότερο νόημα!

```git
git checkout name-of-the-correct-branch
# πάρε το τελευταίο commit από το master και βάλτο εδώ
git cherry-pick master
# διέγραψέ το από το master
git checkout master
git reset HEAD~ --hard
```