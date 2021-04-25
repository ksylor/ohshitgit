---
tags: tip
title: Thôi chết mẹ, tôi muốn chạy diff nhưng sao không thấy cái gì hết?!
id: dude-wheres-my-diff
order: 6
---

Nếu bạn chắc mình có sửa đổi mấy file, nhưng chạy `diff` lại không thấy gì cả, thì rất có thể bạn đã `add` mấy file của mình vào vùng staging rồi, bạn cần phải sử dụng thêm một cái cờ đặc biệt nữa.

```git
git diff --staged
```
Tự nhiên bản diff hiện ra ngay &macr;\\\_(ツ)\_/&macr; (ừ tôi biết cái này *là tính năng chứ không phải là bug*, nhưng mà nó làm cho người mới xài bị hoang mang vãi cả ra, chả rõ ràng quái gì cả)
