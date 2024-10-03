import Hero from "@/components/Hero/Hero";
import Nav from "@/components/Nav/Nav";
import ProblemSection from "@/components/ProblemSection/ProblemSection";
import SolutionSection from "@/components/SolutionSection/SolutionSection";
import WhyWorkWithUs from "@/components/WhyWorkWithUs/WhyWorkWithUs";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <WhyWorkWithUs />
    </main>
  );
}
