import * as React from "react"
import styles from "./_ClockLayout.scss"

import Navigation from "src/components/organisms/Navigation"
import Footer from "src/components/organisms/Footer"

const Layout: React.FC = ({ children }) => (
  <main className={styles["t__clocklayout__container"]}>
    <Navigation />
    <div className={styles["t__clocklayout__content"]}>{children}</div>
    <div className={styles["t__clocklayout__footer"]}>
      <Footer />
    </div>
  </main>
)

export default Layout
