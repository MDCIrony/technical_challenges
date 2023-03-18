import "./src/style.css";
import { createRoot } from "react-dom/client";
import App from "./src/App";

const app = document.getElementById("app")!;

const root = createRoot(app);

root.render(<App />);
