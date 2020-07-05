---
tags: tip
title: Waduh, Saya coba menjalankan diff tapi tidak terjadi apa-apa?!
id: wah-dimana-diff-saya
order: 6
---

Jika Anda mengetahui kalau Anda telah melakukan perubahan pada file tapi `diff`-nya kosong, mungkin Anda `add` file anda ke staging dan Anda perlu menggunakan flag yang khusus.

```git
git diff --staged
```

Letakkan cara ini di bawah &macr;\\\_(ツ)\_/&macr; (ya, Saya mengetahui bahwa ini adalah fitur, bukan bug, tapi ini memusingkan dan tidak jelas jika ini terjadi pertama kali pada Anda!)
