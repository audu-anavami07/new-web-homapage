import { ActionType } from "./actionTypes"

// export const setPlayerName = (payload: SetPlayerName["payload"]): SetPlayerName => (
//   { type: ActionType.SET_PLAYER_NAME, payload }
// )

// export const missTurn = (): MissTurn => (
//   { type: ActionType.MISS_TURN  }
// )

type Action<Payload> = {
  type: string;
  payload?: Payload;
}

interface ActionCreator<P> {
  type: string;
  (payload?: P): Action<P>;
}

export const actionCreator = <P>(type: ActionType): ActionCreator<P> => {
  return Object.assign(
    (payload?: P) => ({type, payload}),
    {type}
  );
}

export const setPlayerName = actionCreator<{ 
  playerName?: string, 
  newPlayerName?: string}>(ActionType.SET_PLAYER_NAME)

export const missTurn = actionCreator(ActionType.MISS_TURN)

export const setGlobalScore = actionCreator<{ score: number}>(ActionType.SET_GLOBAL_SCORE)

export const reset = actionCreator(ActionType.RESET)