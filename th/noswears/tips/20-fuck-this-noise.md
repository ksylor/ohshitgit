---
tags: tip
title: ช่างหัวมัน! ฉันยอมแพ้แล้ว !
id: forget-this-noise
note: this should always be the last one in the list, so setting order to 20 so I don't have to re-name/re-order it
order: 20
---

```git
cd ..
sudo rm -r stupid-git-repo-dir
git clone https://some.github.url/stupid-git-repo-dir.git
cd stupid-git-repo-dir
```

ขอบคุณ  Eric V. สำหรับคำแนะนำ ถ้าจะโวยว่าทำไมต้องใช้  `sudo` ในมุกนี้ โวยตรงไปที่ Eric V. ได้เลย


ตอบแบบจริงจัง ถ้า branch ของคุณมันพัง จนต้องรีเซ็ตสถานะกลับไปให้เหมือนกับ remote repo โดยใช้วิธีที่เป็นที่ยอมรับใน"วิถีของ git" แล้วละก็ ลองทำตามนี้ แต่ขอเตือนว่ามันคือคำสั่งทำลายล้างทุกอย่างและจะไม่สามารถกู้อะไรกลับมาได้!

```git
# ดึงสถานะล่าสุดจาก origin
git fetch origin
git checkout master
git reset --hard origin/master
# ลบไฟล์และไดเรกทอรีที่ไม่เกี่ยวทิ้ง
git clean -d --force
# สั่ง checkout/reset/clean บน branch ที่พังทีละ branch
```
