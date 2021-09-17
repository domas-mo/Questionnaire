import React, {useState} from 'react';
import Header from './components/Header/Hedaer';
import Section from './components/Section/Section';
import ResetStyle from './styles/Reset';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  const [flag, setFlag] = useState(false)

  return (
    <>
      <ResetStyle/>
      <GlobalStyle/>
      {flag ? <Section/> : <Header onClick={() => {
        setFlag(!flag);
      }}>Take part!</Header>}
    </>
  )
}
export default App;
