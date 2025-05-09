// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// --- IMPORTANT ---
// Store these in environment variables for security, especially in production!
// Example using Vite: import.meta.env.VITE_SUPABASE_URL
// Example using Create React App: process.env.REACT_APP_SUPABASE_URL
const supabaseUrl = 'https://zyuusockfwqsvnftfuyj.supabase.co'; // Find this in your Supabase project settings -> API
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5dXVzb2NrZndxc3ZuZnRmdXlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1NjcwNjEsImV4cCI6MjA2MjE0MzA2MX0.8kLXgn_hyjMy-WDcvg0Q9H5eVrFrcoLkJ7QSyG_aDUM'; // Find this in your Supabase project settings -> API

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase URL and Anon Key are required. Check your environment variables.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);