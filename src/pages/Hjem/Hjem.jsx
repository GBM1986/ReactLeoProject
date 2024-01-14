import React from 'react';
import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';

function Hjem() {
  return (
    <div>
      <Navbar />
      <main className="hovedkontent relative">
        <section id="banner" className="banner relative">
          <img
            className="absolute h-[100vh] w-full object-cover"
            src="src/Images/LeoLovOnePage/MainImage.jpg"
            alt="Header Image"
          />
        </section>

        <section className="container mx-auto px-8 py-8 lg:py-40 relative z-10 flex flex-col items-end  lg:top-[60px] w-full">
          <div className="text-container mb-[280px]">
            <h2 className="block antialiased tracking-normal !leading-3 xs:!text-[60px] sm:!text-[100px] md:!text-[120px] mt-20 lg:!text-[140px] text-white">
              <span className="text-primary sm:!text-[100px] md:!text-[120px] lg:!text-[140px]">Leo</span>-love
            </h2>
            <p className="block antialiased text-xl ml-4 mt-16 leading-snu text-inherit w-full font-normal !text-white min-xs:!text-xs min-sm:!text-sm min-md:!text-lg min-lg:!text-xl">
              Lov og ret kan være et plaster! Hvis du ellers har knaster!
            </p>
          </div>
          <div className="mt-[260px] grid grid-cols-1 gap-8 lg:grid-cols-4">
            <div className="relative flex flex-col bg-white text-gray-700 shadow-md  lg:relative grid lg:min-h-[20rem] items-end overflow-hidden rounded-xl">
              <div className="h-80 w-full bg-white rounded-xl shadow-xl p-6 relative flex flex-col items-center justify-center">
                <h4 className="block antialiased tracking-normal text-2xl font-semibold leading-snug text-primary mb-4">
                  Familieret
                </h4>
                <p className="block antialiased text-base font-light leading-relaxed text-gray-500">
                  Familieret er en ret alle har. Har du en familie har du
                  sikkert ret til familieret. Medmindre du altid er den der
                  tror du har ret. Vi desværre ikke hjælpe dig.
                </p>
              </div>
            </div>
            <div className="relative flex flex-col bg-white  text-gray-700 shadow-md lg:relative grid lg:min-h-[20rem] items-end overflow-hidden rounded-xl">
              <div className="h-80 w-full bg-white rounded-xl shadow-xl p-6 relative flex flex-col items-center justify-center">
                <h4 className="block antialiased tracking-normal font-inter text-2xl font-semibold leading-snug text-primary text-center mb-4">
                  Ejendomsret
                </h4>
                <p className="block antialiased font-inter text-base font-light leading-relaxed text-gray-500 text-center">
                  Har du købt et hus og fortrudt eller er du blevet svindlet?
                  Fortvivl ej. Vi kan hjælpe dig med at komme af med huset,
                  eller eventuelt sagøge vedkommende der solgte dig det.
                </p>
              </div>
            </div>
            <div className="relative flex flex-col bg-white  text-gray-700 shadow-md lg:relative grid lg:min-h-[20rem] items-end overflow-hidden rounded-xl">
              <div className="h-80 w-full bg-white rounded-xl shadow-xl p-6 relative flex flex-col items-center justify-center">
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-primary text-center mb-4">
                  Konkurs
                </h4>
                <p className="block antialiased font-sans text-base font-light leading-relaxed text-gray-500 text-center">
                  Er du gået konkurs ville vi
                  rigtig gerne hjælpe, men
                  det kan vi desværre ikke. Vi
                  er alle advokater med fede
                  biler her så har du ingen
                  penge får du ingen hjælp
                </p>
              </div>
            </div>
            <div className="relative flex flex-col bg-white  text-gray-700 shadow-md lg:relative grid lg:min-h-[20rem] items-end overflow-hidden rounded-xl">
              <div className="h-80 w-full bg-white rounded-xl shadow-xl p-6 relative flex flex-col items-center justify-center">
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-primary text-center mb-4">
                  Selskabsret
                </h4>
                <p className="block antialiased font-sans text-base font-light leading-relaxed text-gray-500 text-center">
                  Selskabsret. Ved du heller
                  aldrig hvilken ret du skal
                  servere til et stort selskab?
                  Heller ikke os. Heldigvis har
                  vi en mand i udlandet der
                  ved en masse om dette så
                  henvend dig i dag.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='mb-[200px] px-12'>
          <div className="grid grid-cols-2 grid-rows-1  md:grid-cols-1 md:grid-rows-1 sm:grid-cols-1 sm:grid-rows-1 xs:grid-cols-1 xs:grid-rows-1 gap-0">
          <div className="border-8 border-secondary">
              <img
                className='lg:w-full lg:h-full w-full h-auto object-fill'
                src="src/Images/LeoLovOnePage/Money.jpg"
                alt="Money"
              />
            </div>
              <div className="border-8 border-secondary xs:pb-12 md:pb-12 sm:pb-12 md:pb-12">
                <h3 className='block antialiased py-12 tracking-normal font-inter text-2xl font-semibold leading-snug text-primary text-center my-12'>INTET PROBLEM</h3>
                <p className='block antialiased px-16 leading-snu text-inherit w-full font-normal xs:!text-sm sm:!text-sm md:!text-base  lg:!text-xl'>
                  Leo-lov har altid været det bedste advokatfirma i verden.
                  Der er simpelthen ingen der kan måle sig med os. Vi kan løse
                  alle problemer så længe du har penge. Hvis du mod altid
                  forventning skulle oplevel at støde på et retsligt problem
                  som leo-lov ikke kan løse får du halvdelen af beløbet igen.
                  <br />
                  <br />
                  Det er såden vi har skabt en forretning der ikke kan andet
                  end at vokse!
                </p>
                </div>
          </div>
        </section>

        <section className='mb-12 px-12'>
        <div className="grid grid-cols-2 grid-rows-1  md:grid-cols-1 md:grid-rows-1 sm:grid-cols-1 sm:grid-rows-1 xs:grid-cols-1 xs:grid-rows-1 gap-0">
        <div className="border-8 border-secondary xs:pb-12 md:pb-12 sm:pb-12 lg:pb-12">
              <h3 className='block antialiased py-12 tracking-normal font-inter text-2xl font-semibold leading-snug text-primary text-center my-10'>HER BOR VI</h3>
              <p className='block antialiased px-16 leading-snu text-inherit w-full font-normal xs:!text-sm sm:!text-sm md:!text-base  lg:!text-xl'>
                Leo-lov har altid været det bedste advokatfirma i verden.
                Der er simpelthen ingen der kan måle sig med os. Vi kan løse
                alle problemer så længe du har penge. Hvis du mod altid
                forventning skulle oplevel at støde på et retsligt problem
                som leo-lov ikke kan løse får du halvdelen af beløbet igen.
                <br />
                <br />
                Det er såden vi har skabt en forretning der ikke kan andet
                end at vokse!
              </p>
              </div>
        <div className="border-8 border-secondary">
              <img
                className='lg:w-full lg:h-full w-full h-auto object-fill'
                src="src/Images/LeoLovOnePage/Building.jpg"
                alt="Building"
              />
            </div>
        </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}

export default Hjem;
