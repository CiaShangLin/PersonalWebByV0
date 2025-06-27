"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { TrendingUp, Shield, Code2, Smartphone, TestTube, Package } from "lucide-react"

const achievements = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "效能優化專家",
    items: [
      "不受當機率優化從 94% → 99.5%",
      "用戶存留率提升約 1%",
      "Token API 請求量減少 80%",
      "影片測速 API 減少至 20%",
    ],
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: "程式碼優化",
    items: [
      "APK 體積優化 36.9MB → 28.8MB",
      "減少 APK 包大小約 40%",
      "刪除大量未使用程式碼與資源",
      "精簡 Application 初始化流程",
    ],
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "架構重構",
    items: [
      "Legacy Code 重構為 MVVM 架構",
      "從 MVP 架構轉型成 MVVM 架構",
      "將專案從 Java 轉成純 Kotlin",
      "播放器從 Java 遷移至 Kotlin",
    ],
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "安全與測試",
    items: [
      "添加 Android 防破解技術 (NDK)",
      "編寫單元測試和 UI 測試",
      "導入單元測試維護程式碼品質",
      "Firebase Crashlytics 整合",
    ],
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "播放器專家",
    items: [
      "繼承 GsyPlayer 擴展成公司播放器",
      "客製化 VR 播放器開發",
      "支援手勢化操作與個人化設定",
      "多畫質播放切換功能",
    ],
  },
  {
    icon: <TestTube className="w-6 h-6" />,
    title: "開發流程優化",
    items: [
      "導入 Multi Flavor 區隔 DEV/PROD",
      "VasDolly 自動渠道打包，減少 99% 時間",
      "Jenkins 打包環境升級",
      "建立 dev/prod 環境差異",
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
