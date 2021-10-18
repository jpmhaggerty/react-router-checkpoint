import "../App.css";
import ButtonAppBar from "./ButtonAppBar.js";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

function Home({ myProfile }) {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonAppBar title="My Profile Page" />
      </header>
      <main>
        <Container>
          <Grid sx={{ flexGrow: 1 }} container spacing={0}>
          <Box>
            <Card>
              <CardContent>
                <Typography
                  sx={{ fontSize: 20 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {myProfile.personalProfile[0].firstName}{" "}
                  {myProfile.personalProfile[0].lastName}
                </Typography>
                <Typography variant="h6" component="div">
                  Birthday: {myProfile.personalProfile[0].birthday}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Photo Tag: {myProfile.personalProfile[0].profileImage}
                </Typography>
              </CardContent>
            </Card>
            </Box>
            <Box>
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
            </Box>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default Home;
