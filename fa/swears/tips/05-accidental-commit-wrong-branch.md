---
tags: tip
title: <div class="rtl">ای لعنتی، من تصادفی تو یک شاخه اشتباه کامیت کردم!</div>
id: کامیت-تصادفی-برنچ-اشتباه
order: 5
---
<div class="rtl">

```git
# کامیت آخر رو برگردون، اما تغییرات رو داشته باش
git reset HEAD~ --soft
git stash
# به شاخه صحیح انتقال بده
git checkout name-of-the-correct-branch
git stash pop
git add . 
# یا پرونده های منفرد اضافه کنید
git commit -m "your message here"
# حالا تغییراتت روی شاخه صحیح هستن
```

خیلیا استفاده از `cherry-pick` رو برای این شرایط پیشنهاد داده بودن، بنابراین هر روشی که احساس بهتری بهش داری رو انتخاب کن!

```git
git checkout name-of-the-correct-branch
# کامیت آخر رو به مَستر بیار
git cherry-pick master
# از مَستر پاکش کن
git checkout master
git reset HEAD~ --hard
```
</div>