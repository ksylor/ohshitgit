---
tags: tip
title: Oh shit, I need to clone my repo with github token so I don't have to enter my username or password on every push or pull!
id: clone-with-github-token
order: 21
---

```git
# Generate your token in Github
# Store the token somewhere safe and it only show once.
Setting-> Developer settings->Personal access tokens

# How to use token when clone repo
git clone https://tokenCode@github.com/ksylor/ohshitgit.git
```

Also github now won't support password when you clone repo so if you don't want to setup ssh use this personal-access-token is good idea. also you can set timeout and permission to token so you can generate it for every envoirment.
It is very good technique for time saving. you don't need to remeber anything just use your push and pull without any hesitation.
