import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rgfscpqumpqtaqisvjnk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJnZnNjcHF1bXBxdGFxaXN2am5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYzMTY1MDMsImV4cCI6MjA3MTg5MjUwM30.E_Pw588tdCLAbv3TjQ0lu1uDbeGB1s9JrIkGrJ1PmpI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
