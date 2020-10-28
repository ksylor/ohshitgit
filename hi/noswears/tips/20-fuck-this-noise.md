---
tags: tip
title: इसको भूल जाओ, मैं हार मानता हूं।
id: forget-this-noise
note: यह हमेशा सूची में अंतिम होना चाहिए, इसलिए इसका क्रमांक 20 कर रहा हूँ, वरना मुझे इसे फिर से री-ऑर्डर/ नाम बदलने की आवश्यकता हो सकती थी
order: 20
---

```git
cd ..
sudo rm -r stupid-git-repo-dir
git clone https://some.github.url/stupid-git-repo-dir.git
cd stupid-git-repo-dir
```

इसके लिए एरिक वी को धन्यवाद। इस मजाक में `sudo` के उपयोग की सभी शिकायतें उसे निर्देशित की जा सकती हैं। 


यदि आपकी branch में बहुत समस्याएं हैं और उसके लिए आपको अपने repository में बदलाव करना परजाये, तो आपको "git-स्वीकृत" तरीके से अपने repo को remote repo के समान रीसेट करने की आवश्यकता है, इसे आज़माएं लेकिन सावधान रहें ये विनाशकारी और अस्वीकार्य क्रियाएं हैं!

```git
# origin की नवीनतम स्थिति प्राप्त करें
git fetch origin
git checkout master
git reset --hard origin/master
# ट्रैक न किए गए फ़ाइलों और निर्देशिकाओं को हटा दें
git clean -d --force
# प्रत्येक कष्टदायक शाखा के लिए बार-बार checkout/reset/clean करें
```