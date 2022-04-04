import type { AppProps } from "next/app";
import { library, config, dom } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import { ThemeContextProvider } from "helpers/hooks";
import Layout from "components/Layout";
import "../styles/style.scss";
import { AnimatePresence } from "framer-motion";

config.autoAddCss = false;
library.add(fas, far, fab);

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style>{dom.css()}</style>
      <ThemeContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeContextProvider>
    </>
  );
};

export default MyApp;
