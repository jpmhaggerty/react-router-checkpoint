import "../App.css";
import ButtonAppBar from "./ButtonAppBar.js";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Route, Link } from "react-router-dom";
import ProfilePicture from "./ProfilePicture.js";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function Profiles({ myProfile }) {
  return (
    <div className="App">
      <header className="App-header">
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
                      <CardContent>
                        <Typography
                          sx={{ fontSize: 20 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          {item.firstName} {item.lastName}
                        </Typography>
                        <Typography variant="h6" component="div">
                          Birthday: {item.birthday}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          Photo Tag: {item.profileImage}
                        </Typography>
                      </CardContent>
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
