/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */

import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// eslint-disable-next-line import/no-extraneous-dependencies
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import PropTypes from 'prop-types';
import CompareModal from './CompareModal.js';

// import Carousel from 'react-multi-carousel';
// import { Paper, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 220,
    display: 'inline-block',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },

}));

export default function ProductCardRelated(props) {
  // console.log('CARDDDD', props.styles);
  // console.log('HEY', props.styles[0].results)
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleCardClick = () => {
    //* ****must route to overview with id of selected product*****
    console.log('CLICKING CARD');
  };
  console.log('jahdisagdaydg', props.productFeatures);

  return (
    <Card className={classes.root}>
      <CardHeader
        className="cardHeader"
        action={
          <CompareModal productFeatures={props.productFeatures} />
        }
        // title={props.product.category}
        subheader={props.product.category}
      />
      <CardMedia
        onClick={handleCardClick}
        className={classes.media}
        image={props.styles}
        title={props.product.name}
      />
      <CardContent onClick={handleCardClick}>
        <div className="cardInfo" variant="body2" color="textSecondary">
          <h3>{props.product.name}</h3>
          {props.product.description.substring(0, 100).concat('...')}
          <h5>{props.product.default_price}</h5>
          <div>{props.stars(props.rating)}</div>
        </div>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

ProductCardRelated.propTypes = {
  // relatedProducts: PropTypes.instanceOf(Array).isRequired,
  product: PropTypes.instanceOf(Array).isRequired,
  styles: PropTypes.instanceOf(String).isRequired,
  productFeatures: PropTypes.instanceOf(Object).isRequired,
  rating: PropTypes.instanceOf(Array).isRequired,
  stars: PropTypes.instanceOf(Function).isRequired,
};

// action={
//   <IconButton aria-label="settings">
//     <CompareModal onClick={handleOpen}/>
//     <StarBorderIcon />
//   </IconButton>
// }
