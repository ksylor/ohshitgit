---
tags: tip
title: धत तेरे की, मैंने गलती से गलत branch में commit कर दिया
id: accidental-commit-wrong-branch
order: 5
---

```git
# अंतिम commit को पूर्ववत करें, लेकिन उपलब्ध परिवर्तनों को छोड़ दें
git reset HEAD~ --soft
git stash
# सही branch में जाएँ
git checkout name-of-the-correct-branch
git stash pop
git add . # or add individual files
git commit -m "your message here"
# अब आपके परिवर्तन सही branch पर हैं :)
```

बहुत से लोगों ने इस स्थिति के लिए `cherry-pick` का उपयोग करने का सुझाव दिया है, इसलिए जो भी आपको बेहतर समझ आये, उसका इस्तेमाल करें!

```git
git checkout name-of-the-correct-branch
# अंतिम commit को master में ले जाने के लिए पकड़ो
git cherry-pick master
# इसे master से हटाओ
git checkout master
git reset HEAD~ --hard
```