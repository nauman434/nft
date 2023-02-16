import React from 'react';
import Form from "../Components/Upload_Page/Form";
import styles from "../style";

const Upload = () => {
  return (
    <div className="w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.paddingY}`}>
          <div className={`${styles.boxWidth}`}>
            <Form />
          </div>
        </div>
      </div>
  )
}

export default Upload