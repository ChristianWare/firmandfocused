import Hero from "@/components/Hero/Hero";
import Nav from "@/components/Nav/Nav";
import ProblemSection from "@/components/ProblemSection/ProblemSection";
import SolutionSection from "@/components/SolutionSection/SolutionSection";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      
    </main>
  );
}
