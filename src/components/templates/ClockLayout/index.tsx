import * as React from "react"
import styles from "./_ClockLayout.scss"

import Navigation from "src/components/organisms/Navigation"

const Layout: React.FC = ({ children }) => (
  <main className={styles["t__clocklayout__container"]}>
    <Navigation />
    <div className={styles["t__clocklayout__content"]}>{children}</div>
  </main>
)

export default Layout
