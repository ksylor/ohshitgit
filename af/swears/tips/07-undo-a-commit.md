---
tags: tip
title: Oh shit, Ek moet 'n commit ongedaan maak van soos 5 commits gelede!
id: maak-n-commit-ongedaan
order: 7
---

```git
# vind die commit wat jy ongedaan moet maak
git log
# gebruik jou sleutelbord pyljies om op 
# en af in geskiedenis te beweeg
# wanneer jy jou commit gevind het, stoor die hash
git revert [gestoorde hash]
# git sal 'n nuwe commit skep wat die ander een ongedaan maak
# volg die aanwysings om die commit boodskap te wysig 
# of stoor en commit net
```


Dit blyk dat jy nie die ou lêerinhoud in die bestaande lêer hoef op te spoor en te kopieer om die veranderinge ongedaan te maak nie! As jy 'n fout begaan het, kan jy die commit op een slag ongedaan maak met 'revert'.

Jy kan ook 'n enkele lêer terugstel in plaas van 'n volledige commit! Maar natuurlik, op die ware git manier, is dit 'n heel ander stel fokken opdragte...
