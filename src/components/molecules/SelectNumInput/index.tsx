import React from "react"
import Select from "src/components/atoms/Select"
import classNames from "classnames/bind"

import scssStyles from "./_SelectNumInput.scss"
import Icon from "src/components/atoms/BaseIcon"
import Button from "src/components/atoms/Button"
import { ISelectNumInputProps } from "./types"
import styles from "./SelectNumInput.styles"

const cx = classNames.bind(scssStyles)

/** 숫자를 선택할 수 있는(hour, minutes,,,)input, input값을 조절할 수 있는 button */
const SelectNumInput: React.FC<ISelectNumInputProps> = ({
  label,
  minusChange,
  addChange,
  value,
  minusDisbled,
  addDisabled,
  ...props
}) => {
  return (
    <div className={cx("m__selectnum__container")}>
      <label className={cx("m__selectnum__label")}>{label}</label>
      <span className={cx("m__selectnum__content")}>
        <Button
          className={cx("m__selectnum__btn", {
            disabled: minusDisbled
          })}
          onClick={minusChange}
          disabled={minusDisbled}
        >
          <Icon icon={"minus"} />
        </Button>
        <Select
          styles={styles}
          className={cx("m__selectnum__select")}
          backspaceRemovesValue
          value={value}
          {...props}
        />
        <Button
          className={cx("m__selectnum__btn", {
            disabled: addDisabled
          })}
          onClick={addChange}
          disabled={addDisabled}
        >
          <Icon icon={"plus"} />
        </Button>
      </span>
    </div>
  )
}

export default SelectNumInput
