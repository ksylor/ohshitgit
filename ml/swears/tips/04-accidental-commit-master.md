---
tags: tip
title: ഓ ഷിറ്റ്, master-ൽ commit ചെയ്തു, പക്ഷേ അത് ഒരു പുതിയ branch-ൽ ആകേണ്ടതായിരുന്നു!
id: accidental-commit-master
order: 4
---

```git
# master-ന്റെ നിലവിലെ state-ൽ നിന്ന് ഒരു പുതിയ branch ഉണ്ടാക്കുക
git branch some-new-branch-name
# master branch-ൽ നിന്ന് അവസാന commit നീക്കം ചെയ്യുക
git reset HEAD~ --hard
git checkout some-new-branch-name
# നിങ്ങളുടെ commit ഇനി ഈ branch-ൽ ഉണ്ട് :)
```

ശ്രദ്ധിക്കുക: commit ഒരു public/shared branch-ൽ push ചെയ്തിട്ടുണ്ടെങ്കിൽ ഇത് പ്രവർത്തിക്കില്ല. മറ്റ് കാര്യങ്ങൾ ആദ്യം ശ്രമിച്ചിട്ടുണ്ടെങ്കിൽ, `HEAD~` പകരം `git reset HEAD@{number-of-commits-back}` ഉപയോഗിക്കേണ്ടി വരും. ഒരുപാടുപേർ ഇത് ചെറുതാക്കാൻ ഒരു മനോഹര വഴി നിർദ്ദേശിച്ചു, ഞാൻ തന്നെ അത് അറിഞ്ഞിരുന്നില്ല. നിങ്ങൾക്കെല്ലാം നന്ദി!
