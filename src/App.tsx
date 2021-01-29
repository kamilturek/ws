import Header from './Components/Header';
import Socials from './Components/Socials';
import './App.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Spacer = styled.div`
  margin: 25px 0;
`;

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Spacer />
      <Socials />
    </Wrapper>
  );
};

export default App;
