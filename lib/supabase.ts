import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tjryxznbgxcyacjgplny.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqcnl4em5iZ3hjeWFjamdwbG55Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgwOTMxMDUsImV4cCI6MjAyMzY2OTEwNX0.Zyh_6OUqRoY_NbcMxuTSxswYXVv-UV_it8dp0f-BtBc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})