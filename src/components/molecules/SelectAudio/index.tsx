import React from "react"
import Select from "src/components/atoms/Select"
import classNames from "classnames/bind"

import scssStyles from "./_SelectAudio.scss"
import Button from "src/components/atoms/Button"
import { ISelectAudio } from "./types"
import styles from "./SelectAudio.styles"
import Icon from "src/components/atoms/Icon"
import Audio from "src/components/atoms/Audio"
import { useAudioHooks } from "./hooks"

const cx = classNames.bind(scssStyles)

/** 음악을 선택할 수 있는 input, 음악을 재생하는 button */
const SelectHook: React.FC<ISelectAudio> = ({ label, value, timerAudioEdit, ...props }) => {
  const { _ref, play, handlePlay, handleOnEnded } = useAudioHooks()
  return (
    <div className={cx("m__selectaudio__container")}>
      <label className={cx("m__selectaudio__label")}>{label}</label>
      <span className={cx("m__selectaudio__content")}>
        <Select
          styles={styles}
          className={cx("m__selectaudio__select")}
          backspaceRemovesValue
          value={value}
          {...props}
        />
        <Button className={cx("m__selectaudio__btn")} onClick={handlePlay}>
          {play ? <Icon icon="pause" /> : <Icon icon="play" />}
        </Button>
        <Audio src={value.value} onEnded={handleOnEnded} ref={_ref} />
      </span>
    </div>
  )
}

export default SelectHook
