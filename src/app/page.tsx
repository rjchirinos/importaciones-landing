import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Solution } from "@/components/sections/solution";
import { Features } from "@/components/sections/features";
import { HowItWorks } from "@/components/sections/how-it-works";
import { MemoryPuerto } from "@/components/sections/memory-puerto";
import { WaitlistForm } from "@/components/sections/waitlist-form";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <HowItWorks />
        <MemoryPuerto />
        <WaitlistForm />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
