---
tags: tip
title: ഓ ഷിറ്റ്, 5 commits മുൻപ് ഒരു commit undo ചെയ്യണം!
id: undo-a-commit
order: 7
---

```git
# undo ചെയ്യേണ്ട commit കണ്ടെത്തുക
git log
# history-ൽ scroll ചെയ്യാൻ arrow keys ഉപയോഗിക്കുക
# commit കണ്ടെത്തിയ ശേഷം hash save ചെയ്യുക
git revert [saved hash]
# git ആ commit undo ചെയ്യുന്ന ഒരു പുതിയ commit ഉണ്ടാക്കും
# commit message edit ചെയ്യാൻ prompts follow ചെയ്യുക
# അല്ലെങ്കിൽ save ചെയ്ത് commit ചെയ്യുക
```

changes undo ചെയ്യാൻ പഴയ ഫയൽ ഉള്ളടക്കം copy-paste ചെയ്ത് നിലവിലുള്ള ഫയലിൽ ഇടേണ്ടതില്ല! ഒരു bug commit ചെയ്തിട്ടുണ്ടെങ്കിൽ, `revert` ഉപയോഗിച്ച് ഒറ്റടിക്ക് undo ചെയ്യാം.

ഒരു full commit-ന് പകരം ഒറ്റ file-ൽ revert ചെയ്യുകയും ചെയ്യാം! പക്ഷേ, git-ന്റെ യഥാർത്ഥ ശൈലിയിൽ, അതിന് സർവ്വഥ വ്യത്യസ്തമായ commands ആണ്...
