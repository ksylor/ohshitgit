---
tags: tip
title: Ay sikim, 5-6 commit əvvəl qeyd olunan commit'i geri almalıyam!
id: undo-a-commit
order: 7
---

```git
# geri alınacaq commit'i tapın
git log
# ox düymələrini istifadə edərək keçmişdə yuxarı/aşağı gəzinin
# commit'i tapanda, hash'ni kopyalayın
git revert [kopyalanan hash]
# git sizin üçün bunu geri alan bir commit yaradacaq
# commit mesajını göstərişləri edin
# və ya sadəcə saxlayın və commit'ləyin
```

Bir dəyişikliyi geri almaq üçün dəyişən yerləri tapıb bir bir yeni fayllara kopyalamaq lazım deyilmiş! Əgər səhvən bug'ı commit etmisinizsə, `revert` ilə commit'i geri ala bilərsiniz.

Hətta, tüm bir commit'i geri almaq əvəzinə, tək bir fayl da geri ala bilərsiz! A düzdü, həqiqi git metoduna görə, hər sikiş funksiyanın fərqli komandası var...