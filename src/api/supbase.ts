import { createClient } from "@supabase/supabase-js";

export const supabaseClient = createClient(
  "https://awxfubaqiezzzuggniwz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3eGZ1YmFxaWV6enp1Z2duaXd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEwMDE1MzIsImV4cCI6MjA2NjU3NzUzMn0.IyVfNJMXpJkVJuSoUnXYWPIEChuvLpTZwe5OwFBHvGE"
);
