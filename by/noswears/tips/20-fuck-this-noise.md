---
tags: tip
title: Да чорта ўсё, я здаюся.
id: да-чорта-ўсё
note: this should always be the last one in the list, so setting order to 20 so I don't have to re-name/re-order it
order: 20
---

```git
cd ..
sudo rm -r чортаў-рэпазіторый-git
git clone https://some.github.url/чортаў-рэпазіторый-git.git
cd чортаў-рэпазіторый-git
```

Дзякуй Eric V. за гэтую параду. Усе скаргі наконт выкарыстання `sudo` у гэтым жарце могуць быць накіраваны адразу яму.

Увогуле кажучы, калі ваша галіна настолькі забруджаная, што трэба вярнуцца да выдаленага стану ў "git-карэктным стылі", паспрабуйце гэта, але гэта незваротна!

```git
# атрымаць апошні стан origin
git fetch origin
git checkout master
git reset --hard origin/master
# выдаліць неіндэксаваныя файлы
git clean -d --force
# паўтарыць checkout/reset/clean для кожнай сапсаванай галіны
```