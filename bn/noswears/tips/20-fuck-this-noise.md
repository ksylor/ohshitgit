---
tags: tip
title: ওহ গিট,  এইটা ভুলে যাও, আমি ছেড়ে দিলাম।
id: forget-this-noise
note: এটি সর্বদা তালিকার সর্বশেষতম হওয়া উচিত, সুতরাং ২০ এ অর্ডার সেট করা যাতে এটির পুনরায় নাম / পুনরায় অর্ডার করতে না হয়
order: 20
---

```git
cd ..
sudo rm -r stupid-git-repo-dir
git clone https://some.github.url/stupid-git-repo-dir.git
cd stupid-git-repo-dir
```

ধন্যবাদ Eric V. এটার জন্য. `sudo` ব্যবহার সম্পর্কে সমস্ত অভিযোগই তাঁর কাছে ফরওয়ার্ড করা যেতে পারে। 


বাস্তব যদিও, যদি আপনার ব্রাঞ্চ এমনি নষ্ট হয় যে তোমার রেপো কে রিসেট দিতে হয় যেন সেটা রিমোট রেপো এর মত হয়ে যায়, "git-approved" পদ্ধতিতে এটা ট্রাই করুন, তবে সাবধান, এগুলি ধ্বংসাত্মক এবং অপরিবর্তনযোগ্য!

```git
# অরিজিন এর সর্বশেষ অবস্থা নামিয়ে নিন
git fetch origin
git checkout master
git reset --hard origin/master
# আনট্রাক্ট ফাইল এবং ডিরেক্টরি মুছুন
git clean -d --force
# পুনরাবৃত্তি করুন checkout/reset/clean সকল ব্রোকেন ব্রাঞ্চ এর জন্য
```