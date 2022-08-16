import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();

  return (
    <header className="main-header">
      <Button variant="contained" onClick={() => navigate("/users")}>
        Users
      </Button>
    </header>
  );
}

export default App;
