import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`
export const TextImgCard = styled.div`
  height: 600px;
  width: 800px;
  display: flex;
`
export const ImageCard = styled.div`
  height: 600px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
export const TextCard = styled.div`
  height: 600px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
export const Heading = styled.h1`
  font-size: 25px;
  color: #ffffff;
`
export const Image = styled.img`
  height: 350px;
`
export const ButtonCard = styled.ul`
  width: 100%;
  height: 40px;
  border-bottom: 2px solid #334155;
  display: flex;
`
export const Button = styled.button`
  width: 40px;
  height: 40px;
  background-color: transparent;
  color: ${props => props.c};
  border: none;
  cursor: pointer;
`
export const TextArea = styled.textarea`
  width: 100%;
  height: 400px;
  outline: none;
  padding: 10px;
  font-weight: ${props => props.fw};
  text-decoration: ${props => props.td};
  font-style: ${props => props.fs};
  background-color: #1b1c22;
  color: #ffffff;
`
