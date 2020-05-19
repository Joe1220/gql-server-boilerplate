import React, { useState } from "react"

import Icon from "src/components/atoms/BaseIcon"
import RequestModal from "src/components/organisms/RequestModal"
import styles from "./_Footer.scss"
import { HostGit } from "src/shared/config"

const Footer = () => {
  const [isShow, setShow] = useState(false)
  return (
    <footer className={styles["o__footer__container"]}>
      <span className={styles["o__footer__row"]}>
        This site is developed in React.js by
        <a className={styles["o__footer__link"]} href={HostGit}>
          Jo Seung Hyun
        </a>
      </span>
      <div
        className={`${styles.o__footer__request} ${styles.o__footer__row}`}
        onClick={() => setShow(true)}
      >
        문의사항 <Icon icon="envelope" size="1x" color="white" />
      </div>
      <RequestModal isShow={isShow} handleClose={() => setShow(false)} />
    </footer>
  )
}

export default Footer
