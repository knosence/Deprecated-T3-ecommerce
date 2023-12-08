import { type AppType } from "next/app";

import { api } from "~/utils/api";

import { ClerkProvider } from "@clerk/nextjs";
import "~/styles/globals.css";
import { NavBar } from "~/components/NavBar";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="dark:text-white light:text-black">
      <ClerkProvider {...pageProps}>
        <NavBar />
        <Component {...pageProps} />;
      </ClerkProvider>
    </div>
  );
};

export default api.withTRPC(MyApp);
