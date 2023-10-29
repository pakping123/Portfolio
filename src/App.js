import { Grid, Typography } from '@mui/material';
import './App.css';
import dinoPic from './assets/dinosaur1.jpg'

const App = () => {
  const name = 'PakPing'
  console.log(name)
  return (
    <div class="display">
      <Grid container sx={{ background: 'rgba(255, 255, 255, 0.2)', height: '700px' }} xs={4}>
        <Grid item
          xs={12}
          container
          justifyContent={"center"}
          alignItems={"center"}
          direction={"column"}>
          <Typography variant='h2' color={'white'} fontWeight={900} textAlign={'center'} >
            Chananya Jantra
          </Typography>
          <Typography color={'white'} fontSize={'20px'} fontWeight={900} textAlign={'center'}>
            ชื่อ ชนัญญา จันทรา ชื่อเล่นชื่อ พักพิง อายุ 18 ปี กำลังศึกษาอยู่ที่ โรงเรียนหอวังปทุมธานี สายการเรียนศิลป์-ภาษาจีน
          </Typography>
        </Grid>
      </Grid>
    </div>
  );

}

export default App;
