---
title: 'มาเขียน Discord bot ด้วย Typescript กันนนน'
timestamp: 1614085101388
excerpt: 'Discord Bot นั้นสามารถทำอะไรได้หลายอย่างตั้งแต่ แจ้งเดือน บลาๆ จนไป ถึงการซื้อขาย Crypto เลยนะครับ'
coverImage: '/assets/blog/make-discord-bot-with-typescript/cover-image.jpg'
author:
  name: Panupong Tipjoi
  picture: '/assets/blog/authors/toon.jpg'
  ogImage:
    url: '/assets/blog/make-discord-bot-with-typescript/cover-image.jpg'
  link: 'https://github.com/tchala120'
---

> Discord Bot นั้นสามารถทำอะไรได้หลายอย่างตั้งแต่ แจ้งเดือน บลาๆ จนไป ถึงการซื้อขาย Crypto เลยนะครับ

เรามาจากการสร้าง Bot กันก่อนเลย ให้คุณไปที่ [Discord Developers](https://discord.com/developers/applications) จากนั้น Login ให้เรียบร้อย
<img src="/assets/blog/make-discord-bot-with-typescript/create-bot-app.png" alt="Create an app" class="img-content"/>
คลิกไปที่ New Application เพื่อสร้างแอพ เมื่อสร้างแอพเสร็จจะได้หน้าตาประมาณนี้
<img src="/assets/blog/make-discord-bot-with-typescript/app-created.png" alt="App created!" class="img-content"/>
จากนั้นไปที่ Bot แล้วกด Add Bot เพื่อสร้างบอทขึ้นมา หลังจากสร้างบอทเสร็จแล้วให้ไปที่ Oauth2 เพื่อเลือก Permissions ให้กับบอท
<img src="/assets/blog/make-discord-bot-with-typescript/bot-select-permissions.png" alt="Bot select permissions=" class="img-content"/>
แล้วเลือก Permissions ให้กับบอท ตามตัวอย่างข้างบนคือ จะเลือกให้บอทสามารถอ่านข้อความได้และส่งข้อความได้ (เบสิคสุดๆ 🤣) แล้วเราจะเห็นลิ้งเชิญบอทให้ copy แล้วนำไว้วางในแท็บใหม่ของ Browser
<img src="/assets/blog/make-discord-bot-with-typescript/select-bot-server.png" alt="Select bot server=" class="img-content"/>
แล้วให้เราเลือก server ที่จะชวนบอท เมื่อเลือกแล้วกด continue.
<img src="/assets/blog/make-discord-bot-with-typescript/invite-success.png" alt="Select bot server=" class="img-content"/>
**ทาดาาา** เรียบร้อยแล้ว ต่อไปจะเป็นส่วนของ `code` แล้วนะครับ

เริ่มจากสร้างโปรเจคขึ้นมาก่อน

```bash
mkdir discord-bot && cd $_ && npm init -y
```

จากนั้นก็ Install Dependency

```bash
npm install discord.js
```

> **เห็นไหมล่ะครับว่า การเขียนบอทนั้น ง่ายนิดเดียวเอง แค่เราเข้าใจ concept ของมันก็สามารถต่อยอดได้เยอะแล้วครับ**
