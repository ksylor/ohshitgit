---
tags: tip
title: ഓ ഷിറ്റ്, ഞാൻ commit ചെയ്തു, ഉടനെ ഒരു ചെറിയ മാറ്റം കൂടി വേണമെന്ന് മനസ്സിലായി!
id: change-last-commit
order: 2
---

```git
# നിങ്ങളുടെ മാറ്റം ചെയ്യുക
git add . # അല്ലെങ്കിൽ ഫയലുകൾ ഓരോന്നായി add ചെയ്യുക
git commit --amend --no-edit
# ഇനി നിങ്ങളുടെ അവസാന commit-ൽ ആ മാറ്റം ഉണ്ട്!
# മുന്നറിയിപ്പ്: public commits ഒരിക്കലും amend ചെയ്യരുത്
```

ഇത് സാധാരണ എനിക്ക് സംഭവിക്കാറുള്ളത്: commit ചെയ്ത ശേഷം tests/linters run ചെയ്യും... ശ്ശേ, ഒരു equals sign-ന് ശേഷം space ഇട്ടില്ല! Commit ആക്കി പിന്നെ `rebase -i` ഉപയോഗിച്ച് squash ചെയ്യാമെങ്കിലും, ഇത് ദശലക്ഷം മടങ്ങ് വേഗതയേറിയതാണ്.

*മുന്നറിയിപ്പ്: public/shared branch-ൽ push ചെയ്ത commits ഒരിക്കലും amend ചെയ്യരുത്! local copy-ൽ മാത്രം ഉള്ള commits-ൽ amend ചെയ്യുക, അല്ലെങ്കിൽ പ്രശ്നത്തിൽ ചെന്ന് വീഴും.*
