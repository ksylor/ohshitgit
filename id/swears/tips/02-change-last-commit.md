---
tags: tip
title: Tai, gue udah commit tapi ada yang pengen gue tambahin lagi!
id: change-last-commit
order: 2
---

```git
# bikin change lo
git add . # atau tambahin filenya satu-satu
git commit --amend --no-edit
# sekarang commit-an lo ada change lo itu
# WARNING: jangan pernah amend commit-an publik
```

Ini biasanya gue lakuin kalo pas gue commit terus jalanin tests/linters... dan tai gw lupa tambahin spasi setelah tanda sama dengan. Lo juga bisa bikin change sebagai commit-an baru dan lakuin `rebase -i` biar langsung jalanin dua-duanya, tapi cara ini jauh lebih cepet.

*Warning: Lo jangan pernah amend commit-an yang udah di-push ke public/shared branch! Cuma amend commit-an yang ada di local copy lo atau lo bakalan nyaho.*