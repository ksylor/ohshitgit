---
tags: tip
title: O jebote lebac, komitovao sam i odmah sam zaključio da treba da napravim malu izmjenu!
id: promjeni-zadnji-komit
order: 2
---

```git
# napravi izmjene
git add . # ili dodaj fajlove indvidualno
git commit --amend --no-edit
# sada tvoj zadnji komit sadrži tu izmjenu!
# PAŽNJA: nikad nemoj da koristiš ammend na public komitima
```

Ovo mi se obično desi kada napravim komit, onda pokrenem tests/linters... i jebeš moj život, nisam dodao razmak poslije znaka jednakosti. Takođe mogao bi da napraviš izmjenu kao novi komit i onda odradiš `rebase -i` kako bi ih spojio zajedno, ali ovo je milion puta brže. 

*Pažnja: Nikada ne bih trebao da amendaš komite koji su već objavljeni na public/shared branč! Samo amenduj komite koji postoje u tvojoj lokalnoj kopiji repositorija, ili ceš u suprotnom zažaliti.*