---
tags: tip
title: Ay sikim, Kodları commit'lədim və yadıma düşdü ki, kiçik bir dəyişiklik də etməliyəm!
id: change-last-commit
order: 2
---

```git
# dəyişikliyinizi edin
git add . # və ya faylları vir bir adını yazın
git commit --amend --no-edit
# və son commit bu dəyişiklikləri də içinə alacaq!
# XƏBƏRDARLIQ: heç vaxt push etdiyiniz commit'ləri amend etməyin!
```

Bu çox vaxtı mənim başıma kodu commit edəndən sonra test'ləri/linter'i vs. işlədəndən sonra gəlir, məsələn, beynimi sikim, bərabərdir işarəsindən sonra boşluq qoymaq yadımdan çıxır. Bunu etməyin başqa bir yolu da, lazım olan dəyişiklikləri yeni bir commit içində yaradıb, `rebase -i` komandası ilə ikisini birləşdirməkdir, amma bu üsul hardasa 1 milyon dəfə daha sürətlidir.

*Xəbərdarlıq: Mütləq public/shared branch'lara push ettiyiniz bir commit'i amend etməməlisiniz! Sadəcə local'da olan commit'i amend eləməlisiz, əks təqdirdə altı dəyə bilər.*