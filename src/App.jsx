import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Actions from "./components/Actions";
import Container from "./components/Container";
import Content from "./components/Content";
import Header from "./components/Header";
import PrivacyMessage from "./components/PrivacyMessage";

function App() {
  const privacy = useSelector((state) => state.privacy);
  return (
    <>
      <Container>
        <Header />
        {privacy ? <PrivacyMessage /> : <Content />}
        <Actions />
      </Container>
    </>
  );
}

export default App;
