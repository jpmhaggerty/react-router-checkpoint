import "./App.css";
import { Switch, Redirect, Route } from "react-router-dom";
import About from "./components/About.js";
import Profiles from "./components/Profiles.js";
import Home from "./components/Home.js";

function App() {
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
    personalProfile: [
      {
        firstName: "Name",
        lastName: "Surname",
        birthday: "01/01/1900 00:00:00",
        profileImage: "/url-to-an-image.jpeg",
      },
    ],
  };

  const myCompanyInfo = "My company info"

  return (
    <div className="App">
      <main>
        <Switch>
          <Route path="/about" render={(props) => <About myCompanyInfo={myCompanyInfo} {...props} />} />
          <Route
            path="/profiles"
            render={(props) => <Profiles myProfile={myProfile} {...props} />}
          />
          <Route
            path="/home"
            render={(props) => <Home myProfile={myProfile} {...props} />}
          />
          <Route path="/" render={() => <Redirect to="/home" />} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
