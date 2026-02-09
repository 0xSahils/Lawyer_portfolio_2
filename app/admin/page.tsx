"use client"

import {
  FileText,
  FolderOpen,
  Briefcase,
  Trophy,
  TrendingUp,
  Eye,
  MessageSquare,
  Phone,
} from "lucide-react"

const overviewCards = [
  { label: "Blog Posts", count: 12, icon: <FileText className="h-6 w-6" />, color: "text-blue-400" },
  { label: "Cases", count: 6, icon: <FolderOpen className="h-6 w-6" />, color: "text-emerald-400" },
  { label: "Practice Areas", count: 8, icon: <Briefcase className="h-6 w-6" />, color: "text-primary" },
  { label: "Achievements", count: 6, icon: <Trophy className="h-6 w-6" />, color: "text-amber-400" },
]

const recentActivities = [
  { action: "New blog post published", detail: "Understanding Fundamental Rights", time: "2 hours ago", icon: <FileText className="h-4 w-4" /> },
  { action: "Case study updated", detail: "Landmark Property Restitution", time: "5 hours ago", icon: <FolderOpen className="h-4 w-4" /> },
  { action: "New consultation request", detail: "Property Dispute - South Delhi", time: "1 day ago", icon: <Phone className="h-4 w-4" /> },
  { action: "New testimonial received", detail: "From Sunita Sharma", time: "2 days ago", icon: <MessageSquare className="h-4 w-4" /> },
  { action: "Achievement added", detail: "Best Advocate Award 2023", time: "3 days ago", icon: <Trophy className="h-4 w-4" /> },
]

const siteStats = [
  { label: "Page Views (Monthly)", value: "12,847", change: "+12%", icon: <Eye className="h-5 w-5" /> },
  { label: "Enquiries (Monthly)", value: "89", change: "+8%", icon: <MessageSquare className="h-5 w-5" /> },
  { label: "Phone Calls", value: "234", change: "+15%", icon: <Phone className="h-5 w-5" /> },
  { label: "Growth Rate", value: "23%", change: "+5%", icon: <TrendingUp className="h-5 w-5" /> },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h2 className="font-serif text-2xl font-bold text-foreground">
          Welcome back, Advocate Mishra
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Here is an overview of your website content and activity.
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {overviewCards.map((card) => (
          <div
            key={card.label}
            className="rounded-xl border border-border bg-card p-5 hover:border-primary/30 transition-colors"
          >
            <div className={`mb-3 ${card.color}`}>{card.icon}</div>
            <p className="text-3xl font-serif font-bold text-foreground">{card.count}</p>
            <p className="mt-1 text-sm text-muted-foreground">{card.label}</p>
          </div>
        ))}
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {siteStats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-border bg-card p-5"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="text-muted-foreground">{stat.icon}</div>
              <span className="text-xs font-medium text-emerald-400">{stat.change}</span>
            </div>
            <p className="text-2xl font-serif font-bold text-foreground">{stat.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="rounded-xl border border-border bg-card">
        <div className="border-b border-border px-6 py-4">
          <h3 className="font-serif text-lg font-bold text-foreground">Recent Activity</h3>
        </div>
        <div className="divide-y divide-border">
          {recentActivities.map((activity) => (
            <div key={activity.detail} className="flex items-center gap-4 px-6 py-4 hover:bg-secondary/50 transition-colors">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                {activity.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">{activity.action}</p>
                <p className="text-xs text-muted-foreground truncate">{activity.detail}</p>
              </div>
              <span className="text-xs text-muted-foreground shrink-0">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
