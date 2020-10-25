---
tags: tip
title: यो बकवास हल्ला, मैले हार माने|
id: fuck-this-noise
note: this should always be the last one in the list, so setting order to 20 so I don't have to re-name/re-order it
order: 20
---

```git
cd ..
sudo rm -r बकवास-git-रेपोजिटोरी-को-पाथ
git clone https://कुनै-git-को-url/बकवास-git-रेपोजिटोरी-को-पाथ.git
cd बकवास-git-रेपोजिटोरी-को-पाथ
```

यसको लागि एरिक भी(Eric V.) लाई धन्यवाद! यो चुट्किला मा प्रयोग भएको `sudo` उनलाई नै निर्देस गरिएको हो|

त्यो माथिको त मजाक मात्र थियो, तर साचै, यदि तिम्रो ब्रान्च धेरै-धेरै बिग्रिएको छ र तेस्लाई ऐले भाको git को रिमोट रेपोजीटोरी संग "git द्वारा मान्यता प्राप्त" पारा मा मिलाउनु छ भने, यो तरिका अपनाउ, तर ध्यान राख, यो तरिका एकदमै विनासकारी र अप्रापनीय छ!

```git
# ओरिजिन(remote-repository) को पछिल्लो अवस्था प्राप्त गर,
git fetch origin
git checkout master
git reset --hard origin/master
# ट्रयाक नभाको फाइल हरु डिलिट गर,
git clean -d --force
# प्रत्येक बिग्रिएको ब्रान्च मा checkout/reset/clean कमाण्ड प्रयोग गर
```
