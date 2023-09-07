import Button from "./components/Button";

function App() {
  return (
    <>
      <Button color="primary" onClick={() => console.log("click")}>
        Hello
      </Button>
    </>
  );
}

export default App;
