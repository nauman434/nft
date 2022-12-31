import React from 'react';
import { Navbar, Hero, Supported, Trending_NFTS, Top_Categories, Top_Collection, More_Footer } from "../Components/Home_Page";
import styles from "../style";


const Home = () => {
  return (
    <div>
      
      <div className="w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.paddingY}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden ">
        <div className={`${styles.paddingX} ${styles.paddingY} `}>
          <div className={`${styles.boxWidth}`}>
            <Trending_NFTS />
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden ">
        <div className={`${styles.paddingX} ${styles.paddingY} `}>
          <div className={`${styles.boxWidth}`}>
            <Top_Collection />
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden ">
        <div className={`${styles.paddingX} ${styles.paddingY} `}>
          <div className={`${styles.boxWidth}`}>
          <Top_Categories/>
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden ">
        <div className={`${styles.paddingX} ${styles.paddingY} `}>
          <div className={`${styles.boxWidth}`}>
          <Supported />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home