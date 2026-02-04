import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Eye, AlertTriangle, CheckCircle, Clock } from "lucide-react";
import { mockShadowAI } from "./mock-data";
import type { AIEvent, RiskLevel, ShadowAIStatus } from "./types";
import { formatDistanceToNow } from "date-fns";

interface ShadowAIViewProps {
  onEventClick: (event: AIEvent) => void;
}

export function ShadowAIView({ onEventClick }: ShadowAIViewProps) {
  const getRiskBadge = (risk: RiskLevel) => {
    const variants = {
      Low: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      Medium: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
      High: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
    };
    return <Badge className={variants[risk]}>{risk}</Badge>;
  };

  const getStatusBadge = (status: ShadowAIStatus) => {
    const variants = {
      Approved: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      "Under Review": "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
      Unapproved: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
    };
    return <Badge className={variants[status]}>{status}</Badge>;
  };

  const newDetections = mockShadowAI.filter(d => d.is_new).length;
  const unapproved = mockShadowAI.filter(d => d.status === "Unapproved").length;
  const highRisk = mockShadowAI.filter(d => d.risk_level === "High").length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl">Shadow AI Detection</h2>
      </div>

      {/* Alert Banner for New Detections */}
      {newDetections > 0 && (
        <Card className="border-amber-600 bg-amber-50 dark:bg-amber-950">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-amber-900 dark:text-amber-200">
                  New Shadow AI Detected
                </h4>
                <p className="text-sm text-amber-800 dark:text-amber-300 mt-1">
                  {newDetections} new unauthorized AI {newDetections === 1 ? 'tool has' : 'tools have'} been detected in your environment. 
                  Review and approve or block these tools to maintain governance.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Detected</CardTitle>
            <Eye className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{mockShadowAI.length}</div>
            <p className="text-xs text-muted-foreground">
              {newDetections} new this week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unapproved Tools</CardTitle>
            <AlertTriangle className="w-4 h-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-red-600">{unapproved}</div>
            <p className="text-xs text-muted-foreground">
              Require immediate action
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">High Risk</CardTitle>
            <AlertTriangle className="w-4 h-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-red-600">{highRisk}</div>
            <p className="text-xs text-muted-foreground">
              Processing sensitive data
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Shadow AI Table */}
      <Card>
        <CardHeader>
          <CardTitle>Detected Unauthorized AI Tools</CardTitle>
          <CardDescription>
            Monitor and manage AI tools operating outside of governance policies
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tool Name</TableHead>
                <TableHead>Source / User</TableHead>
                <TableHead>Risk Level</TableHead>
                <TableHead>First Seen</TableHead>
                <TableHead>Last Seen</TableHead>
                <TableHead>Requests</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockShadowAI.map((detection) => (
                <TableRow 
                  key={detection.detection_id}
                  className="hover:bg-muted/50"
                >
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{detection.tool_name}</span>
                      {detection.is_new && (
                        <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs">
                          NEW
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="text-sm font-medium">{detection.source_app}</div>
                      <div className="text-xs text-muted-foreground">{detection.user}</div>
                    </div>
                  </TableCell>
                  <TableCell>{getRiskBadge(detection.risk_level)}</TableCell>
                  <TableCell className="text-sm">
                    {formatDistanceToNow(new Date(detection.first_seen), { addSuffix: true })}
                  </TableCell>
                  <TableCell className="text-sm">
                    {formatDistanceToNow(new Date(detection.last_seen), { addSuffix: true })}
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{detection.request_count}</div>
                  </TableCell>
                  <TableCell>{getStatusBadge(detection.status)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {detection.status === "Unapproved" && (
                        <>
                          <Button variant="outline" size="sm" className="text-green-600">
                            Approve
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-600">
                            Block
                          </Button>
                        </>
                      )}
                      {detection.status === "Under Review" && (
                        <Button variant="outline" size="sm">
                          Review
                        </Button>
                      )}
                      {detection.status === "Approved" && (
                        <Button variant="outline" size="sm">
                          Details
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Information Card */}
      <Card>
        <CardHeader>
          <CardTitle>About Shadow AI Detection</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm">
            Shadow AI refers to AI tools and services used within your organization without proper governance oversight. 
            These tools can pose significant risks including:
          </p>
          <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
            <li>Data leakage to unauthorized third parties</li>
            <li>Non-compliance with regulatory requirements</li>
            <li>Lack of audit trails and accountability</li>
            <li>Inconsistent AI governance across the organization</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
