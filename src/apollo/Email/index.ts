import { useMutation } from "@apollo/react-hooks"

import { SEND_EMAIL } from "./queries"
import { SendEmailToHost } from "./types"

export const sendEmailToHost = ({ email, subject, html }: SendEmailToHost) => {
  useMutation(SEND_EMAIL, {
    variables: {
      email,
      subject,
      html,
    },
  })
}
