import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import GithubStats from "@/components/GithubStats";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      {/* Interactive Particles Layer */}
      <ParticlesBackground />

      {/* Floating Utilities */}
      <BackToTop />

      {/* Global Navigation Header */}
      <Navbar />

      {/* Main Core Layout */}
      <main className="flex-grow flex flex-col">
        {/* Sections */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <Education />
        <Achievements />
        <GithubStats />
        <Testimonials />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </>
  );
}
