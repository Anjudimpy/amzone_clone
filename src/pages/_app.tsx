
import RootLayout from "@/components/Rootlayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { persistor, store } from '@/store/store';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { SessionProvider } from "next-auth/react";
import session from "redux-persist/lib/storage/session";

export default function App({ Component, pageProps:{session,...pageProps} }: AppProps) {
  return(
    <div>
 
  <Provider store = {store}>
    <PersistGate persistor={persistor} loading ={null}>
      <SessionProvider session={session}>
  <div className="bg-gray-300">
  <RootLayout>
  <Component {...pageProps} />
  </RootLayout>
  </div>
  </SessionProvider>
  </PersistGate>
  </Provider>
  
    </div>
  ) ;
}
