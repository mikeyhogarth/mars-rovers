import React, { useState } from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import { gql } from "apollo-boost";
import {
  Dialog,
  GridList,
  GridListTile,
  GridListTileBar,
  Breadcrumbs,
  Typography,
  LinearProgress
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  breadcrumbs: {
    padding: theme.spacing(3)
  },
  content: {
    padding: theme.spacing(3)
  }
});

const PHOTO_QUERY = gql`
  query Manifest($rover: Rover!, $sol: Int!) {
    photosBySol(rover: $rover, sol: $sol) {
      img_src
      camera
    }
  }
`;

function Sol({
  classes,
  match: {
    params: { rover, sol }
  }
}) {
  const [dialogImage, setDialogImage] = useState(null);

  return (
    <>
      <Breadcrumbs
        className={classes.breadcrumbs}
        separator="›"
        aria-label="Breadcrumb"
      >
        <Link color="inherit" to="/">
          Rovers
        </Link>
        <Typography color="textPrimary">
          <Link color="inherit" to={`/rovers/${rover.toLowerCase()}`}>
            {rover}
          </Link>
        </Typography>
        <Typography color="textPrimary">{sol}</Typography>
      </Breadcrumbs>

      <Dialog
        onClose={e => setDialogImage(null)}
        aria-labelledby="simple-dialog-title"
        open={dialogImage !== null}
      >
        <img width="100%" src={dialogImage} alt="Mars" />
      </Dialog>

      <Query
        query={PHOTO_QUERY}
        variables={{ rover: rover.toUpperCase(), sol: parseInt(sol) }}
      >
        {({ loading, error, data }) => {
          if (loading) return <LinearProgress />;
          if (error) return <p>Error :( </p>;

          return (
            <GridList cellHeight={160} className={classes.gridList} cols={3}>
              {data.photosBySol.map((photo, idx) => (
                <GridListTile
                  key={idx}
                  onClick={e => setDialogImage(photo.img_src)}
                >
                  <img src={photo.img_src} alt="Mars" />
                  <GridListTileBar title={photo.camera} />} />
                </GridListTile>
              ))}
            </GridList>
          );
        }}
      </Query>
    </>
  );
}

export default withStyles(styles)(Sol);
