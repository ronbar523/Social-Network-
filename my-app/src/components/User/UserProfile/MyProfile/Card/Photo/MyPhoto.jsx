import Grid from "@mui/material/Grid";

const MyPhoto = ({ myProfile }) => {
  return (
    <>
      <Grid item>
        <img alt="complex" className="profile-photo" src={myProfile.photo} />
      </Grid>
    </>
  );
};

export default MyPhoto;
