import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import CoffeeIcon from "@mui/icons-material/Coffee";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Grid } from "@mui/material";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Products = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <section className="products__section" id="products">
      <h5>Meet our</h5>
      <h2>Origins</h2>
      <div className="container products__container">
      <article className="card__box">
        <Card sx={{ maxWidth: 250 }} className="card_item">
          <CardHeader
            avatar={<CoffeeIcon aria-label="recipe"></CoffeeIcon>}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Coffee beans"
            subheader="Dark Roast"
          />
          <CardMedia component="img" image="assets\header_bg.jpg" alt="Beans" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              officia accusamus deserunt debitis culpa rerum vel, suscipit
              obcaecati laboriosam totam accusantium praesentium ipsa dolorum
              nostrum nihil mollitia quis iste esse!
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Description</Typography>
              <Typography paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur minus error incidunt quasi beatae? Commodi, dolore.
                Dignissimos quisquam excepturi ut ratione repellendus asperiores
                hic quos eaque laudantium ipsum, doloribus accusamus.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </article>
      <article className="card__box">
        <Card sx={{ maxWidth: 250 }} className="card_item">
          <CardHeader
            avatar={<CoffeeIcon aria-label="recipe"></CoffeeIcon>}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Coffee beans"
            subheader="Dark Roast"
          />
          <CardMedia component="img" image="assets\header_bg.jpg" alt="Beans" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              officia accusamus deserunt debitis culpa rerum vel, suscipit
              obcaecati laboriosam totam accusantium praesentium ipsa dolorum
              nostrum nihil mollitia quis iste esse!
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Description</Typography>
              <Typography paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur minus error incidunt quasi beatae? Commodi, dolore.
                Dignissimos quisquam excepturi ut ratione repellendus asperiores
                hic quos eaque laudantium ipsum, doloribus accusamus.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </article>
      <article className="card__box">
        <Card sx={{ maxWidth: 250 }} className="card_item">
          <CardHeader
            avatar={<CoffeeIcon aria-label="recipe"></CoffeeIcon>}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Coffee beans"
            subheader="Dark Roast"
          />
          <CardMedia component="img" image="assets\header_bg.jpg" alt="Beans" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              officia accusamus deserunt debitis culpa rerum vel, suscipit
              obcaecati laboriosam totam accusantium praesentium ipsa dolorum
              nostrum nihil mollitia quis iste esse!
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Description</Typography>
              <Typography paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur minus error incidunt quasi beatae? Commodi, dolore.
                Dignissimos quisquam excepturi ut ratione repellendus asperiores
                hic quos eaque laudantium ipsum, doloribus accusamus.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </article>
      <article className="card__box">
        <Card sx={{ maxWidth: 250 }} className="card_item">
          <CardHeader
            avatar={<CoffeeIcon aria-label="recipe"></CoffeeIcon>}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Coffee beans"
            subheader="Dark Roast"
          />
          <CardMedia component="img" image="assets\header_bg.jpg" alt="Beans" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              officia accusamus deserunt debitis culpa rerum vel, suscipit
              obcaecati laboriosam totam accusantium praesentium ipsa dolorum
              nostrum nihil mollitia quis iste esse!
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Description</Typography>
              <Typography paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur minus error incidunt quasi beatae? Commodi, dolore.
                Dignissimos quisquam excepturi ut ratione repellendus asperiores
                hic quos eaque laudantium ipsum, doloribus accusamus.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </article>  
      <article className="card__box">
        <Card sx={{ maxWidth: 250 }} className="card_item">
          <CardHeader
            avatar={<CoffeeIcon aria-label="recipe"></CoffeeIcon>}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Coffee beans"
            subheader="Dark Roast"
          />
          <CardMedia component="img" image="assets\header_bg.jpg" alt="Beans" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              officia accusamus deserunt debitis culpa rerum vel, suscipit
              obcaecati laboriosam totam accusantium praesentium ipsa dolorum
              nostrum nihil mollitia quis iste esse!
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Description</Typography>
              <Typography paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur minus error incidunt quasi beatae? Commodi, dolore.
                Dignissimos quisquam excepturi ut ratione repellendus asperiores
                hic quos eaque laudantium ipsum, doloribus accusamus.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </article>  
      <article className="card__box">
        <Card sx={{ maxWidth: 250 }} className="card_item">
          <CardHeader
            avatar={<CoffeeIcon aria-label="recipe"></CoffeeIcon>}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Coffee beans"
            subheader="Dark Roast"
          />
          <CardMedia component="img" image="assets\header_bg.jpg" alt="Beans" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              officia accusamus deserunt debitis culpa rerum vel, suscipit
              obcaecati laboriosam totam accusantium praesentium ipsa dolorum
              nostrum nihil mollitia quis iste esse!
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Description</Typography>
              <Typography paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur minus error incidunt quasi beatae? Commodi, dolore.
                Dignissimos quisquam excepturi ut ratione repellendus asperiores
                hic quos eaque laudantium ipsum, doloribus accusamus.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </article>  
      <article className="card__box">
        <Card sx={{ maxWidth: 250 }} className="card_item">
          <CardHeader
            avatar={<CoffeeIcon aria-label="recipe"></CoffeeIcon>}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Coffee beans"
            subheader="Dark Roast"
          />
          <CardMedia component="img" image="assets\header_bg.jpg" alt="Beans" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              officia accusamus deserunt debitis culpa rerum vel, suscipit
              obcaecati laboriosam totam accusantium praesentium ipsa dolorum
              nostrum nihil mollitia quis iste esse!
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Description</Typography>
              <Typography paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur minus error incidunt quasi beatae? Commodi, dolore.
                Dignissimos quisquam excepturi ut ratione repellendus asperiores
                hic quos eaque laudantium ipsum, doloribus accusamus.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </article>  
      <article className="card__box">
        <Card sx={{ maxWidth: 250 }} className="card_item">
          <CardHeader
            avatar={<CoffeeIcon aria-label="recipe"></CoffeeIcon>}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Coffee beans"
            subheader="Dark Roast"
          />
          <CardMedia component="img" image="assets\header_bg.jpg" alt="Beans" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              officia accusamus deserunt debitis culpa rerum vel, suscipit
              obcaecati laboriosam totam accusantium praesentium ipsa dolorum
              nostrum nihil mollitia quis iste esse!
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Description</Typography>
              <Typography paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur minus error incidunt quasi beatae? Commodi, dolore.
                Dignissimos quisquam excepturi ut ratione repellendus asperiores
                hic quos eaque laudantium ipsum, doloribus accusamus.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </article>  
      <article className="card__box">
        <Card sx={{ maxWidth: 250 }} className="card_item">
          <CardHeader
            avatar={<CoffeeIcon aria-label="recipe"></CoffeeIcon>}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Coffee beans"
            subheader="Dark Roast"
          />
          <CardMedia component="img" image="assets\header_bg.jpg" alt="Beans" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              officia accusamus deserunt debitis culpa rerum vel, suscipit
              obcaecati laboriosam totam accusantium praesentium ipsa dolorum
              nostrum nihil mollitia quis iste esse!
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Description</Typography>
              <Typography paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur minus error incidunt quasi beatae? Commodi, dolore.
                Dignissimos quisquam excepturi ut ratione repellendus asperiores
                hic quos eaque laudantium ipsum, doloribus accusamus.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </article>          
      </div>

    </section>
  );
};

export default Products;
