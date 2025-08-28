import { supabase } from '$lib/supabaseClient';

export async function load() {
  try {
    // Test der Supabase-Verbindung durch Abfrage der auth.users Tabelle
    const { data, error } = await supabase.auth.getUser();
    
    if (error) {
      console.error('Supabase connection error:', error);
      return {
        connectionStatus: 'error',
        error: error.message,
        user: null
      };
    }

    return {
      connectionStatus: 'success',
      user: data.user,
      error: null
    };
  } catch (err) {
    console.error('Unexpected error:', err);
    return {
      connectionStatus: 'error',
      error: 'Unexpected error occurred',
      user: null
    };
  }
}
