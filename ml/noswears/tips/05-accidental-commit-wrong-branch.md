---
tags: tip
title: ഡാംഗിറ്റ്, തെറ്റായ branch-ൽ commit ചെയ്തുപോയി!
id: accidental-commit-wrong-branch
order: 5
---

```git
# അവസാന commit undo ചെയ്യുക, പക്ഷേ changes keep ചെയ്യുക
git reset HEAD~ --soft
git stash
# ശരിയായ branch-ലേക്ക് പോകുക
git checkout name-of-the-correct-branch
git stash pop
git add . # അല്ലെങ്കിൽ ഫയലുകൾ ഓരോന്നായി add ചെയ്യുക
git commit -m "your message here";
# ഇനി നിങ്ങളുടെ changes ശരിയായ branch-ൽ ഉണ്ട്
```

ഒരുപാടുപേർ ഈ സാഹചര്യത്തിൽ `cherry-pick` ഉപയോഗിക്കാൻ നിർദ്ദേശിച്ചിട്ടുണ്ട്, നിങ്ങൾക്ക് ഇഷ്ടമായത് ഉപയോഗിക്കൂ!

```git
git checkout name-of-the-correct-branch
# master-ൽ നിന്ന് അവസാന commit എടുക്കുക
git cherry-pick master
# master-ൽ നിന്ന് അത് ഇല്ലാതാക്കുക
git checkout master
git reset HEAD~ --hard
```
