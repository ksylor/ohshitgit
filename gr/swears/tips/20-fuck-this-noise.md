---
tags: tip
title: Γάμα το, παραιτούμαι.
id: γάμα-το-παραιτούμαι
note: αυτό θα πρέπει να είναι πάντα το τελευταίο στη λίστα, οπότε βάζω την αρίθμηση μέχρι το 20 ώστε να μη το μετονομάζω/επαναριθμίζω
order: 20
---

```git
cd ..
sudo rm -r γαμημένο-git-repo-dir
git clone https://some.github.url/γαμημένο-git-repo-dir.git
cd γαμημένο-git-repo-dir
```

Ευχαριστώ τον Eric V. για αυτό. Όλα τα παράπονα για τη χρήση του `sudo` σε αυτό το αστείο μπορούν να απονεμηθούν σε αυτόν. 


Σοβαρά πάντως, αν το branch σου είναι τόσο σαλατοποιημένο ώστε να πρέπει να κάνεις reset τη κατάσταση του repo σου ώστε να είναι η ίδια με το remote repo σε έναν "εγκεκριμένο-git" τρόπο, δοκίμασε αυτό, αλλά πρόσεξε τις καταστροφικές και μη αναστρέψιμες συνέπειες!

```git
# λάβε τη τελευταία κατάσταση του origin
git fetch origin
git checkout master
git reset --hard origin/master
# διέγραψε untracked files και directories
git clean -d --force
# επανέλαβε checkout/reset/clean για κάθε σαλατοποιημένο branch
```