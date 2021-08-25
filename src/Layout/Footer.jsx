import React from "react";
import { Grid, Typography } from "@material-ui/core";

export default function Footer() {
  return (
    <div styles={{ marginTop: "15px" }}>
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <Typography paragraph>Copyright @ 2021-2022 Data SAAS</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
