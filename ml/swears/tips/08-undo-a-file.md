---
tags: tip
title: ഓ ഷിറ്റ്, ഒരു ഫയലിൽ ചെയ്ത changes undo ചെയ്യണം!
id: undo-a-file
order: 8
---

```git
# ഫയൽ മാറ്റുന്നതിന് മുൻപുള്ള ഒരു commit-ന്റെ hash കണ്ടെത്തുക
git log
# history-ൽ scroll ചെയ്യാൻ arrow keys ഉപയോഗിക്കുക
# commit കണ്ടെത്തിയ ശേഷം hash save ചെയ്യുക
git checkout [saved hash] -- path/to/file
# ഫയലിന്റെ പഴയ version നിങ്ങളുടെ index-ൽ ഉണ്ടാകും
git commit -m "അതെ, copy-paste ഇല്ലാതെ undo ചെയ്യാം"
```

ഇത് ഒടുവിൽ മനസ്സിലായപ്പോൾ ഭീമൻ ആശ്വാസം ആയിരുന്നു. ഭീമൻ. B-H-E-E-M-A-N. പക്ഷേ ഗൗരവമായി, ഏതൊക്കെ ലോകത്ത് ആണ് ഒരു ഫയൽ undo ചെയ്യാൻ `checkout --` ആണ് ഏറ്റവും നല്ല വഴി? :linus-torvalds-ക്ക്-മുഷ്ടി-ആഞ്ഞടിക്കുന്നു:
