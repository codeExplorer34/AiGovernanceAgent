import type {
  AIEvent,
  Policy,
  ShadowAIDetection,
  DashboardMetrics,
} from "./types";

const API_BASE_URL = "/api/v1";

export async function fetchMetrics(): Promise<DashboardMetrics> {
  const response = await fetch(`${API_BASE_URL}/metrics`);
  if (!response.ok) throw new Error("Failed to fetch metrics");
  return response.json();
}

export async function fetchEvents(): Promise<AIEvent[]> {
  const response = await fetch(`${API_BASE_URL}/events`);
  if (!response.ok) throw new Error("Failed to fetch events");
  return response.json();
}

export async function fetchPolicies(): Promise<Policy[]> {
  const response = await fetch(`${API_BASE_URL}/policies`);
  if (!response.ok) throw new Error("Failed to fetch policies");
  return response.json();
}

export async function fetchShadowAI(): Promise<ShadowAIDetection[]> {
  const response = await fetch(`${API_BASE_URL}/shadow-ai`);
  if (!response.ok) throw new Error("Failed to fetch shadow AI");
  return response.json();
}
