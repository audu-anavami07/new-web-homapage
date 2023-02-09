export enum ActionType {
    HOLD_CURENT_SCORE = 'HOLD_CURENT_SCORE',
    SET_GLOBAL_SCORE= 'SET_GLOBAL_SCORE',
    SET_WINNER = 'SET_WINNER',
    SET_PLAYER_NAME = 'SET_PLAYER_NAME',
    MISS_TURN = 'MISS_TURN',
    RESET = 'RESET'
}

export interface HoldCurrentScore {
    type: ActionType.HOLD_CURENT_SCORE;
}

export interface SetGlobalScore {
    type: ActionType.SET_GLOBAL_SCORE;
    payload: {score: number, playerName: string};
}

export interface SetWinner {
    type: ActionType.SET_WINNER
    payload: { playerName: string }
}

export interface SetPlayerName {
  type: ActionType.SET_PLAYER_NAME
  payload: { playerName?: string, newPlayerName?: string}
}

export interface MissTurn {
    type: ActionType.MISS_TURN,
}

export interface Reset {
    type: ActionType.RESET,
}



export type Action = HoldCurrentScore | SetGlobalScore | SetWinner | SetPlayerName | MissTurn | Reset