---
tags: tip
title: <div class="rtl"> تباً,أريد أن ألغي التغيرات التي أجريتها على ملف!</div>
id: اعادة-حالة-الملف
order: 8
---

<div class="rtl">

```git
# جد hash لأحد ال commits قبل أن تم تغيير الملف
git log
# انتقل إلى الأعلى و الأسفل عبر مفاتيح الأسهم
# عند ايجادك ال commit قم بحفظ ال hash
git checkout [saved hash] --path/to/file
# اﻵن النسخة القديمة من الملف ستكون في البرنامج
git commit -m "wow, you don't need to copy and paste"
```

عندما اكتشفت كيفية فعل هذا الأمر كان شيئاً ضخماً. ضخماً. ض-خ-م-اً. لكن حقاً, على أي كوكب لعين يكون أمر checkout حل منطقي لإزالة التغيرات على ملف؟
:النظر-بتضجر-إلى-linus torvalds:

</div>
