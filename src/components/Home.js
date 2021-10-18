import "../App.css";
import ButtonAppBar from "./ButtonAppBar.js";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

function Home({ myProfile }) {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonAppBar title="My Profile Page" />
      </header>
      <main>
        <Grid>
          <Grid sx={{ flexGrow: 1 }} container spacing={0}>
            <Grid item xs={0}>
              <Grid container justifyContent="center" spacing={0}>
                <Card>
                  {myProfile.personalProfile.firstName} {myProfile.personalProfile.lastName}
                  <br></br>
                  Birthday: {myProfile.personalProfile.birthday}
                  <br></br>
                  Photo Tag: {myProfile.personalProfile.profileImage}
                </Card>
              </Grid>
            </Grid>
          </Grid>

          <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={10}>
              <Grid container justifyContent="right" spacing={2}>
                {myProfile.newsArticles.map((item, value) => (
                  <Grid key={value} item>
                    <Card>
                      {item.title}
                      <br></br>
                      {item.article}
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}

export default Home;
