---
tags: tip
title: Unohda koko paska, vittu luovutan kokonaan.
id: forget-this-noise
note: tämän pitäisi aina olla viimeisenä listalla, joten järjestysnumero on 20, ettei tätä tarvitse uudelleen nimetä tai järjestää
order: 20
---

```git
cd ..
sudo rm -r saatanan-git-repo-kansio
git clone https://joku.github.url/typerä-git-repo-kansio.git
cd saatanan-git-repo-kansio
```

Kiitokset Eric V:lle tästä. Kaikki valitukset `sudo`-komennon käyttämisestä voi ohjata hänelle. 

Mutta oikeasti, jos haarasi on niin sekaisin että ainoa vaihtoehto on nollata reposi tila samaan tilanteeseen kuin repon remote-versio, ja haluat tehdä tämän "git-hyväksytyllä" tavalla, kokeile tätä. Mutta muista että seuraukset ovat tuhoisat ja peruuttamattomat!

```git
# haetaan origin-haaran uusin tila
git fetch origin
git checkout master
git reset --hard origin/master
# poista ei-seuratut tiedostot ja kansiot
git clean -d --force
# toista checkout/reset/clean-komennot jokaiselle sotkuiselle haaralle
```