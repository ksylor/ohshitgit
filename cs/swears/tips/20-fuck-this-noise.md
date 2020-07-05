---
tags: tip
title: Nasrat, vzdávám to.
id: forget-this-noise
note: this should always be the last one in the list, so setting order to 20 so I don't have to re-name/re-order it
order: 20
---

```git
cd ..
sudo rm -r zatracene-git-repo
git clone https://nejaka.github.url/zatracene-git-repo.git
cd zatracene-git-repo
```

Díky Ericu V. za tento tip. Všechny stížnosti na použití `sudo` prosím směřovat na něj.

Ale opravdu, pokud je tvoje větev tak strašně rozbitá, že potřebuješ resetovat její stav 1:1 vůči vzdálenému "schválenému" repozitáři potom vyzkoušej tohle, ale měj na paměti, že tyto změny jsou nevratné!


```git
# ziskej nejnovejsi stav vzdaleneho origin-u
git fetch origin
git checkout master
git reset --hard origin/master
# smaz nesledovane soubory a adresare
git clean -d --force
# opakuj checkout/reset/clean pro kazdou rozbitou vetev
```