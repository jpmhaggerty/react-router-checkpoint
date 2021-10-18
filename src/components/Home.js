import "../App.css";
import ButtonAppBar from "./ButtonAppBar.js";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

function Home() {
  let myProfile = {
    newsArticles: [
      {
        title: "Winning at Life!",
        article:
          "There are many ways to do so...but the best is just try, try, try again!",
      },
      //add more stories here in this array!
    ],
    contactProfiles: [
      {
        firstName: "Willie",
        lastName: "Dustice",
        birthday: "01/01/1978 00:00:00",
        profileImage: "/url-to-an-image.jpeg",
      },
    ],
  };

  return (
    <div className="App">
      <header className="App-header-stub">
        <ButtonAppBar title="My Profile Page" />
      </header>
      <main>
        <Grid>
          <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={4}>
              <Grid container justifyContent="center" spacing={2}>
                {myProfile.contactProfiles.map((item, value) => (
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
