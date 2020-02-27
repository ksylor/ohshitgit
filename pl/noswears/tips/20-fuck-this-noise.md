---
tags: tip
title: Olać to, poddaję się
id: forget-this-noise
note: this should always be the last one in the list, so setting order to 20 so I don't have to re-name/re-order it
order: 20
---

```git
cd ..
sudo rm -r glupi-katalog-z-gitowym-repo
git clone https://jakis.adres.github/glupi-katalog-z-gitowym-repo.git
cd glupi-katalog-z-gitowym-repo
```

Dzięki dla Erica V. za podesłanie. Ewentualne pretensje dotyczące użycia `sudo` w tym żarcie proszę kierować do niego.

Ale tak na poważnie, jeżeli w Twoim branchu jest już taki bałagan, że musisz zsynchronizować stan swojego repozytorium ze zdalnym w sposób "zalecany przez Gita", spróbuj tego poniżej. Ale pamiętaj, że te czynności są destrukcyjne i nieodwracalne!

```git
# pobierz najnowszy stan origina
git fetch origin
git checkout master
git reset --hard origin/master
# usuń wszystkie nieśledzone pliki i foldery
git clean -d --force
# powtórz checkout/reset/clean dla każdego skopanego brancha
```