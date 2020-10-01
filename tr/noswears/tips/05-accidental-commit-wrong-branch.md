---
tags: tip
title: Kahretsin, yanlışlıkla başka branch'a commitlemişim kodu!
id: accidental-commit-wrong-branch
order: 5
---

```git
# son commit'i geri al, ama değişiklikler kalsın
git reset HEAD~ --soft
git stash
# doğru branch'i seç
git checkout name-of-the-correct-branch
git stash pop
git add . # ya da tek tek dosyaları ekle
git commit -m "buraya aciklama yaz";
# şimdi değişiklikler doğru branch'e geçti
```

Çoğu insan bu durum için `cherry-pick` komutunu da kullanabileceğimi önerdiler, o yüzden hangisi aklınıza daha yatkın geliyorsa onu kullanabilirsiniz!

```git
git checkout dogru-branchin-adi
# master'daki son commit'i çek
git cherry-pick master
# master'dan o commit'i sil
git checkout master
git reset HEAD~ --hard
```