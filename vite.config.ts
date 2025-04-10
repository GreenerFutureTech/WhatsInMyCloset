// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/WhatsInMyCloset",
  server: { // <--- Add this
    host: true // '0.0.0.0' or true will listen on all addresses, including LAN and public addresses
    // Or specify a specific IP:
    // host: '192.168.1.100' // Replace with your actual network IP
  }
})