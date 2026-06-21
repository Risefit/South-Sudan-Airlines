import type { Metadata } from "next";
import Link from "next/link";
import { StarMark } from "@/components/brand";

export const metadata: Metadata = {
  title: "النسخة العربية — قريبًا",
  description: "النسخة العربية من موقع طيران جنوب السودان قيد الإعداد.",
};

// Placeholder for the Arabic (RTL) experience — fully scaffolded in Step 5 (next-intl).
export default function ArabicPlaceholder() {
  return (
    <main dir="rtl" lang="ar" className="flex min-h-screen flex-col items-center justify-center bg-nile px-6 text-center text-paper">
      <StarMark className="h-10 w-10 text-gold" />
      <h1 className="mt-6 font-serif text-3xl font-semibold sm:text-4xl">النسخة العربية قادمة قريبًا</h1>
      <p className="mt-4 max-w-md text-paper/80">
        نحن نعمل على إتاحة موقع طيران جنوب السودان باللغة العربية. في غضون ذلك، يتوفّر الموقع باللغة الإنجليزية.
      </p>
      <Link href="/" lang="en" dir="ltr" className="mt-8 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-nile-900 hover:bg-gold-300">
        English site
      </Link>
    </main>
  );
}
