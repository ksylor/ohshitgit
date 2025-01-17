---
tags: tip
title: <div class="rtl"> يا للهراء, لقد قمت بعمل commit على ال branch الخاطئة! </div>
id: حفظ-في-غصن-خاطئ
order: 5
---

<div class = "rtl">

```git
# لإزالة آخر commit مع المحافظة على التغيرات في البرنامح
git reset HEAD~ --soft
git stash
# الانتقال إلى ال branch الصحيحة
git checkout name-of-the-correct-branch
git stash pop
# ضف الملفات كلها أو بعض منها
git add .
git commit -m "your message here"
# الآن تم حفظ التغيرات على ال branch الصحيحة

```

الكثير من الناس اقترحوا استخدام `cherry-pick` لحل هذه المشكلة أيضاً, لذا اختر الذي تراه مناسباً لك!

```git
git checkout name-of-the-correct-branch
# اختر اخر commit من ال master
git cherry-pick master
# ثم احذفه من master
git checkout master
git reset HEAD~ --hard
```

</div>
