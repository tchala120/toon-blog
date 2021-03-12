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
  position: 'Intern Full Stack Developer at Krungsri Consumer'
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

```json
// script ในไฟล์ package.json
...
"scripts": {
  "start": "ts-node ./src/",
  "build": "node_modules/.bin/tsc"
}
...
```

จากนั้นก็ Install Dependency

```bash
npm install discord.js dotenv
```

เริ่มติดตั้ง Typescript

```bash
npm i typescript --save-dev
```

จากนั้นสร้างไฟล์ tsconfig.json ไว้ที่ root directory ครับ

```json
// tsconfig.json

{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "lib": ["dom", "es6", "es2017", "esnext.asynciterable"],
    "sourceMap": true,
    "outDir": "./dist",
    "moduleResolution": "node",
    "removeComments": true,
    "noImplicitAny": true,
    "strict": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noImplicitThis": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "resolveJsonModule": true,
    "baseUrl": "."
  },
  "exclude": ["node_modules"],
  "include": ["./src/**/*.tsx", "./src/**/*.ts"]
}
```

หลังจากเราลง Typescript เรียบร้อยแล้วก็เริ่มทำบอทกัน...

ขั้นตอนแรกนำ Token บอทมาเพื่อบอกว่าเราจะใช้บอทตัวนี้นะ

กลับไป Discord Developer ไปที่แท็บของ Bot

<img src="/assets/blog/make-discord-bot-with-typescript/copy-token-bot.png" alt="Click copy token bot=" class="img-content"/>

กด copy ได้เลย

สร้างไฟล์ .env ขึ้นมาเลยครับ

```bash
# .env

BOT_TOKEN=นำ TOKEN ที่ copy มาใส่ตรงนี้
```

เริ่มเขียนโค้ดกันสักที 😮‍💨

> **ทุกไฟล์ที่สร้างหลังจากนี้จะอยู่ใน folder src เสมอนะครับ.**

สร้าง ไฟล์ bot.ts ขึ้นมาโลดด

```typescript
// bot.ts

import { Client, Message } from 'discord.js'
import { TOKEN, PREFIX } from './config'

export class Bot {
  private _client!: Client

  public constructor() {
    this._client = new Client()
  }

  public async start(): Promise<void> {
    this.ready()
    await this.listen()
  }

  private async listen() {
    this._client.on('message', (message: Message) => {
      if (!message.content.startsWith('!') || message.author.bot) return

      const args = message.content.substring(PREFIX.length).trim().split(' ')
      const commandName: string = args.shift()?.toLowerCase() || ''

      if (commandName === 'ping') {
        message.reply('Pong!')
      }
    })
    this._client.login(TOKEN)
  }

  private ready(): void {
    this._client.once('ready', () => {
      console.log('บอท Tconomy ได้เริ่มออนไลน์แล้ว.')
    })
  }
}

export default Bot
```

สร้างไฟล์ config.ts

```typescript
import { config } from 'dotenv'

config()

export const TOKEN = process.env.BOT_TOKEN

export const PREFIX = '!'
```

สร้างไฟล์ index.ts

```typescript
import { Bot } from './bot'

new Bot().start().catch((e) => console.log('Unexecpected error when starting bot.', e))
```

คงจะงงใช่ไหมว่าผมให้ทำอะไร เดี๋ยวมาอธิบายให้ฟังนะครับ.

เริ่มจากไฟล์ `bot.ts` มี function start ไว้สำหรับเริ่ม run bot เมื่อ bot start แล้ว ต่อมาที่ function listen อันนี้คือตัวเอกของเรา คือ function ที่จะรับ input จาก user มาแล้วเช็ค case ให้ตรงกับ command ที่เราต้องการครับ

```typescript
this._client.on('message', (message: Message) => {
  if (!message.content.startsWith('!') || message.author.bot) return

  const args = message.content.substring(PREFIX.length).trim().split(' ')
  const commandName: string = args.shift()?.toLowerCase() || ''

  if (commandName === 'ping') {
    message.reply('Pong!')
  }
})
```

function นี้เป็นตัวที่ค่อยรับ message จาก input ของ user เมื่อรับมาแล้ว ในบรรทัดที่ 2 จะเช็คว่ามี PREFIX ตามที่เราต้องการไหม (ตัวอย่าง case นี้เราใช้ "!" ในไฟล์ config.ts สามารถเปลี่ยนได้) หรือ ข้อความนี้มาจาก bot หรือป่าว ถ้าใช่ ให้ `return` โดยไม่แสดงอะไร

ต่อมาที่ตัวแปร args เราทำการ ตัด PREFIX (!) ออก แล้ว split string ด้วย space เพื่อในกรณีที่คำสั่งนั้นต้องการ arguments เพิ่มเติมเช่น

```typescript
// !hello toon

const args = message.content.substring(PREFIX.length).trim().split(' ')

// ["hello", "world"]
```

ต่อมาที่ตัวแปร commandName คือตัวคำสั่งของเรา โดยที่เราจะ args ตัวแรกเท่านั้น ตัวที่เหลือจะเป็น arguments เพิ่มเติมของแต่ละคำสั่ง

ในบรรทัดที่ 7 จะเป็นตัว execute command ครับ เช็คง่ายๆ โดยเช็คว่า commandName ตรงกับ command ที่เราต้องการไหม (ในตัวอย่างเป็นคำสั่ง ping) ถ้าตรง จะทำการ reply message "Pong!" กลับไป

```typescript
...
this._client.login(TOKEN)
...
```

ต่อมาในส่วน login คือนำ TOKEN ที่เราเซ็ทไว้ใน .env มา login เพื่อใช้บอท.

**แค่นี้ก็สามารถรันบอทได้แล้วครับ ง่ายนิดเดียว 😁**

Code ทุกอย่างอยู่ใน [Github](https://github.com/tchala120/discord_bot) สามารถเข้าไปดูได้ครับ

สามารถอ่าน API Documentation ได้ที่ [DiscordJS](https://discord.js.org/), [DiscordJS Guide](https://discordjs.guide/)

> **เห็นไหมล่ะครับว่า การเขียนบอทนั้น ง่ายนิดเดียวเอง แค่เราเข้าใจ concept ของมันก็สามารถต่อยอดได้เยอะแล้วครับ เช่นสามารถทำตัว command handler ได้ เพราะเราคงไม่มานั่ง if เช็คแบบนี้ตลอดถูกไหมครับ 🤣**
