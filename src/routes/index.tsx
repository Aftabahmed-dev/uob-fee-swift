import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Features } from "@/components/site/Features";
import { FeeSubmission } from "@/components/site/FeeSubmission";
import { About } from "@/components/site/About";
import { Faq } from "@/components/site/Faq";
import { Inquiry } from "@/components/site/Inquiry";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "UoB Smart Fee Portal — Online Semester Fee Submission";
const description =
  "Submit your University of Balochistan semester fee online through supported banks and digital wallets — no long bank queues.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <FeeSubmission />
        <About />
        <Faq />
        <Inquiry />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
