---
tags: tip
title: Să dăm uitării dezastrul ăsta, renunț.
id: fuck-this-noise
note: acesta ar trebui să fie mereu ultimul din listă, deci îl setez la 20 ca să nu fie nevoie sa îl redenumesc/reordonez
order: 20
---

```git
cd ..
sudo rm -r git-repo-dir-stupid
git clone https://some.github.url/git-repo-dir-stupid.git
cd git-repo-dir-stupid
```

Mulțumesc lui Eric V. pentru asta. Toate plângerile despre folosirea lui `sudo` în această glumă îi pot fi adresate lui.


Pe bune acu', dacă branchul tău este atâââât de distrus că trebuie să resetezi starea repoului pentru a fi la fel cu repoul remote într-un mod  "git-approved", încearcă asta, dar ai grijă că acestea sunt acțiuni distructive și irecuperabile!

```git
# preia cea mai din urmă stare
git fetch origin
git checkout master
git reset --hard origin/master
# șterge fișierele și directoarele netratate
git clean -d --force
# repetă checkout/reset/clean pentru fiecare branch distrus
```
