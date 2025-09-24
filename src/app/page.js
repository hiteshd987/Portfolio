import Profile from "@/components/Profile";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
// import About from "@/components/About";
import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Profile />
      <Projects />
      <Timeline />
      <Skills />
      {/* <About /> */}
      {/* <Footer />  */}
    </>
  );
}
