import { RoutesMain } from "./routes";
import { ToastContainer } from "react-toastify";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <RoutesMain />
      <ToastContainer
        autoClose={500}
        toastStyle={{
          background: "white",
          color: "black",
        }}
      />
    </>
  );
}

export default App;
