import { AppWrapper } from "./AppStyle";
import Header from "./components/header";
import Main from "./components/main";
import { InfoLoginProvider } from "./context/infoLogin";
import { ShowElementsProvider } from "./context/showElements";

function App() {
  return (
    <AppWrapper>
      <ShowElementsProvider>
        <InfoLoginProvider>
          <Header/>
          <Main />
        </InfoLoginProvider>
      </ShowElementsProvider>
    </AppWrapper>    
  );
}

export default App;
