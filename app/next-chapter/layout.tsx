import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Build the Life You Keep Imagining | Ideal Clarity",
  description:
    "Stop second-guessing yourself, discover what's really been keeping you stuck, and take the first meaningful step toward the life you've been imagining.",

  openGraph: {
    title: "Build the Life You Keep Imagining | Ideal Clarity",
    description:
      "Stop second-guessing yourself, discover what's really been keeping you stuck, and take the first meaningful step toward the life you've been imagining.",
    url: "https://idealclarity.com/next-chapter",
    siteName: "Ideal Clarity",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Build the Life You Keep Imagining | Ideal Clarity",
    description:
      "Stop second-guessing yourself, discover what's really been keeping you stuck, and take the first meaningful step toward the life you've been imagining.",
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