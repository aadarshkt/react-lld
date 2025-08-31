import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleSubmit = () => {
    if (!input.trim()) return;

    setSuggestions((prev) => {
      if (prev.length === 4) {
        prev.pop();
      }
      return [input, ...prev];
    });
    setInput("");
  };

  return (
    <div style={{ display: "flex", gap: 10 }}>
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <ul>
          {suggestions.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
