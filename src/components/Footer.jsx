import React from 'react';


function Footer () {
    return (
        <footer class="bg-secondary">
            <div class="max-w-screen-xl px-24 py-16 mx-auto sm:px-6 ">
                <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div class="text-white grid grid-cols-2 gap-8 xs:grid-cols-1 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                    <h4 class="text-4xl text-white font-extralight">
                        Adresse
                    </h4>
                    <section class="text-white flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                       <p>Find os her:</p>
                       <p>Vestervænget 232, 30.sal</p>
                       <p>6574 Øster Nørup</p>
                       <p>Danmark</p>
                    </section>
                    </div>
                    <div>
                    <h4 class="text-4xl text-white font-extralight">
                        Kontakt
                    </h4>
                    <section class="text-white flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                       <p>Kontakt os her:</p>
                       <p>email@mail.dk</p>
                       <p>Tlf: 0192 3023</p>
                    </section>
                    </div>
                    <div>
                    <h4 class="text-4xl text-white font-extralight">
                        Politik
                    </h4>
                    <section class="text-white flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                       <a class="hover:opacity-75 cursor-pointer" href="#">Vores politikker:</a>
                       <a class="hover:opacity-75 cursor-pointer" href="#">Privatlivspolitik</a>
                       <a class="hover:opacity-75 cursor-pointer" href="#">Cookiepolitik</a>
                    </section>
                    </div>
                    <div>
                    <p class="text-4xl text-white font-extralight">
                        Social Media
                    </p>
                    <div>
                    <div class="flex mt-8 space-x-6 text-gray-600">
                    <a class="hover:opacity-75" href="http://www.facebook.com" target="_blank" rel="noreferrer">
                        <span class="sr-only"> Facebook </span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                    </a>
                    <a class="hover:opacity-75" href="http://www.linkedin.com/" target="_blank" rel="noreferrer">
                        <span class="sr-only"> LinkedIn </span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M2 2a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm3.313 19H3V8.86h2.313V21zm-.057-11.544a1.67 1.67 0 00-1.56-1.13c-1.158 0-2.088.97-2.088 2.16 0 1.182.93 2.16 2.088 2.16h.023c1.16 0 2.088-.978 2.088-2.16a2.166 2.166 0 00-2.52-2.16H3.112v-.85h2.144v-2.74H3V8.86h2.313v-.9c0-2.183 1.368-4.136 3.39-4.136 1.215 0 2.02.646 2.357 1.22h.032V3.958h2.338v3.57h-1.65a2.14 2.14 0 00-.022.3c0 1.086.92 1.96 2.062 1.96 1.155 0 1.94-.774 2.25-1.475h1.63L11.256 9.93v2.74h1.83l.197-.223 1.933-2.182h2.202L12.114 16.8z" clipRule="evenodd" />
                        </svg>
                    </a>
                    </div>
                    </div>
                </div>
                </div>
                <p class="mt-8 text-xs text-gray-800">
                © 2024 Leo-lov
                </p>
            </div>
            </div>
        </footer>
    )
}

export default Footer;