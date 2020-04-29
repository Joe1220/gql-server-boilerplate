import React from "react"

import Link from "src/components/atoms/Link"
import NavMenuToggle from "src/components/organisms/NavMenuToggle"
import styles from "./_Navigation.scss"
import { appTitle } from "src/shared/config"

const Navigation: React.FC = () => (
  <nav className={styles["o__nav__container"]}>
    <Link href="/" className={styles["o__nav__link"]}>
      <h4>{appTitle}</h4>
    </Link>
    <div className={styles["o__nav__content--desktop"]}>
      <Link href="/" className={styles["o__nav__link"]}>
        <h5>Stop_Watch</h5>
      </Link>
      <Link href="/timer" className={styles["o__nav__link"]}>
        <h5>Timer</h5>
      </Link>
      <Link href="/time" className={styles["o__nav__link"]}>
        <h5>Time</h5>
      </Link>
    </div>
    <div className={styles["o__nav__content--mobile"]}>
      <NavMenuToggle />
    </div>
  </nav>
)

export default Navigation
