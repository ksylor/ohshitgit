---
tags: tip
title: <div dir="rtl">Oh shit لقد قمت بعمل commit على ال branch الخاطئ عن طريق الخطأ!</div>
id: accidental-commit-wrong-branch
order: 5
---

<div dir="rtl">

```git
# تراجع عن ال commit الأخير لكن حافظ على التغييرات المتوفرة
git reset HEAD~ --soft
git stash
# انتقل إلى ال branch الصحيح
git checkout name-of-the-correct-branch
git stash pop
git add .
# أو اضف ملفات فردية
git commit -m "your message here"
# الآن تغييراتك تقع على ال branch الصحيح
```

العديد من الناس اقترحوا استخدام `cherry-pick` في هذه الحالة أيضاً، لذلك اختر ما يبدو لك منطقياً!

```git
git checkout name-of-the-correct-branch
# اختر آخر commit على ال master
git cherry-pick master
# قم بحذفه من ال master
git checkout master
git reset HEAD~ --hard
```
</div>