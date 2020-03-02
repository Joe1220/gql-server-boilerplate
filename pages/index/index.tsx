import * as React from "react"
import { NextPage } from "next"
import { bindActionCreators, AnyAction, Dispatch } from "redux"
import { connect } from "react-redux"

import Layout from "src/components/templates/ClockLayout"
import Button from "src/components/atoms/Button"
import styles from "./_index.scss"
import dSyles from "src/components/templates/ClockLayout/_ClockLayout.scss"
import { RootState } from "src/store/reducer"
import {
  timeStopStart,
  timeStopReset,
  timeStopStop,
  timeStopLab
} from "src/store/modules/time/actions"
import WatchForm from "src/components/molecules/WatchForm"
import WatchLabs from "src/components/organisms/WatchLabs"

type IProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

/**
 * Stop watch page
 */
const IndexPage: NextPage<IProps> = ({
  milliseconds,
  isRunning,
  labs,
  timeStopStart,
  timeStopStop,
  timeStopReset,
  timeStopLab
}) => {
  return (
    <Layout>
      <div className={dSyles["t__clocklayout__panel"]}>
        <WatchForm milliseconds={milliseconds} />
        <div>
          {isRunning ? (
            <Button className={styles["mainpage__btn--lab"]} onClick={() => timeStopLab()}>
              lab
            </Button>
          ) : (
            <Button className={styles["mainpage__btn--reset"]} onClick={() => timeStopReset()}>
              reset
            </Button>
          )}
          {isRunning ? (
            <Button className={styles["mainpage__btn--stop"]} onClick={() => timeStopStop()}>
              stop
            </Button>
          ) : (
            <Button className={styles["mainpage__btn--start"]} onClick={() => timeStopStart()}>
              start
            </Button>
          )}
        </div>
      </div>
      <div className={dSyles["t__clocklayout__subs"]}>
        {labs.length > 0 && <WatchLabs labs={labs} />}
      </div>
    </Layout>
  )
}

const mapStateToProps = (state: RootState) => ({
  milliseconds: state.time.timeStop.milliseconds,
  isRunning: state.time.timeStop.isRunning,
  labs: state.time.timeStop.labs
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  timeStopStart: bindActionCreators(timeStopStart, dispatch),
  timeStopStop: bindActionCreators(timeStopStop, dispatch),
  timeStopReset: bindActionCreators(timeStopReset, dispatch),
  timeStopLab: bindActionCreators(timeStopLab, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)
