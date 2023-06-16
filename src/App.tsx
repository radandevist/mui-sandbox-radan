import "./styles.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function App() {
  return (
    <div className="App">
      <Typography variant="h4" component="h1" gutterBottom>
        Material-UI Template
      </Typography>
      <Button variant="contained">Hello</Button>
    </div>
  );
}
