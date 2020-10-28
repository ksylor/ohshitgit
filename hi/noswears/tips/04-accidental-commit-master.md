---
tags: tip
title: धत तेरे की, मैंने गलती से master branch मे कुछ commit किया जो की एक नई branch पर होना चाहिए था!
id: accidental-commit-master
order: 4
---

```git
# master की वर्तमान स्थिति से एक नई branch बनाएं
git branch some-new-branch-name
# master branch से अंतिम commit हटा दें
git reset HEAD~ --hard
git checkout some-new-branch-name
# आपकी commit अब इस शाखा में रहती है :)
```

ध्यान दें: यह काम नहीं करता है यदि आपने पहले से ही एक public/shared branch के लिए commit किया है, और यदि आपने पहले अन्य चीजों की कोशिश की है, तो आपको `HEAD~` के बजाय `git reset HEAD@{number-of-commits-back}` की आवश्यकता हो सकती है। असीम उदासी। इसके अलावा बहुत से लोगों ने इसे छोटा बनाने के लिए कई भयानक तरीके सुझाय जिसे मैं खुद नहीं जानता था। आप सभी को धन्यवाद!