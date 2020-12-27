import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
body{
  background: ${({theme}) => theme.body};
  color: ${({theme}) => theme.text};
  transition: all .5s linear;
}
.btn-primary{
  background:${({theme}) => theme.primary};
  color: ${({theme}) => theme.body};
  font-family: 'Lato', sans-serif;
  padding: 0.6rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  outline: none;
  border: none;
  transition: all .5s linear;
}
p{
  line-height: 1.9rem;
}
.icon{
font-size: 2rem;
position: absolute;
top: 2rem;
right: 4rem;
transition: all .5s linear;
}
`;
export const lightTheme = {
  body: '#fafafa',
  text: '#121212',
  primary: '#6200ee'
}

export const darkTheme = {
  body: '#121212',
  text: '#fafafa',
  primary: '#bb86fc'
}