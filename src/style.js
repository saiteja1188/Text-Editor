import styled from 'styled-components/macro'

export const ButtonContainer = styled.ul`
  list-style-type: none;
  display: flex;
  width: 100%;
  padding: 20px 30px;
  margin-bottom: 0px;
`

export const BoldButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${props => props.color};
`
export const ItalicButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${props => props.color};
`
export const UnderlineButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${props => props.color};
`
export const HrLine = styled.hr`
  width: 100%;
  border: 1px solid #334155;
  margin: 0px;
`
export const TextArea = styled.textarea`
  background-color: transparent;
  width: 100%;
  height: 50%;
  color: #ffffff;
  padding-top: 10px;
  padding-left: 10px;
  font-family: roboto;
  font-size: 24px;
  font-weight: ${props => props.fontWeight};
  font-style: ${props => props.fontStyle};
  text-decoration: ${props => props.textDecoration};
`
