import IO from "socket.io-client"
import { eventChannel } from "redux-saga"

import { baseUrl } from "src/constants/sockets"
import { CreateSocketChannel } from "./types"
import { take, put, call } from "redux-saga/effects"

export let socketInstance: SocketIOClient.Socket

export function connectSocket() {
  socketInstance = getSocketConnect()
  return new Promise((resolve, reject) => {
    if (socketInstance) {
      socketInstance.on("connect", () => {
        resolve(getSocketConnect())
      })
      socketInstance.on("connect_error", (error: Error) => {
        console.log("connect failed :-(", error)
        reject(new Error("ws:connect_failed "))
      })
    }
  }).catch(error => {
    console.log("Socket Connection error...: ", error)
  })
}

function getSocketConnect() {
  if (!socketInstance) {
    return IO.connect(baseUrl)
  }
  return socketInstance
}

export function createSocketChannel({ eventType }: CreateSocketChannel) {
  socketInstance = getSocketConnect()
  return eventChannel(emit => {
    const emitter = (message: any) => {
      return emit(message)
    }
    try {
      socketInstance.on(eventType, emitter)
      return function unsubscribe() {
        socketInstance.off(eventType, emitter)
      }
    } catch (error) {
      throw new Error("socket instance not exist")
    }
  })
}

export function* readSocket({ eventType, actionCreator }: CreateSocketChannel) {
  const channel = yield call(createSocketChannel, { eventType })
  while (true) {
    const message = yield take(channel)
    if (actionCreator && message) {
      yield put(actionCreator(message))
    } else if (actionCreator) {
      yield put(actionCreator())
    }
    return message
  }
}

export function closeChannel(channel: SocketIOClient.Socket) {
  if (channel) {
    channel.close()
  }
}
