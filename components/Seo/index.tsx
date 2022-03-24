import { _WEBSITE_KEYWORDS, _WEBSITE_TITLE } from "helpers/constants";
import Head from "next/head";

interface SeoProps {
  pageTitle: string;
  pageDesc: string;
}

const Seo = ({ pageTitle, pageDesc }: SeoProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        {/* <meta property="og:image" content="/assets/thumbnail.jpg" /> */}
        <meta property="og:site_name" content={_WEBSITE_TITLE} />
        <meta
          property="og:title"
          content={`${_WEBSITE_TITLE} | ${pageTitle}`}
        />
        <meta property="og:description" content={pageDesc} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content={pageDesc} />
        <meta
          name="twitter:title"
          content={`${_WEBSITE_TITLE} | ${pageTitle}`}
        />
        <meta name="twitter:image" content="/assets/thumbnail.jpg" />
        <meta name="keywords" content={_WEBSITE_KEYWORDS}></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&family=Tomorrow:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        ></link>

        <title>
          {_WEBSITE_TITLE} | {pageTitle}
        </title>
      </Head>
    </>
  );
};

export default Seo;
