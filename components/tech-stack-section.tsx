"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"
import { Code, Smartphone, Database, Cloud, TestTube, Wrench } from "lucide-react"

const techStacks = {
  programming: {
    title: "程式語言",
    icon: <Code className="w-5 h-5" />,
    items: ["Kotlin", "Java", "Dart", "Python", "C"],
  },
  skills: {
    title: "核心技能",
    icon: <Smartphone className="w-5 h-5" />,
    items: ["Jetpack", "Git", "Firebase", "Google Play", "Compose"],
  },
  libraries: {
    title: "第三方函式庫",
    icon: <Wrench className="w-5 h-5" />,
    items: ["Glide", "Firebase", "Epoxy", "Room", "RxJava", "Coroutine", "Retrofit", "Okhttp", "GSYPlayer"],
  },
  analytics: {
    title: "用戶追蹤",
    icon: <Database className="w-5 h-5" />,
    items: ["Firebase Analytics", "Flurry"],
  },
  architecture: {
    title: "架構模式",
    icon: <Cloud className="w-5 h-5" />,
    items: ["MVVM", "MVP", "Clean Architecture", "Design Pattern", "OOP"],
  },
  testing: {
    title: "測試技術",
    icon: <TestTube className="w-5 h-5" />,
    items: ["Unit Testing", "UI Testing", "Firebase Crashlytics"],
  },
}

export function TechStackSection() {
  return (
    <AnimatedSection animation="fade-up" delay={400}>
      <Card>
        <CardHeader>
          <CardTitle>技術棧</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(techStacks).map(([key, stack]) => (
              <div key={key} className="space-y-3">
                <div className="flex items-center gap-2 text-primary">
                  {stack.icon}
                  <h3 className="font-semibold">{stack.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item) => (
                    <Badge key={item} variant="secondary" className="text-xs">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>
  )
}
