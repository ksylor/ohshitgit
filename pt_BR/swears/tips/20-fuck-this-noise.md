---
tags: tip
title: Foda-se essa merda, eu desisto.
id: fodase-essa-merda
note: this should always be the last one in the list, so setting order to 20 so I don't have to re-name/re-order it
order: 20
---

```git
cd ..
sudo rm -rf repositorio-git-maldito
git clone https://some.github.url/repositorio-git-maldito.git
cd repositorio-git-maldito
```

Agradecimentos ao Eric V. por essa. Reclamações sobre a utilização do `sudo` devem ser enviadas para ele.

Agora, falando sério, se a sua branch está tão cagada que você precisa resetar o seu repositório local para ficar igual ao repositório remoto, tente essa maneira "aprovada pelo git" de fazer isso. Mas lembre que esses comandos são destrutivos e não será possível recuperar as alterações!

```git
# recupere a versão mais atual do repositório remoto 
git fetch origin
git checkout master
git reset --hard origin/master
# remova arquivos e diretórios não rastreados pelo git
git clean -d --force
# repita a sequência checkout/reset/clean para cada branch cagado
```