"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AnimatedSection } from "@/components/animated-section"
import { LoadingSkeleton } from "@/components/loading-skeleton"
import { Search, Calendar, Code, Monitor, Wrench, GitCommit } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface DevLog {
  id: number
  date: string
  version: string
  title: string
  changes: string[]
  type: "feature" | "fix" | "update" | "design"
  timeSpent: string
  details?: string
}

const devLogs: DevLog[] = [
  {
    id: 2,
    date: "2025-06-28",
    version: "v1.0.1",
    title: "介面優化與功能擴充",
    changes: [
      "新增社群連結按鈕並支援跳轉",
      "聯絡資訊與社群資訊合併",
      "優化主要成就區塊內容與分類",
      "支援自訂網站 icon",
      "其他介面優化與細節調整",
    ],
    type: "update",
    timeSpent: "3小時",
    details: `本次針對網站的易用性與資訊整合進行優化：
- 社群連結按鈕可直接跳轉至各平台
- 聯絡資訊與社群資訊合併，資訊更集中
- 主要成就區塊內容更豐富，分類更明確
- 網站 icon 支援自訂，提升品牌辨識度
- 介面細節微調，整體體驗更佳

未來會持續根據使用者回饋與自身需求進行優化！`,
  },
  {
    id: 1,
    date: "2025-06-27",
    version: "v1.0.0",
    title: "使用v0開發UI畫面",
    changes: [
      "建立個人履歷主頁",
      "實作響應式導航選單",
      "加入主題切換功能（亮色/暗色/系統預設）",
      "建立Medium文章展示頁面",
      "建立GitHub專案展示頁面",
      "建立開發日誌頁面",
      "加入動畫效果和載入狀態",
      "優化SEO設定和PWA支援",
    ],
    type: "feature",
    timeSpent: "8小時",
    details: `今天使用v0 AI工具開發個人履歷網站，效率非常高。

主要完成的功能：
- 完整的網站架構搭建
- 四個主要頁面的UI設計
- 響應式設計確保手機和桌面都有良好體驗
- 現代化的設計風格使用Tailwind CSS和shadcn/ui

技術棧：
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui組件庫
- Lucide React圖標

下一步計劃：
- 優化載入效能
- 加入更多互動效果
- 完善內容展示`,
  },
]

const typeConfig = {
  feature: {
    label: "新功能",
    color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    icon: <Code className="w-3 h-3" />,
  },
  fix: {
    label: "修復",
    color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    icon: <Wrench className="w-3 h-3" />,
  },
  update: {
    label: "更新",
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    icon: <GitCommit className="w-3 h-3" />,
  },
  design: {
    label: "設計",
    color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    icon: <Monitor className="w-3 h-3" />,
  },
}

const filterTypes = ["全部", "新功能", "修復", "更新", "設計"]

export default function BlogPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("全部")
  const [filteredLogs, setFilteredLogs] = useState(devLogs)
  const [expandedLog, setExpandedLog] = useState<number | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    let filtered = devLogs

    if (selectedType !== "全部") {
      const typeMap: { [key: string]: string } = {
        新功能: "feature",
        修復: "fix",
        更新: "update",
        設計: "design",
      }
      filtered = filtered.filter((log) => log.type === typeMap[selectedType])
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (log) =>
          log.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          log.changes.some((change) => change.toLowerCase().includes(searchTerm.toLowerCase())) ||
          log.details?.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    setFilteredLogs(filtered)
  }, [searchTerm, selectedType])

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 space-y-8">
        <LoadingSkeleton />
        <div className="space-y-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <LoadingSkeleton key={i} />
          ))}
        </div>
      </div>
    )
  }

  const totalChanges = devLogs.reduce((sum, log) => sum + log.changes.length, 0)

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <AnimatedSection animation="fade-up">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            網站開發日誌
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            記錄個人履歷網站的開發過程、功能更新和技術改進
          </p>
        </div>
      </AnimatedSection>

      {/* Stats */}
      <AnimatedSection animation="fade-up" delay={200}>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="flex items-center justify-center p-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <GitCommit className="w-8 h-8 text-blue-500" />
                </div>
                <div className="text-2xl font-bold">{devLogs.length}</div>
                <div className="text-sm text-muted-foreground">次更新</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center justify-center p-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Code className="w-8 h-8 text-green-500" />
                </div>
                <div className="text-2xl font-bold">{totalChanges}</div>
                <div className="text-sm text-muted-foreground">項改動</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center justify-center p-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Monitor className="w-8 h-8 text-orange-500" />
                </div>
                <div className="text-2xl font-bold">{devLogs[0]?.version || "v1.0.0"}</div>
                <div className="text-sm text-muted-foreground">目前版本</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>

      {/* Search and Filter */}
      {/*
      <AnimatedSection animation="fade-up" delay={400}>
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="搜尋更新內容..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="選擇類型" />
                </SelectTrigger>
                <SelectContent>
                  {filterTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
      */}

      {/* Development Logs */}
      <AnimatedSection animation="fade-up" delay={600}>
        <div className="space-y-6">
          {filteredLogs.map((log, index) => (
            <Card key={log.id} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={`${typeConfig[log.type].color} text-xs flex items-center gap-1`}>
                        {typeConfig[log.type].icon}
                        {typeConfig[log.type].label}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {log.version}
                      </Badge>
                      {index === 0 && (
                        <Badge variant="destructive" className="text-xs animate-pulse">
                          最新
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{log.title}</CardTitle>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(log.date).toLocaleDateString("zh-TW")}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Changes List */}
                <div>
                  <h4 className="font-medium mb-3 text-sm">本次更新內容：</h4>
                  <div className="space-y-2">
                    {log.changes.map((change, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{change}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expanded Details */}
                {expandedLog === log.id && log.details && (
                  <div className="mt-6 p-4 bg-muted/30 rounded-lg border-l-4 border-primary">
                    <h4 className="font-medium mb-3 text-sm">詳細說明：</h4>
                    <div className="prose prose-sm max-w-none dark:prose-invert">
                      {log.details.split("\n").map((line, i) => (
                        <p key={i} className="text-sm text-muted-foreground leading-relaxed mb-2">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-xs text-muted-foreground">{log.changes.length} 項更新</div>
                  {log.details && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setExpandedLog(expandedLog === log.id ? null : log.id)}
                      className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      {expandedLog === log.id ? "收起詳情" : "查看詳情"}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </AnimatedSection>

      {/* No Results */}
      {filteredLogs.length === 0 && (
        <AnimatedSection animation="fade-up">
          <Card>
            <CardContent className="text-center py-12">
              <GitCommit className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">找不到相關記錄</h3>
              <p className="text-muted-foreground">請嘗試調整搜尋關鍵字或選擇不同的類型</p>
            </CardContent>
          </Card>
        </AnimatedSection>
      )}

      {/* Timeline Footer */}
      <AnimatedSection animation="fade-up" delay={800}>
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-0">
          <CardContent className="text-center py-8">
            <h3 className="text-xl font-semibold mb-2">持續改進中</h3>
            <p className="text-muted-foreground mb-4">這個網站會持續更新和優化，每一次改動都會在這裡記錄</p>
            <div className="text-sm text-muted-foreground">開始開發：2025年6月27日</div>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  )
}
