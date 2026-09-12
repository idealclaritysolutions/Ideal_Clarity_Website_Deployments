import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function MutualAdvantageIntensiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Microsoft Clarity — session recordings, heatmaps, scroll & rage-click tracking */}
      <Script id="ms-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "xjm6v5ubms");
        `}
      </Script>
      {children}
    </>
  );
}
