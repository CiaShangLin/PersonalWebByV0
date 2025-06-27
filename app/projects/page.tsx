"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AnimatedSection } from "@/components/animated-section"
import { LoadingSkeleton } from "@/components/loading-skeleton"
import {
  Search,
  Calendar,
  Github,
  GitFork,
  Code,
  Smartphone,
  Database,
  Globe,
  Cpu,
  Shield,
  Palette,
  BookOpen,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { JSX } from "react/jsx-runtime" // Import JSX to fix the undeclared variable error

interface Project {
  id: number
  name: string
  html_url: string
  description: string | null
  visibility: string
  updated_at: string
  category: string
  tech_stack: string[]
  highlights: string[]
  status: "active" | "completed" | "archived"
}

const githubProjects: Project[] = [
  {
    id: 977588502,
    name: "advancedmultimodulararchitecture",
    html_url: "https://github.com/CiaShangLin/advancedmultimodulararchitecture",
    description: "Android多模組化架構實作，展示現代Android開發的最佳實踐",
    visibility: "public",
    updated_at: "2025-06-12T13:47:04Z",
    category: "Android架構",
    tech_stack: ["Kotlin", "Android", "Multi-Module", "Clean Architecture"],
    highlights: ["模組化架構", "依賴注入", "Clean Architecture"],
    status: "active",
  },
  {
    id: 953072602,
    name: "freedium-chrome-extension",
    html_url: "https://github.com/CiaShangLin/freedium-chrome-extension",
    description: "Chrome擴充功能，提供更好的Medium閱讀體驗",
    visibility: "public",
    updated_at: "2025-03-22T14:08:27Z",
    category: "Web開發",
    tech_stack: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    highlights: ["瀏覽器擴充", "用戶體驗優化", "Medium整合"],
    status: "active",
  },
  {
    id: 941036206,
    name: "MockIGDrag",
    html_url: "https://github.com/CiaShangLin/MockIGDrag",
    description: "仿Instagram拖拽互動效果，實現流暢的手勢操作體驗",
    visibility: "public",
    updated_at: "2025-03-01T10:39:46Z",
    category: "UI/UX",
    tech_stack: ["Android", "Kotlin", "Custom View", "Gesture"],
    highlights: ["手勢識別", "流暢動畫", "Instagram風格"],
    status: "completed",
  },
  {
    id: 833714850,
    name: "PersonalWebSite",
    html_url: "https://github.com/CiaShangLin/PersonalWebSite",
    description: "個人履歷網站，展示專業技能和專案作品",
    visibility: "public",
    updated_at: "2024-07-25T15:52:22Z",
    category: "Web開發",
    tech_stack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    highlights: ["響應式設計", "SEO優化", "現代化UI"],
    status: "completed",
  },
  {
    id: 815585915,
    name: "YoutubeUpload",
    html_url: "https://github.com/CiaShangLin/YoutubeUpload",
    description: "Python自動化工具，實現YouTube影片批量上傳功能",
    visibility: "public",
    updated_at: "2024-07-09T13:36:05Z",
    category: "自動化工具",
    tech_stack: ["Python", "YouTube API", "Automation"],
    highlights: ["API整合", "批量處理", "自動化流程"],
    status: "completed",
  },
  {
    id: 667048128,
    name: "JetpackMovieCompose",
    html_url: "https://github.com/CiaShangLin/JetpackMovieCompose",
    description: "使用Jetpack Compose重構的電影App，展現現代Android UI開發",
    visibility: "public",
    updated_at: "2024-05-14T08:58:37Z",
    category: "Android應用",
    tech_stack: ["Kotlin", "Jetpack Compose", "MVVM", "Retrofit"],
    highlights: ["Compose UI", "現代架構", "電影資料庫"],
    status: "completed",
  },
  {
    id: 457253415,
    name: "JetpackMovie",
    html_url: "https://github.com/CiaShangLin/JetpackMovie",
    description: "Android電影資訊App，使用Jetpack元件和MVVM架構",
    visibility: "public",
    updated_at: "2024-05-14T09:06:08Z",
    category: "Android應用",
    tech_stack: ["Kotlin", "Android Jetpack", "MVVM", "Room", "Retrofit"],
    highlights: ["Jetpack元件", "MVVM架構", "本地資料庫"],
    status: "completed",
  },
  {
    id: 709702993,
    name: "ShangCustomViewPractice",
    html_url: "https://github.com/CiaShangLin/ShangCustomViewPractice",
    description: "Android自定義View練習集合，包含各種客製化UI元件",
    visibility: "public",
    updated_at: "2023-10-25T08:22:56Z",
    category: "自定義View",
    tech_stack: ["Android", "Kotlin", "Custom View", "Canvas"],
    highlights: ["自定義繪製", "動畫效果", "UI元件庫"],
    status: "completed",
  },
  {
    id: 690878740,
    name: "EventTracker",
    html_url: "https://github.com/CiaShangLin/EventTracker",
    description: "Android埋點追蹤整合器，統一管理多種分析工具",
    visibility: "public",
    updated_at: "2023-09-13T04:22:28Z",
    category: "數據分析",
    tech_stack: ["Android", "Kotlin", "Firebase Analytics", "Flurry"],
    highlights: ["多平台整合", "事件追蹤", "數據分析"],
    status: "completed",
  },
  {
    id: 417010557,
    name: "App-Protect",
    html_url: "https://github.com/CiaShangLin/App-Protect",
    description: "Android應用防護方案，包含反調試和代碼混淆技術",
    visibility: "public",
    updated_at: "2023-07-21T20:04:53Z",
    category: "安全防護",
    tech_stack: ["Android", "NDK", "JNI", "Obfuscation"],
    highlights: ["安全防護", "代碼混淆", "反調試"],
    status: "completed",
  },
  {
    id: 228320338,
    name: "JniDemo",
    html_url: "https://github.com/CiaShangLin/JniDemo",
    description: "Android JNI開發示例，展示Java與C++的互操作",
    visibility: "public",
    updated_at: "2023-07-21T20:04:08Z",
    category: "原生開發",
    tech_stack: ["Android", "JNI", "C++", "NDK"],
    highlights: ["JNI調用", "原生代碼", "性能優化"],
    status: "completed",
  },
  {
    id: 498230919,
    name: "ImageAppWidget",
    html_url: "https://github.com/CiaShangLin/ImageAppWidget",
    description: "Android桌面小工具，支援圖片顯示和互動功能",
    visibility: "public",
    updated_at: "2022-05-31T07:28:00Z",
    category: "Android應用",
    tech_stack: ["Android", "App Widget", "Kotlin"],
    highlights: ["桌面小工具", "圖片處理", "系統整合"],
    status: "completed",
  },
  {
    id: 422536115,
    name: "FlutterMaskMap",
    html_url: "https://github.com/CiaShangLin/FlutterMaskMap",
    description: "Flutter口罩地圖應用，疫情期間協助民眾找尋口罩販售點",
    visibility: "public",
    updated_at: "2021-12-03T03:34:06Z",
    category: "Flutter應用",
    tech_stack: ["Flutter", "Dart", "Google Maps", "API"],
    highlights: ["地圖整合", "即時資料", "社會公益"],
    status: "archived",
  },
  {
    id: 433651145,
    name: "AndroidIconText",
    html_url: "https://github.com/CiaShangLin/AndroidIconText",
    description: "Android圖標文字元件，支援靈活的圖標與文字組合顯示",
    visibility: "public",
    updated_at: "2021-12-02T07:52:52Z",
    category: "自定義View",
    tech_stack: ["Android", "Kotlin", "Custom View"],
    highlights: ["自定義元件", "靈活配置", "UI庫"],
    status: "completed",
  },
  {
    id: 180580850,
    name: "LeetCode",
    html_url: "https://github.com/CiaShangLin/LeetCode",
    description: "LeetCode演算法題目解答集合，持續練習程式設計能力",
    visibility: "public",
    updated_at: "2021-12-29T10:35:21Z",
    category: "演算法",
    tech_stack: ["Java", "Kotlin", "Algorithm", "Data Structure"],
    highlights: ["演算法實作", "資料結構", "程式競賽"],
    status: "active",
  },
  {
    id: 307263673,
    name: "Design-Pattern",
    html_url: "https://github.com/CiaShangLin/Design-Pattern",
    description: "設計模式實作範例，展示各種常用設計模式的應用",
    visibility: "public",
    updated_at: "2021-03-02T08:03:08Z",
    category: "設計模式",
    tech_stack: ["Java", "Kotlin", "Design Pattern", "OOP"],
    highlights: ["設計模式", "程式架構", "最佳實踐"],
    status: "completed",
  },
  {
    id: 258746572,
    name: "ScreenShot-Detector",
    html_url: "https://github.com/CiaShangLin/ScreenShot-Detector",
    description: "Android截圖檢測工具，監控應用截圖行為",
    visibility: "public",
    updated_at: "2020-04-25T13:29:14Z",
    category: "系統工具",
    tech_stack: ["Android", "Kotlin", "File Observer"],
    highlights: ["截圖檢測", "系統監控", "隱私保護"],
    status: "completed",
  },
  {
    id: 257594058,
    name: "Android-Compression-Apk",
    html_url: "https://github.com/CiaShangLin/Android-Compression-Apk",
    description: "Android APK壓縮優化工具，減少應用程式體積",
    visibility: "public",
    updated_at: "2020-04-21T13:45:58Z",
    category: "效能優化",
    tech_stack: ["Android", "APK Optimization", "Compression"],
    highlights: ["APK瘦身", "資源優化", "效能提升"],
    status: "completed",
  },
  {
    id: 257529169,
    name: "Dynamic-Launcher-Icon",
    html_url: "https://github.com/CiaShangLin/Dynamic-Launcher-Icon",
    description: "Android動態桌面圖標，支援程式化更換應用圖標",
    visibility: "public",
    updated_at: "2020-04-21T08:30:04Z",
    category: "Android應用",
    tech_stack: ["Android", "Kotlin", "Dynamic Icon"],
    highlights: ["動態圖標", "用戶體驗", "系統整合"],
    status: "completed",
  },
  {
    id: 156990890,
    name: "CheapGas",
    html_url: "https://github.com/CiaShangLin/CheapGas",
    description: "便宜加油站查詢App，協助用戶找到最優惠的加油站",
    visibility: "public",
    updated_at: "2020-04-18T17:29:38Z",
    category: "生活應用",
    tech_stack: ["Android", "Google Maps", "API"],
    highlights: ["地圖整合", "價格比較", "生活實用"],
    status: "archived",
  },
  {
    id: 165062013,
    name: "FUC_food",
    html_url: "https://github.com/CiaShangLin/FUC_food",
    description: "校園美食推薦App，學生時期開發的餐廳評價系統",
    visibility: "public",
    updated_at: "2020-04-18T17:29:38Z",
    category: "生活應用",
    tech_stack: ["Android", "Database", "Rating System"],
    highlights: ["評價系統", "校園應用", "社群功能"],
    status: "archived",
  },
  {
    id: 144439424,
    name: "MediaPlayerByKotlin",
    html_url: "https://github.com/CiaShangLin/MediaPlayerByKotlin",
    description: "Kotlin實作的媒體播放器，支援音訊和視訊播放功能",
    visibility: "public",
    updated_at: "2020-04-18T17:29:38Z",
    category: "多媒體",
    tech_stack: ["Kotlin", "Android", "MediaPlayer", "ExoPlayer"],
    highlights: ["媒體播放", "音視頻處理", "播放控制"],
    status: "completed",
  },
]

const categories = [
  "全部",
  "Android架構",
  "Android應用",
  "Web開發",
  "UI/UX",
  "自定義View",
  "數據分析",
  "安全防護",
  "原生開發",
  "Flutter應用",
  "演算法",
  "設計模式",
  "系統工具",
  "效能優化",
  "生活應用",
  "多媒體",
  "自動化工具",
]

const getCategoryColor = (category: string) => {
  const colors: { [key: string]: string } = {
    Android架構: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    Android應用: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    Web開發: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    "UI/UX": "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
    自定義View: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300",
    數據分析: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
    安全防護: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    原生開發: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    Flutter應用: "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-300",
    演算法: "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-300",
    設計模式: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
    系統工具: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
    效能優化: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",
    生活應用: "bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-300",
    多媒體: "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-300",
    自動化工具: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300",
  }
  return colors[category] || "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
}

const getCategoryIcon = (category: string) => {
  const icons: { [key: string]: JSX.Element } = {
    Android架構: <Code className="w-4 h-4" />,
    Android應用: <Smartphone className="w-4 h-4" />,
    Web開發: <Globe className="w-4 h-4" />,
    "UI/UX": <Palette className="w-4 h-4" />,
    自定義View: <Palette className="w-4 h-4" />,
    數據分析: <Database className="w-4 h-4" />,
    安全防護: <Shield className="w-4 h-4" />,
    原生開發: <Cpu className="w-4 h-4" />,
    Flutter應用: <Smartphone className="w-4 h-4" />,
    演算法: <BookOpen className="w-4 h-4" />,
    設計模式: <Code className="w-4 h-4" />,
    系統工具: <Cpu className="w-4 h-4" />,
    效能優化: <Database className="w-4 h-4" />,
    生活應用: <Smartphone className="w-4 h-4" />,
    多媒體: <Smartphone className="w-4 h-4" />,
    自動化工具: <Cpu className="w-4 h-4" />,
  }
  return icons[category] || <Code className="w-4 h-4" />
}

export default function ProjectsPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("全部")
  const [filteredProjects, setFilteredProjects] = useState(githubProjects)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    let filtered = githubProjects

    if (selectedCategory !== "全部") {
      filtered = filtered.filter((project) => project.category === selectedCategory)
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (project) =>
          project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description?.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    setFilteredProjects(filtered)
  }, [searchTerm, selectedCategory])

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 space-y-8">
        <LoadingSkeleton />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <LoadingSkeleton key={i} />
          ))}
        </div>
      </div>
    )
  }

  const stats = {
    total: githubProjects.length,
    categories: new Set(githubProjects.map((p) => p.category)).size,
    latest: githubProjects[0]?.updated_at.split("T")[0] || "2025-06-12",
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <AnimatedSection animation="fade-up">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            GitHub 專案作品
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            開源專案集合，展示Android開發、Web開發和各種技術實驗的成果
          </p>
        </div>
      </AnimatedSection>

      {/* Stats */}
      <AnimatedSection animation="fade-up" delay={200}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="flex items-center justify-center p-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Github className="w-8 h-8 text-blue-500" />
                </div>
                <div className="text-2xl font-bold">{stats.total}</div>
                <div className="text-sm text-muted-foreground">個專案</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center justify-center p-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <GitFork className="w-8 h-8 text-purple-500" />
                </div>
                <div className="text-2xl font-bold">{stats.categories}</div>
                <div className="text-sm text-muted-foreground">個分類</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center justify-center p-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Calendar className="w-8 h-8 text-orange-500" />
                </div>
                <div className="text-2xl font-bold">{stats.latest}</div>
                <div className="text-sm text-muted-foreground">最新更新</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>

      {/* Search and Filter */}
      <AnimatedSection animation="fade-up" delay={400}>
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="搜尋專案名稱或描述..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="選擇分類" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>

      {/* Projects Grid */}
      <AnimatedSection animation="fade-up" delay={600}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <Badge className={`${getCategoryColor(project.category)} text-xs flex items-center gap-1`}>
                    {getCategoryIcon(project.category)}
                    {project.category}
                  </Badge>
                  {/* 移除這行狀態標籤 */}
                  {/* <Badge className={`${getStatusColor(project.status)} text-xs`}>{getStatusText(project.status)}</Badge> */}
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">{project.name}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1">
                  {project.tech_stack.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech_stack.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.tech_stack.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Highlights */}
                <div className="space-y-1">
                  {project.highlights.slice(0, 2).map((highlight, i) => (
                    <div key={i} className="flex items-center text-xs text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                      {highlight}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(project.updated_at).toLocaleDateString("zh-TW")}
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-8 px-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    onClick={() => window.open(project.html_url, "_blank")}
                  >
                    <Github className="w-3 h-3 mr-1" />
                    查看
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </AnimatedSection>

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <AnimatedSection animation="fade-up">
          <Card>
            <CardContent className="text-center py-12">
              <Github className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">找不到相關專案</h3>
              <p className="text-muted-foreground">請嘗試調整搜尋關鍵字或選擇不同的分類</p>
            </CardContent>
          </Card>
        </AnimatedSection>
      )}

      {/* Call to Action */}
      <AnimatedSection animation="fade-up" delay={800}>
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-0">
          <CardContent className="text-center py-8">
            <h3 className="text-xl font-semibold mb-2">持續創新，持續學習</h3>
            <p className="text-muted-foreground mb-4">在GitHub上分享開源專案，與開發者社群一起成長</p>
            <Button size="lg" onClick={() => window.open("https://github.com/CiaShangLin", "_blank")} className="group">
              <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              訪問我的 GitHub
            </Button>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  )
}
// 移除這些函數
// const getStatusColor = (status: string) => { ... }
// const getStatusText = (status: string) => { ... }
const getStatusColor = (status: string) => {
  const colors: { [key: string]: string } = {
    active: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    completed: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    archived: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
  }
  return colors[status] || "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
}

const getStatusText = (status: string) => {
  const texts: { [key: string]: string } = {
    active: "進行中",
    completed: "已完成",
    archived: "已封存",
  }
  return texts[status] || "未知"
}
