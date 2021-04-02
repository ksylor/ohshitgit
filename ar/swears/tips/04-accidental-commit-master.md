---
tags: tip
title: <div dir="rtl">Oh shit لقد قمت بإجراء commit على ال master branch والذي كان يجب أن يكون على branch جديد كلياً</div>
id: accidental-commit-master
order: 4
---

<div dir="rtl">

```git
# قم بإنشاء branch جديد من الوضع الحالي لل master
git branch some-new-branch-name
# قم بحذف آخر commit من ال master branch
git reset HEAD~ --hard
git checkout some-new-branch-name
# ال commit الخاص بك يتواجد في هذا ال branch الآن :)
```

ملاحظة: هذا لا ينجح إذا كنت قد قمت بعمل push لل commit إلى branch عام أو مشترك، و إذا حاولت أشياء أخرى أولاً فيمكن أن تضطرّ إلى القيام ب `git reset HEAD@{number-of-commits-back}` بدلاً من `HEAD~`. حزنٌ لامتناهٍ. أيضاً، العديد العديد العديد من الناس اقترحوا طريقة رائعة للقيام بهذا على نحوٍ اسرع والتي لم أكن بنفسي أعرف عنها. شكراً لكم جميعاً.
</div>