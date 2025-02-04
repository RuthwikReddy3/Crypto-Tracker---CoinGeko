import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from 'react-router-dom';

// ✅ Create a QueryClient instance
const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 0, // Optional: Prevent caching
        refetchOnWindowFocus: false, // Prevents unnecessary refetching
      },
    },
});

createRoot(document.getElementById('root')).render(
  <StrictMode> {/*finds probems or errors in project */}
    <QueryClientProvider client={queryClient}>  {/* ✅ Wrap the entire app */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
