"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { TrendingUp, Shield, Code2, Smartphone, TestTube, Package } from "lucide-react"

const achievements = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "技術重構與架構優化",
    items: [
      "Legacy Code 重構為 MVVM 架構，提升可讀性與測試性",
      "專案從 Java 轉為純 Kotlin，導入 OOP 與 Design Pattern",
      "播放器核心元件重構，支援手勢化操作與多畫質切換",
      "導入單元測試與 UI 測試，維護程式碼品質",
      "多套共用模組抽象化，推動元件化與模組化開發",
      "封裝與抽象第三方套件，便於替換與擴充",
      "從 MVP 架構轉型成 MVVM 架構，提升維護性",
    ],
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "效能與產品優化",
    items: [
      "Token API 請求量減少 80%",
      "影片測速 API 請求量減少至 20%",
      "APK 體積優化 36.9MB → 28.8MB，減少約 40%",
      "首頁效能優化，用戶存留率提升約 1%",
      "Crash 率優化從 94% → 99.5%",
      "減少重複程式碼，提升內聚力、降低耦合度",
      "優化首頁 UI 卡頓，提升渲染速度",
      "減少 Layout 層級，優化渲染效能",
    ],
  },
  {
    icon: <TestTube className="w-6 h-6" />,
    title: "流程自動化與開發效率",
    items: [
      "導入 Multi Flavor，區隔 DEV/PROD 環境",
      "VasDolly 自動渠道打包，打包時間減少 99%",
      "Jenkins 打包環境升級，解決遺留相依問題",
      "精簡 Application 初始化流程，移除未使用程式碼與資源",
      "自動化測試與 CI/CD 流程導入，提升交付效率",
      "建立 dev/prod 雙版本安裝與 API Host 設定",
      "導入 GA/Flurry 分析，優化數據追蹤",
    ],
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "產品功能與跨平台嘗試",
    items: [
      "客製化 VR 播放器開發，支援多平台播放需求",
      "GsyPlayer 擴展成公司共用播放器，推動元件化",
      "嘗試轉型 Flutter，探索跨平台技術",
      "導入 Android 防破解技術 (NDK)",
      "與設計合作產出高品質 UI/UX 產品",
      "多畫質播放切換、浮動視窗、個人化設定等功能開發",
      "API/網路圖片快取優化，減少重複請求",
    ],
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "團隊協作與專案管理",
    items: [
      "與設計、後端密切合作，推動高品質產品交付",
      "撰寫技術文件與分享，提升團隊知識共享",
      "導入 Clean Code 與 Design Pattern，提升團隊維護效率",
      "協助新人成長與技術指導，促進團隊成長",
    ],
  },
]

export function AchievementsSection() {
  return (
    <AnimatedSection animation="fade-up" delay={600}>
      <Card>
        <CardHeader>
          <CardTitle>主要成就</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="space-y-3 p-4 rounded-lg border bg-card/50">
                <div className="flex items-center gap-3 text-primary">
                  {achievement.icon}
                  <h3 className="font-semibold">{achievement.title}</h3>
                </div>
                <ul className="space-y-2">
                  {achievement.items.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>
  )
}
