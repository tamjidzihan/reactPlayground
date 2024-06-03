import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import App from './App';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routing/routs';

const queryClinet = new QueryClient(
  // {
  //   defaultOptions: {
  //     queries: {
  //       retry: 3,
  //       cacheTime: 300_000,
  //       staleTime: 10 * 1000,
  //       refetchOnWindowFocus: false,
  //       refetchOnReconnect: false,
  //       refetchOnMount: false
  //     }
  //   }
  // }
)

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClinet}>
      <App />
      {/* <RouterProvider router={router} /> */}
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
