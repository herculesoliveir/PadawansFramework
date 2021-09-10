import React, {useEffect} from "react";
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    // maxWidth:'500px',
    width:'40%',
    margin:'0 30px 0 30px'
  },
  flex:{
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5F3473',
    flexDirection: 'column'
    },
  menu:{
    display: 'flex',
    marginTop: '100px'
    },
  titulo:{
    color:'white',
    fontFamily: 'JetBrains Mono, monospace', 
  }
});

const data=[
  { 
    img:'posts.png',
    title:'Postagens',
    Text:'123456',
    ButtonText:'Veja Mais',
    Route:'/pages/posts'
  },
  { 
    img:'/albuns.jpg',
    title:'Albuns',
    Text:'789456',
    ButtonText:'Veja Mais',
    Route:'/pages/albuns'
  },
  { 
    img:'/all.jpg',
    title:'Todos',
    Text:'456123',
    ButtonText:'Veja Mais',
    Route:'/pages/all'
  },
]

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <div className={classes.flex}> 
    <h1 className={classes.titulo}>MENU FRAME</h1>
        <div className={classes.menu}>
          {data.map((v,i) =>{
            return (
              <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={v.img}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {v.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {v.Text}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to={v.Route}>  
                    <Button size="large" color="primary">
                      {v.ButtonText}
                    </Button>
                </Link>
              </CardActions>
            </Card>        
            )
          })
          }
        </div>
    </div>

  );

}
