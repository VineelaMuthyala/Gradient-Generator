// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  width: 100vh;
  background-image: linear-gradient(${props => props.gradientValue});
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-size: cover;
  color: #ffffff;
`
export const Heading = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-top: 60px;
  margin-bottom: 0px;
`
export const TextElement = styled.p`
  font-size: 22px;
  margin-top: 30px;
  margin-bottom: 20px;
  font-weight: 500;
`
export const DirectionsContainer = styled.ul`
  display: flex;
  flex-direction: row;
`

export const PickColorContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px;
  list-style-type: none;
  margin-top: 0px;
  width: 300px;
`
export const ColorsContainer = styled.li`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  margin-right: 15px;
`
export const ColorText = styled.p`
  font-size: 17px;
  margin-top: 15px;
  margin-bottom: 15px;
  text-align: center;
  font-weight: bold;
`
export const ColorBox = styled.input`
  width: 100px;
  height: 50px;
  padding: 0px;
  border: 0px;
  background-color: transparent;
  cursor: pointer;
`
export const Generator = styled.button`
  width: 100px;
  font-size: 15px;
  margin-top: 20px;
  background-color: #00c9b7;
  border: 0px;
  height: 40px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  color: #334155;
`
