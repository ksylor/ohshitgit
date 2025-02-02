---
tags: tip
title: <div dir="rtl">Oh shit احتاج الى التراجع عن تغييراتي على ملف!</div>
id: التراجع-في-ملف
order: 8
---

<div dir="rtl">

```git
# اعثر على ال hash الخاص بال commit قبل أن يتغير الملف
git log
# استخدم مفاتيح الأسهم للتمرير لأعلى و أسفل قائمة الأحداث
# حينما ترى ال commit الذي تريده احفظ ال hash الخاص به
git checkout [saved hash] -- path/to/file
# النسخة القديمة من الملف قد تمت استعادته
git commit -m "Wow, you don't have to copy-paste to undo"
```

عندما اكتشفت ذلك أخيراً كان عظيماً! عظيماً. عَ. ظي. ماً. لكن بجد، على أي كوكب لعين من المنطقي القيام ب `checkout --` كطريقة مثلى للتراجع عن تغييرات في ملف؟ :shakes-fist-at-linus-torvalds:
</div>