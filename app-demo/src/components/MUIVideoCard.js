import React, {  useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import GroupIcon from '@mui/icons-material/Group';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Badge from '@mui/material/Badge';
import PrizeEventsIcon from '@mui/icons-material/EmojiEvents';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Grid';
import { red } from '@mui/material/colors';
import ReactPlayer from 'react-player'

export default function MUIVideoCard(props) {
  
  const [isLiked, setIsLiked] = useState(false)
  const [isEventOpen, setIsEventOpen] = useState(false)  
  const [isExpandCard, setIsExpandCard] = useState(false)
 

  const expandCard = () => {        
    setIsExpandCard(true)
  }
  
  const collapseCard = () => {    
    setIsExpandCard(false)
  }
        
  const  cardRoot = {    
    minWidth: 320,
    maxHeight: 500,
    marginLeft: '20px',
    transition: 'transform 0.5s' 
  }

  const  cardRootExpand = {    
    position: 'absolute',
    minWidth: 340,
    maxHeight: 520,
    marginLeft: '20px',
    transform: 'scale(1.1)',    
    transition: 'transform 0.5s', 
    zIndex: 99,
  }
  
  return (
    <Card style={isExpandCard ? cardRootExpand : cardRoot} 
          onMouseEnter={() => expandCard()}
          onMouseLeave={() => collapseCard()}>
      <CardHeader
        avatar={         
            <Avatar sx={{ bgcolor: red[500] }} aria-label="event">
              R
            </Avatar>                             
        }

        title={props.data.title}
        subheader={
          <b>Sub Header</b>
        }
      >
      </CardHeader>

      <CardMedia  media={'video'}  />
        <Box display="flex"
             justifyContent="center"
             alignItems="center"
        >
          <ReactPlayer url='https://www.youtube.com/watch?v=cdKop6aixVE' 
                   controls
                   
                   width="90%"
                   height="auto"/>
        </Box>

      <CardContent>
        
        
        <b>{isEventOpen && 'Vote Now'}</b>          
        
      </CardContent>
      <CardActions disableSpacing>

        <Stack spacing={3}>

          <Stack spacing={3} direction="row">
            <IconButton aria-label="add to favorites">
            {isLiked ?
              <FavoriteIcon color={'error'}/>
            :
                <FavoriteBorderIcon color={'primary'}/>
            }
            </IconButton>
                                        
            <IconButton aria-label="share">
                <Badge badgeContent={4} color="success">
                <GroupIcon />
                </Badge>              
            </IconButton>
            
                        
            
            <Button  variant="outlined" size="small" color="primary">Open</Button>


        </Stack>

  
          {isExpandCard &&
          <>
            <Divider/>                
            <Grid container spacing={1}>
                <Grid item xs={6} align="left">                        
                    <Button variant='outlined'>Watch Later</Button>
                </Grid>

                <Grid item xs={6} align="right">
                    <Button variant='outlined' color="warning">Add to Queue</Button>
                </Grid>
            </Grid>                        
          </>
          }
        </Stack>        
      </CardActions>
    </Card>    
  );
}