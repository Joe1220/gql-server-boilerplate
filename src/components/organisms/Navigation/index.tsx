import React from "react"

import Link from "src/components/atoms/Link"
import styles from "./_Navigation.scss"
import { appTitle } from "src/constants/config"

const Navigation: React.FC = () => (
  <nav className={styles["o__nav__container"]}>
    <Link href="/" className={styles["o__nav__link"]}>
      <h4>{appTitle}</h4>
    </Link>
  </nav>
)

export default Navigation
