import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai' // VscBold, GoItalic and AiOutlineUnderline

import {
  MainContainer,
  TextImgCard,
  ImageCard,
  TextCard,
  Heading,
  Image,
  ButtonCard,
  Button,
  TextArea,
} from './styledComponent'

class TextEditor extends Component {
  state = {textInput: '', bold: false, italic: false, underLine: false}

  onChangeTextInput = event => {
    console.log(event.target.value)
    this.setState({textInput: event.target.value})
  }

  onClickBold = () => {
    this.setState(prevState => ({
      bold: !prevState.bold,
    }))
  }

  onClickItalic = () => {
    this.setState(prevState => ({
      italic: !prevState.italic,
    }))
  }

  onClickUnderLine = () => {
    this.setState(prevState => ({
      underLine: !prevState.underLine,
    }))
  }

  render() {
    const {textInput, bold, underLine, italic} = this.state
    return (
      <MainContainer>
        <TextImgCard>
          <ImageCard>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImageCard>
          <TextCard>
            <ButtonCard>
              <li key="1">
                <Button
                  type="button"
                  onClick={this.onClickBold}
                  data-testid="bold"
                  c={bold ? '#faff00' : '#f1f5f9'}
                >
                  <VscBold color={bold ? '#faff00' : '#f1f5f9'} size={20} />
                </Button>
              </li>

              <li key="2">
                <Button
                  type="button"
                  onClick={this.onClickItalic}
                  data-testid="italic"
                  c={italic ? '#faff00' : '#f1f5f9'}
                >
                  <GoItalic color={italic ? '#faff00' : '#f1f5f9'} size={20} />
                </Button>
              </li>

              <li key="3">
                <Button
                  type="button"
                  onClick={this.onClickUnderLine}
                  data-testid="underline"
                  c={underLine ? '#faff00' : '#f1f5f9'}
                >
                  <AiOutlineUnderline
                    color={underLine ? '#faff00' : '#f1f5f9'}
                    size={20}
                  />
                </Button>
              </li>
            </ButtonCard>
            <TextArea
              fw={bold ? 'bold' : 'normal'}
              td={underLine ? 'underline' : 'normal'}
              fs={italic ? 'italic' : 'normal'}
              value={textInput}
              onChange={this.onChangeTextInput}
            />
          </TextCard>
        </TextImgCard>
      </MainContainer>
    )
  }
}
export default TextEditor
