---
tags: tip
title: Esquece esta merda, eu desisto!
id: forget-this-noise
note: this should always be the last one in the list, so setting order to 20 so I don't have to re-name/re-order it
order: 20
---

```git
cd ..
sudo rm -r estupido-diretorio-do-git
git clone https://some.github.url/estupido-diretorio-do-git.git
cd estupido-diretorio-do-git
```

Obrigado ao Eric V, por este. Todas as queixas acerca do uso do `sudo` nesta piada podem ser direcionadas a ele.

Agora a sério, se o teu branch está tãooo lixado que precisas de fazer um reset do estado do teu repositório para o mesmo estado uma versão "git-approved" no teu repositório remoto, tenta isto, mas lembra-te, estas são ações destruíveis e não recuperáveis.


```git
# obtém a versão mais recente do origin
git fetch origin
git checkout master
git reset --hard origin/master
# apaga ficheiros e pastas não rastreadas
git clean -d --force
# repete checkout/reset/clean para cada branch lixado
```