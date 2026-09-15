import type { Metadata } from "next";
import Script from "next/script";

const PAGE_TITLE = "Go From Circling to Launched in 8 Weeks | Ideal Clarity";
const PAGE_DESCRIPTION =
  "The Dream Accelerator™ for high-achieving professionals. Uncover what's really been keeping you stuck and go from circling your idea to launched in 8 weeks — or Chi-Chi keeps coaching you, free, until you do. Start with a free 30-minute Next Chapter Conversation.";
const OG_IMAGE = "https://idealclarity.com/images/og-image.jpg";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,

  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: "https://idealclarity.com/next-chapter",
    siteName: "Ideal Clarity",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Chi-Chi of Ideal Clarity — Go from circling your idea to launched in 8 weeks. Start with a free 30-minute conversation.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const GA_MEASUREMENT_ID = "G-GZ9D8L91V0";
const CLARITY_PROJECT_ID = "xjm6v5ubms";

export default function NextChapterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Wistia player preconnect */}
      <link rel="preconnect" href="https://fast.wistia.com" />

      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];

          function gtag(){dataLayer.push(arguments);}

          window.gtag = gtag;

          gtag('js', new Date());

          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      {/* Microsoft Clarity */}
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);
            t.async=1;
            t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];
            y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
        `}
      </Script>

      {children}
    </>
  );
}
