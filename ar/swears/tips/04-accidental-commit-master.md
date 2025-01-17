---
tags: tip
title: <div class="rtl"> تباً, لقد حفظت commit على ال master وكان يجب ان تكون على branch جديدة !</div>
id: حفظ-خاطئ-عند-الأساس
order: 4
---

<div class="rtl">

```git
# انشئ branch جديدة بناء على حالة
# ال master الحالية
git branch some-new-branch-name
# ازل اخر commit من ال master
git reset HEAD~ --hard
git checkout some-new-branch-name
# الآن ال commit متواجد في هذا ال branch :)
```

ملاحظة : هذا لا يعمل إن كنت قد قمت بعمل push لل commit إلى public/shared branch , و ايضاً اذا حاولت امور اخرى اولاً , ربما قد تحتاج
إلى أن تقوم بعمل`git reset HEAD@{x}`
بدلا من `HEAD~` يحيث أن x تمثل عدد ال commits إلى الوراء. مأساة لانهائية. أيضاً, العديد العديد العديد من الاشخاص اقترحوأ طريقة رائعة لجعل هذا اقصر لم أكن اعلمها أنا , لذا شكراً جميعاً!

</div>
