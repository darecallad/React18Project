import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  const [alert, setAlert] = useState(false);
  return (
    <>
      {alert && <Alert onClose={() => setAlert(false)}>My Alert</Alert>}
      <Button color="primary" onClick={() => setAlert(true)}>
        Click
      </Button>
    </>
  );
}

export default App;
