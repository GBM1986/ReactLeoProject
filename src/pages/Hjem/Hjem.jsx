import React from 'react';
import Navbar  from '../../components/Navbar.jsx';

function Hjem() {
    return (
      <div>
        <Navbar />
        <main className="hovedkontent">
          <section id="banner" class="banner">
            <img className='relative h-[100vh] w-full object-cover' src="src/Images/LeoLovOnePage/MainImage.jpg" alt="Header Image" />
          </section>
        </main>
      </div>
    );
  }

  export default Hjem