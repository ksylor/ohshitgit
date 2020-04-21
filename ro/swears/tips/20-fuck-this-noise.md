---
tags: tip
title: La dracu' cu dezastrul asta, renunt.
id: fuck-this-noise
note: acesta ar trebui sa fie mereu ultimul din lista, deci il setez la 20 ca sa nu fie nevoie sa il redenumesc/reordonez
order: 20
---

```git
cd ..
sudo rm -r git-repo-dir-de-rahat
git clone https://some.github.url/git-repo-dir-de-rahat.git
cd git-repo-dir-de-rahat
```

Multumesc lui Eric V. pentru asta. Toate plangerile despre folosirea lui `sudo` in aceasta gluma ii pot fi adresate lui. 


Pe bune acu', daca branchul tau este ataaaat de distrus ca trebuie sa resetezi starea repoului pentru a fi la fel cu repoul remote intr-un mod  "git-approved", incearca asta, dar ai grija ca acestea sunt actiuni distructive si irecuperabile!

```git
# preia cea mai din urma stare
git fetch origin
git checkout master
git reset --hard origin/master
# sterge fisierele si directoarele netratate
git clean -d --force
# repeta checkout/reset/clean pentru fiecare branch distrus
```
