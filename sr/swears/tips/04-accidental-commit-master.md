---
tags: tip
title: E do kurca, slučajno sam komitovao nešto na master a što bi trebalo da bude na potpuno novom branču!
id: slucajni-komit-master
order: 4
---

```git
# kreiraj novi branč od trenutnog stanja mastera
git branch some-new-branch-name
# izbriši zadnji komit sa master branča
git reset HEAD~ --hard
git checkout some-new-branch-name
# tvoj komit je sada na novom branču :)
```

Zabilježi: ovo neće raditi ako si već pušao komit na public/shared branč, i ako si pokušao druge stvari, možda ćeš trebati `git reset HEAD@{number-of-commits-back}` umjesto korištenja `HEAD~`. beskonačno. Takođe, mnogo, mnogo, mnogo ljudi je predložilo ovaj odlični kratki način za koji nisam znao. Hvala vam svima!