"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { LoadingSkeleton } from "@/components/loading-skeleton"
import { Mail, Phone, MapPin, Github, Linkedin, Download, Code, Smartphone, Database } from "lucide-react"
import { TechStackSection } from "@/components/tech-stack-section"
import { AchievementsSection } from "@/components/achievements-section"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // 模擬載入時間
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 space-y-8">
        <LoadingSkeleton />
        <LoadingSkeleton />
        <LoadingSkeleton />
      </div>
    )
  }

  const skills = [
    { name: "Kotlin", level: 95, icon: <Code className="w-4 h-4" />, category: "Programming" },
    { name: "Java", level: 90, icon: <Code className="w-4 h-4" />, category: "Programming" },
    { name: "Dart", level: 75, icon: <Code className="w-4 h-4" />, category: "Programming" },
    { name: "Python", level: 70, icon: <Code className="w-4 h-4" />, category: "Programming" },
    { name: "Android Jetpack", level: 90, icon: <Smartphone className="w-4 h-4" />, category: "Skill" },
    { name: "Jetpack Compose", level: 85, icon: <Smartphone className="w-4 h-4" />, category: "Skill" },
    { name: "Firebase", level: 85, icon: <Database className="w-4 h-4" />, category: "Skill" },
    { name: "Git", level: 90, icon: <Github className="w-4 h-4" />, category: "Skill" },
    { name: "MVVM Architecture", level: 90, icon: <Code className="w-4 h-4" />, category: "Architecture" },
    { name: "Clean Code", level: 85, icon: <Code className="w-4 h-4" />, category: "Architecture" },
    { name: "Unit Testing", level: 80, icon: <Code className="w-4 h-4" />, category: "Testing" },
    { name: "Flutter", level: 70, icon: <Smartphone className="w-4 h-4" />, category: "Cross-Platform" },
  ]

  const experiences = [
    {
      title: "Senior Android 工程師",
      company: "日新",
      period: "2024年2月 - 現在",
      description: "Android App 元老專案維護與重構經歷",
      achievements: [
        "MVVM 架構重構與單元測試導入",
        "使用 OOP 與 Design Pattern 進行共用模組抽象化",
        "Token API 請求量減少 80%，影片測速 API 減少至 20%",
        "首頁效能優化，提升用戶存留率約 1%",
        "APK 體積優化 36.9MB → 28.8MB",
        "導入 Multi Flavor 並區隔 DEV/PROD 環境",
        "導入 VasDolly 自動渠道打包，打包時間減少 99%",
        "播放器從 Java 遷移至 Kotlin，支援手勢化操作",
      ],
    },
    {
      title: "Android 工程師",
      company: "日新",
      period: "2019年7月 - 2024年1月",
      description: "主要負責影音APP維護和開發",
      achievements: [
        "Firebase Crashlytics 不受當機率優化從 94% → 99.5%",
        "添加 Android 防破解技術 (NDK)",
        "將專案從 Java 轉成純 Kotlin",
        "從 MVP 架構轉型成 MVVM 架構",
        "編寫單元測試和 UI 測試維護程式碼品質",
        "減少 APK 包大小約縮小了 40%",
        "繼承 GsyPlayer 擴展成公司播放器，配合 Maven 讓其他專案共用",
        "客製化 VR 播放器 (GsyPlayer + MD360Player4Android)",
        "使用 OOP 減少重複程式碼，增加內聚力減低耦合",
        "嘗試轉型成 Flutter",
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Hero Section */}
      <AnimatedSection animation="fade-up">
        <div className="text-center space-y-6 py-12">
          <div className="relative">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <img
                src="/avatar.jpg"
                alt="個人頭像"
                className="w-full h-full object-cover rounded-full bg-white"
              />
            </div>
          </div>
          <div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              蔡尚霖
            </h1>
            <h2 className="text-2xl font-semibold text-gray-600 mt-2">Senior Android 工程師</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed">
              擁有五年Android工作經歷，目前主要維護和開發影音類型APP，持續優化產品程式碼，提高留存率和降低閃退率。會把工作上遇到的問題和解決方法放在Github和Medium分享，與設計合作產出高品質UI/UX產品，遵循Clean
              Code和Design Pattern產出易維護的程式碼，使用Testing維護程式碼的品質，也有研究過Flutter對於跨平台有興趣。
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Info */}
      <AnimatedSection animation="fade-up" delay={200}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              聯絡資訊
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-500" />
                <span>west7418@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span>Taichung City, Taiwan</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/CiaShangLin" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="group bg-transparent flex items-center gap-2">
                  <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="inline-block align-middle">GitHub</span>
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/%E5%B0%9A%E9%9C%96-%E8%94%A1-a05878175/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="group bg-transparent flex items-center gap-2">
                  <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="inline-block align-middle">LinkedIn</span>
                </Button>
              </a>
              <a href="https://medium.com/@west7418" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="group bg-transparent flex items-center gap-2">
                  <span className="w-4 h-4 flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform">M</span>
                  <span className="inline-block align-middle">Medium</span>
                </Button>
              </a>
              <a href="https://www.cake.me/west7418-41970b" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="group bg-transparent flex items-center gap-2">
                  <span className="w-4 h-4 flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform">C</span>
                  <span className="inline-block align-middle">CakeResume</span>
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>

      {/* Skills */}
      {/*
      <AnimatedSection animation="fade-up" delay={400}>
        <Card>
          <CardHeader>
            <CardTitle>技能專長</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {skill.icon}
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${index * 100}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
      */}

      {/* Tech Stack */}
      <TechStackSection />

      {/* Achievements */}
      <AchievementsSection />

      {/* Experience */}
      <AnimatedSection animation="fade-up" delay={600}>
        <Card>
          <CardHeader>
            <CardTitle>工作經驗</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-gray-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <div className="space-y-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <h3 className="text-lg font-semibold">{exp.title}</h3>
                      <Badge variant="secondary">{exp.period}</Badge>
                    </div>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                    <p className="text-gray-600">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.achievements.map((achievement, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>

      {/* Social Links */}
      {/*
      <AnimatedSection animation="fade-up" delay={800}>
        <Card>
          <CardHeader>
            <CardTitle>社群連結</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              ...
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
      */}
    </div>
  )
}
