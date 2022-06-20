import React from "react";
import styled from "styled-components";
import Chat from "./components/Chat";

const MainContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
border: 5px solid greenyellow;
background-color: gray;
box-sizing: border-box;
`
const Mvp = styled.div`
display: flex;
justify-content: flex-end;
align-items: flex-end;
width: 50vw;
height: 80vh;
border: 1px solid black;
box-sizing: border-box;
background-color: greenyellow;

`

function App() {
  return (
    <MainContainer>
      <Mvp>
      <Chat />
      </Mvp>
      </MainContainer>
  );
}

export default App;
