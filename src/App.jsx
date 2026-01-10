import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import '../src/assets/style/style.css';
import Navbar from './assets/Pages/Navbar';
import Hero from './components/homepage/Hero';
import Process from './components/homepage/Process';
import Testimonials from './components/homepage/Testimonials';
import Faq from './components/homepage/homeFaq';
import AboutUs from './assets/Pages/About';
import Contact from './assets/Pages/Contact';
import Footer from './assets/Pages/Footer';
import Blogs from './components/homepage/Blogs';
import Career from './assets/Pages/Career';
import Research from './assets/Pages/Research';
import Data from './assets/Pages/Data';
import Editorial from './components/homepage/Editorial';
import Publication from './assets/Pages/Publication';
import Academic from './assets/Pages/Academic';
import Quickoffers from './components/homepage/Quickoffers';
import Subject from './components/homepage/Subject';
import Remind from './assets/Pages/remind';
import Booknow from './assets/Pages/Booknow';
import HeroSlider from './components/serviceoverview/heroService';
import BelowHeroStressRelief from './components/serviceoverview/relief';
import ModulesByStage from './components/serviceoverview/modules';
import Serviceover from './components/serviceoverview/serviceover';
import SamplesDownloads from './components/serviceoverview/sampledownload';
import ResearcherTrust from './components/serviceoverview/researcherstrust';
import FAQ from './components/serviceoverview/faqservices';
import HowItWorksInlineWe from './components/serviceoverview/howitworks';
import DataHero from './components/dataservices/hero';
import StartWhereYouAre from './components/dataservices/startWhereData';
import Chooseyourfield from './components/dataservices/Chooseyourfield';
import HowWeWork from './components/dataservices/Howwework';
import PricingData from './components/dataservices/pricingData';
import SampleExcerpts from './components/dataservices/sampleExcerptsData';
import Requestasubject from './components/dataservices/Requestasubject';
import TemplatesDownloadSection from './components/dataservices/TemplatesData';
import Faqdata from './components/dataservices/Faqdata';
import DataDefendCTA from './components/dataservices/DataDefendCTA';
import WhatYouGetContent from './components/dataservices/whatYouGetContent';
import Heroresearchplanning from './components/researchplanning/heroresearchplanning';
import Mostresearchproposals from './components/researchplanning/Mostresearchproposals ';
import Chooseyoursupport from './components/researchplanning/Chooseyoursupport';
import Howweworkre from './components/researchplanning/Howweworkre';
import WhattoShare from './components/researchplanning/Whattoshare';
import Freetemplates from './components/researchplanning/Freetemplates';
import Workwith from './components/researchplanning/Workswith';
import QuoteNextStepsModal from './components/researchplanning/QuoteNextStepsModal';
import PopularServices from './components/homepage/PopularServices';
import ChoosePath from './components/homepage/ChoosePath';
import ProcessSteps from './components/homepage/ProcessSteps';
import AcademicHero from './components/academicpresentation/AcademicHero';
import Madeforyour from './components/academicpresentation/Madeforyour';
import Choosetheright from './components/academicpresentation/Choosetheright';
import Readyforyour from './components/academicpresentation/Readyforyour';
import Whyresearcherstrust from './components/academicpresentation/Whyresearcherstrust';
import HowItWorksacademic from './components/academicpresentation/HowItWorksacademic';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* HOME */}
        <Route path="/" element={
          <>
            <Hero />
            <Process />
            <Subject />
            <PopularServices />
            <ChoosePath />
            <ProcessSteps />
            <Editorial />
            <Quickoffers />
            <Blogs />
            <Testimonials />
            <Faq />
          </>

        }
        />
        <Route path="/remind" element={<Remind />} />
        <Route path="/booknow" element={<Booknow />} />
        <Route path="/quote-nextsteps" element={<QuoteNextStepsModal />} />

        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/services" element={<HeroSlider />} /> */}
        {/* <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/Research" element={<Research />} />
        <Route path="/Data" element={<Data />} />
        <Route path="/Publication" element={<Publication />} />
        <Route path="/Academic" element={<Academic />} /> */}

        {/* Servicesoverview */}
        <Route
          path="/services"
          element={
            <>
              <HeroSlider />
              <BelowHeroStressRelief />
              <ModulesByStage />
              <HowItWorksInlineWe />
              <Serviceover />
              <SamplesDownloads />
              <ResearcherTrust />
              <FAQ />
            </>
          }
        />

        {/* ResearchPlanning */}
        <Route
          path="/services/data-services"
          element={
            <>
              <DataHero />
              {/* <PathSelector /> */}
              <StartWhereYouAre />
              <WhatYouGetContent />
              <Chooseyourfield />
              <HowWeWork />
              <PricingData />
              <SampleExcerpts />
              <Requestasubject />
              <TemplatesDownloadSection />
              <Faqdata />
              <DataDefendCTA />
            </>
          }
        />
        {/* DataServices */}

        <Route
          path='/services/research-planning'
          element={
            <>
              <Heroresearchplanning />
              <Mostresearchproposals />
              <Chooseyoursupport />
              <Howweworkre />
              <WhattoShare />
              <Freetemplates />
              <Requestasubject />
              <Workwith />
              <Faqdata />
              <DataDefendCTA />
              {/* <QuoteNextStepsModal/> */}

            </>
          }
        />
        <Route
          path='/services/academic-presentation'
          element={
            <>
              <AcademicHero/>
              <Madeforyour/>
              <Readyforyour/>
              <Choosetheright/>
              <Whyresearcherstrust/>
              <HowItWorksacademic/>

            </>
          }
        />

      </Routes>



      <Footer />
    </Router>
  );
}


export default App;
