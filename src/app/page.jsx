'use client'
import { useEffect } from "react";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Services from "../components/Services";
import { Campaigns } from "../components/Campaigns";
import EventSection from "../components/EventSection";


export default function Home() {
  useEffect(() => {
    import('../../node_modules/bootstrap/dist/js/bootstrap')
  }, [])
  return (
    <>
      <Main />
      <Services />
      <Campaigns />
      <EventSection />
      <Footer />
    </>
  )
}