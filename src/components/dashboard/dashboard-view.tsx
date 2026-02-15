import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/core/card";
import { TrendingUp, TrendingDown, Shield, AlertTriangle, Ban, CheckCircle, Activity, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchMetrics } from "@/api";
import { mockUsageTrends } from "@/api/mock";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { GovernanceScoreGauge } from "./governance-score-gauge";
import type { AIEvent, DashboardMetrics } from "@/types";

interface DashboardViewProps {
  timeFilter: string;
  onEventClick: (event: AIEvent) => void;
}

export function DashboardView({ timeFilter }: DashboardViewProps) {
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await fetchMetrics();
        setMetrics(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load metrics");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [timeFilter]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
        <span className="ml-2">Loading governance metrics...</span>
      </div>
    );
  }

  if (error || !metrics) {
    return (
      <div className="p-4 bg-red-50 text-red-600 rounded-lg border border-red-200">
        Error: {error || "No metrics available"}
      </div>
    );
  }

  const kpiCards = [
    {
      title: "Total AI Requests",
      value: metrics.total_requests.toLocaleString(),
      change: metrics.total_requests_change,
      icon: Activity,
      description: "Last 7 days"
    },
    {
      title: "Allowed Requests",
      value: metrics.allowed_count.toLocaleString(),
      change: 8.2,
      icon: CheckCircle,
      description: metrics.total_requests > 0 
        ? `${((metrics.allowed_count / metrics.total_requests) * 100).toFixed(1)}% of total`
        : "No requests yet",
      color: "text-green-600"
    },
    {
      title: "Flagged for Review",
      value: metrics.flagged_count.toLocaleString(),
      change: 15.3,
      icon: AlertTriangle,
      description: metrics.total_requests > 0 
        ? `${((metrics.flagged_count / metrics.total_requests) * 100).toFixed(1)}% of total`
        : "No requests yet",
      color: "text-amber-600"
    },
    {
      title: "Blocked Requests",
      value: metrics.blocked_count.toLocaleString(),
      change: -5.4,
      icon: Ban,
      description: metrics.total_requests > 0 
        ? `${((metrics.blocked_count / metrics.total_requests) * 100).toFixed(1)}% of total`
        : "No requests yet",
      color: "text-red-600"
    },
    {
      title: "Active Policies",
      value: metrics.active_policies.toString(),
      change: metrics.active_policies_change,
      icon: Shield,
      description: "Enforcement rules"
    },
    {
      title: "Shadow AI Incidents",
      value: metrics.shadow_ai_incidents.toString(),
      change: metrics.shadow_ai_incidents_change,
      icon: AlertTriangle,
      description: "Unauthorized tools detected",
      color: "text-amber-600"
    }
  ];

  return (
    <div className="space-y-4">
      {/* Executive Overview Cards */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Executive Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {kpiCards.map((card, index) => {
            const Icon = card.icon;
            const isPositive = card.change > 0;

            return (
              <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 p-3 pb-1">
                  <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
                  <Icon className={`w-4 h-4 ${card.color || 'text-muted-foreground'}`} />
                </CardHeader>
                <CardContent className="p-3 pt-1">
                  <div className={`text-2xl mb-1 ${card.color || ''}`}>{card.value}</div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs flex items-center gap-1 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                      {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                      {Math.abs(card.change)}%
                    </span>
                    <span className="text-xs text-muted-foreground">{card.description}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Governance Score and Risk Level */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>AI Governance Score</CardTitle>
            <CardDescription>Based on policy compliance & Shadow AI exposure</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center pt-6">
            <GovernanceScoreGauge score={metrics.governance_score} />
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Overall AI Risk Level</CardTitle>
            <CardDescription>Aggregated risk assessment across all AI activities</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-semibold text-amber-600">{metrics.overall_risk}</div>
                <div className="text-sm text-muted-foreground mt-1">Current risk level</div>
              </div>
              <div className="w-32 h-32 rounded-full border-8 border-amber-600 flex items-center justify-center">
                <AlertTriangle className="w-12 h-12 text-amber-600" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Low Risk</span>
                <span className="text-green-600">{metrics.allowed_count} requests</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Medium Risk</span>
                <span className="text-amber-600">{metrics.flagged_count} requests</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">High Risk</span>
                <span className="text-red-600">{metrics.blocked_count} requests</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Usage Trends */}
      <Card>
        <CardHeader>
          <CardTitle>AI Usage Trends</CardTitle>
          <CardDescription>AI requests over time, color-coded by decision</CardDescription>
        </CardHeader>
        <CardContent className="p-4">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockUsageTrends}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="date" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Bar dataKey="allowed" fill="#22c55e" name="Allowed" stackId="a" />
                <Bar dataKey="flagged" fill="#f59e0b" name="Flagged" stackId="a" />
                <Bar dataKey="blocked" fill="#ef4444" name="Blocked" stackId="a" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* AI Usage Trends - Line Chart Alternative */}
      <Card>
        <CardHeader>
          <CardTitle>Request Volume Trends</CardTitle>
          <CardDescription>Daily AI request patterns by decision type</CardDescription>
        </CardHeader>
        <CardContent className="p-4">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockUsageTrends}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="date" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="allowed" stroke="#22c55e" strokeWidth={2} name="Allowed" />
                <Line type="monotone" dataKey="flagged" stroke="#f59e0b" strokeWidth={2} name="Flagged" />
                <Line type="monotone" dataKey="blocked" stroke="#ef4444" strokeWidth={2} name="Blocked" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
