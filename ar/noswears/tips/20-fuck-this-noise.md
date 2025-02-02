---
tags: tip
title: <div dir="rtl">انسى كل شيء... إنِّي أستسلم.</div>
id: انسى-كل-شيء
note: this should always be the last one in the list, so setting order to 20 so I don't have to re-name/re-order it
order: 20
---

<div dir="rtl">

```git
cd ..
sudo rm -r stupid-git-repo-dir
git clone https://some.github.url/stupid-git-repo-dir.git
cd stupid-git-repo-dir
```

شكراً لِ  .Erik V على هذه. جميع الشكاوي حول استخدام `sudo` في هذه النكتة يمكن أن توجّه إليه. 


على الرغم من ذلك، إذا كان ال branch الخاص بك فاسداً لدرجة أنك تحتاج إلى اعادة ضبط حالة ال repository الخاصة بك بحيث تشبه ال remote repository بطريقة "معتمدة من git" جرّبه، لكن احذر من هذه الأجراءات المدمِّرة و الغير قابلة للاسترداد!

```git
# الحصول على آخر حالة لال origin
git fetch origin
git checkout master
git reset --hard origin/master
# حذف الملفات و المجلدات الغير متعقبة (untracked)
git clean -d --force
# تكرار checkout/ reset/ clean لكلّ branch فاسد
```
</div>