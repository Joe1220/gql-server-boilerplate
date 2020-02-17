import * as React from "react"
import Link from "next/link"
import cx from "classnames"

import { ILink } from "./types"
import styles from "./_Link.scss"

/**
 * Basic Next Link Component(with a tag)
 */
const BasicLink: React.FC<ILink> = ({ href = "/", as, className, children }) => {
  let _className = cx(styles.a__btn, className)
  return (
    <Link href={href} as={as}>
      <a className={_className}>{children}</a>
    </Link>
  )
}

export default BasicLink
