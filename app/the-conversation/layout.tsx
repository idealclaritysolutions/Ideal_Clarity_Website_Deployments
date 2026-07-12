import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "The Conversation | Ideal Clarity Solutions",
  description:
    "A private clarity experience for accomplished professionals who know there is something more for them. Discover what has been keeping you stuck and take the next honest step toward what matters.",
  openGraph: {
    title: "The Conversation | Ideal Clarity Solutions",
    description:
      "You already know something is calling you. This private clarity experience helps you understand what has been keeping you stuck and move toward what matters.",
    url: "https://www.idealclarity.com/the-conversation",
    siteName: "Ideal Clarity Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Conversation | Ideal Clarity Solutions",
    description:
      "You already know something is calling you. Discover what has been keeping you stuck and how to move forward.",
  },
  alternates: {
    canonical: "https://www.idealclarity.com/the-conversation",
  },
};

export default function TheConversationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);
            t.async=1;
            t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];
            y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "xjm6v5ubms");
        `}
      </Script>

      {children}
    </>
  );
}
