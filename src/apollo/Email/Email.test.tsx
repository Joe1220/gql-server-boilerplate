import React from "react"
import { MockedProvider } from "@apollo/react-testing"
// import { useMutation } from "@apollo/react-hooks"

import { render, fireEvent } from "@testing-library/react"

import { SEND_EMAIL } from "./queries"
import { useSendEmailToHost } from "./"

const mutationVariables = {
  email: "jsh901220@gmail.com",
  subject: "test email",
  html: "<p>hello world</p>",
}

const mocks = [
  {
    request: {
      query: SEND_EMAIL,
      variables: mutationVariables,
    },
    result: { data: { hello: true } },
  },
]

const LOADING_TEXT = "Loading!"

const ExampleComponent: React.FC = () => {
  // const [mutate, { loading }] = useMutation(SEND_EMAIL, {
  //   variables: {
  //     email: "joe1220@daum.net",
  //     subject: "test",
  //     html: "<p>hello</p>",
  //   },
  // })
  const [sendEmail, { loading }] = useSendEmailToHost()
  if (loading) return <div>{LOADING_TEXT}</div>
  return (
    <div>
      <button onClick={() => sendEmail({ variables: mutationVariables })} data-testid="test_btn">
        testing
      </button>
    </div>
  )
}

describe("Email gql", () => {
  it("use mutation", async () => {
    const { getByTestId, getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ExampleComponent />
      </MockedProvider>
    )
    const exampleButton = getByTestId("test_btn")
    fireEvent.click(exampleButton)

    await getByText(LOADING_TEXT)
  })
})
