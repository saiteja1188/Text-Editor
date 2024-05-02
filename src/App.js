import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import './App.css'

import {
  ButtonContainer,
  BoldButton,
  ItalicButton,
  UnderlineButton,
  HrLine,
  TextArea,
} from './style'
// Replace your code here
class App extends Component {
  state = {
    textBold: false,
    textItalic: false,
    textUnderline: false,
  }

  bold = () => {
    this.setState(prev => ({textBold: !prev.textBold}))
  }

  italic = () => {
    this.setState(prev => ({textItalic: !prev.textItalic}))
  }

  underline = () => {
    this.setState(prev => ({textUnderline: !prev.textUnderline}))
  }

  render() {
    const {textBold, textItalic, textUnderline} = this.state

    const boldColor = textBold ? '#faff00' : '#f1f5f9'
    const italicColor = textItalic ? '#faff00' : '#f1f5f9'
    const underlineColor = textUnderline ? '#faff00' : '#f1f5f9'

    const fontWeight = textBold ? 'bold' : 'normal'
    const fontStyle = textItalic ? 'italic' : 'normal'
    const textDecoration = textUnderline ? 'underline' : 'normal'
    console.log(fontStyle)

    return (
      <div className="main-container">
        <div className="response-container">
          <div className="text-editor">
            <h1>Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </div>
          <div className="test-field">
            <ButtonContainer>
              <li>
                <BoldButton
                  type="button"
                  data-testid="bold"
                  onClick={this.bold}
                  color={boldColor}
                >
                  <VscBold size={25} />
                </BoldButton>
              </li>
              <li>
                <ItalicButton
                  type="button"
                  data-testid="italic"
                  onClick={this.italic}
                  color={italicColor}
                >
                  <GoItalic size={25} />
                </ItalicButton>
              </li>
              <li>
                <UnderlineButton
                  type="button"
                  data-testid="underline"
                  onClick={this.underline}
                  color={underlineColor}
                >
                  <AiOutlineUnderline size={25} />
                </UnderlineButton>
              </li>
            </ButtonContainer>
            <HrLine />
            <TextArea
              fontWeight={fontWeight}
              fontStyle={fontStyle}
              textDecoration={textDecoration}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
