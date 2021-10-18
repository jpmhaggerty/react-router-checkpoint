import "../App.css";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";

function ProfilePicture({myProfile}) {
  let { id } = useParams();
  let index = -1
  myProfile.contactProfiles.forEach((elem, idx) => {
    if (elem.lastName === id) {index = idx}
  })

  return (
    <div className="App">
        <Box>
          <h3>Prop attribute with profile picture- throw an image tag here</h3>
          <h4>{id} Picture</h4>
          <h4>{myProfile.contactProfiles[index].profileImage}</h4>
        </Box>
    </div>
  );
}

export default ProfilePicture;
