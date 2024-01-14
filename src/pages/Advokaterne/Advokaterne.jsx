import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function Advokatrerne() {
    return (
        <div>
            <Navbar />
            <main>
                <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                    <div className="text-center pb-12">
                        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
                            Tjek vores fantastiske teammedlemmer
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Team Member 1 */}
                        <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                            <div className="mb-8">
                                <img className="object-center object-cover rounded-full h-36 w-36" src="https://www.artmajeur.com/medias/standard/b/c/bctofficial/artwork/10266640_heinsenberg-walter-white.jpg" alt="photo" />
                            </div>
                            <div className="text-center">
                                <p className="text-xl text-gray-700 font-bold mb-2">Walter White</p>
                                <p className="text-base text-gray-400 font-normal">Cook</p>
                            </div>
                        </div>

                        {/* Team Member 2 */}
                        <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                            <div className="mb-8">
                                <img className="object-center object-cover rounded-full h-36 w-36" src="https://i.guim.co.uk/img/media/0a282d9a2211bca156a543750eb479736357c77b/370_242_600_360/master/600.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=4b6adf12d6ebbe92d045eefe772c28ed" alt="photo" />
                            </div>
                            <div className="text-center">
                                <p className="text-xl text-gray-700 font-bold mb-2">Mike Ehrmantraut</p>
                                <p className="text-base text-gray-400 font-normal">Muscle</p>
                            </div>
                        </div>

                        {/* Team Member 3 */}
                        <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                            <div className="mb-8">
                                <img className="object-top object-cover rounded-full h-36 w-36" src="https://upload.wikimedia.org/wikipedia/en/6/69/Gustavo_Fring_BCS_S3E10.png" alt="photo" />
                            </div>
                            <div className="text-center">
                                <p className="text-xl text-gray-700 font-bold mb-2">Gus Fring</p>
                                <p className="text-base text-gray-400 font-normal">Los pollos</p>
                            </div>
                        </div>

                        {/* Team Member 4 */}
                        <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                            <div className="mb-8">
                                <img className="object-top object-cover rounded-full h-36 w-36" src="https://i.pinimg.com/736x/dc/dd/3d/dcdd3d797f7d3b8f027c6eebc74e4c28.jpg" alt="photo" />
                            </div>
                            <div className="text-center">
                                <p className="text-xl text-gray-700 font-bold mb-2">Jesse Pinkman</p>
                                <p className="text-base text-gray-400 font-normal">Cook</p>
                            </div>
                        </div>

                        {/* Team Member 5 */}
                        <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                            <div className="mb-8">
                                <img className="object-top object-cover rounded-full h-36 w-36" src="https://static.wikia.nocookie.net/inconsistently-admirable/images/b/b5/Breaking-bad-hank.jpg" alt="photo" />
                            </div>
                            <div className="text-center">
                                <p className="text-xl text-gray-700 font-bold mb-2">Hank Schrader</p>
                                <p className="text-base text-gray-400 font-normal">Cop</p>
                            </div>
                        </div>

                        {/* Team Member 6 */}
                        <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                            <div className="mb-8">
                                <img className="object-top object-cover rounded-full h-36 w-36" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/34/Jimmy_McGill_BCS_S3.png/220px-Jimmy_McGill_BCS_S3.png" alt="photo" />
                            </div>
                            <div className="text-center">
                                <p className="text-xl text-gray-700 font-bold mb-2">Saul Goodman</p>
                                <p className="text-base text-gray-400 font-normal">Lawyer</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Advokatrerne;
