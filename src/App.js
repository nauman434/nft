import React from "react";
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, NFT } from "./Pages";
import { Navbar, More_Footer } from "./Components/Home_Page";
import styles from "./style";

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);

  return scrollDirection;
};


const App = () => {

  const scrollDirection = useScrollDirection()

  return (
    <div className="">

      <div className={`${scrollDirection === 'down' ? '-top-[100px]' : 'top-0'} sticky top-0 z-10 transition-all duration-500`}>
      <div className="bg-dark w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter} `}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
      </div>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nft' element={<NFT />} />
      </Routes>

      <div>
      <div className="w-full overflow-hidden bg-grey">
        <div className={`${styles.paddingX} ${styles.paddingY} `}>
          <div className={`${styles.boxWidth}`}>
            <More_Footer />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
