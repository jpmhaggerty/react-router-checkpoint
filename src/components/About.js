import "../App.css";
import ButtonAppBar from "./ButtonAppBar.js";
import Box from "@mui/material/Box";

function About({myCompanyInfo}) {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonAppBar title="About Us" />
        <Box>
          <h1>{myCompanyInfo}</h1>
        </Box>
      </header>
    </div>
  );
}

export default About;
