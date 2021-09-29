---
tags: tip
title: Chết tiệt, tôi chạy diff nhưng không thấy gì thay đổi?!
id: dude-wheres-my-diff
order: 6
---

Nếu bạn biết rằng bạn đã sửa vài tập tin nhưng `diff` vẫn trống, bạn `có thể đã thêm` các tập tin của bạn vào staging và bạn cần dùng một lá cờ đặc biệt.

```git
git diff --staged
```

Tập tin đang nằm ở &macr;\\\_(ツ)\_/&macr; (Vâng, tôi biết nó là một tính năng, không phải là lỗi nhưng nó thật khó hiểu và không rõ ràng khi nó xảy ra với bạn lần đầu!)
