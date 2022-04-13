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
        <title>
          {_WEBSITE_TITLE} | {pageTitle}
        </title>
      </Head>
    </>
  );
};

export default Seo;
