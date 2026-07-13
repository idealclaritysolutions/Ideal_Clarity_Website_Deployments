import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "The Conversation | Ideal Clarity",
  description:
    "Gain clarity on the purpose, calling, or business that's been pulling at you. Watch the short video to discover why you've struggled to act—and how to finally move forward.",
};

const GA_MEASUREMENT_ID = "G-GZ9D8L91V0";

export default function Layout({
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
            page_path: window.location.pathname
          });
        `}
      </Script>

      {/* Microsoft Clarity */}
      <Script id="ms-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];
            y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "xjm6v5ubms");
        `}
      </Script>

      {children}
    </>
  );
}
