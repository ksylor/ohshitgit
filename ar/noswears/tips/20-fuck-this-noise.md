---
tags: tip
title: <div class="rtl"> انسى هذا الازعاج, أنا أستسلم  </div>
id: انسى-هذا-الازعاج
note: this should always be the last one in the list, so setting order to 20 so I don't have to re-name/re-order it
order: 20
---

```git
cd ..
sudo rm -r stupid-git-repo-dir
git clone https://some.github.url/stupid-git-repo-dir.git
cd stupid-git-repo-dir
```

<div class="rtl">

شكراً ل Eric.V على هذه , أي شكاوى عن كيفية استخدام `sudo` في هذه النكتة تستطيعون أن توجهوها اليه.

لكن حقاً, إذا كانت ال branch خاصتك مدمرة لدرجة أنك تحتاج أن تعيد حالة ال repo لتكون مماثلة لل remote repo بطريقة "موافقة-منgit" , جرب هذا , لكن احذر فهي خطوات مدمرة و لا يستطيع التراجع عنها!

```git
# احضر النسخة الأخيرة من ال origin
git fetch origin
git checkout master
git reset --hard origin/master
# احذف الملفات و المجلدات غير المحفوظة من قبل git
git clean -d --force
# اعد خطوات checkout/reset/clean لكل branch مدمر لديك
```

</div>
