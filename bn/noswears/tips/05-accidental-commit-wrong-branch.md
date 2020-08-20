---
tags: tip
title: ওহ গিট, আমি ভুলবশত অন্য ব্রাঞ্চে কমিট করে ফেলেছি!
id: accidental-commit-wrong-branch
order: 5
---

```git
# শেষ কমিট পূর্বাবস্থায় ফেরাও, তবে পরিবর্তনগুলি উপলভ্য রাখ
git reset HEAD~ --soft
git stash
# সঠিক ব্রাঞ্চে চেকআউট করুন
git checkout name-of-the-correct-branch
git stash pop
git add . # or add individual files
git commit -m "your message here"
# এখন আপনার পরিবর্তনগুলো সঠিক ব্রাঞ্চে পাবেন
```
এই পরিস্থিতির জন্য অনেক লোক `চেরি-পিক` ব্যবহার করার পরামর্শ দিয়েছেন, সুতরাং যেটি আপনার জন্য সবচেয়ে বেশি কার্যকর সেটাই চয়ন করুন!

```git
git checkout name-of-the-correct-branch
# মাস্টার থেকে শেষ কমিট কালেক্ট করুন
git cherry-pick master
# মাস্টার থেকে শেষ কমিট ডিলিট করুন
git checkout master
git reset HEAD~ --hard
```