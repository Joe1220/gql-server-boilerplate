import { AnyAction } from "redux"

export type CreateSocketChannel = {
  eventType: string
  buffer?: any
  matcher?: any
  actionCreator?: (args?: any) => AnyAction
}
