import * as React from "react"
import Link from "next/link"

import { ILink } from "./types"
import "./_Link.scss"

/**
 * Basic Next Link Component(with a tag)
 */
const BasicLink: React.FC<ILink> = ({ href = "/", as, children }) => (
  <Link href={href} as={as}>
    <a className={"a__link"}>{children}</a>
  </Link>
)

export default BasicLink
