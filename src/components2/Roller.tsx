import { is } from 'ramda'
import * as React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { GameContext } from '../lib/context'
import { missTurn, setGlobalScore } from '../store/actionCreators'
import { Dice, numberRange } from './Dice'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between; 
`
const DiceWrapper = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-around;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;

  > div:first-child {
    margin-top: 40px;
  }
`

const CurrentScore = styled.div`
  text-align: center;
  border: 2px solid pink;
  font-size: 60px;
  background-color: pink;
  color: #fff;
  padding: 30px;
  border-radius: 30px;
  width: 100px;
  margin-top: 30px;
  margin-bottom: 30px;
`
const Roll = styled.span`
  cursor: pointer;
  display: flex;
  font-size: 40px;
  padding: 30px;
    svg {
     width: 60px;
      margin-right: 10px;
    }
`

const Hold = styled.span`
  cursor: pointer;
  display: flex;
  font-size: 40px;
  padding: 30px;
    svg {
     width: 50px;
      margin-right: 10px;
    }
`

const Actions = styled.div`
  display: flex;
`

export const Roller:React.FC = () => {
  const dispatch = useDispatch()
  const getRandom = (): numberRange => Math.floor(Math.random() * 6) + 1 as numberRange
  const [currentScore, setCurrentScore] = React.useState(0)
  const [turns, setTurns] = React.useState<number>(0)

  const [dice1Value, setDice1Value] = React.useState<numberRange>(1)
  const [dice2Value, setDice2Value] = React.useState<numberRange>(3)


  React.useEffect(() => {
    if(turns !== 0 && isOne(dice1Value, dice2Value)) {
      setCurrentScore(0)
      dispatch(missTurn())
    } else if(turns !== 0) {
      setCurrentScore(currentScore + dice1Value+dice2Value)
    }
  }, [dice1Value, dice2Value])

  const handleRoll = () => {
    setDice1Value(getRandom)
    setDice2Value(getRandom)
    setTurns(turns+1)

  }

  const isOne = (...values: number[]): boolean => values.some(v => v === 1)

  const handleHold = () => { 
    dispatch(setGlobalScore({score: currentScore}))
    setCurrentScore(0)
  }

  return (
    <Wrapper>
      <CurrentScore>
        {currentScore}
      </CurrentScore>
      <DiceWrapper>
        <Dice faceNumber={dice1Value} />
        <Dice faceNumber={dice2Value} />
      </DiceWrapper>
      <Actions>
        <Roll onClick={() => handleRoll()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill='pink' viewBox="0 0 640 512"><path d="M447.1 224c0-12.56-4.781-25.13-14.35-34.76l-174.9-174.9C249.1 4.786 236.5 0 223.1 0C211.4 0 198.9 4.786 189.2 14.35L14.35 189.2C4.783 198.9-.0011 211.4-.0011 223.1c0 12.56 4.785 25.17 14.35 34.8l174.9 174.9c9.625 9.562 22.19 14.35 34.75 14.35s25.13-4.783 34.75-14.35l174.9-174.9C443.2 249.1 447.1 236.6 447.1 224zM96 248c-13.25 0-23.1-10.75-23.1-23.1s10.75-23.1 23.1-23.1S120 210.8 120 224S109.3 248 96 248zM224 376c-13.25 0-23.1-10.75-23.1-23.1s10.75-23.1 23.1-23.1s23.1 10.75 23.1 23.1S237.3 376 224 376zM224 248c-13.25 0-23.1-10.75-23.1-23.1s10.75-23.1 23.1-23.1S248 210.8 248 224S237.3 248 224 248zM224 120c-13.25 0-23.1-10.75-23.1-23.1s10.75-23.1 23.1-23.1s23.1 10.75 23.1 23.1S237.3 120 224 120zM352 248c-13.25 0-23.1-10.75-23.1-23.1s10.75-23.1 23.1-23.1s23.1 10.75 23.1 23.1S365.3 248 352 248zM591.1 192l-118.7 0c4.418 10.27 6.604 21.25 6.604 32.23c0 20.7-7.865 41.38-23.63 57.14l-136.2 136.2v46.37C320 490.5 341.5 512 368 512h223.1c26.5 0 47.1-21.5 47.1-47.1V240C639.1 213.5 618.5 192 591.1 192zM479.1 376c-13.25 0-23.1-10.75-23.1-23.1s10.75-23.1 23.1-23.1s23.1 10.75 23.1 23.1S493.2 376 479.1 376z"/></svg>
          Roll
        </Roll>
        <Hold onClick={() => handleHold()}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill='pink'>
          <path d="M448 144v120.4C448 314.2 422.6 358.1 384 384v128H128v-128l-53.19-38.67C48 325.8 32 294.3 32 261.2V192c0-14.58 6.625-28.38 17.1-37.48L80 130.5V176C80 184.8 87.16 192 96 192s16-7.164 16-16v-128C112 21.48 133.5 0 160 0c25.38 0 45.96 19.77 47.67 44.73C216.2 36.9 227.5 32 240 32C266.5 32 288 53.48 288 80v5.531C296.6 72.57 311.3 64 328 64c23.47 0 42.94 16.87 47.11 39.14C382.4 98.7 390.9 96 400 96C426.5 96 448 117.5 448 144z"/></svg>
          Hold
        </Hold>
      </Actions>
    </Wrapper>
  )
}