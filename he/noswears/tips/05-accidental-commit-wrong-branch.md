---
tags: tip
title: <div class="he">אוי לעזאזל, בטעות עשיתי קומיט לברנץ' הלא נכון!</div>
id: קומיט-לברנץ-לא-נכון-בטעות
order: 5
---

```git
# בטל את הקומיט האחרון, אבל השאר את השינוי
git reset HEAD~ --soft
git stash
# עבור אל הברנץ' הנכון
git checkout name-of-the-correct-branch
git stash pop
git add . # או הוסף קבצים בודדים
git commit -m "ההודעה שלך פה";
# עכשיו השינוים שלך בברנץ' הנכון.
```
<div class="he">
המון אנשים הציעו להשתמש ב
`cherry-pick`
בסיטואציה הזו, אז בחר את מה שאתה חושב שהכי הגיוני.
</div>

```git
git checkout name-of-the-correct-branch
# העתק את הקומיט האחרון למאסטר
git cherry-pick master
# מחק אותו מהמאסטר
git checkout master
git reset HEAD~ --hard
```