---
tags: tip
title: கடவுளே, நான் தற்செயலாக தவறான கிளையில் ஈடுபட்டேன்!
id: accidental-commit-wrong-branch
order: 5
---

```git
# கடைசி உறுதிப்பாட்டை செயல்தவிர்க்கவும், ஆனால் கிடைக்கக்கூடிய மாற்றங்களை விட்டு விடுங்கள்
git reset HEAD~ --soft
git stash
# சரியான கிளைக்கு நகர்த்தவும்
git checkout name-of-the-correct-branch
git stash pop
git add . # அல்லது தனிப்பட்ட கோப்புகளைச் சேர்க்கவும்
git commit -m "உங்கள் செய்தி இங்கே";
# இப்போது உங்கள் மாற்றங்கள் சரியான கிளையில் உள்ளன
```

இந்த சூழ்நிலையிலும் `செர்ரி-பிக்` ஐப் பயன்படுத்த நிறைய பேர் பரிந்துரைத்துள்ளனர், எனவே உங்களுக்கு மிகவும் பொருத்தமான ஒன்றைத் தேர்ந்தெடுங்கள்!

```git
git checkout name-of-the-correct-branch
# மாஸ்டருக்கு கடைசி உறுதியைப் பெறுங்கள்
git cherry-pick master
# அதை மாஸ்டரிடமிருந்து நீக்கவும்
git checkout master
git reset HEAD~ --hard
```