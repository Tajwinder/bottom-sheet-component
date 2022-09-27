import "./App.css";
import { BottomSheet } from "./components/BottomSheet";

function App() {
  return (
    <div className="App">
      <BottomSheet>
        <div>
          <h1>Modal content</h1>
          <p>This is modal content</p>
        </div>
      </BottomSheet>
    </div>
  );
}

export default App;
