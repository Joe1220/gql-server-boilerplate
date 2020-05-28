import React from "react"
import { useForm } from "react-hook-form"
import TextArea from "src/components/atoms/TextArea"
import { toast } from "react-toastify"

import Button from "src/components/atoms/Button"
import Modal from "src/components/molecules/Modal"
import Input from "src/components/atoms/Input/index"
import styles from "./_RequestModal.scss"
import { IRequestModal } from "./types"
import { emailRegex } from "src/shared/regexs"
import { useSendEmailToHost } from "src/apollo/Email"
import Form from "src/components/atoms/Form"

const RequestModal: React.FC<IRequestModal> = ({ isShow, handleClose }) => {
  const { register, errors, handleSubmit } = useForm()
  const [sendEmail, { error }] = useSendEmailToHost()
  const onSubmit = handleSubmit(async (data) => {
    try {
      await sendEmail({ variables: data })
      if (error) {
        console.log("error!")
        handleClose()
        toast.error("send email error")
      } else {
        handleClose()
        toast.info("접수가 완료되었습니다.")
      }
    } catch (error) {
      console.log("send email error: ", error)
      handleClose()
      toast.error("send email error")
    }
  })

  return (
    <div className={styles["o__requestmodal__container"]}>
      <Modal isShow={isShow} handleClose={handleClose}>
        <div className={styles["o__requestmodal__content"]}>
          <h5>문의 메일</h5>
          <Form onSubmit={onSubmit} className={styles["o__requestmodal__form"]}>
            <Input
              name="subject"
              placeholder={"제목"}
              className={styles["o__requestmodal__input"]}
              ref={register({ required: true, maxLength: 20, minLength: 3 })}
            />
            {errors.subject && (
              <p className={styles["o__requestmodal__error"]}>
                3글자 이상, 20글자 이하의 제목을 입력해주세요.
              </p>
            )}
            <Input
              name="email"
              className={styles["o__requestmodal__input"]}
              placeholder={"email"}
              ref={register({ required: true, pattern: emailRegex })}
            />
            {errors.email && (
              <p className={styles["o__requestmodal__error"]}>올바른 이메일을 입력해주세요.</p>
            )}
            <TextArea
              name="html"
              rows={4}
              maxLength={200}
              notResize
              className={`${styles.o__requestmodal__input} ${styles.o__requestmodal__textarea}`}
              placeholder={"내용을 입력해주세요"}
              ref={register({ required: true, minLength: 10, maxLength: 200 })}
            />
            {errors.body && (
              <p className={styles["o__requestmodal__error"]}>
                10글자 이상, 200글자 이하의 본문내용을 작성해주세요.
              </p>
            )}
            <Button className={styles["o__requestmodal__button"]}>보내기</Button>
          </Form>
        </div>
      </Modal>
    </div>
  )
}

export default RequestModal
