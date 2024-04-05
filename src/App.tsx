import { IconHeartSolid } from "icons";
import { Button } from "ui";

function App() {
  return (
    <>
      <Button
        variant="secondary"
        iconStart={<IconHeartSolid />}
        onClick={() => {}}
      >
        Hello world
      </Button>
    </>
  );
}

export default App;
