---
tags: tip
title: Tai, gue udah commit tapi ada yang pengen gue tambahin lagi!
id: ganti-commit-terakhir
order: 2
---

```git
# bikin change lo
git add . # atau tambahin filenya satu-satu
git commit --amend --no-edit
# sekarang commit-an lo ada change lo itu
# WARNING: jangan pernah amend commit-an publik
```

Ini biasanya gue lakuin kalo pas gue commit terus jalanin tests/linters... dan AH BANGSAT,gue lupa nambahin spasi abis sama dengan. Lo juga bisa bikin yang udah lo ubah sebagai commit-an baru dan lakuin `rebase -i` buat gabungin keduanya, tapi cara ini jauh lebih cepet.

*Warning: Lo jangan pernah amend commit-an yang udah di-push ke public/shared branch! Cuma amend commit-an yang ada di local copy lo atau lo bakalan nyaho.*