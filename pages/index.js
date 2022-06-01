import Head from "next/head";
import Navbar from "../components/Navbar";
import Clients from "./clients";
import Contact from "./contact";
import Footer from "./footer";
import HomePage from "./homePage";
import Project from "./project";
import Services from "./services";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Noor Mohammad</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HomePage />
      <Services />
      <Project />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}
