import React, { useState } from "react"

import WatchForm from "src/components/molecules/WatchForm"
import styles from "./_WatchLabs.scss"
import { handleSort } from "src/store/modules/time/utils"

type IProps = {
  labs: number[]
}

const WatchLabs: React.FC<IProps> = ({ labs }) => {
  const [isAsc, setIsAsc] = useState(true)
  let list = handleSort(labs, isAsc)
  const handleAscSort = () => {
    setIsAsc(!isAsc)
  }
  return (
    <table className={styles["o__watchlabs__container"]} onClick={handleAscSort}>
      <thead>
        <tr className={styles["o__watchlabs__head"]}>
          <th>count</th>
          <th>time</th>
        </tr>
      </thead>
      <tbody>
        {list &&
          list.length > 0 &&
          list.map((lab, index) => (
            <tr key={index}>
              <td>{lab.index}</td>
              <td>
                <WatchForm milliseconds={lab.value} size="small" />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}

export default WatchLabs
