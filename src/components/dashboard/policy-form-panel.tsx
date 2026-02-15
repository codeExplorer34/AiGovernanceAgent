import React, { useState, useEffect } from "react";
import { X, Shield, AlertTriangle, FileText, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/core/button";
import { Badge } from "@/components/core/badge";
import { Input } from "@/components/core/input";
import { Textarea } from "@/components/core/textarea";
import { Separator } from "@/components/core/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/core/select";
import type { Policy, RiskLevel } from "@/types";

interface PolicyFormPanelProps {
  policy: Policy | null; // null means "Create Mode"
  onClose: () => void;
  onSave: (policy: Partial<Policy>) => Promise<void>;
  onDelete?: (id: string) => Promise<void>;
}

export function PolicyFormPanel({ policy, onClose, onSave, onDelete }: PolicyFormPanelProps) {
  const isEdit = !!policy;
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [formData, setFormData] = useState<Partial<Policy>>({
    policy_id: "",
    name: "",
    risk_level: "Medium",
    status: "Active",
    regulation: "",
    description: "",
    violation_count: 0
  });

  useEffect(() => {
    if (policy) {
      setFormData(policy);
    }
  }, [policy]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onSave(formData);
      onClose();
    } catch (err) {
      console.error("Failed to save policy", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!policy || !onDelete) return;
    setDeleting(true);
    try {
      await onDelete(policy.policy_id);
      onClose();
    } catch (err) {
      console.error("Failed to delete policy", err);
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="fixed right-0 top-0 h-full w-full md:w-[500px] bg-card border-l border-border shadow-2xl overflow-y-auto z-50 animate-in slide-in-from-right duration-300">
      <div className="sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-primary" />
          <h3 className="font-semibold">{isEdit ? "Edit Policy" : "Create New Policy"}</h3>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="w-4 h-4" />
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-1.5 block text-foreground">Policy ID</label>
            <Input 
              value={formData.policy_id} 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, policy_id: e.target.value })}
              placeholder="e.g. P-105"
              disabled={isEdit}
              required
              className="font-mono"
            />
            {!isEdit && (
              <p className="text-[10px] text-muted-foreground mt-1">Unique identifier for the policy</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium mb-1.5 block text-foreground">Policy Name</label>
            <Input 
              value={formData.name} 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Data Minimization Standard"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block text-foreground">Risk Level</label>
              <Select 
                value={formData.risk_level} 
                onValueChange={(val: RiskLevel) => setFormData({ ...formData, risk_level: val })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Low">Low</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block text-foreground">Initial Status</label>
              <Select 
                value={formData.status} 
                onValueChange={(val: string) => setFormData({ ...formData, status: val as "Active" | "Disabled" })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Disabled">Disabled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-1.5 block text-foreground">Regulation Mapping</label>
            <div className="relative">
              <FileText className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input 
                value={formData.regulation} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, regulation: e.target.value })}
                placeholder="e.g. GDPR Article 25"
                className="pl-9"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-1.5 block text-foreground">Description</label>
            <Textarea 
              value={formData.description} 
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Describe the scope and objective of this policy..."
              className="min-h-[100px] resize-none"
              required
            />
          </div>
        </div>

        <Separator />

        <div className="bg-muted/30 rounded-lg p-4 border border-dashed border-border">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5" />
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              New policies take effect immediately across all monitored AI sessions. Changes are audited and persistent in the governance vault.
            </p>
          </div>
        </div>

        {isEdit && (
          <div className="pt-2">
            {!confirmDelete ? (
              <Button 
                type="button" 
                variant="ghost" 
                className="w-full text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 flex items-center justify-center gap-2"
                onClick={() => setConfirmDelete(true)}
              >
                <X className="w-4 h-4" />
                Delete Policy
              </Button>
            ) : (
              <div className="space-y-3 bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-900/50">
                <p className="text-xs text-red-600 dark:text-red-400 font-medium text-center">
                  Are you sure? This action cannot be undone.
                </p>
                <div className="flex gap-2">
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="flex-1 h-8 text-xs" 
                    onClick={() => setConfirmDelete(false)}
                    disabled={deleting}
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="button" 
                    variant="destructive" 
                    className="flex-1 h-8 text-xs"
                    onClick={handleDelete}
                    disabled={deleting}
                  >
                    {deleting ? <Loader2 className="w-3 h-3 animate-spin" /> : "Confirm Delete"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="flex gap-3 pt-4 sticky bottom-0 bg-card pb-6">
          <Button type="button" variant="outline" className="flex-1" onClick={onClose} disabled={loading || deleting}>
            Cancel
          </Button>
          <Button type="submit" className="flex-1" disabled={loading || deleting || confirmDelete}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <CheckCircle2 className="mr-2 h-4 w-4" />
                {isEdit ? "Update Policy" : "Deploy Policy"}
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
