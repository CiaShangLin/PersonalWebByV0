"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AnimatedSection } from "@/components/animated-section"
import { LoadingSkeleton } from "@/components/loading-skeleton"
import { ExternalLink, Search, Calendar, BookOpen, TrendingUp, Filter } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Article {
  name: string
  html_url: string
  category?: string
  publishDate?: string
}

const mediumArticles: Article[] = [
  {
    name: "Side Project 測試五種AI生產UI",
    html_url:
      "https://medium.com/@west7418/side-project-%E6%B8%AC%E8%A9%A6%E4%BA%94%E7%A8%AEai%E7%94%9F%E7%94%A2ui-0038e5ff9cb0",
    category: "AI/ML",
    publishDate: "2024-12",
  },
  {
    name: "Android 多模組化開發課程心得",
    html_url:
      "https://medium.com/@west7418/android-%E5%A4%9A%E6%A8%A1%E7%B5%84%E5%8C%96%E9%96%8B%E7%99%BC%E8%AA%B2%E7%A8%8B%E5%BF%83%E5%BE%97-8c6a6ff0e38a",
    category: "Android架構",
    publishDate: "2024-11",
  },
  {
    name: "紀錄Gradle從6.5升級到7.5",
    html_url:
      "https://medium.com/@west7418/%E7%B4%80%E9%8C%84gradle%E5%BE%9E6-5%E5%8D%87%E7%B4%9A%E5%88%B07-5-18f8bf7e4732",
    category: "開發工具",
    publishDate: "2024-10",
  },
  {
    name: "從 Android 到 HTML + CSS：工程師自學 Web 的撞牆與轉念",
    html_url:
      "https://medium.com/@west7418/%E5%BE%9E-android-%E5%88%B0-html-css-%E5%B7%A5%E7%A8%8B%E5%B8%AB%E8%87%AA%E5%AD%B8-web-%E7%9A%84%E6%92%9E%E7%89%86%E8%88%87%E8%BD%89%E5%BF%B5-70ad3afdeff8",
    category: "學習心得",
    publishDate: "2024-09",
  },
  {
    name: "打造 Android 仿 Instagram 留言嵌套滾動：從需求到實作的開發紀錄 by Grok 3",
    html_url:
      "https://medium.com/@west7418/%E6%89%93%E9%80%A0-android-%E4%BB%BF-instagram-%E7%95%99%E8%A8%80%E5%B5%8C%E5%A5%97%E6%BB%BE%E5%8B%95-%E5%BE%9E%E9%9C%80%E6%B1%82%E5%88%B0%E5%AF%A6%E4%BD%9C%E7%9A%84%E9%96%8B%E7%99%BC%E7%B4%80%E9%8C%84-by-grok-3-6177c5f6bd06",
    category: "UI/UX",
    publishDate: "2024-08",
  },
  {
    name: "Android VasDolly 多渠道打包",
    html_url:
      "https://medium.com/@west7418/android-vasdolly-%E5%A4%9A%E6%B8%A0%E9%81%93%E6%89%93%E5%8C%85-812416b048db",
    category: "開發工具",
    publishDate: "2024-07",
  },
  {
    name: "2024回顧總結",
    html_url: "https://medium.com/@west7418/2024%E5%9B%9E%E9%A1%A7%E7%B8%BD%E7%B5%90-63516703bdc5",
    category: "學習心得",
    publishDate: "2024-12",
  },
  {
    name: "Android Compose 小專案遷移練習紀錄",
    html_url:
      "https://medium.com/@west7418/android-compose-%E5%B0%8F%E5%B0%88%E6%A1%88%E9%81%B7%E7%A7%BB%E7%B7%B4%E7%BF%92%E7%B4%80%E9%8C%84-ce92bdf1aaf8",
    category: "Jetpack Compose",
    publishDate: "2024-06",
  },
  {
    name: "Gradle&Kotlin升級編譯器優化導致DexSize變化紀錄",
    html_url:
      "https://medium.com/@west7418/gradle-kotlin%E5%8D%87%E7%B4%9A%E7%B7%A8%E8%AD%AF%E5%99%A8%E5%84%AA%E5%8C%96%E5%B0%8E%E8%87%B4dexsize%E8%AE%8A%E5%8C%96%E7%B4%80%E9%8C%84-42b385cf578e",
    category: "效能優化",
    publishDate: "2024-05",
  },
  {
    name: "Kotlin 協程Coroutine學習紀錄",
    html_url:
      "https://medium.com/@west7418/kotlin-%E5%8D%94%E7%A8%8Bcoroutine%E5%AD%B8%E7%BF%92%E7%B4%80%E9%8C%84-7b48ea262107",
    category: "Kotlin",
    publishDate: "2024-04",
  },
  {
    name: "Youtube Upload by Python",
    html_url: "https://medium.com/@west7418/youtube-upload-by-python-4b60c65bf799",
    category: "Python",
    publishDate: "2024-03",
  },
  {
    name: "閱讀心得 Android 面试黑洞 — — 当我按下 Home 键再切回来，会发生什么？",
    html_url:
      "https://medium.com/@west7418/%E9%96%B1%E8%AE%80%E5%BF%83%E5%BE%97-android-%E9%9D%A2%E8%AF%95%E9%BB%91%E6%B4%9E-%E5%BD%93%E6%88%91%E6%8C%89%E4%B8%8B-home-%E9%94%AE%E5%86%8D%E5%88%87%E5%9B%9E%E6%9D%A5-%E4%BC%9A%E5%8F%91%E7%94%9F%E4%BB%80%E4%B9%88-d2e5c9162cfe",
    category: "Android基礎",
    publishDate: "2024-02",
  },
  {
    name: "透過OOP和SOILD重構訂閱系統紀錄",
    html_url:
      "https://medium.com/@west7418/%E9%80%8F%E9%81%8Eoop%E5%92%8Csoild%E9%87%8D%E6%A7%8B%E8%A8%82%E9%96%B1%E7%B3%BB%E7%B5%B1%E7%B4%80%E9%8C%84-afc66283302d",
    category: "Android架構",
    publishDate: "2024-01",
  },
  {
    name: "Android Studio Makedown Editer Plugin 安裝後導致打不開問題紀錄",
    html_url:
      "https://medium.com/@west7418/android-studio-makedown-editer-plugin-%E5%AE%89%E8%A3%9D%E5%BE%8C%E5%B0%8E%E8%87%B4%E6%89%93%E4%B8%8D%E9%96%8B%E5%95%8F%E9%A1%8C%E7%B4%80%E9%8C%84-19c7e4175545",
    category: "開發工具",
    publishDate: "2023-12",
  },
  {
    name: "Android Mac m1 JNI OLLVM17 混淆",
    html_url: "https://medium.com/@west7418/android-mac-m1-jni-ollvm17-%E6%B7%B7%E6%B7%86-df8cd77adbd4",
    category: "安全防護",
    publishDate: "2023-11",
  },
  {
    name: "Android Espresso Practice",
    html_url: "https://medium.com/@west7418/android-eespresso-practice-8d01065acb19",
    category: "測試",
    publishDate: "2023-10",
  },
  {
    name: "Android CoordinatorLayout AppbarLayout滾動導致內層view滾動偏移",
    html_url:
      "https://medium.com/@west7418/andrpod-coordinatorlayout-appbarlayout%E6%BB%BE%E5%8B%95%E5%B0%8E%E8%87%B4%E5%85%A7%E5%B1%A4view%E6%BB%BE%E5%8B%95%E5%81%8F%E7%A7%BB-de4025838d38",
    category: "UI/UX",
    publishDate: "2023-09",
  },
  {
    name: "Android 客製化view練習(LevelRecyclerView)",
    html_url:
      "https://medium.com/@west7418/android-%E5%AE%A2%E8%A3%BD%E5%8C%96view%E7%B7%B4%E7%BF%92-levelrecyclerview-163abc63dc44",
    category: "自定義View",
    publishDate: "2023-08",
  },
  {
    name: "Android EventTracker 埋點追蹤整合器",
    html_url:
      "https://medium.com/@west7418/android-eventtracker-%E5%9F%8B%E9%BB%9E%E8%BF%BD%E8%B9%A4%E6%95%B4%E5%90%88%E5%99%A8-af3cd9e749cc",
    category: "數據分析",
    publishDate: "2023-07",
  },
  {
    name: "Android ListAdapter 介紹",
    html_url: "https://medium.com/@west7418/android-listadapter-%E4%BB%8B%E7%B4%B9-6e0a82136c2b",
    category: "Android基礎",
    publishDate: "2023-06",
  },
  {
    name: "Compose初體驗,使用Compose改寫舊專案",
    html_url:
      "https://medium.com/@west7418/compose%E5%88%9D%E9%AB%94%E9%A9%97-%E4%BD%BF%E7%94%A8compose%E6%94%B9%E5%AF%AB%E8%88%8A%E5%B0%88%E6%A1%88-2491f43ec245",
    category: "Jetpack Compose",
    publishDate: "2023-05",
  },
  {
    name: "升級Android minSdkVersion到23的注意事項",
    html_url:
      "https://medium.com/@west7418/%E5%8D%87%E7%B4%9Aandroid-minsdkversion%E5%88%B023%E7%9A%84%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A0%85-6095794961a2",
    category: "Android基礎",
    publishDate: "2023-04",
  },
  {
    name: "Android Firebase Debug View 指定裝置連接",
    html_url:
      "https://medium.com/@west7418/android-firebase-debug-view-%E6%8C%87%E5%AE%9A%E8%A3%9D%E7%BD%AE%E9%80%A3%E6%8E%A5-a072861b6483",
    category: "Firebase",
    publishDate: "2023-03",
  },
  {
    name: "Android TabLayout常用UI",
    html_url: "https://medium.com/@west7418/android-tablayout%E5%B8%B8%E7%94%A8ui-ac19453abba2",
    category: "UI/UX",
    publishDate: "2023-02",
  },
  {
    name: "Android ViewPager2 EditText 焦點問題解決",
    html_url:
      "https://medium.com/@west7418/android-viewpager2-edittext-%E7%84%A6%E9%BB%9E%E5%95%8F%E9%A1%8C%E8%A7%A3%E6%B1%BA-7acd42aed42d",
    category: "UI/UX",
    publishDate: "2023-01",
  },
  {
    name: "Android ConcatAdapter And ListAdapter使用情境",
    html_url:
      "https://medium.com/@west7418/android-concatadapter-and-listadapter%E4%BD%BF%E7%94%A8%E6%83%85%E5%A2%83-865c8e0c54c9",
    category: "Android基礎",
    publishDate: "2022-12",
  },
  {
    name: "Android 動態更換ICON",
    html_url: "https://medium.com/@west7418/android-%E5%8B%95%E6%85%8B%E6%9B%B4%E6%8F%9Bicon-c68f3ad2af55",
    category: "Android基礎",
    publishDate: "2022-11",
  },
  {
    name: "Android 監聽簡訊取得驗證碼到剪貼簿",
    html_url:
      "https://medium.com/@west7418/android-%E7%9B%A3%E8%81%BD%E7%B0%A1%E8%A8%8A%E5%8F%96%E5%BE%97%E9%A9%97%E8%AD%89%E7%A2%BC%E5%88%B0%E5%89%AA%E8%B2%BC%E7%B0%BF-4e57e738410",
    category: "Android基礎",
    publishDate: "2022-10",
  },
  {
    name: "Android 客製化View練習(Download Progress)",
    html_url:
      "https://medium.com/@west7418/android-%E5%AE%A2%E8%A3%BD%E5%8C%96view%E7%B7%B4%E7%BF%92-download-progress-5c1ee2a8ded",
    category: "自定義View",
    publishDate: "2022-09",
  },
  {
    name: "Android 客製化view練習(LevelProgress)",
    html_url:
      "https://medium.com/@west7418/android-%E5%AE%A2%E8%A3%BD%E5%8C%96view%E7%B7%B4%E7%BF%92-levelprogress-2a56c76d8b41",
    category: "自定義View",
    publishDate: "2022-08",
  },
  {
    name: "Android Glide Wrote GeneratedAppGlideModule with: []",
    html_url: "https://medium.com/@west7418/android-glide-wrote-generatedappglidemodule-with-dd871ba4f644",
    category: "第三方庫",
    publishDate: "2022-07",
  },
  {
    name: "DialogFragment Immersive Mode (沉浸模式)",
    html_url:
      "https://medium.com/@west7418/dialogfragment-immersive-model-%E6%B2%89%E6%B5%B8%E6%A8%A1%E5%BC%8F-83e19fcafaa4",
    category: "UI/UX",
    publishDate: "2022-06",
  },
  {
    name: "如何取得Activity或Fragment的ViewModel在不同的生命週期",
    html_url:
      "https://medium.com/@west7418/%E5%A6%82%E4%BD%95%E5%8F%96%E5%BE%97activity%E6%88%96fragment%E7%9A%84viewmodel%E5%9C%A8%E4%B8%8D%E5%90%8C%E7%9A%84%E7%94%9F%E5%91%BD%E9%80%B1%E6%9C%9F-25662582beda",
    category: "Android架構",
    publishDate: "2022-05",
  },
  {
    name: "Android Epoxy Demo",
    html_url: "https://medium.com/@west7418/android-epoxy-demo-ca14b81958e7",
    category: "第三方庫",
    publishDate: "2022-04",
  },
  {
    name: "Android Icon Text",
    html_url: "https://medium.com/@west7418/android-icon-text-e1777e4d938f",
    category: "UI/UX",
    publishDate: "2022-03",
  },
  {
    name: "Android 圖片放在不同的drawable-dpi差異和坑",
    html_url:
      "https://medium.com/@west7418/android-%E5%9C%96%E7%89%87%E6%94%BE%E5%9C%A8%E4%B8%8D%E5%90%8C%E7%9A%84drawable-dpi%E5%B7%AE%E7%95%B0%E5%92%8C%E5%9D%91-e4341b1f7c45",
    category: "Android基礎",
    publishDate: "2022-02",
  },
  {
    name: "Flutter Mask Map(口罩地圖)",
    html_url: "https://medium.com/@west7418/flutter-mask-map-%E5%8F%A3%E7%BD%A9%E5%9C%B0%E5%9C%96-7a2896469ef3",
    category: "Flutter",
    publishDate: "2022-01",
  },
  {
    name: "Android APK Reduce Size (APP瘦身)",
    html_url: "https://medium.com/@west7418/android-apk-reduce-size-app%E7%98%A6%E8%BA%AB-6e39c5dcc9fb",
    category: "效能優化",
    publishDate: "2021-12",
  },
  {
    name: "Android App Protect 防破解",
    html_url: "https://medium.com/@west7418/android-app-protect-%E9%98%B2%E7%A0%B4%E8%A7%A3-f50f30b8eb56",
    category: "安全防護",
    publishDate: "2021-11",
  },
]

const categories = [
  "全部",
  "AI/ML",
  "Android架構",
  "Android基礎",
  "Jetpack Compose",
  "UI/UX",
  "效能優化",
  "開發工具",
  "自定義View",
  "Kotlin",
  "測試",
  "安全防護",
  "Firebase",
  "第三方庫",
  "數據分析",
  "Flutter",
  "Python",
  "學習心得",
]

const getCategoryColor = (category: string) => {
  const colors: { [key: string]: string } = {
    "AI/ML": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    Android架構: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    Android基礎: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "Jetpack Compose": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
    "UI/UX": "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
    效能優化: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    開發工具: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
    自定義View: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300",
    Kotlin: "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-300",
    測試: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    安全防護: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    Firebase: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",
    第三方庫: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300",
    數據分析: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
    Flutter: "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-300",
    Python: "bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-300",
    學習心得: "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-300",
  }
  return colors[category] || "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
}

export default function ArticlesPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("全部")
  const [filteredArticles, setFilteredArticles] = useState(mediumArticles)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    let filtered = mediumArticles

    if (selectedCategory !== "全部") {
      filtered = filtered.filter((article) => article.category === selectedCategory)
    }

    if (searchTerm) {
      filtered = filtered.filter((article) => article.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }

    setFilteredArticles(filtered)
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
    total: mediumArticles.length,
    categories: new Set(mediumArticles.map((a) => a.category)).size,
    latest: mediumArticles[0]?.publishDate || "2024-12",
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <AnimatedSection animation="fade-up">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Medium 技術文章
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            分享Android開發經驗、技術心得和解決方案，記錄學習成長的軌跡
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
                  <BookOpen className="w-8 h-8 text-blue-500" />
                </div>
                <div className="text-2xl font-bold">{stats.total}</div>
                <div className="text-sm text-muted-foreground">篇文章</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center justify-center p-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Filter className="w-8 h-8 text-purple-500" />
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
                  <TrendingUp className="w-8 h-8 text-green-500" />
                </div>
                <div className="text-2xl font-bold">{stats.latest}</div>
                <div className="text-sm text-muted-foreground">最新發布</div>
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
                  placeholder="搜尋文章標題..."
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

      {/* Articles Grid */}
      <AnimatedSection animation="fade-up" delay={600}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                  <Badge className={`${getCategoryColor(article.category || "")} text-xs`}>{article.category}</Badge>
                  {index === 0 && (
                    <Badge variant="destructive" className="text-xs animate-pulse">
                      最新
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <h3 className="font-semibold text-sm leading-tight mb-3 group-hover:text-primary transition-colors line-clamp-3">
                  {article.name}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3 mr-1" />
                    {article.publishDate}
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-8 px-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    onClick={() => window.open(article.html_url, "_blank")}
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    閱讀
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </AnimatedSection>

      {/* No Results */}
      {filteredArticles.length === 0 && (
        <AnimatedSection animation="fade-up">
          <Card>
            <CardContent className="text-center py-12">
              <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">找不到相關文章</h3>
              <p className="text-muted-foreground">請嘗試調整搜尋關鍵字或選擇不同的分類</p>
            </CardContent>
          </Card>
        </AnimatedSection>
      )}

      {/* Call to Action */}
      <AnimatedSection animation="fade-up" delay={800}>
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-0">
          <CardContent className="text-center py-8">
            <h3 className="text-xl font-semibold mb-2">持續學習，持續分享</h3>
            <p className="text-muted-foreground mb-4">在Medium上記錄開發過程中的問題與解決方案，與開發者社群分享經驗</p>
            <Button size="lg" onClick={() => window.open("https://medium.com/@west7418", "_blank")} className="group">
              <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              訪問我的 Medium
            </Button>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  )
}
