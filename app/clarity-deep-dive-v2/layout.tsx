import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "The Clarity Intensive | Ideal Clarity",
  description:
    "You've built the successful career. So what's really stopping you from building what's next? One conversation to see what's actually been keeping you stuck.",
};

export default function ClarityDeepDiveV2Layout({
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
      <div
  style={{
    position: "fixed",
    top: 0,
    left: 0,
    background: "red",
    color: "white",
    padding: "4px",
    zIndex: 999999,
  }}
>
  Layout Loaded
</div>
      {children}
    </>
  );
}
