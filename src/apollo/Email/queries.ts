import { gql } from "apollo-boost"

export const SEND_EMAIL = gql`
  mutation sendEmailToHost($info: SendEmailToHost) {
    sendEmailToHost(info: $info)
  }
`
