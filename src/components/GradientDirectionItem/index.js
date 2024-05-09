// Write your code here

import {ListItemDirections, Directions, DirectionText} from './styledComponents'

const GradientDirectionItem = props => {
  const {direction, changeInDirection, activeDirection} = props
  const {displayText, value} = direction

  const onClickDirectionButton = () => {
    changeInDirection(value)
  }
  return (
    <ListItemDirections>
      <Directions onClick={onClickDirectionButton} active={activeDirection}>
        <DirectionText value={value}>{displayText}</DirectionText>
      </Directions>
    </ListItemDirections>
  )
}

export default GradientDirectionItem
