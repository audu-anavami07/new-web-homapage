import * as React from 'react'
import styled, { css } from 'styled-components'
import { times } from 'ramda'

export type numberRange = 1|2|3|4|5|6

export interface DiceProps {
  faceNumber: numberRange
}

const Dot = styled.div`
  border-radius: 50%;
  position: absolute;
  width: 15px;
  height: 15px;
  background: pink;
`

const Face = styled.div<DiceProps>`
  border: solid 3px pink;
  background-color: #fff;
  border-radius: 15px;
  display: block;
  width: 100px;
  height: 100px;
  margin: 7px auto;
  box-sizing: border-box;
  padding: 10px;
  position: relative;



  >div {
    ${({faceNumber}) => (
      {
        1: css`
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          margin: auto;
        }
        `,
        2: css`
          &:first-child{
            top: 20px;
            left: 20px;
          }
          &:last-child{
            bottom: 20px;
            right: 20px;
          }
        `,
        3: css`
          &:first-child{
              top: 15px;
              left: 15px;
          }
          &:nth-child(2){
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            margin: auto;
          }
          &:last-child{
            bottom: 15px;
            right: 15px;
          }
        `,
        4: css`
          &:first-child{
            top: 15px;
            left: 15px;
          }
          &:nth-child(2){
            top: 15px;
            right: 15px;
          }
          &:nth-child(3){
            bottom: 15px;
            left: 15px;
          }
          &:last-child{
            bottom: 15px;
            right: 15px;
          }
        `,
        5: css`
          &:first-child{
            top: 15px;
            left: 15px;
          }
          &:nth-child(2){
            top: 15px;
            right: 15px;
          }
          &:nth-child(3){
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            margin: auto;
          }
          &:nth-child(4){
            bottom: 15px;
            left: 15px;
          }
          &:last-child{
            bottom: 15px;
            right: 15px;
          }
        `,
        6: css`
          &:first-child{
            top: 15px;
            left: 15px;
          }
          &:nth-child(2){
            top: 15px;
            right: 15px;
          }
          &:nth-child(3){
            top: 0;
            bottom: 0;
            left: 15px;
            margin: auto;
          }
          &:nth-child(4){
            top: 0;
            right: 15px;
            bottom: 0;
            margin: auto;
          }
          &:nth-child(5){
            bottom: 15px;
            left: 15px;
          }
          &:last-child{
            bottom: 15px;
            right: 15px;
          }
        `
      }[faceNumber]
    )}
  }
`

export const Dice: React.FC<DiceProps> = ({faceNumber}) => {

  return (
    <div>
      <Face faceNumber={faceNumber}> 
        {
          times(
            (idx) => <Dot key={idx} />,
            faceNumber
          )
        }
      </Face>
    </div>  
  )
}