import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/core/card";
import { Badge } from "@/components/core/badge";
import { Button } from "@/components/core/button";
import { Input } from "@/components/core/input";
import { Search, Download, Filter, Loader2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/core/table";
import { useEffect, useState } from "react";
import { fetchEvents } from "@/api";
import type { AIEvent } from "@/types";
import { formatDistanceToNow } from "date-fns";

export function AuditLogsView() {
  const [events, setEvents] = useState<AIEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        setLoading(true);
        const data = await fetchEvents();
        setEvents(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load audit logs");
      } finally {
        setLoading(false);
      }
    };
    loadEvents();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
        <span className="ml-2">Loading audit trail...</span>
      </div>
    );
  }

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

      {error && (
        <div className="p-4 bg-red-50 text-red-600 rounded-lg border border-red-200">
          Error: {error}
        </div>
      )}

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
              {events.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center text-muted-foreground py-8">
                    No audit records found
                  </TableCell>
                </TableRow>
              ) : (
                events.map((event) => (
                  <TableRow key={event.event_id || Math.random().toString()} className="hover:bg-muted/50">
                    <TableCell className="font-mono text-xs">{event.event_id || "N/A"}</TableCell>
                    <TableCell className="text-sm">
                      {event.timestamp ? (
                        (() => {
                          try {
                            return formatDistanceToNow(new Date(event.timestamp), { addSuffix: true });
                          } catch (e) {
                            return String(event.timestamp);
                          }
                        })()
                      ) : "Unknown time"}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">AI Request</Badge>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="text-sm font-medium">{event.team || "No Team"}</div>
                        {event.user && (
                          <div className="text-xs text-muted-foreground">{event.user}</div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">
                      {event.model || "Unknown"} - {event.data_type || "No Data Type"}
                    </TableCell>
                    <TableCell>
                      <Badge className={
                        event.decision === "Allowed" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" :
                        event.decision === "Flagged" ? "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200" :
                        "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                      }>
                        {event.decision || "Unknown"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">View</Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>

          <div className="flex items-center justify-between pt-4 border-t">
            <div className="text-sm text-muted-foreground">
              Showing {events.length} audit events
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>Previous</Button>
              <Button variant="outline" size="sm" disabled={events.length < 100}>Next</Button>
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
              <span className="font-medium">{events.length} local / 2.4M cloud</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Storage Status</span>
              <span className="font-medium text-green-600">Healthy</span>
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
            <Button variant="outline" className="w-full justify-start" disabled>
              Generate HIPAA Report
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
