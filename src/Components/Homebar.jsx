import React from 'react';
import Services from '../Home/Services';

//import Section2 from '../Home/Section2';
import AchievementsSection from '../Home/AchivmentSection';
import AppointmentForm from '../Home/AppointmentForm';
import GaugeProgress from '../Home/GuageProgress';
import FAQ from  '../Home/FAQ'
import NewsLetter from '../Home/NewsLetter'
import CaseStudy from '../Home/CaseStudy';
import HeroSection from '../HeroPage/HeroSection'
import Research from '../Home/Research';
 import Footer from '../Common/Footer';
import Progress from '../Home/Progress';
import HealthPackages from '../Home/HealthPackages';
//  import Card2 from '../Home/Card2'


const Homebar = () => {
  return (<>
    <HeroSection/>
    <Services/>
    {/* <Card2/> */}
    {/* <Section2/> */}
    <Progress/>
    <AchievementsSection/>
    <CaseStudy/>
    <AppointmentForm/>
    <GaugeProgress
        progress={75}
        title=" Vaccine Development"
        description="Patholab Laboratory is equipped with best world class machinery & reagents."
      />
       <GaugeProgress
        progress={88}
        title=" Clinic Management"
        description="Patholab Laboratory is equipped with best world class machinery & reagents."
      /> 
      <FAQ/>
      <Research/>
      <HealthPackages/>
      <NewsLetter/>
   
      <Footer/>
   
    </>
  );
};

export default Homebar;
