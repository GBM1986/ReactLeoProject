import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


function Omleolov () {
    return (
        <div>
            <Navbar />
            <div id="about" className="relative bg-white overflow-hidden mt-16">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                            fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                            <polygon points="50,0 100,0 50,100 0,100"></polygon>
                        </svg>

                        <div className="pt-1"></div>

                        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="py-20 sm:text-center lg:text-left">
                                <h2 className="my-6 text-2xl tracking-tight font-extrabold text-primary sm:text-3xl md:text-4xl">
                                    Om Leo-Lov
                                </h2>
                                <p className="mb-4 ">
                                    Familieret er en ret alle har. Har du en familie har du sikkert ret til familieret. Medmindre du altid er den der tror du har ret. Vi desværre ikke hjælpe dig.
                                </p>

                                <p className="mb-4 ">
                                    Ejendomsret Har du købt et hus og fortrudt eller er du blevet svindlet? Fortvivl ej. Vi kan hjælpe dig med at komme af med huset, eller eventuelt sagsøge vedkommende der solgte dig det.
                                </p>

                                <p className="mb-4">
                                    Konkurs Er du gået konkurs ville vi rigtig gerne hjælpe, men det kan vi desværre ikke. Vi er alle advokater med fede biler her, så har du ingen penge får du ingen hjælp.
                                </p>

                                <p className="mb-4 mr-6">
                                    Selskabsret. Ved du heller aldrig hvilken ret du skal servere til et stort selskab? Heller ikke os. Heldigvis har vi en mand i udlandet der ved en masse om dette, så henvend dig i dag.
                                </p>

                                <p className="mb-8 mr-8">
                                    Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod altid forventning skulle opleve at støde på et retsligt problem som Leo-lov ikke kan løse, får du halvdelen af beløbet igen.
                                </p>

                                <p className="mb-8">
                                    Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!
                                </p>
                            </div>
                        </main>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img className="h-56 w-full object-cover object-top sm:h-full px-4 py-4 md:h-full lg:w-full lg:h-full" src="src/Images/LeoLovOnePage/Building.jpg" alt="Building"></img>
                </div>
            </div>
            <Footer />
        </div>
        )
}

export default Omleolov;