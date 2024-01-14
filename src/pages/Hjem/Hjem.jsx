import React from 'react';
import Navbar from '../../components/Navbar.jsx';

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

        <section className="container mx-auto px-8 py-8 lg:py-40 relative z-10 flex flex-col items-end  lg:top-[10px] w-full">
          <div className="text-container mb-[120px]">
            <h2 className="block antialiased tracking-normal !leading-3 xs:!text-[60px] sm:!text-[100px] md:!text-[120px] mt-20 lg:!text-[140px] text-white">
              <span className="text-primary sm:!text-[100px] md:!text-[120px] lg:!text-[140px]">Leo</span>-love
            </h2>
            <p className="block antialiased text-xl ml-4 mt-16 leading-snu text-inherit w-full font-normal !text-white min-xs:!text-xs min-sm:!text-sm min-md:!text-lg min-lg:!text-xl">
              Lov og ret kan være et plaster! Hvis du ellers har knaster!
            </p>
          </div>
          <div className="mt-[260px] grid grid-cols-1 gap-8 lg:grid-cols-4">
            <div className="relative flex flex-col bg-white text-gray-700 shadow-md  lg:min-h-[20rem] items-end overflow-hidden rounded-xl">
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
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-primary text-center mb-4">
                  Ejendomsret
                </h4>
                <p className="block antialiased font-sans text-base font-light leading-relaxed text-gray-500 text-center">
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
                  Er du gået konkurs ville vi rigtig gerne hjælpe, but we
                  cannot. We are all lawyers here with fancy cars, so if you
                  have no money, you get no help.
                </p>
              </div>
            </div>
            <div className="relative flex flex-col bg-white  text-gray-700 shadow-md lg:relative grid lg:min-h-[20rem] items-end overflow-hidden rounded-xl">
              <div className="h-80 w-full bg-white rounded-xl shadow-xl p-6 relative flex flex-col items-center justify-center">
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-primary text-center mb-4">
                  Selskabsret
                </h4>
                <p className="block antialiased font-sans text-base font-light leading-relaxed text-gray-500 text-center">
                  Company law. Do you never know which law to serve at a big
                  party? Neither do we. Fortunately, we have a man abroad who
                  knows a lot about this, so contact us today.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
        <div className="grid grid-cols-2 grid-rows-5">
            <div className="row-span-5 border-8 border-secondary"><img src="" alt="" /></div>
            <div className="row-span-5 border-8 border-secondary">2</div>
        </div>
        </section>
      </main>
    </div>
  );
}

export default Hjem;
