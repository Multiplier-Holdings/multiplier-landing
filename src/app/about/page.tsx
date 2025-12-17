import AboutHero from "@/app/components/about/AboutHero";
import MultiplierModel from "@/app/components/about/MultiplierModel";
import Investors from "@/app/components/about/Investors";
import Team from "@/app/components/about/Team";
import ContactForm from "@/app/components/about/ContactForm";
import Principles from "@/app/components/about/Principles";

export default function About() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <MultiplierModel />
      <Investors />
      <Team />
      <Principles />
      <ContactForm />
    </div>
  );
}
