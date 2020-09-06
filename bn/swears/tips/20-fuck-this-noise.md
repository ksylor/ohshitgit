---
tags: tip
title: ওহ ধুর, এইটা ভুলে যাও, আমি ছেড়ে দিলাম।
id: fuck-this-noise
note: this should always be the last one in the list, so setting order to 20 so I don't have to re-name/re-order it
order: 20
---

```git
cd ..
sudo rm -r stupid-git-repo-dir
git clone https://some.github.url/stupid-git-repo-dir.git
cd stupid-git-repo-dir
```

ধন্যবাদ Eric V. এটার জন্য. `sudo` ব্যবহার সম্পর্কে সমস্ত অভিযোগই তাঁর কাছে ফরওয়ার্ড করা যেতে পারে। 


বাস্তব যদিও, যদি তোমার ব্রাঞ্চ এমনি নষ্ট হয় যে তোমার রেপো কে রিসেট দিতে হয় যেন সেটা রিমোট রেপো এর মত হয়ে যায়, "git-approved" পদ্ধতিতে এটা ট্রাই কর, তবে সাবধান, এগুলি ধ্বংসাত্মক এবং অপরিবর্তনযোগ্য!

```git
# অরিজিন এর সর্বশেষ অবস্থা নামিয়ে নাও
git fetch origin
git checkout master
git reset --hard origin/master
# আনট্রাক্ট ফাইল এবং ডিরেক্টরি মুছ
git clean -d --force
# পুনরাবৃত্তি কর checkout/reset/clean সকল ব্রোকেন ব্রাঞ্চ এর জন্য
```