// Style your elements here
import styled from 'styled-components'

export const Directions = styled.button`
  width: 100px;
  color: #1e293b;
  font-size: 15px;
  font-weight: bold;
  opacity: ${props => (props.active ? 1 : 0.5)};
  border: 0px;
  border-radius: 5px;
  margin: 2px;
  height: 40px;
  cursor: pointer;
`
export const DirectionText = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
`

export const ListItemDirections = styled.li`
  margin: 0px;
  list-style-type: none;
`
