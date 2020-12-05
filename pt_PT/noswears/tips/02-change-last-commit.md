---
tags: tip
title: Bolas, fiz um commit e apercebi-me que faltou uma pequena alteração!
id: change-last-commit
order: 2
---

```git
# fiz a tua alteração
git add . # ou adiciona ficheiros individuais
git commit --amend --no-edit
# o teu último commit guarda esta alteração!
# AVISO: nunca emendes commits públicos
```

Isto acontece-me regularmente quando corro testes/linters depois de fazer um commit... e uff, não coloquei um espaço após um sinal de igual. Também podes fazer as alterações num novo commit e depois um `rebase -i`, de modo a juntar os dois num só, mas desta forma é um milhão de vezes mais rápida.

*Aviso: Nunca deves emendar um commit que já tenhas feito o push para uma branch publica/partilhada! Apenas emenda commits que existam ainda na tua máquina, senão vais passar um mau bocado.*