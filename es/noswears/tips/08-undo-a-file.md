---
tags: tip
title: Dangit, necesito deshacer los cambio de un archivo!
id: deshacer-un-archivo
order: 8
---

```git
# busca el hash del commit anterior de cuando se cambio el archivo
git log
# usa las flechas para moverte para arriba y abajo en la historia
# una vez que encontraste el commit, guarda su hash
git checkout [hash guardado] -- path/to/file
# la version anterior del archivo estará en tu index
git commit -m "Waw, no tienes que hacer copiar-pegar para deshacer"
```

Cuando me di cuenta de esto fue INCREIBLE. INCREBILE. IN-CRE-I-BLE. Pero en serio, en que planeta `checkout --` hace sentido que sea la mejor manera de deshacer un archivo? :shakes-fist-at-linus-torvalds:
