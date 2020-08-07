---
tags: tip
title: O jebem ti budalu, sad moram poništiti izmjene u fajlu!
id: ponisiti-fajl
order: 8
---

```git
# nađi heš komita prije nego što je fajl bio promjenjen 
git log
# koristi tipke za gore i dole kako bi skrolovao kroz istoriju
# kada nađeš odgovarajući komit, snimi heš
git checkout [saved hash] -- path/to/file
# stara verzija fajla će biti u u tvojoj index zoni
git commit -m "Wow, ne moraš da copy-paste-aš da bi poništio"
```

Kad sam konačno shvatio ovo bio je to OGROMNI. OGROMNI. O-G-R-O-M-N-I AHAAA momenat. Ali ozbiljno, na kojoj jebenoj planeti `checkout` ima smisla kao najbolji način za poništavanje fajla? :shakes-fist-at-linus-torvalds: