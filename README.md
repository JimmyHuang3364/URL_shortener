# 短網址產生器

## 功能
- 首頁畫面上有一個表單，使用者可以在表單輸入原始網址，如 https://www.google.com；送出表單之後，畫面會回傳格式化後的短網址，https://your-project-name.herokuapp.com/6y7UP

- 在伺服器啟動期間，使用者可以在瀏覽器的網址列，輸入你提供的短網址（如 https://your-project-name.herokuapp.com/6y7UP），瀏覽器就會導向原本的網站（如 https://www.google.com）

- 短網址輸出格式為 5 碼英數組合。
- 短址產生後可直接點擊跳轉該網址。
- 使用者可以按 Copy 來複製縮短後的網址。

## 需求
- express 4.17.1
- express-handlebars 5.3.4
- body-parser": 1.19.0
- mongoose: 6.0.8

## 安裝
- 下載
```
git clone https://github.com/JimmyHuang3364/URL_shortener.git
```
- 執行
```
cd URL_shortener
npm i
npm run dev
```
- 伺服器位置
```
localhost:3000
```