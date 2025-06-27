# AV9更版日誌

建立時間: 2025年5月14日 上午11:36

2024-03-08	v6.8.0 (265)
ComicAnimation
強制更版"	"1.首頁動漫頁_動畫＆漫畫
-新增標籤區
-新增標籤篩選器頁面

2.影片播放器
-(影片內頁＆短視頻)新增長按螢幕可2倍速播放
-(影片內頁＆短視頻)新增拉進度顯示時間標籤
-(影片內頁)進度條顯示擼點標誌（原短視頻有)
-(影片內頁)關閉蓋板廣告才播放影片
-(影片內頁)拉進度條(手指未放開時)，螢幕照常播放，直到放開手指後，螢幕才開始跑指定秒數影片

3.調整VIP色圈
-女優區塊UI間距
-時下必擼驚喜推薦資料邏輯＆預播計算邏輯

4.調整安利頁
-新增第二區塊：在首頁列表VIP色圈與最新的中間(頻道管理不顯示)
-拿掉購買過VIP並當前是VIP才能看到安利頁

5.調整任務中心能量飲料獎勵：每日簽到＆日常任務
6.搜尋頁＆訂閱頁加入麻豆女優
7.更換UI：短視頻影片加載失敗POP窗
8.Flurry加上GA並行，JNI導入GA
9.優化程式碼＆修復bug
-修復返回首頁時VIP頁和會員頁都會觸發刷新token方法
-簡化Application程式碼,刪除紀錄影片播放時間卡UI線程
-Landing的SystemConfig改用data Bean處理,Api改用RX處理
-Landing Api測速優化改用RX處理
-Landing 取得ip位置耗時工作改到IO線程處理
-Landing拿取首頁資料寫入資料庫改到IO線程處理
-首頁xml不用include減少一層layout,刪除無用的UI
-首頁優化VipBanner資料流,刪除預設圖片
-首頁getCountryCode,getSubscription序列化改到IO線程處理
-首頁checkSupportH265和checkSpecifyApp調整到IO線程處理
-優化首頁蓋板廣告和公告窗,顯示邏輯,補上顯示邏輯測試
-Base64圖片api線程改用預設Glide,不使用Rx的io線程
-簡化連點判斷程式碼，刪除FastClickUtil
-刪除更版窗無意義的timer
-刪除舊版更版程式碼,TopicSetActivity,DiscoveryActivityKt,NewActorFragment,BaseVideoMVP系列,FindNewVersionDialog,AsteriskPasswordTransformationMethod,LeftSnapHelper,FakeDataUtil,LogLong無用程式碼

10.更換json檔案
舊：[https://a9a9a9.oss-accelerate.aliyuncs.com/host_and.json](https://a9a9a9.oss-accelerate.aliyuncs.com/host_and.json)
新：[https://a9a9a9a9.oss-cn-guangzhou.aliyuncs.com/host_and.json](https://a9a9a9a9.oss-cn-guangzhou.aliyuncs.com/host_and.json)
11.landing把上個版本拿掉允許權限POP窗新增回去
12.更換新手教學＆愛威奶日誌
13.更換LOGO
-預覽logo：ganyganb.cfd>99awdf.cfd
-Logo1：aiwaiyd.cfd>99arfn.cfd
-Logo2：活動logo_邀友欢聚>99bvca.click
-Logo3：[ccupzgy.shop](http://ccupzgy.shop/)>99saql.buzz"
"v6.8.1 (266)
ComicAnimationV2
強制更版"	"1. 修復首頁pop窗沒有顯示問題
(原由：調整首頁列表ga在使用期間只打一次精選預設不打)
2.修復全域banner點擊打開網址錯誤
3.拿掉landing 允許權限pop窗
（更換路徑順序)"

---

2024-03-13	"v6.8.2 (267)
SubscribeFix
強制更版"	"1.嘗試修復訂閱頁影片刷新閃退問題。
2.VIP色圈_時下必擼驚喜推薦預覽片補上source防呆
3.修復直播重複打Flurry問題
4.調整GA打法
-影片播放、試看影片、圖片類型、播放第一部、在app使用期間進入首頁身份打法調成與PWA一樣打法
-全部的Event Label 與 Event Category 互換

5.刪除舊版任務頁
6.刪除無用程式碼EditAlertDialog,UnLockChallengeDialog, SecurityLockDialog,LoadingDataDialog,SexVideoApi,SexTopicApi,SexPostApi,CustomImageView,FlowLayoutManager,CustomImageView,FlowLayoutManager,BaseSex,NewCategoryFragment

7.CustomerEventWebActivity,FloatBallView的package是健康的路徑調整回AV9的
8.刪除無用資源檔34.7MB->31.9MB
9.api的json列表改成jsonb：拿到結尾jsonb（base64後的json)，自動轉換json
10.更換Logo2：99bvca.click>9ovjs06.baby
11.補上landing 允許權限pop窗"

---

2024-03-19	"v6.8.3 (268)
CleanAnalytics
強制更版"	"1.刪除不會用到的GA4參數
2.更換json檔
舊：[https://a9base64.oss-cn-guangzhou.aliyuncs.com/host_and.jsonb](https://a9base64.oss-cn-guangzhou.aliyuncs.com/host_and.jsonb)
新：[https://av9av9b.oss-cn-guangzhou.aliyuncs.com/host_and.jsonb](https://av9av9b.oss-cn-guangzhou.aliyuncs.com/host_and.jsonb)

3.優化程式碼
-簡化首頁Vip POP窗跳出邏輯
-簡化首頁熱門片商看全部跳轉到VIP頁熱門片商程式碼
-簡化VIP頁Tab相關程式碼,補上安利tab顯示測試
-刪除mejoysdk
-訂閱頁刪除無意義的資料排序,卡住UI線程
-直播頁沒資料圖片改成預設消失
-直播頁刪除無用程式碼,刪除火熱UP主預設背景圖片優化初始化速度
-首頁專題頁重構,改用kotlin
-影片內頁apiHost測速完不需要再打一次影片內頁api
-VIP頁安利頁顯示不需要會員狀態判斷,所以刪除token api刷新

4.更換logo
-Logo2：9ovjs06.baby>99zqapl02.click
-Logo3：99saql.buzz >99xeajf04.cfd

5.更換破解版域名
biabizc.baby>9loveyu.click"

---

2024-04-10	"v6.9.0 (269)
ActorFilter
強制更版"	"1.優化TAB專題
-TAB名稱：專題>分類
-調整頂部menu順序
＊舊：駐站主編>視頻分類>AV女優>油管視頻
＊新：AV女優>視頻分類>駐站主編>油管視頻
-AV女優：
＊新增自有女優『麻豆女優、AI明星、Onlyfans、模特私拍、RSWAG女優』
＊調整熱門女優由10變成12，並且自動輪播
-視頻分類：新增視頻篩選器

2.油管視頻改為非VIP影片
3.首頁輪播banner新增更多推薦按鈕，根據該banner網址跳轉至首頁安利頁或者駐站主編。
4.註冊/邀請好友新增提示文案
5.調整忘記密碼：拿掉寄送密碼改成重新設定密碼(每月限定2次)
6.輸入驗證碼錯誤超過5次限制：註冊頁/重新設定密碼
7.優化程式碼：
-我的收藏頁刪除Banner預設大圖60ms,優化載入速度和可能OOM問題
-刪除舊版專題頁,舊版回報POP窗,TagListView,TagView,UIUtils,SizeUtils,PlayerAD
-統一dp計算方法
-優化首頁底部對齊TAB問題,子頁面不需要去考慮首頁TAB的高度,優化開發速度
-優化漫畫分享窗QRCode大小
-漫畫內頁圖片新增ApiTimeOut 15秒設定
-首頁影片列表切換統一程式碼

- 重構匯入收藏號頁面
＊補上匯入測試
＊優化刪除Banner預設背景圖片60ms->2ms
＊資料夾間距修正
＊部數背景修正比較符合設計稿
＊匯入失敗多一個無回應吐司
- 重構收藏榜,
＊優化上方影片RV嵌套,優化載入速度
＊粉丝改成簡體
＊點擊大師資料夾跳轉補打api
＊新增刷新功能
- 重構驛站主編
＊修復載入偶而沒回應問題
＊簡化程式碼
- 重構分類女優頁
＊簡化熱門女優,篩選女優UI層級
＊重構程式碼,補上篩選測試

8.更換json域名

- 舊：[https://av9av9b.oss-cn-guangzhou.aliyuncs.com/host_and.jsonb](https://av9av9b.oss-cn-guangzhou.aliyuncs.com/host_and.jsonb)
-新：[https://a9a9-1305277877.cos.ap-guangzhou.myqcloud.com/host_and.jsonb](https://a9a9-1305277877.cos.ap-guangzhou.myqcloud.com/host_and.jsonb)

9.更換新手教學/愛威奶日誌
10.更換logo
-預覽logo：99awdf.cfd>9iukf.rent
-Logo1：99arfn.cfd > 9isoh.rest
-Logo2：99zqapl02.click>9ivie.rest
-Logo3：99xeajf04.cfd>9itmg.baby"

---

2024-4-15	"v6.9.1 (270)
GlideThreadPool
強制更版"	"1.base64圖片請求方式改回以API在用的線程池
(原：圖片載入Library的線程池)
2.修正首頁共籌區塊預覽影片出現黑畫面問題
3.修正android 7 AV女優的熱門女優有機率會oom的問題"

---

2024-5-2	"v6.9.2 (271)
NewSubscribe
不強制更版"	"1.重寫訂閱功能
2.修改landing卡在80%問題
(CPI測速失敗直接進首頁)
3.調整預覽圖片顏色"

---

2024-5-14	"v7.0.0 (272)
NewLiveStream
強制更版"	"1.新增新版本直播頁(由後台切換新舊版本)
-韓國直播變成一般影片播放器(新舊版本一樣)
2.我的下載漢堡選單下載VIP影片吐司判斷(顯示會員帳號)
3.VIP色圈
-心願清單入口新增動畫

- 優化api緩存不再UI線程處理
- 簡化UI層級
- 共用舊有女優和影片程式碼
-優化滾動撥放邏輯
4.刪除live/cna api沒使用到依舊呼叫
5.刪除舊版訂閱
6.更換新手教學&愛威奶日誌
7.更換logo3
9itmg.baby>99jrock1.baby"

---

2024-6-4	"v7.1.0 (273)
ExoVrPlayer
強制更版"	"1.調整圖片存取方式
-舊：本地存取URL
-新：從json擋裡拿取域名做測速拿取最快做替換，如果與後端比對不同則使用後端給的域名。

2.新增VR資源
-顯示位置：VIP頁、VIP色圈
-觀看權限：VIP.5以上必須有VIP天數、永久VIP/大富豪
-新增VR橫向播放器
-新增心願清單(本地)、觀看紀錄

3.全部播放器新增播放失敗UI提示：所有播放器內的操作行為
-播放器種類：一般影片內頁、短視頻內頁、韓國直播影片內頁、水果派影片內頁、VR影片內頁

- 調整短視頻上下播放失敗顯示UI
舊：顯示短視頻請求失敗POP窗
新：顯示播放中途失敗UI提示

4.調整韓國直播影片內頁拿取資料邏輯
-舊：拿取api失敗顯示直播掉線吐司，並且自動離開頁面
-新：拿取api失敗顯示影片內頁請求失敗pop窗(與一般影片內頁流程一樣)

5.新增api『用戶首頁檢視記錄』：
打完安裝記錄且後端回應成功必須進入到首頁才能打

6.修復其他功能
-VIP色圈女神女優頭像補上背景
-破解窗少了https導致無法跳轉,短片頁破解窗沒有換上新的URL

7.更換圖片
-新手教學
-愛威奶日誌
-VIP權益

8.新增購買頁參數：VR限定POP窗"
"v7.1.1 (274)
ExoVrPlayerFix
強制更版"	1.修復影片內頁、我看過的閃退問題

---

2024-06-27	"v7.2.0 (275)
MainScreenPopular
強制更版"	"1.調整首頁
-拿掉：精選女優(日本AV)、本週排行、油管視頻
-新增：全站女優、人氣作品(日本、國產、漫畫、ai寫真、模特寫真)
-調整：直播間UI、OF女優UI排法、長片專題增加換一換功能(給比較多資料)

2.調整GA
-修改：播放失敗回傳影片標題、api_進入首頁(MKT)只打一次
-新增：播放失敗回傳and版本、新舊直播頁分開打頁面PV、首頁開發

3.調整MKT用戶首頁檢視記錄觸發邏輯
4.調整任務中心獎勵
-簽到：
＊第四天拿掉能量飲料+1
＊第五天拿掉VIP＋1改成精力值＋1、能量飲料+2
-日常任務：
＊分享愛威奶：改能量飲料＋1（原本＋2）
＊觀看片數任務：新增能量飲料+1
-本月簽到28天：改送VIP送2天（原本送3天）

5.優化及修復程式碼
-TA個人頁匯入收藏整合成新版的
-修復問題回報關閉導致手機打開自動旋轉功能
-刪除舊版收藏匯入POP窗
-VIP色圈VIP色片心願按鈕整合
-首頁短視頻重構
＊共用滾動播放功能
＊修復超火影片嵌套導致畫面卡頓
＊修復標籤補上#
＊超火影片補上遮罩
＊修復超火影片取消收藏後會變成白色
-修復首頁漫畫自動往下滾動問題
-調整MKT用戶首頁檢視記錄觸發邏輯調整
-修復首頁刷新共籌會刷新到直播
-修復首頁刷新獨家影片會刷新到AI影片
-修復首頁刷新AI女優會刷新到片商
-修復漫畫分類、視頻分類接成相反的api

6.VR影片播放成功補上觀看紀錄API
7.更換APP logo
-預覽logo：9iukf.rent>99jafro5.rest
-logo1：9isoh.rest>99jrice3.rent
-logo2：9ivie.rest>99jgrid4.baby
-logo3：99jrock1.baby>99jrace2.rest"

---

2024-07-10	"v7.3.0 (276)
FakeLoading
強制更版"	"1. 更換播放器暫停UI
-身份：根據不同身份(VIP/非VIP)顯示導購文案。
-顯示頁面：一般影片內頁/水果派內頁/短視頻內頁/韓國直播影片內頁

1. 更換播放器載入UI
-顯示頁面：一般影片內頁/短視頻內頁
2. 播放器製造假的載入導購條件(UI和新版載入UI一樣)
3. 調整播放器右上角導購
    - 調整優惠與續費顯示條件
    - 新增顯示位置：全螢幕

5.調整播放器下方續費文案顯示條件
6.視頻收藏結果頁新增打開短視頻入口(播放收藏資料)
7.會員頁新增AV9官方群入口
8.調整影片內頁天天追擼片影片數量(原30> 新200部)
9.入口截圖根據後台時間條件顯示關閉鈕
10.進入購買頁帶有關支付寶參數給後端
11.兌換福利頁增加判斷：
輸入邀請號碼跳轉至任務中心，如果新手任務收起來則移到升等VIP頁。

12.調整首頁精選頁
-列表歷年banner身份顯示，改成全部的人都看得到。
（原本限定沒有VIP天數的人才看得到）

```
 -人氣作品menu順序
   舊：日本AV、國產AV、H漫畫、AI寫真、模特寫真
   新：H漫畫、日本AV、國產AV、AI寫真、模特寫真

  -長片專題：換一換的資料不足需拿舊資料補滿6部

```

13.修復神龍傳說是可以觀看韓國直播影片
14.推薦水果派vip/fpie/index改用vip/fpie
15.更換新手教學/愛威奶日誌"
"v7.3.1 (277)
FakeLoading
強制更版"	1.修復離線下載/我的下載頁面的播放器沒設置到暫停文案導致閃退

---

2024-7-12	"v7.3.2 (278)
LoadingTextShadow
不強制更版"	"1.更換播放器(真/假)載入UI
2.修復載入動畫UI發生少量閃退問題"

---

And 不強制更版
Version7.3.3 (279) ShortListWatchFix
1.新增他人的視頻收藏結果頁可以開啟短視頻入口(播放收藏資料)
2. 整合VIP色圈預覽播放程式碼

---

Av9 and 強制更版
version7.4.0(280)PhotoCollect
1.調整首頁動漫頁
-新增按鈕_福利黃牛：點擊開啟安利結果頁
-新增動畫：全站首播里番在這兒、熱門榜單
-拿掉按鈕_肉番里番：點擊跳轉VIP頁

2.AI換臉寫真內頁、模特寫真內頁新增收藏按鈕、分享按鈕
3.我的收藏、我看過的新增AI換臉寫真、模特寫真資料(權限與漫畫一樣)
4.調整安利頁熱門排行邏輯與數量
5.調整播放器右上角標籤顯示邏輯
6.廣告位置
-首頁列表置頂banner改成輪播banner
-影片內頁猜你喜歡的橫幅廣告改像影片大小的廣告UI
-新增九宮格POP窗
＊首頁在app使用期間只會出現一次
＊搜尋頁在app使用期間最多出現兩次

7.影片內頁猜你喜歡
-新增小封面圖影片數量：最多200筆
-新增熱播播單：點擊打開短視頻內頁

8.新增紀錄請求mkt_api成功數量
9.CPI內頁領獎新增API （驗證與頻率限制）
10.調整程式碼：
-刪除舊版右上角導購標籤UI和API
-修復播放器舊的緩衝UI,KB都是0的問題
-修復韓國直播播放器緩衝UI,KB都是0的問題
-修復短視頻第二次進來緩衝會不出現問題

11.更版窗文案調整
12.刪除及調整不會打的GA
13.新增購買頁參數
-九宮格POP窗
-首頁列表置頂banner
-影片內頁猜你喜歡影片小封面
-寫真收藏夾POP窗
-寫真收藏上限POP窗
-播放暫停：非vip、vip
14.更換新手教學與愛威奶日誌

---

Av9 and 強制更版 2024/11/1
version7.5.0(281)RemoveMosaic

"1. 調整廣告_九宮格POP窗
-新增顯示位置：影片內頁、短視頻、寫真內頁(AI、模特)、漫畫內頁
-UI根據身份顯示文案

-顯示次數：每一個在app使用期間只出現一次
2.調整播放暫停根據身份顯示文案調整
-VIP1~9身份：根據等級判斷顯示不同文案，都導入到購買頁
-VIP.10只導入安利頁結果頁
3.調整安利頁熱門排行取得資料的方式
4.調整能量飲料的規則：在有限時間內進行兌換及清零所有能量飲料
5.調整邀請好友獎勵：拿掉送能量飲料改送抽獎券
6.調整任務中心
-調整新手任務、日常任務獎勵：拿掉送能量飲料改送抽獎券
-每日簽到：
＊原簽到7天改簽28天
＊獎勵：由後台控制顯示獎勵
＊拿掉：升等VIP內本月簽到區塊
-新增抽獎頁面
-新增優惠券頁面：VIP優惠券、富豪優惠券
7.新增AI無碼：去除日本av馬賽克
-首頁新增AI無碼頁面：每日選出昨日20名視頻進行去除、選中視頻去除進度表
＊新增我的助力頁面
-影片內頁、短視頻：新增AI無碼畫質
-影片內頁：新增懸浮按鈕顯示當前日本AV的去除狀態顯示
8.調整loading開頻廣告圖片
-廣告圖片存本地
-改成顯示開屏廣告就開始倒數，不管圖片有沒有載入成功
9.更換JSON檔
舊：
[https://a9a9-1304042779.cos.ap-guangzhou.myqcloud.com/host_and.jsonb](https://a9a9-1304042779.cos.ap-guangzhou.myqcloud.com/host_and.jsonb)[https://a9a9-1305277877.cos.ap-guangzhou.myqcloud.com/host_and.jsonb](https://a9a9-1305277877.cos.ap-guangzhou.myqcloud.com/host_and.jsonb)
新：
[https://av9av9-1318371851.cos.ap-guangzhou.myqcloud.com/host_and.jsonb](https://av9av9-1318371851.cos.ap-guangzhou.myqcloud.com/host_and.jsonb)[https://av9av9-1309454273.cos.ap-guangzhou.myqcloud.com/host_and.jsonb](https://av9av9-1309454273.cos.ap-guangzhou.myqcloud.com/host_and.jsonb)

10.調整內頁CPI：更換UI、新增API
11優化程式碼：
-重構歷史觀看頁
＊簡化Banner程式碼
＊優化刷新邏輯
＊影片,漫畫,寫真共用同一份程式碼
＊修復沒有資料UI被切到
＊優化收藏頁載入速度
-測試修復VR片商微量閃退問題
-調整播放器暫停文案移動到App層處理
-重構漫畫收藏,復用寫真收藏邏輯
-修復寫真收藏關閉時沒有刷新狀態
-修復安利頁熱門排行額外添加的Ranking計算錯誤
-簡化任務中心Tab UI程式碼,添加指示器動畫
-撥放頁撥放器改用Kotlin版本
-調整首頁Tab點擊判斷方法，因為新增了無碼標籤
-修復播放器暫停切畫質成功後，暫停元件沒有消失
-修復播放器未播放前切畫質無效
-優化播放器
＊RelateLayout換成ConstraintLayout,增加開發效率
＊Java換成Kotlin,增加開發效率
＊簡化程式碼,調整方法和變數位置,增加開發效率
＊移除不需要使用靜態的監聽,修復只要觸發試看影片監聽,接下來的影片也都會觸發
＊整合進度條上方懸浮文字邏輯
12.更換新手教學、VIP權益、愛威奶日誌、新增購買頁參數
13.更換APPlogo:
預覽logo:99jafro5.rest >9imen04.baby
Logo1:99-teai.baby >9imut05.baby
Logo3:9ikit01.baby >9onap01.fit"

---

Av9 and 強制更版 2024/11/13
version7.5.1(282)UnifiedJump

"1.新增VIP限定POP窗
-已成功去除馬賽克的視頻，會員點擊切換畫質
2.『首頁AI無碼和我的助力紀錄』去除進度進度上顯示文案
-當影片是去除狀態，顯示1~3個工作日去除完成
3.修改文案_AI無碼正在去除的吐司
-當影片正在去除階段，會員進入播放頁點擊置底懸浮按鈕
4.首頁AI無碼的榜單說明增加閃爍的效果
5.修復顯示三個畫質（標清、標清、AI無碼）
-如果一般影片有AI無碼畫質且非VIP會員，播放器的畫質選項只有標清跟AI無碼
6.調整影片內頁API：判斷該視頻馬賽克去除狀態API和現有的影片內頁API合併再一起
7.修復顯示影片標題：從首頁AI無碼_去除進度表點擊觀看影片，連同我看過的紀錄也會沒顯示標題
7.修復首頁頻道管理刪除閃退問題
8.首頁頂部menu點擊監聽方法統一
9.移除首頁廣播跳轉頁面方法,移除直接設置靜態變數方法，統一使用同一個跳轉方法
10.調整監聽首頁底部Tab點擊監聽方法，比較穩定
11.移除舊版短視頻頁面
12.清除舊版短視頻UI元件減少約2MB體積
13.水果派更換播放器跟影片內頁一樣，進度條，縮小全螢幕，畫質UI同步
14.播放頁m3u8測速新增錯誤捕捉紀錄
15.簡化漫畫內頁返回首頁或是VIP方法
16.優化首頁動漫頁跳轉到歷史觀看頁漫畫程式碼(之後也可以指定其他頁面）
17.Landing移除廣告片記數歸0
18.新增懸浮GA窗設定頁面（只在測試機出現）
19修改AI無碼GA
-影片內頁顯示已完成懸浮按鈕show
-進入首頁_AI無碼menu要顯示
-新增切換ai無碼POP窗
20新增GA：測速ts測速
-新增判斷錯誤網址要跑失敗而不是成功（原本錯誤網址都跑成功）"

---

Av9 and 強制更版 2024/12/19
version7.6.0(283) PlayerSetting
"1.新增會員功能：個人設置(存放本地)
-新增入口：會員頁的個人設置
-新增頁面：放置消息中心
-設置功能：畫質、播放快進、播放倒退
-身份權限：有VIP天數可使用

2.改版愛威奶日誌UI，以後台建置資料(不要每次更版都換圖片)

3.改版影片、女優、漫畫結果頁
-新增本週熱門、主題區塊
-拿掉輪播影片、置底懸浮banner
-調整廣告：
＊UI更換：改小影片尺寸
＊後台資料與猜你喜歡共用
備註：漫畫結果頁原本就沒有廣告、置底懸浮banner

4.搜尋頁、搜尋頁_熱門導航：新增H漫畫、寫真

5.改版首頁動漫頁
-新增漫畫類型區塊（由後台建置標籤與圖片）
-調整熱門榜單的數量(由5>8)

6.改版播放器假緩衝
-新增條件：設定第幾部開始顯示干擾邏輯
-調整：不讓用戶點擊消失UI

7.優化程式碼及修bug
-TS測速GA改傳TS HOST(原本抓url)
-統一Glide載入圖片方法
-拉掉app後，GA的開啟app有可能會多打：
個推初始化多判斷是不是主進程+當前APP打開，不然當APP拉掉還會重新掛起觸發Application onCreate，所以開啟APP GA會提前觸發
-安麗頁改用ViewBinding(優化程式碼)
-調整混和標籤結果頁，一次要打三隻API問題
-半重構標籤結果頁、女優結果頁
-移除舊版漫畫結果頁
-直播頁韓國，國產預覽改成靜音
-修復韓國預覽可能會在其他TAB頁面觸發撥放
-封面測速錯誤捕捉分成四種類型紀錄
-修復假緩衝出現時候點擊另外一部導致無法消失問題，和如果再出現瞬間退回主畫面可能導致無法倒數問題
-重構Landing輪播圖片
＊ 簡化Landing輪播程式碼
＊ 添加過渡動畫
＊ 下載優化使用內部儲存位置
＊ 下載檔案改用jpeg格式減少檔案大小
＊ 使用緩存而不是每次都刪除重抓
-重構全部H漫畫結果頁
＊簡化程式碼，日歷共用動畫頁的
＊日歷UI跑版，文字太長會變兩行
＊選擇日歷之後，點下返回還是會彈出日歷POP窗

8.更換新手教學、VIP權益
9.更換logo
-預覽logo：9imen04.baby>9data01.blog
-logo1：9imut05.baby>9code02.fit
-logo3：9onap01.fit>9vyte03.site"

---

Av9 and 強制更版 2025/1/15
version7.7.0 (284) JenkinsFix

"1.修復愛威奶日誌懸浮按鈕少量NPE問題
2.修復首頁短視頻少量閃退問題
3.修復VIP頁_SWAG女優UI，因名稱太長導致訂閱按鈕縮小問題
4.修復安利頁切換時熱榜排行UI錯誤問題
5.搜尋漫畫和寫真搜不到資料要出現原本就有的UI
6.女優結果頁頭像補上背景
7.優化程式碼：人氣作品影片,漫畫ApiModel，使用Gson SerializedNamer簡化
8.重構首頁漫畫頁、漫畫結果頁(包含漫畫封面圖不要看起來擠壓）
9.簡化影片,漫畫,寫真結果頁的多類型列表，復用原先的程式碼
10.移除無用的水果派API
11.移除無用資源檔案
12.移除無用Lib
＊ OpenInstall_v2.3.2.jar
＊sdk-release.aar
＊com.github.iwgang:countdownview
＊androidx.navigation:navigation-fragment
＊androidx.navigation:navigation-ui
＊ org.nanohttpd:nanohttpd
＊ com.android.support:appcompat-v7
＊ com.liulishuo.okdownload:okdownload
＊com.liulishuo.okdownload:sqlite
＊ com.liulishuo.okdownload:okhttp
＊ com.qiniu:android-netdiag
＊de.hdodenhof:circleimageview
13.體積優化36.9MB->32.8MB 減少4.1MB
14.套件更新：
因應Jenkins MKT打包找不到的Lib處理
＊compileSDK 31->33
＊minSDK 19->21

```
 直接移除
＊com.getui:sdk:2.13.3.0
＊com.cloudtech:videoads:3.3.0.
＊com.google.android.libraries.cast.companionlibrary:ccl:2.9.1.
＊com.yanzhikaijky:PictureProgressbar:1.2.0
＊com.flurry.android:analytics:11.4.0
＊com.scwang.smartrefresh:SmartRefreshHeader
＊com.scwang.smartrefresh:SmartRefreshHeader
＊com.github.tbruyelle:rxpermissions
＊com.youth.banner:banner:1.4.10
＊co.lujun:androidtagview

 升級or遷移
＊glide-transformations:4.2.0->4.3.0
＊co.lujun:androidtagview:1.1.7->com.github.lzjin:AndroidTagView:1.1.8
＊com.yarolegovich:discrete-scrollview:1.5.1->com.github.yarolegovich:DiscreteScrollView:v1.5.1
＊com.beloo.widget:ChipsLayoutManager->com.github.BelooS:ChipsLayoutManager:v0.3.7
＊gsyVideoPlayer-java:8.1.0->8.3.5
＊GSYVideoPlayer-exo2:8.1.0->8.3.5

 打動產出aar
 *com.github.LightSun:android-drag-FlowLayout
 *ExoPlayerFilter-v0.2.6

```

15.新增GA的渠道事件
16.新增使用次數超過上限（無碼助力值與影片觀看次數）
17.landing截圖UI調整

---

Av9 and 強制更版 2025/1/17
version7.7.1 (285) MktHeaderFix

1.修正MKT Header不是拿取最新的token時間問題
2.調整MeasurementGA的clientId改拿取DeviceId （原本拿FirebaseId)
這個MKT Header真的是沒想到會被挖坑，通常取得一個東西的最新值我是習慣用fun，但原先是用val的方式，導致這次GA想說先統合ChannelCode所以調整到val，想說用lazy結果導致token時間被固定，拿ApiConfig這東西也直接用val拿就很不習慣。

---

Av9 and 強制更版 2025/2/27

v7.8.0 (286) AiHDDownload 強制更版

1. 個人設置新增項目

-直式或橫屏播放頁慣用左右手：倍速、＋擼點、選擼點、小播放/小暫停、縮小與放大

-直式或橫屏播放頁2倍速圖示上下位置

-短視頻2倍速圖示上下位置

2. 登入頁新增登入登出請求失敗POP窗

3. 新增高清無碼下載：下載(短視頻/播放器)、下載頁、雲端紀錄、mp4存至相冊、離線下載頁

4. 底部POP窗新增手勢往下、點空白處收起POP窗

-（播放頁/短視頻）：畫質、線路、下載、收藏

- 播放頁全屏直式選擼點POP窗

- 播放頁我看過的POP窗

- 短視頻更多視頻的POP窗

- VIP頁國產片商編輯片商POP窗

5. 修復與優化程式碼

-GA整合收攏

-修復假的載入GA首儲or續費判斷,改用會員身份直接判斷

-優化訪客和自動登入GA邏輯

-修復下載影片匯出本地％數問題，沒有扣掉key.php導致計算錯誤

-FirebaseAnalytics和FirebaseCrashlytics的setUserId改到刷新token的時候設置

-重構VIP頁視頻

＊優化滾動操作

＊簡化UI層級

＊修復左右滑動回來之後API會以兩倍次數遞增呼叫

-重構ts測速Lib

＊優化區分M3U8和TS錯誤回調

＊優化回傳錯誤分類

＊簡化程式碼

-AV9播放器

＊ 移除嚕點提示

＊移除底部快進後退

＊ 簡化vip試看標籤高度調整

＊dp轉換方法統一,原先的計算有誤

＊修復如何熱點太接近0會導致進度條無法刷新

-整合下載常數設定

＊資料夾前綴

＊後端給的source參數

＊下載畫質

＊Api參數

6.新增VasDolly拿取ChannelCode，MKT用

7.更換新手教學

接上VasDolly之後MKT打包飛快

---

2025/3/3

v7.8.1 (287)AddBottomForward不強制更版(mkt打包)

1.一般播放器進度條下方新增小的快倒轉且分成左右手

2.修復bug

＊影片內頁AI無碼的懸浮按鈕點擊無反應：

由於新增手勢往下收起功能，無碼UI點擊被我看過的空白處消費掉，導致馬賽克UI點擊失效

＊修復ts測速時間計算,如果是法語or德語會發生轉換閃退問題

＊修復拖動關閉有可能出現負值導致閃退問題

就沒想到原先的程式碼會有問題，居然還會有語系的問題，頭痛

---

2025/3/14

v7.8.2 (288)ForwardRollback不強制更版(mkt打包)

1.新增GA（渠道事件）

2.調整播放器快進後退位置(放在中間)

3.調整播放器鎖頭位置（進度條下方）

4.點擊假的載入UI會跳出切換線路POP窗

5.影片內頁我看過的重構

---

2025-3-28

v7.8.3 (289)ForwardRollback不強制更版(mkt打包)

1.APP桌面名稱：AvNight改爱威奶

2.調整假的播放載入中UI邏輯：用播放片數來判斷是否顯示

3.播放假的載入UI新增購買頁參數

4.修復假緩衝在顯示次數完成時後續還會觸發自動關閉

5.更換更版窗UI

6.修復與整理程式碼

＊改用Google的FlexBox：影片內頁展開標籤、分類視頻類型標籤、搜尋歷史標籤、搜尋主頁下方標籤、搜尋標籤結果頁標籤，

＊MeasurementGA前面添加q_前綴

＊修復短視頻少量閃退問題

＊移除舊版vip視頻程式碼

＊整合GA

7.更換LOGO2域名

99jgrid4.baby>9file05.baby

---

2025-5-13

v7.9.0 (290) BreastCoin 強制更版

1.新增廣告位置：（根據身份顯示）

＊tab分的視頻類型_熱門視頻類型新增圖片廣告

＊tab分的視頻類型_新增標籤文字廣告

＊tab直播（第一區域與第二區域隨機一區顯示圖片廣告）

＊會員頁新增左下角懸浮廣告

＊影片內頁蓋板廣告(滿版)

＊短視頻內頁蓋板廣告(第一部才會出現)

2.新增奶幣機制

＊會員頁新增入口。

＊新增兌換商品橫幅廣告（會員頁、搜尋結果頁、直播頁、女優結果頁）

＊接webview（底部兌換商品頁、我的奶幣）

＊特定POP窗可以觸發直接兌換商品流程

（特定POP窗：影片內頁觀看片數為0、短視頻內頁觀看片數為0、下載數不足、無碼助力票）

＊改版會員等級說明頁(會員等級與VIP等級)：新增奶幣回饋百分比、限時贈送奶幣機制

＊新增奶幣指定方案文案：影片內頁跑馬燈與短視頻懸浮球（與原有的VIP/直播指定方案共用）

3.個人設置新增播放器快進與倒退位置調整（單手與雙手）

4.下載頁提示刪除數據會清除影片紀錄文案

＊新增位置：下載離線頁、關於下載離線頁、離線下載播放頁、我的下載頁、關於我的下載、下載播放器、選擇下載POP窗

5.更換任務中心簽到UI

6.新增廣告開啟設定（開啟webview或外開瀏覽器）

7.假的播放器載入UI

＊修正點擊影片內頁假的載入UI，打開切換線路POP窗

＊短視頻內頁新增點擊假的載入UI，打開切換線路POP窗

8.移除舊版直播頁

9.重購分類視頻類型頁

10.播放頁蓋板廣告重構

11.稍微簡化購買頁程式碼

12.跳轉購買頁統一使用LinkFactory

13.購買頁監聽返回鍵，由Android這邊判斷Web返回還是關閉購買頁

14.優化首頁輪播,影片內頁,嚕點助手,VIP推薦,VIP色圈,Banner程式碼

15.購買頁開啟方法統一使用原先的PageType

16.測試機才會出現POP窗

＊進入購買頁顯示購買頁參數、渠道參數

＊點擊搜尋頁的熱搜視頻圖片顯示當前身份資訊

16.更換新手教學

17.更換會員頁新手教學

18更換app預覽logo

9data01.blog>9node06.blog

---

2025-5-13

v7.9.1 (291) BreastCoinFix 強制更版

1.修復簽到頁面UI刷新閃退問題

依樣是被以前的程式碼搞到，在ViewHolder做什麼LiveData觀察真的是傻B

---

2025-5-28

v7.9.2 (292) LetMeIn 不強制更版(mkt打包)

1.購買頁載入POP窗調整只有在第一次打開時會顯示

2.Gradle移除無用的BuildConfig，AD_CHANNEL,enableCrashlytics,IS_LOG,IS_API_TESTING

3.Gradle移除無用引入repositories,allprojects

4.移除無用資源檔案

5.使用Flavor正式區隔出DEV和PROD的差異，

- BuildConfig.IS_DEV改用BuildConfig.DEBUG判斷
- AppName改用strings.xml拿取，原先是先寫死
- Flavor Dev applicationId添加後綴 .dev 可以同時安裝兩個AV9
- Firebase google-service.json下載更換，添加com.avnight.dev
- 添加DEV_HOST來設定測試機網址，添加IS_DEV判斷是否為dev flavor
- okhttp log設定成是DEBUG or DEV才會打印出來
- 懸浮GA窗改移動到dev flavor去實現，prod直接回傳null

6.Logger改用kt改寫，加上除了DEBUG or IS_DEV打印

7.移除無用檔案libImmEndpointWarpJ.so,tapjoyconnectlibrary.jar

8.移除無用檔案mejoysdk.aar，複製混淆檔案到當前專案，Jenkins打包會有混淆問題

9.移除Oneway,IMLib,sdk-release

10.移除kotlinx.android.synthetic改用ViewBinding

移除kotlin-android-extensions plugin

11.Firebase Api錯誤捕捉Host Key改用傳入的url本身的host

12.Landing Cpi測速新增每一支錯誤捕捉和全部錯誤捕捉

13.新增https://a9-cos.dango33.com/host_and.jsonb

終於用到Flavor了，現在把dev和prod區開始用快樂多了。

---

2025-5-29

v7.9.3 (293) AddJsonb 不強制更版(mkt打包)

1.新增一組jsonb域名

---