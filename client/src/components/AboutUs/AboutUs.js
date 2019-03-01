import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import NavBar from '../Navbar'

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    backgroundColor: theme.palette.background.paper,
  },
  card: {
    marginTop: 50,
    maxWidth: 345,
  },
  media: {
    height: 300,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.transparent,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
});

function MediaCard(props) {
  const { classes } = props;
  return (
    <>
    <NavBar />
  <div className={classes.root.heroUnit}>
          <div className={classes.root.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              The Students who worked hard on this application.
            </Typography>
            </div>
          </div>
          <hr></hr>
    <Grid container justify="center" alignItems="center">
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='./images/taylor2.jpg'
          title="Taylor"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Taylor Darnell
          </Typography>
          <Typography component="p">
            Responsible for developing the front end of this application.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
   
    <Grid container justify="center" alignItems="center">
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='./images/kyle.jpg'
          title='Kyle'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Kyle Macabasco
          </Typography>
          <Typography component="p">
            Developed the back end login and database query's for the application
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
  
    <Grid container justify="center" alignItems="center">
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='./images/kit.jpg'
          title="Kit"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Kit Ling Mui
          </Typography>
          <Typography component="p">
            Created the database structure for number input, form, and chart functionality
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
   
    <Grid container justify="center" alignItems="center">
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='./images/hoangcao.jpg'
          title="Hoang"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Hoang Cao
          </Typography>
          <Typography component="p">
            Developed the main form and budget adding button functionality
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    </>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);