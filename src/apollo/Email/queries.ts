import { gql } from "apollo-boost"

export const SEND_EMAIL = gql`
  mutation sendEmailToHost($email: String!, $subject: String!, $html: String!) {
    sendEmailToHost(email: $email, subject: $subject, html: $html)
  }
`
