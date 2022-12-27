import React from "react";
import { Navbar, Hero, Supported, Trending_NFTS, Top_Categories, Top_Collection, Create_Sell, Articles, More_Footer } from "./Components"
import styles from "./style";

function App() {
  return (
    <div className="App">
      <div className="w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
      </div>
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

      {/* 
      <Supported />
      
      
      
      <Create_Sell/>
      <Articles/>
      <More_Footer/> */}
    </div>
  );
}

export default App;
