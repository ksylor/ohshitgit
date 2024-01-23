---
tags: tip
title: Ay sikim, bir fayldaki dəyişiklikləri ger almalıyam!
id: undo-a-file
order: 8
---

```git
# fayl dəyişməzdən əvvəlki halının hashini tap
git log
# ox düymələrini istifadə edərək keçmişdə yuxarı/aşağı gəzinin
# commit'i tapanda, hash'ini kopyalayın
git checkout [kopyalanan hash] -- faylın/papqası/adı
# faylın köhnə halı indi index'dədir
git commit -m "Vay vay, geri almaq üçün copy paste'ə ehtiyac yoxuymuş"
```

Bunu öyrənəndə mənim üçün MÖHTƏŞƏM'iydi. MÖHTƏŞƏM. MÖH-TƏ-ŞƏM. Amma həqiqətən, hansı soxduğumun planetində `checkout --` istifadə edərək bir faylın geri alınmasının ən yaxşı yolunun bu olduğu məntiqlidi ki? :shakes-fist-at-linus-torvalds: