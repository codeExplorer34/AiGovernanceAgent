import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/core/card";
import { Badge } from "@/components/core/badge";
import { Button } from "@/components/core/button";
import { Switch } from "@/components/core/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/core/table";
import { Shield, AlertTriangle, TrendingUp, Loader2 } from "lucide-react";
import { fetchPolicies } from "@/api";
import type { Policy, RiskLevel } from "@/types";

export function PolicyEnforcementView() {
  const [policies, setPolicies] = useState<Policy[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPolicies = async () => {
      try {
        setLoading(true);
        const data = await fetchPolicies();
        setPolicies(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load policies");
      } finally {
        setLoading(false);
      }
    };
    loadPolicies();
  }, []);

  const getRiskBadge = (risk: RiskLevel) => {
    const variants = {
      Low: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      Medium: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
      High: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
    };
    return <Badge className={variants[risk]}>{risk}</Badge>;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
        <span className="ml-2">Loading governance policies...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 text-red-600 rounded-lg border border-red-200">
        Error: {error}
      </div>
    );
  }

  const totalViolations = policies.reduce((sum, p) => sum + p.violation_count, 0);
  const activePoliciesCount = policies.filter(p => p.status === "Active").length;
  const highRiskPolicies = policies.filter(p => p.risk_level === "High").length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl">Policy Enforcement</h2>
        <Button>Create New Policy</Button>
      </div>

      {/* Policy Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Policies</CardTitle>
            <Shield className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{activePoliciesCount}</div>
            <p className="text-xs text-muted-foreground">
              {policies.length - activePoliciesCount} disabled
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">High Risk Policies</CardTitle>
            <AlertTriangle className="w-4 h-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-red-600">{highRiskPolicies}</div>
            <p className="text-xs text-muted-foreground">
              Require immediate attention
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Violations</CardTitle>
            <TrendingUp className="w-4 h-4 text-amber-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-amber-600">{totalViolations}</div>
            <p className="text-xs text-muted-foreground">
              Last 7 days
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Policies Table */}
      <Card>
        <CardHeader>
          <CardTitle>Governance Policies</CardTitle>
          <CardDescription>
            Configure and monitor AI governance policies mapped to regulatory requirements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Policy ID</TableHead>
                <TableHead>Policy Name</TableHead>
                <TableHead>Risk Level</TableHead>
                <TableHead>Regulation Mapped</TableHead>
                <TableHead>Violations</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {policies.map((policy) => (
                <TableRow key={policy.policy_id} className="hover:bg-muted/50">
                  <TableCell className="font-mono text-xs">{policy.policy_id}</TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{policy.name}</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {policy.description}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{getRiskBadge(policy.risk_level)}</TableCell>
                  <TableCell className="text-sm">{policy.regulation}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className={`font-medium ${
                        policy.violation_count > 100 ? 'text-red-600' :
                        policy.violation_count > 50 ? 'text-amber-600' :
                        'text-green-600'
                      }`}>
                        {policy.violation_count}
                      </span>
                      {policy.violation_count > 100 && (
                        <AlertTriangle className="w-3 h-3 text-red-600" />
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Switch checked={policy.status === "Active"} />
                      <Badge variant={policy.status === "Active" ? "default" : "secondary"}>
                        {policy.status}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">Edit</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
