import React, { useState } from "react"
import { NextPage } from "next"
import { bindActionCreators, AnyAction, Dispatch } from "redux"
import { connect } from "react-redux"

import Layout from "src/components/templates/ClockLayout"
import Button from "src/components/atoms/Button"
import styles from "./_index.scss"
import dSyles from "src/components/templates/ClockLayout/_ClockLayout.scss"
import { RootState } from "src/store/reducer"
import { timerStart, timerReset, timerStop, timerAudioStart } from "src/store/modules/time/actions"
import TimerModal from "src/components/organisms/TimerModal"
import TimeForm from "src/components/molecules/TimeForm"
import TimerAudioModal from "src/components/organisms/TimerAudioModal"

type IProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

/**
 * Stop watch page
 */
const IndexPage: NextPage<IProps> = ({
  isRunning,
  timerStart,
  timerReset,
  timerStop,
  milliseconds,
  audioRunning,
  audio
}) => {
  const [isShow, setIsShow] = useState(false)

  return (
    <Layout>
      <div className={dSyles["t__clocklayout__panel"]}>
        <p className={dSyles["t__clocklayout__title"]}>timer</p>
        <TimeForm milliseconds={milliseconds} isShowMs={false} />
        <TimerModal handleClose={() => setIsShow(false)} isShow={isShow} />
        <TimerAudioModal
          src={audio}
          handleClose={() => timerReset()}
          isShow={audioRunning}
          milliseconds={milliseconds}
        />
        <div>
          <Button
            className={styles["timer__btn--reset"] + " " + dSyles["t__clocklayout__btn"]}
            onClick={() => timerReset()}
          >
            reset
          </Button>
          <Button
            className={styles["timer__btn--edit"] + " " + dSyles["t__clocklayout__btn"]}
            onClick={() => setIsShow(true)}
          >
            edit
          </Button>
          {isRunning ? (
            <Button className={styles["timer__btn--stop"]} onClick={() => timerStop()}>
              stop
            </Button>
          ) : (
            <Button className={styles["timer__btn--start"]} onClick={() => timerStart()}>
              start
            </Button>
          )}
        </div>
      </div>
    </Layout>
  )
}

const mapStateToProps = (state: RootState) => ({
  isRunning: state.time.timer.isRunning,
  milliseconds: state.time.timer.milliseconds,
  audio: state.time.timer.audio,
  audioRunning: state.time.timer.audioRunning
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  timerStart: bindActionCreators(timerStart, dispatch),
  timerReset: bindActionCreators(timerReset, dispatch),
  timerStop: bindActionCreators(timerStop, dispatch),
  timerAudioStart: bindActionCreators(timerAudioStart, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)
