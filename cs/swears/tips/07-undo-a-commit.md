---
tags: tip
title: Do hajzlu, potřebuju vrátit zpět 5 minut starý commit!
id: undo-a-commit
order: 7
---

```git
# najdi commit, ktery potrebujes vratit zpet
git log
# pouzij sipky nahoru a dolu k posunovani v historii
# az najdes svuj commit, uloz si jeho hash
git revert [ulozeny hash]
# git vytvori novy commit, ktery puvodni commit vrati zpet
# postupuj podle pokynu ke zmene popisku noveho commitu
# nebo proste jenom uloz a proved commit
```

Ukázalo se, že abys vzal změny zpět, nemusíš hledat a překopírovávat obsah staré verze souboru do současné verze. Pokud jsi udělali v commitu chybu, můžeš ji vzít zpět pomoci příkazu `revert`. 

Můžeš také třeba vzít zpět i změnu jen v jednom souboru a ne všech v commitu! Ale jak to tak s Gitem bývá, toto by už znamenalo použít úplně jiné srance...
