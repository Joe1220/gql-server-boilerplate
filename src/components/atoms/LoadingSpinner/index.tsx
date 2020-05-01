import React from "react"

import styles from "./_LoadingSpinner.scss"

const LoadingSpinner: React.FC = () => {
  return (
    <div className={styles.a__loading__container}>
      <div className={styles.a__loading__content}></div>
    </div>
  )
}

export default LoadingSpinner
