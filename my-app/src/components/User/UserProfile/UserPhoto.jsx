import Grid from "@mui/material/Grid";

const UserPhoto = ({ userProfile }) => {
  return (
    <>
      <Grid item>
        <img alt="complex" className="profile-photo" src={userProfile.photo} />
      </Grid>
    </>
  );
};

export default UserPhoto;
