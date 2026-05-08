import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Search, Filter, ArrowUpDown } from "lucide-react";
import { mockEvents } from "./mock-data";
import type { AIEvent, DecisionType, RiskLevel } from "./types";
import { formatDistanceToNow } from "date-fns";

interface AIActivityViewProps {
  searchQuery: string;
  timeFilter: string;
  onEventClick: (event: AIEvent) => void;
}

export function AIActivityView({ searchQuery, timeFilter, onEventClick }: AIActivityViewProps) {
  const [decisionFilter, setDecisionFilter] = useState<string>("all");
  const [riskFilter, setRiskFilter] = useState<string>("all");
  const [sortField, setSortField] = useState<string>("timestamp");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  // Filter and sort events
  let filteredEvents = [...mockEvents];

  if (searchQuery) {
    filteredEvents = filteredEvents.filter(event =>
      event.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.team.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.data_type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.app.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  if (decisionFilter !== "all") {
    filteredEvents = filteredEvents.filter(event => event.decision === decisionFilter);
  }

  if (riskFilter !== "all") {
    filteredEvents = filteredEvents.filter(event => event.risk_level === riskFilter);
  }

  filteredEvents.sort((a, b) => {
    if (sortField === "timestamp") {
      return sortOrder === "desc" 
        ? new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        : new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
    }
    return 0;
  });

  const getDecisionBadge = (decision: DecisionType) => {
    const variants = {
      Allowed: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      Flagged: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
      Blocked: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
    };
    return <Badge className={variants[decision]}>{decision}</Badge>;
  };

  const getRiskBadge = (risk: RiskLevel) => {
    const variants = {
      Low: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      Medium: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
      High: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
    };
    return <Badge className={variants[risk]}>{risk}</Badge>;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl">AI Activity</h2>
        <div className="flex items-center gap-2">
          <Select value={decisionFilter} onValueChange={setDecisionFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Decision" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Decisions</SelectItem>
              <SelectItem value="Allowed">Allowed</SelectItem>
              <SelectItem value="Flagged">Flagged</SelectItem>
              <SelectItem value="Blocked">Blocked</SelectItem>
            </SelectContent>
          </Select>

          <Select value={riskFilter} onValueChange={setRiskFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Risk Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Risk Levels</SelectItem>
              <SelectItem value="Low">Low</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="High">High</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>AI Governance Events</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                  >
                    Timestamp
                    <ArrowUpDown className="ml-2 w-3 h-3" />
                  </Button>
                </TableHead>
                <TableHead>Team / App</TableHead>
                <TableHead>AI Model</TableHead>
                <TableHead>Data Type</TableHead>
                <TableHead>Decision</TableHead>
                <TableHead>Risk Level</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredEvents.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center text-muted-foreground py-8">
                    No events found matching your filters
                  </TableCell>
                </TableRow>
              ) : (
                filteredEvents.map((event) => (
                  <TableRow 
                    key={event.event_id}
                    className="cursor-pointer hover:bg-muted/50"
                    onClick={() => onEventClick(event)}
                  >
                    <TableCell className="text-xs">
                      {formatDistanceToNow(new Date(event.timestamp), { addSuffix: true })}
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium text-sm">{event.team}</div>
                        <div className="text-xs text-muted-foreground">{event.app}</div>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">{event.model}</TableCell>
                    <TableCell className="text-sm">{event.data_type}</TableCell>
                    <TableCell>{getDecisionBadge(event.decision)}</TableCell>
                    <TableCell>{getRiskBadge(event.risk_level)}</TableCell>
                    <TableCell>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          onEventClick(event);
                        }}
                      >
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>

          {filteredEvents.length > 0 && (
            <div className="flex items-center justify-between mt-4 pt-4 border-t">
              <div className="text-sm text-muted-foreground">
                Showing {filteredEvents.length} of {mockEvents.length} events
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>Previous</Button>
                <Button variant="outline" size="sm" disabled>Next</Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

