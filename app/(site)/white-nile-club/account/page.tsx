import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { MemberDashboard } from "@/components/loyalty/MemberDashboard";

export const metadata: Metadata = {
  title: "My Account — White Nile Club",
  description: "Sign in to your White Nile Club account to view your tier, Nile Miles balance and activity.",
};

export default function AccountPage() {
  return (
    <>
      <PageHero
        kicker="White Nile Club"
        title="My Account"
        subtitle="Your tier, your Nile Miles, your recent flights — all in one place."
        crumbs={[{ label: "Home", href: "/" }, { label: "White Nile Club", href: "/white-nile-club" }, { label: "My Account" }]}
      />
      <section className="bg-paper py-14">
        <div className="container-site">
          <MemberDashboard />
        </div>
      </section>
    </>
  );
}
