import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Shield, AlertTriangle, TrendingUp, Plus } from "lucide-react";
import { mockPolicies } from "./mock-data";
import type { RiskLevel } from "./types";
import { toast } from "sonner";

export function PolicyEnforcementView() {
  const getRiskBadge = (risk: RiskLevel) => {
    const variants = {
      Low: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      Medium: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
      High: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
    };
    return <Badge className={variants[risk]}>{risk}</Badge>;
  };

  const totalViolations = mockPolicies.reduce((sum, p) => sum + p.violation_count, 0);
  const activePolicies = mockPolicies.filter(p => p.status === "Active").length;
  const highRiskPolicies = mockPolicies.filter(p => p.risk_level === "High").length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl">Policy Enforcement</h2>
        <Button onClick={() => toast.info("Policy Generation Wizard starting...")}>
          <Plus className="w-4 h-4 mr-2" /> Create New Policy
        </Button>
      </div>

      {/* Policy Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Policies</CardTitle>
            <Shield className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{activePolicies}</div>
            <p className="text-xs text-muted-foreground">
              {mockPolicies.length - activePolicies} disabled
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
              {mockPolicies.map((policy) => (
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
                      <span className={`font-medium ${policy.violation_count > 100 ? 'text-red-600' :
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
                      <Switch
                        checked={policy.status === "Active"}
                        onCheckedChange={(checked) => {
                          toast[checked ? 'success' : 'warning'](`Policy ${policy.policy_id} ${checked ? 'enabled' : 'disabled'}`);
                        }}
                      />
                      <Badge variant={policy.status === "Active" ? "default" : "secondary"}>
                        {policy.status}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toast(`Editing Policy ${policy.policy_id}: ${policy.name}`)}
                    >
                      Edit
                    </Button>
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

