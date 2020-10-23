---
tags: tip
title: เวรแล้ว! กูเผลอ commit ผิด branch!
id: accidental-commit-wrong-branch
order: 5
---

```git
# ยกเลิก commit สุดท้าย แต่คงการเปลี่ยนแปลงไว้
git reset HEAD~ --soft
git stash
# เปลี่ยนไป branch ที่ถูกต้อง
git checkout name-of-the-correct-branch
git stash pop
git add . # หรือ add ไฟล์ที่ต้องการ
git commit -m "your message here"
# ทีนี้ การเปลี่ยนแปลงอยู่บน branch ที่ถูกต้องแล้ว
```

หลายคนแนะนำว่าใช้  `cherry-pick` ในสถานการณ์นี้ก็ได้ เลือกเอาก็แล้วกันว่าแบบไหน makes sense สำหรับคุณมากกว่ากัน!

```git
git checkout name-of-the-correct-branch
# เลือกเอา commit สุดท้ายจาก master
git cherry-pick master
# แล้วลบมันออกจาก master
git checkout master
git reset HEAD~ --hard
```
