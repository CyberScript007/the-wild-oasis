import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://lvxskdpznhilvccbbylt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2eHNrZHB6bmhpbHZjY2JieWx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM5NjU2MzIsImV4cCI6MjAyOTU0MTYzMn0.nivLQ0C2RdQxOJkBHEHuY_-2wpaP8RUnYyTNk6G1A70";

export const supabase = createClient(supabaseUrl, supabaseKey);
