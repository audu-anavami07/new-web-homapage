import * as React from 'react'
import { useDispatch } from 'react-redux'
import styled, { css } from 'styled-components'
import { setPlayerName } from '../store/actionCreators'
import { Player as PlayerProps} from '../store/reducers'

const PlayerWrapper = styled.div<{active: boolean}>`
border-radius: 30px;
  width: 50%;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;

  h2 {
    font-size: 50px;
    color: pink;
  }

  ${({active}) => active && css`
    box-shadow: 0px 10px 59px 0px rgba(207,168,207,1);
  `}
`

const GlobalScore = styled.p`
  font-size: 88px;
  color: pink;
  line-height: 0;
`

const PlayerName = styled.input`
  border: 1px solid pink;
  border-radius: 30px;
  width: 300px;
  height: 80px;
  color: pink;
  text-align: center;
  font-size: 50px;
`

export const Player:React.FC<PlayerProps> = ({playerName, globalScore, currentScore, isActive}) => {

  const [name, setName] = React.useState(playerName)
  const dispatch = useDispatch()

  React.useEffect(() => {
    setName(playerName)
  }, [])

  const handleNameChange = () => {
    if(playerName !== name) {
      dispatch(setPlayerName({
        playerName, newPlayerName: name
      }))
    }
  }
  return (
    <PlayerWrapper active={isActive}>
      <PlayerName onChange={(e)=>setName(e.target.value)} onBlur={handleNameChange} value={name}/>
      <GlobalScore>{globalScore}</GlobalScore>
    </PlayerWrapper>
  )
}