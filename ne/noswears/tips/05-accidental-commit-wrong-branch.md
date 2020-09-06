---
tags: tip
title: अरे यार्, मैले झुकिएर गलत ब्रान्च मा कमिट गरे!
id: accidental-commit-wrong-branch
order: 5
---

```git
# अघिल्लो कमिट(commit) लाई हटाउने, तर गरिएको परिवर्तन राखिराख्ने,
git reset HEAD~ --soft (कमिट हटाउछ, तर गरिएको परिवर्तन रखिरन्छ)
git stash
# सहि ब्रान्च मा प्रवेश गर,
git checkout सहि-ब्रान्च-को-नाम
git stash pop
git add . # or ब्यक्तिगत फाईल एक-एक गरि थप, अनि तेस्पछी
git commit -m "कमिट मेसेज";
# अब तिम्रो परिबर्तन सहि ब्रान्च मा पुगेको छ
```

धेरै डेभलपर(developer) हरु ले यो अवस्था मा `cherry-pick` प्रयोग गर्न सुझाव पनि दिएका छन्, तेसैले तिमीलाई जुन तरिका सहज लाग्छ त्यहि प्रयोग गर|

```git
git checkout सहि-ब्रान्च-को-नाम
# अघिल्लो कमिट लाई मास्टर ब्रान्च मा चेरी-पिक(cherry-pick) गर, 
git cherry-pick master (अघिल्लो कमिट को रेफरेन्स(reference) मास्टर ब्रान्च मा पास हुन्छ)
# अब त्यो कमिट को रेफरेन्स(reference) लाई हटाई देउ,
git checkout master
git reset HEAD~ --hard
```