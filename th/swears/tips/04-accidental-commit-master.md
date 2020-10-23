---
tags: tip
title: เวรแล้ว! กูเผลอ commit เข้า master แทนที่จะทำ branch ใหม่!
id: accidental-commit-master
order: 4
---

```git
# สร้าง branch ใหม่จากสถานะปัจจุบันของ master
git branch some-new-branch-name
# ลบ commit สุดท้ายออกจาก master
git reset HEAD~ --hard
git checkout some-new-branch-name
# commit ย้ายไปอยู่ใน branch ใหม่แล้ว :)
```

หมายเหตุ: วิธีนี้ใช้งานไม่ได้ ถ้าคุณ push commit เข้า  public/shared branch ไปแล้ว และถ้าคุณได้ทำอย่างอื่นไปก่อนหน้านี้ คุณอาจต้องสั่ง  `git reset HEAD@{number-of-commits-back}` แทนการสั่ง `HEAD~` และเช่นเคย มีหลายคนแนะนำวิธีเจ๋ง ๆ นี่โดยที่ฉันไม่เคยรู้มาก่อน ช่วยให้ขั้นตอนในการทำงานสั้นกว่าเดิม ขอบคุณทุกคนมาก!
