---
tags: tip
title: <div class="rtl">این نویز رو بیخیال شید، من بیخیال میشم.</div>
id: این-صدا-رو-فراموش-کنید
note: this should always be the last one in the list, so setting order to 20 so I don't have to re-name/re-order it
order: 20
---

```git
cd ..
sudo rm -r stupid-git-repo-dir
git clone https://some.github.url/stupid-git-repo-dir.git
cd stupid-git-repo-dir
```

با تشکر از Eric V. برای این موارد. همه شکایت ها در مورد استفاده از `sudo` در این طنز به او بر می گردد. 


هرچند در واقع، اگر شاخه شما خیییلی خراب شده بود که نیاز پیدا کردید که وضعیت ریپو تون رو به وضعیت ریپوی ریموت با یک روش "مورد-قبول-گیت" برگردونید، اینو امتحان کنید، اما آگاه باشید این دستورات مخرب و غیر قابل بازگشت هستند!

```git
# آخرین وضعیت origin رو بگیر
git fetch origin
git checkout master
git reset --hard origin/master
# فایل ها و دایرکتوری های دنبال نشده را پاک کن
git clean -d --force
# checkout/reset/clean رو برای هر شاخه خراب شده تکرار کن
```