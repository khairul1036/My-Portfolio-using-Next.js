import { FeatureThree } from "@/ui/FeatureThree";
import HeroSection from "@/ui/HeroSection";
import HireMe from "@/ui/HireMe";
import { Projects } from "@/ui/Projects";

function home() {
  return (
    <>
      <title>Khairul Islam | Home</title>

      <HeroSection />
      <FeatureThree />
      <Projects />
      <HireMe />
    </>
  );
}

export default home;
