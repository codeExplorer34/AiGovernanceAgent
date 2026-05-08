import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { Separator } from "./ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import { toast } from "sonner";

export function SettingsView() {
  const handleSave = () => {
    toast.success("Settings updated successfully", {
      description: "Governance configurations have been synced globally."
    });
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h2 className="text-2xl mb-1">Settings</h2>
        <p className="text-sm text-muted-foreground">
          Configure SURO AI Governance platform settings
        </p>
      </div>

      {/* General Settings */}
      <Card>
        <CardHeader>
          <CardTitle>General Settings</CardTitle>
          <CardDescription>Manage your organization's AI governance configuration</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="org-name">Organization Name</Label>
            <Input id="org-name" defaultValue="Acme Corporation" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-email">Compliance Contact Email</Label>
            <Input id="contact-email" type="email" defaultValue="compliance@acme.com" />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Default Risk Threshold</Label>
              <p className="text-sm text-muted-foreground">
                Automatically flag requests above this risk level
              </p>
            </div>
            <Select defaultValue="medium">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Configure alerts and notifications for AI governance events</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>High-Risk Event Alerts</Label>
              <p className="text-sm text-muted-foreground">
                Get notified when high-risk AI events are detected
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Shadow AI Detection</Label>
              <p className="text-sm text-muted-foreground">
                Alert when unauthorized AI tools are detected
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Policy Violation Alerts</Label>
              <p className="text-sm text-muted-foreground">
                Notify when AI policies are violated
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Daily Summary Report</Label>
              <p className="text-sm text-muted-foreground">
                Receive daily email summary of AI governance metrics
              </p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      {/* Integration Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Integrations</CardTitle>
          <CardDescription>Connect SURO with your existing systems</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>SIEM Integration</Label>
              <p className="text-sm text-muted-foreground">
                Forward events to Security Information and Event Management system
              </p>
            </div>
            <Button variant="outline" onClick={() => toast.info("Opening SIEM integration wizard...")}>Configure</Button>
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Slack Notifications</Label>
              <p className="text-sm text-muted-foreground">
                Send alerts to designated Slack channels
              </p>
            </div>
            <Button variant="outline" onClick={() => toast.info("Authenticating with Slack...")}>Connect</Button>
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>API Access</Label>
              <p className="text-sm text-muted-foreground">
                Generate API keys for programmatic access
              </p>
            </div>
            <Button variant="outline" onClick={() => toast.info("Loading secure key vault...")}>Manage Keys</Button>
          </div>
        </CardContent>
      </Card>

      {/* Data Retention */}
      <Card>
        <CardHeader>
          <CardTitle>Data Retention</CardTitle>
          <CardDescription>Configure audit log and event data retention policies</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="retention-period">Audit Log Retention Period</Label>
            <Select defaultValue="7years">
              <SelectTrigger id="retention-period">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1year">1 Year</SelectItem>
                <SelectItem value="3years">3 Years</SelectItem>
                <SelectItem value="5years">5 Years</SelectItem>
                <SelectItem value="7years">7 Years</SelectItem>
                <SelectItem value="indefinite">Indefinite</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">
              Recommended: 7 years for regulatory compliance
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end gap-2">
        <Button variant="outline" onClick={() => toast.info("Changes discarded")}>Cancel</Button>
        <Button onClick={handleSave}>Save Changes</Button>
      </div>
    </div>
  );
}

