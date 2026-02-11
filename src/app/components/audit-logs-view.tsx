import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search, Download, Filter } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { mockEvents } from "./mock-data";
import { formatDistanceToNow } from "date-fns";

export function AuditLogsView() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl">Audit Logs</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>AI Governance Audit Trail</CardTitle>
          <CardDescription>
            Complete audit trail of all AI governance events for compliance and regulatory reporting
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search audit logs..."
              className="pl-10"
            />
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Event ID</TableHead>
                <TableHead>Timestamp</TableHead>
                <TableHead>Event Type</TableHead>
                <TableHead>User / Team</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockEvents.slice(0, 10).map((event) => (
                <TableRow key={event.event_id} className="hover:bg-muted/50">
                  <TableCell className="font-mono text-xs">{event.event_id}</TableCell>
                  <TableCell className="text-sm">
                    {formatDistanceToNow(new Date(event.timestamp), { addSuffix: true })}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">AI Request</Badge>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="text-sm font-medium">{event.team}</div>
                      {event.user && (
                        <div className="text-xs text-muted-foreground">{event.user}</div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-sm">
                    {event.model} - {event.data_type}
                  </TableCell>
                  <TableCell>
                    <Badge className={
                      event.decision === "Allowed" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" :
                      event.decision === "Flagged" ? "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200" :
                      "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                    }>
                      {event.decision}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">View</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex items-center justify-between pt-4 border-t">
            <div className="text-sm text-muted-foreground">
              Showing 10 of 24,567 audit events
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>Previous</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Audit Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Audit Retention</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Retention Period</span>
              <span className="font-medium">7 Years</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Total Events Stored</span>
              <span className="font-medium">2.4M Events</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Storage Used</span>
              <span className="font-medium">1.2 GB</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Compliance Reporting</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" className="w-full justify-start">
              Generate GDPR Report
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Generate SOX Report
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Generate HIPAA Report
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
