import React from "react"

import Link from "src/components/atoms/Link"
import styles from "./_Navigation.scss"

const Navigation: React.FC = () => (
  <nav className={styles["o__nav__container"]}>
    <Link href="/" className={styles["o__nav__link"]}>
      fWatch
    </Link>
  </nav>
)

export default Navigation
