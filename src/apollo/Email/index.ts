import { useMutation } from "@apollo/react-hooks"

import { SEND_EMAIL } from "./queries"

export const useSendEmailToHost = () => useMutation(SEND_EMAIL)
