import Advantages from "./mainPageComponents/Advantages/Advantages";
import Footer from "./mainPageComponents/Footer/Footer";
import GetStarted from "./mainPageComponents/GetStarted";
import HeaderMain from "./mainPageComponents/Header/headerMain";
import Hero from "./mainPageComponents/HeroComponents/Hero";
import Join from "./mainPageComponents/Join";
import Trusted from "./mainPageComponents/Trusted";
import WhatPeopleSay from "./mainPageComponents/WhatPeopleSay/WhatPeopleSay";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <HeaderMain />
      <Hero />
      <Trusted />
      <Advantages />
      <GetStarted />
      <WhatPeopleSay />
      <Join />
      <Footer />
    </div>
  );
}
