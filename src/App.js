import { AppWrapper } from "./AppStyle";
import Header from "./components/header";
import Main from "./components/main";
import { ShowElementsProvider } from "./context/showElements";

function App() {
  return (
    <AppWrapper>
      <ShowElementsProvider>
        <Header/>
        <Main />
      </ShowElementsProvider>
    </AppWrapper>    
  );
}

export default App;
