---
tags: tip
title: <div class="he">שכח מהרעש הזה. אני מוותר</div>
id: שכח-מהרעש-הזה
note: this should always be the last one in the list, so setting order to 20 so I don't have to re-name/re-order it
order: 20
---

```git
cd ..
sudo rm -r stupid-git-repo-dir
git clone https://some.github.url/stupid-git-repo-dir.git
cd stupid-git-repo-dir
```
<div class="he">
תודה ל
Eric V.
על זה. כל תלונה על שימוש ב
`sudo`
בבדיחה הזו אפשר להפנות אליו.

וברצינות, אם הרבנץ' שלך לגמריייי שבור עד כדי כך שאתה צריך לאפס את הברנץ' שלך להיות זהה לברנץ' המרוחק בדרך ה
"git-approved",
נסה את זה, אבל הזהר - זוהי פעולה הרסנית ובלתי הפיכה.

```git
# קבל את המצב האחרון
git fetch origin
git checkout master
git reset --hard origin/master
# מחק קבצים ותיקיות אשר גיט לא עוקב אחריהם
git clean -d --force
# בצע checkout/reset/clean על כל ברנץ' שבור
```
</div>