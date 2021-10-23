import { BrowserRouter as Router } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";

import { MainRoutes } from "./components/routes/MainRoutes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ToastProvider>
        <Router>
          <MainRoutes />
        </Router>
      </ToastProvider>
    </div>
  );
}

export default App;
