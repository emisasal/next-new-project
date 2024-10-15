"use client"

import { useRef, useState } from "react"
import { Provider } from "react-redux"
import { makeStore, AppStore } from "@/store/store"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

interface Props {
  children: React.ReactNode
}

export default function Providers({ children }: Props) {
  const [queryClient] = useState(() => new QueryClient())
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  return (
    <Provider store={storeRef.current}>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools
          initialIsOpen={false}
          buttonPosition="bottom-left"
        />
      </QueryClientProvider>
    </Provider>
  )
}
