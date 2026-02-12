---
tags: tip
title: Oh shit, ich muess Änderige an einere einzige Datei rückgängig mache!
id: aenderige-datei-rueckgaengig
order: 8
---

```git
# Find de Hash vomene Commit vor dine Änderige
git log
# Verwänd d Pfiiltaste um in der History z scrolle
# und kopiere dir de Hash vom beträffende Commit
git checkout [gwählte hash] -- pfad/zur/datei
# Die alti Version isch jetzt wiederhärgstellt
git commit -m "Wow, rückgängig mache ohni Copy-Paste!"
```

Wo ich das uusegfunde ha, isch das für mi e riese Ding gsi! Ärnsthaft, uf wellem gopferdammte Planet macht es Sinn, dr Befähl zum rückgängig mache vo Änderige in einere Datei `checkout --` z nenne! Gopferdammi Linus! :shakes-fist-at-linus-torvalds: