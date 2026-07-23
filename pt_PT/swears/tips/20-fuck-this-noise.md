---
tags: tip
title: Caralho para esta merda, desisto.
id: fuck-this-noise
note: this should always be the last one in the list, so setting order to 20 so I don't have to re-name/re-order it
order: 20
---

```git
cd ..
sudo rm -r pasta-do-crlh-do-git
git clone https://some.github.url/pasta-do-crlh-do-git.git
cd pasta-do-crlh-do-git
```

Obrigado ao Eric V. por esta. Dirijam a ele todas as queixas sobre o uso de `sudo` nesta piada.

Mas honestamente, se o teu branch está tão rebentado que precisas de voltar ao estado do repositório remoto, mas de uma forma "corretamente git", experimenta isto. Mas os efeitos destas ações são destrutivos e irrevertíveis!

```git
# sacar o estado mais recente do repositorio remoto
git fetch origin
git checkout master
git reset --hard origin/master
# apagar ficheiros e pastas que nao sao tracked
git clean -d --force
# repetir checkout/reset/clean para cada branch rebentado
```