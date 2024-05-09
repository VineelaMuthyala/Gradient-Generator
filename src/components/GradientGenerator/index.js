import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  MainContainer,
  Heading,
  TextElement,
  DirectionsContainer,
  PickColorContainer,
  ColorsContainer,
  ColorText,
  ColorBox,
  Generator,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    color1: '#8ae323',
    color2: '#014f7b',
    direction: 'top',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onChangeColor1Text = event => {
    this.setState({color1: event.target.value})
  }

  onChangeColor2Text = event => {
    this.setState({color2: event.target.value})
  }

  changeInGradientValue = () => {
    const {color1, color2, direction} = this.state
    console.log('direction', direction)
    this.setState({gradientValue: `to ${direction}, ${color1}, ${color2}`})
  }

  changeInDirection = value => {
    this.setState({direction: value})
    console.log(value)
  }

  render() {
    const {color1, color2, gradientValue, direction} = this.state
    console.log(color1)
    return (
      <MainContainer
        gradientValue={gradientValue}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS color Gradient</Heading>
        <TextElement>Choose Directions</TextElement>
        <DirectionsContainer>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              key={eachItem.directionId}
              direction={eachItem}
              activeDirection={eachItem.value === direction}
              changeInDirection={this.changeInDirection}
            />
          ))}
        </DirectionsContainer>
        <TextElement>Pick the Colors</TextElement>
        <PickColorContainer>
          <ColorsContainer>
            <ColorText htmlFor="color1">{color1}</ColorText>
            <ColorBox
              type="color"
              value={color1}
              onChange={this.onChangeColor1Text}
              id="color1"
            />
          </ColorsContainer>
          <ColorsContainer>
            <ColorText htmlFor="color2">{color2}</ColorText>
            <ColorBox
              type="color"
              value={color2}
              onChange={this.onChangeColor2Text}
              id="color2"
            />
          </ColorsContainer>
        </PickColorContainer>
        <Generator onClick={this.changeInGradientValue}>Generate</Generator>
      </MainContainer>
    )
  }
}
export default GradientGenerator
