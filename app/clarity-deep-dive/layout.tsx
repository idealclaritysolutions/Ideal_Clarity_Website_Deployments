import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Clarity Intensive | Ideal Clarity",
  description:
    "You've had the business idea for months — maybe years — and you're still not moving. It was never a strategy problem. One 75-minute conversation to see what's actually in your way.",
};

export default function ClarityIntensiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
