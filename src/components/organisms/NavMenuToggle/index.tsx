import React from "react"

import MenuToggle from "src/components/molecules/MenuToggle"
import Link from "src/components/atoms/Link"
import styles from "./_NavMenuToggle.scss"

const NavMenuToggle: React.FC = () => {
  return (
    <span>
      <MenuToggle>
        <div className={styles["o__navi__dropdown"]}>
          <Link href="/" className={styles["o__navi__link"]}>
            <p>Stopwatch</p>
          </Link>
          <Link href="/timer" className={styles["o__navi__link"]}>
            <p>Timer</p>
          </Link>
        </div>
      </MenuToggle>
    </span>
  )
}

export default NavMenuToggle
