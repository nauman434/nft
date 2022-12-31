import React from 'react'
import {Banner, Detail, More} from '../Components/NFT_Page'
import styles from "../style";

const NFT = () => {
  return (
    <div>
      <Banner/>
      <div className="w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.paddingY}`}>
          <div className={`${styles.boxWidth}`}>
            <Detail/>
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.paddingY}`}>
          <div className={`${styles.boxWidth}`}>
            <More/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NFT