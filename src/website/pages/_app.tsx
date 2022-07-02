import "@styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import TagManager from "react-gtm-module";
import useConsent from "@hooks/useConsent";
import { ProfileProvider } from "@context/profile";
import { RestaurantProvider } from "@context/restaurant";
import { OrderProvider } from "@context/order";
import PageLoader from "@components/PageLoader";

function MyApp({ Component, pageProps }: AppProps) {
  const { klaro } = useConsent();
  useEffect(() => {
    TagManager.initialize({
      gtmId: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID,
    });
  }, [klaro]);

  return (
    <RestaurantProvider>
      <OrderProvider>
        <ProfileProvider>
          <PageLoader>
            <Component {...pageProps} />
          </PageLoader>
        </ProfileProvider>
      </OrderProvider>
    </RestaurantProvider>
  );
}

export default MyApp;
