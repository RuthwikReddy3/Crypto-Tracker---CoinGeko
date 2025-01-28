import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClientProvider } from 'react-query'
import { QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 0,
      },
    },
  });
  

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </StrictMode>
  );
  
