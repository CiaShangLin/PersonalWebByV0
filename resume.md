蔡尚霖
Senior Android 工程師
Taichung City, Taiwan

Senior Android 工程師
擁有五年Android工作經歷，目前主要維護和開發影音類型APP，持續優化產品
程式碼，提高留存率和降低閃退率，會把工作上遇到的問題和解決方法放在
Github和Medium分享，與設計合作產出高品質UI/UX產品，遵循Clean
Code和Design Pattern產出易維護的程式碼，使用Testing維護程式碼的品
質，也有研究過Flutter對於跨平台有興趣。
技能
Programming
Kotlin
Java
Dart
Python
C
Skill
Jetpack
Git
Firebase
Google Play
Compose
SQL
Language
Chinese
English
Third Library
Glide
Firebase
Epoxy
Room
RxJava
Coroutine
Retort
Okhttp
GSYPlayer
User Tracker
Firebase Analytics
Flurry
工作經歷
Serior Android工程師 • 日新
七月 2019 - Present
2024/2~now
Android App 元老專案維護與重構經歷
1.MVVM 架構重構與單元測試導入
* 將 Legacy Code 重構為 MVVM 架構，提升可讀性與測試性，並補上單元測試（如收藏系統、訂閱系統
等）
2.使用 OOP 與 Design Pattern 進行共用模組抽象化

重構多套共用邏輯：分類頁、收藏榜、專題頁、VIP頁等共用列表元件，達到模組化與邏輯簡化
3.減少 API 請求數與網路壓力

Token API 從每分鐘 3600 次降至 500 次，減少 80 % 呼叫量

減少影片重複測速 API，降至 20 % 請求量

網路圖片使用本地快取邏輯，顯著降低重複圖片請求次數

4.首頁頁面效能優化

將多項耗時工作改至 IO 線程（如 Landing 取得 IP、圖片載入、首頁初始化資料）

優化首頁 UI 卡頓，提升用戶存留率約 1 %

重構首頁短視頻播放邏輯：嵌套 RecyclerView 重構滾動播放功能，解決卡頓與刷新錯誤資料問題

首頁 UI 模組化與動態配置：熱門榜單、類型分類等區塊由後台配置，資料與 UI 連動顯示

5.啟動效能與程式碼優化

精簡 Application 初始化流程，移除不必要邏輯，縮短啟動時間

刪除大量未使用程式碼與資源，APK 體積優化 36.9MB → 28.8MB

6.QA 流程與環境優化

導入 Multi Flavor 並區隔 DEV/PROD

建立 dev/prod 環境差異，支援雙版本安裝、不同 API Host 設定與 GA 測試區隔

DEV 測試版支援浮動 GA 控制窗、自動登入測試、不同 logo 與 AppName

7.自動化打包流程優化

導入 VasDolly 建立自動渠道打包，打包時間減少 99 %

Jenkins 打包環境升級與修復 Lib 缺失，解決遺留相依問題

8.播放器功能與互動式優化

重構播放器核心元件：將播放器從 Java 遷移至 Kotlin，使用 ConstraintLayout 優化 UI 層級結構，提
升可讀性與維護效率

導入緩衝導購機制：根據播放條件顯示導購 UI，支援身份辨識切換不同購買導流流程

支援手勢化操作與個人化設定：播放器支援左右手操作（快轉、暫停等），並支援 UI 元件位置自訂

根據 VIP 等級顯示畫質選項與浮動狀態按鈕，支援多畫質播放切換

統一播放錯誤處理邏輯：播放失敗顯示錯誤 UI，支援 GA 回傳標題與錯誤類型以利追蹤問題

2019/7~2024/
主要負責影音APP維護和開發
1.Firebase Crashlytics不受當機率優化從 94 %->99.5%

2.添加Android防破解技術(NDK)
3.將專案從Java轉成純Kotlin
4.從MVP架構轉型成MVVM架構
5.編寫單元測試和UI測試維護程式碼品質
6.減少apk包大小約縮小了 40 %
7.繼承GsyPlayer擴展成我司的播放器，配合maven讓其他專案可以共用
8.用GsyPlayer+MD360Player4Android，客製化VR播放器
9.使用OOP減少重複程式碼，增加內聚力減低耦合
10.使用Design Pattern優化開發速度
11.減少Layout層級優化渲染時間
12.封裝抽象第三方套件，易於抽換和擴增
13.嘗試轉型成Flutter
學歷
2017 - 2019
逢甲大學
資訊工程學系
2012 - 2014
路竹高中
Field of study