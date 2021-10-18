import "../App.css";
import ButtonAppBar from "./ButtonAppBar.js";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Route, Link } from "react-router-dom";
import ProfilePicture from "./ProfilePicture.js";

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
              {myProfile.contactProfiles.map((item, value) => (
                <Grid key={value} item>
                  <Card>
                  <Link to={`/profiles/${item.lastName}`}>
                    {item.firstName} {item.lastName}
                    <br></br>
                    Birthday: {item.birthday}
                    <br></br>
                    Photo Tag: {item.profileImage}
                    </Link>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </main>
      <Route path={["/profiles/:id"]}>
        <ProfilePicture myProfile={myProfile} />
      </Route>
    </div>
  );
}

export default Profiles;
