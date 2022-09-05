import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MUICard from './components/MUICard';
import InfiniteScroll from 'react-infinite-scroll-component';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

function App() {
  const [items, setItems] = React.useState(data)
  const [length, setLength] = React.useState(11)
  const maxRecordsReturned = 4;
  const skeletonItems = [0, 1, 2, 3]

  React.useEffect(() => {
    var tmpArr = []
    data.map((elem, i) => {
        if(i <= 11) {
            tmpArr.push(elem);
        }
        
    });

    setItems(data.slice(0,12))
    setLength(12)
  }, [])
    
  const fetchMoreData = () => {
      setTimeout(() => {        
          setItems(data.slice(0,(length + maxRecordsReturned)))
          setLength(length + maxRecordsReturned)        
      }, 1000);
  };
 
  const renderLoading = () => {
    return (
      <>
      <Grid container spacing={3} sx={{mt: 1, ml: '1px'}}>
      {skeletonItems.map((item, i) => (
        <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>

          <Stack spacing={1} key={i}>
            <Stack spacing={1} direction="row" key={i}>
              <Skeleton variant="circular" width={50} height={50} key={i}/>
              <Skeleton variant="text" width={260} height={40} key={i}/>
            </Stack>
            
            
            <Skeleton sx={{ height: 360 }} animation="wave" variant="rectangular" key={i}/>

          </Stack>
        </Grid>
      ))}
      </Grid>
    </>
    )
   }  
  return (
    <>        
      <Box sx={{mt:5}}>
        <Container maxWidth="xl" >
          <InfiniteScroll
              dataLength={items.length-1}
              // style={{ display: 'flex', flexDirection: 'column-reverse' }}
              next={fetchMoreData}           
              hasMore={items.length < 28? true : false}
              loader={renderLoading()}
              >
              <Grid container spacing={2}>
                    {items.map((elem, index) => (
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>
                          {/* <MUIVideoCard data={elem} key={index}/> */}
                          <MUICard data={elem} key={index}/>
                        </Grid>
                    ))}
              </Grid>
          </InfiniteScroll>
        </Container>
      </Box>
    
    </>
  );
}



export default App;



const data = [
  {id: 1, title: 'Magnificent Visions'},
  {id: 2, title: 'The Last Snake'},
  {id: 3, title: 'Blade of Year'},
  {id: 4, title: 'The Ways Captive'},
  {id: 5, title: 'Silk in the Abyss'},
  {id: 6, title: 'Growing Star'},
  {id: 7, title: 'The Last Snake'},
  {id: 8, title: 'The Cracked Willow'},
  {id: 9, title: 'Heart of Servant'},
  {id: 10, title: 'The Scent of the Door'},
  {id: 11, title: 'Flames in the End'},
  {id: 12, title: 'Professional Serpents'},
  {id: 13, title: 'Hunter of Storm'},
  {id: 14, title: 'Storm Illusion'},
  {id: 15, title: 'The Abyss'},
  {id: 16, title: 'Sucking Name'},
  {id: 17, title: 'Moon in the Truth'},
  {id: 18, title: 'Silent Rings'},
  {id: 19, title: 'Roses of Vision'},
  {id: 20, title: 'The Crying Room'},
  {id: 21, title: 'Magnificent Visions'},
  {id: 22, title: 'The Last Snake'},
  {id: 23, title: 'Blade of Year'},
  {id: 24, title: 'The Ways Captive'},
  {id: 25, title: 'Silk in the Abyss'},
  {id: 26, title: 'Growing Star'},
  {id: 27, title: 'The Last Snake'},
  {id: 28, title: 'The Cracked Willow'},    
]