import "../App.css";
import ButtonAppBar from "./ButtonAppBar.js";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

function Profiles({ myProfile }) {
  return (
    <div className="App">
      <header className="App-header-stub">
        <ButtonAppBar title="Community Profiles" />
      </header>
      <main>
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <Grid item xs={4}>
            <Grid container justifyContent="center" spacing={2}>
              {myProfile.personalProfile.map((item, value) => (
                <Grid key={value} item>
                  <Card>
                    {item.firstName} {item.lastName}
                    <br></br>
                    Birthday: {item.birthday}
                    <br></br>
                    Photo Tag: {item.profileImage}
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}

export default Profiles;
