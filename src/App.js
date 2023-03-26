import react from "react";
import reactDom from "react-dom/client";

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

const root = reactDom.createRoot(document.getElementById("root"));
root.render(<App />);
