import { Player } from '../components/Player'
import { Action, ActionType } from './actionTypes'


export interface Player {
    playerName?: string
    globalScore: number
    currentScore: number
    isWinner: boolean
    isActive: boolean
}

export interface State {
    players: Player[]
    loading: boolean
    globalScore: number
}

export const initialState: State = {
  players: [
    {
      playerName: 'Player 1',
      globalScore: 0,
      currentScore: 0,
      isWinner: false,
      isActive: true,
    },
    {
      playerName: 'Player 2',
      globalScore: 0,
      currentScore: 0,
      isWinner: false,
      isActive: false,
    }
  ],
  loading: false,
  globalScore: 100
}

export const gameReducer = (state: State = initialState, action: Action):State => {
  switch(action.type) {
    case ActionType.SET_PLAYER_NAME: 
      return {...state, players: state.players.map(
        p => p.playerName === action.payload.playerName ? 
          { ...p, playerName: action.payload.newPlayerName } : p
        )
      }
    case ActionType.MISS_TURN: 
      console.log(state, initialState.players)

      return {...state, players: state.players.map(
        p => p.isActive ? 
          { ...p, isActive: false } : { ...p, isActive: true }
        )
      }
    case ActionType.SET_GLOBAL_SCORE: 
      return {...state, players: state.players.map(
        p => p.isActive ? 
          { ...p, 
            globalScore: p.globalScore + action.payload.score,
            isActive: false 
          } : { ...p, isActive: true }
        )
      }
    case ActionType.RESET:
      return {...state, players: initialState.players}
    default: 
      return state;
  }
}

export default gameReducer;