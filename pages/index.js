import Head from "next/head";
import About from "../Components/About";
import Blogs from "../Components/Blogs";
import Contact from "../Components/Contact";
import Header from "../Components/Header";
import HomePage from "../Components/HomePage";
import Projects from "../Components/Projects";
import Footer from '../Components/Footer'
import Other from "../Components/Other";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <div className="mx-auto max-w-7xl selection:bg-green-500 selection:text-black ">
      <Head>
        <title>therogersak - Ankit Yadav</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <HomePage />
      <About />
      <Projects />
      <Blogs />
      <Contact />
      <Footer />
      <Other />
    </div>
    </div>
  );
}
