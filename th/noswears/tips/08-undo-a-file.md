---
tags: tip
title: แย่แล้ว ฉันอยากยกเลิกการเปลี่ยนแปลงที่เกิดในไฟล์!
id: undo-a-file
order: 8
---

```git
# หา hash ของ commit ก่อนหน้าที่ไฟล์จะถูกเปลี่ยน
git log
# ใช้แป้นลูกศรเลื่อนดูในประวัติ
# พอหา commit ที่คุณต้องการเจอ จดค่า hash ไว้
git checkout [saved hash] -- path/to/file
# ไฟล์เวอร์ชันเดิมนั้นจะมาอยู่ที่ index ที่คุณอยู่
git commit -m "Wow, you don't have to copy-paste to undo"
```

ตอนที่เราหาวิธีนี้เจอ เป็นการค้นพบที่ยิ่งใหญ่มาก ใหญ่สุด ๆ  เอาจริง ๆ นะ มีดาวดวงไหนที่คำสั่ง  `checkout --` มัน make sense ในการ undo ไฟล์บ้าง? :ชู-กำปั้น-ใส่-ลินุส-ทอร์วาลด์:
