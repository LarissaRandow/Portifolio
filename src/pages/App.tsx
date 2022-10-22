import { AppBar, Avatar,Box,Card,CardContent,CardMedia,Chip, Divider, Grid, Modal, Toolbar, Typography } from "@mui/material";
import { spacing, Stack } from "@mui/system";
import Button from "@mui/material/Button";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import './App.css';
import './MovieRow.css'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BusinessIcon from '@mui/icons-material/Business';
import  NavigateBeforeIcon  from "@mui/icons-material/NavigateBefore";
import  NavigateNextIcon  from "@mui/icons-material/NavigateNext";

export const App = () => {
  const refAboutMe = useRef<HTMLHeadingElement>(null);
  const refWorkHistory = useRef<HTMLHeadingElement>(null);
  const refCertifications = useRef<HTMLHeadingElement>(null);

    function scrollAboutMe() {
      window.scrollTo({
        top: refAboutMe.current?.offsetTop == null ? refAboutMe.current?.offsetTop : refAboutMe.current?.offsetTop - 80,
        behavior: 'smooth'
      })
    }

    function scrollWorkHistory() {
      window.scrollTo({
        top: refWorkHistory.current?.offsetTop == null ? refWorkHistory.current?.offsetTop : refWorkHistory.current?.offsetTop - 80,
        behavior: 'smooth'
      })
    }

    function scrollCertifications() {
      window.scrollTo({
        top: refCertifications.current?.offsetTop == null ? refCertifications.current?.offsetTop : refCertifications.current?.offsetTop - 80,
        behavior: 'smooth'
      })
    }

    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
      let x = scrollX + Math.round(window.innerWidth / 2);
      if(x > 0){
          x = 0;
      }        
      setScrollX(x);
    }

  const handleRightArrow = () => {
      let x = scrollX - Math.round(window.innerWidth / 2);
      let listw = 5 * 330;
      if((window.innerWidth - listw) > x){
          x = (window.innerWidth - listw) - 60;
      }
      setScrollX(x);

    }

    const [open, setOpen] = React.useState(false);
    var imgSrc = '../Certificados/OWASP.jpg';

    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const style = {
      position: 'absolute' as 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 500,
      bgcolor: 'background.paper',
      boxShadow: 24,
      p: 4,
    };

    return(
      <>
      <Grid container style={{background:'#fefeff', overflowX:'hidden'}}>
        <AppBar 
            style={{
              position:'fixed', 
              background: '#73bbc5',
            }}
        >
            <Toolbar style={{justifyContent: 'space-evenly'}}>
                <Stack direction="row" spacing={12}>
                    <Button color="inherit" onClick={scrollAboutMe}>
                      <span className='description'>About Me</span>
                    </Button>
                    <Button color="inherit" onClick={scrollWorkHistory}>
                      <span className='description'>Work History</span>
                    </Button>
                    <Button color="inherit" onClick={scrollCertifications}>
                      <span className='description'>Certifications</span>
                    </Button>
                </Stack>
            </Toolbar>
        </AppBar>
        <Grid 
          ref={refAboutMe}
          style={{
            marginTop: '80px',
          }} 
        >
          <Grid sx={{
              backgroundImage: `url(${"https://img.freepik.com/free-vector/abstract-flowing-waves-background_1048-11741.jpg?w=2000"})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
          >
            <h2 className="title">About Me</h2>
            <Avatar sx={{ marginTop:'30px' ,bgcolor: '#7f00e0', marginLeft: 'auto', marginRight:'auto', width: 56, height: 56 }}>LR</Avatar>
            <p className="aboutme">Hey, I'm <span style={{color:'#7f00e0'}}>Larissa Randow</span> </p>
            <Grid container sx={{marginTop:'20px'}}>
              <Grid item xs={4} sx={{marginLeft: 'auto', }}>
                <p className="aboutme">Description</p>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam est diam, ultricies sodales commodo vitae, 
                  imperdiet nec ligula. Phasellus lobortis et lectus ac scelerisque. Quisque lacinia feugiat volutpat. 
                  Vestibulum et leo placerat, auctor augue nec, feugiat lorem. Quisque turpis est, placerat ac dignissim et, 
                  dictum at neque. Donec ipsum urna, interdum vitae odio quis, vestibulum porta magna. Aliquam aliquam 
                  scelerisque pretium. Pellentesque ac odio venenatis, bibendum
                </p>
              </Grid>
              <Grid item xs={4} sx={{marginRight: 'auto' }}>
                <p className="aboutme">Skills</p>
                <Grid sx={{justifyContent:'space-evenly', display:'flex'}}>
                  <Chip sx={{background:'#73bbc5', color:'#0f1b61'}} label="C#"/>
                  <Chip sx={{background:'#73bbc5', color:'#0f1b61'}} label=".Net" />
                  <Chip sx={{background:'#73bbc5', color:'#0f1b61'}} label="Typescript"/>
                </Grid>
                <Grid sx={{justifyContent:'space-evenly', display:'flex', marginTop:'30px'}}>
                  <Chip sx={{background:'#73bbc5', color:'#0f1b61'}} label="React" />
                  <Chip sx={{background:'#73bbc5', color:'#0f1b61'}} label="Angular" />
                  <Chip sx={{background:'#73bbc5', color:'#0f1b61'}} label="HTML" />
                  <Chip sx={{background:'#73bbc5', color:'#0f1b61'}} label="CSS" />
                </Grid>
                <Grid sx={{justifyContent:'space-evenly', display:'flex', marginTop:'30px'}}>
                  <Chip sx={{background:'#73bbc5', color:'#0f1b61'}} label="GitHub"/>
                  <Chip sx={{background:'#73bbc5', color:'#0f1b61'}} label="Git"/>
                  <Chip sx={{background:'#73bbc5', color:'#0f1b61'}} label="Azure" />
                </Grid>
                <Grid sx={{justifyContent:'space-evenly', display:'flex', marginTop:'30px'}}>
                  <Chip sx={{background:'#73bbc5', color:'#0f1b61'}} label="MySql"/>
                  <Chip sx={{background:'#73bbc5', color:'#0f1b61'}} label="Microsoft SQL Server" />
                  <Chip sx={{background:'#73bbc5', color:'#0f1b61'}} label="Oracle" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Divider sx={{height:'10%', borderBottomWidth:'3px'}}/>
        </Grid>

        <Grid 
          ref={refWorkHistory}
          style={{
            marginTop: '80px',
          }} 
        >
          <h2 className="title">Work History</h2>
          <Grid style={{justifyContent:'center', display:'flex'}}>
            <Grid item xs={3} className='description'>
              <Grid>
                <p style={{float:'right', display:'inline-flex'}}>
                  <CalendarTodayIcon sx={{ color:  '#7f00e0', marginRight:'10px'}}/>
                  APRIL 2021 - OCTOBER 2022
                </p>
              </Grid>
              <Grid>
                <p style={{float:'right', display:'inline-flex'}}>
                  <BusinessIcon sx={{ color:  '#7f00e0', marginRight:'10px'}}/> 
                  Globalsys
                </p>
              </Grid>
            </Grid>
            <Divider 
              orientation="vertical" 
              flexItem 
              style={{margin:'15px', background:'#7f00e0'}}/>
            <Grid item xs={5} className='description'>
              <h3 style={{color:'#0f1b61'}}>Full Stack Developer</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
                Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Sed malesuada lobortis pretium.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
                Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Sed malesuada lobortis pretium.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
                Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Sed malesuada lobortis pretium.
              </p>
            </Grid>
          </Grid>

          <Grid style={{justifyContent:'center', display:'flex'}}>
            <Grid item xs={3} className='description'>
              <Grid>
                <p style={{float:'right', display:'inline-flex'}}>
                  <CalendarTodayIcon sx={{ color:  '#7f00e0', marginRight:'10px'}}/>
                  APRIL 2021 - OCTOBER 2022
                </p>
              </Grid>
              <Grid>
                <p style={{float:'right', display:'inline-flex'}}>
                  <BusinessIcon sx={{ color:  '#7f00e0', marginRight:'10px'}}/> 
                  Globalsys
                </p>
              </Grid>
            </Grid>
            <Divider 
              orientation="vertical" 
              flexItem 
              style={{margin:'15px', background:'#7f00e0'}}/>
            <Grid item xs={5} className='description'>
              <h3 style={{color:'#0f1b61'}}>Full Stack Developer</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
                Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Sed malesuada lobortis pretium.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
                Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Sed malesuada lobortis pretium.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
                Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Sed malesuada lobortis pretium.
              </p>
            </Grid>
          </Grid>

          <Grid style={{justifyContent:'center', display:'flex'}}>
            <Grid item xs={3} className='description'>
              <Grid>
                <p style={{float:'right', display:'inline-flex'}}>
                  <CalendarTodayIcon sx={{ color:  '#7f00e0', marginRight:'10px'}}/>
                  APRIL 2021 - OCTOBER 2022
                </p>
              </Grid>
              <Grid>
                <p style={{float:'right', display:'inline-flex'}}>
                  <BusinessIcon sx={{ color:  '#7f00e0', marginRight:'10px'}}/> 
                  Globalsys
                </p>
              </Grid>
            </Grid>
            <Divider 
              orientation="vertical" 
              flexItem 
              style={{margin:'15px', background:'#7f00e0'}}/>
            <Grid item xs={5} className='description'>
              <h3 style={{color:'#0f1b61'}}>Full Stack Developer</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
                Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Sed malesuada lobortis pretium.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
                Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Sed malesuada lobortis pretium.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
                Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Sed malesuada lobortis pretium.
              </p>
            </Grid>
          </Grid>
          <Divider sx={{height:'5%', borderBottomWidth:'3px'}}/>

        </Grid>        

        <Grid 
          ref={refCertifications}
          style={{
            marginTop: '80px',
          }} 
        >
          <h2 className="title">Certifications</h2>
          <div className="movieRow">
            <div className="movieRow--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}}/>
            </div>
            <div className="movieRow--right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>
          </div>
          <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    justifyContent:'center', display:'flex'
                }}>
                    <Card className="movieRow--item">
                      <CardMedia
                        component="img"
                        height="194"
                        image={require('../Certificados/OWASP.jpg')}
                        onClick={() => {
                          imgSrc = '../Certificados/OWASP.jpg';
                          handleOpen();
                        }}
                      />
                      <CardContent>
                        <Typography className="certificado">
                          OWASP
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card className="movieRow--item">
                      <CardMedia
                        component="img"
                        height="194"
                        image={require('../Certificados/OWASP.jpg')}
                      />
                      <CardContent>
                        <Typography className="certificado">
                          OWASP
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card className="movieRow--item">
                      <CardMedia
                        component="img"
                        height="194"
                        image={require('../Certificados/OWASP.jpg')}
                      />
                      <CardContent>
                        <Typography className="certificado">
                          OWASP
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card className="movieRow--item">
                      <CardMedia
                        component="img"
                        height="194"
                        image={require('../Certificados/OWASP.jpg')}
                      />
                      <CardContent>
                        <Typography className="certificado">
                          OWASP 
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card className="movieRow--item">
                      <CardMedia
                        component="img"
                        height="194"
                        image={require('../Certificados/OWASP.jpg')}
                      />
                      <CardContent>
                        <Typography className="certificado">
                          OWASP 
                        </Typography>
                      </CardContent>
                    </Card>
                </div>
            </div>
        </Grid>
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <img src={require('../Certificados/OWASP.jpg')} height="350" ></img>
        </Box>
      </Modal>

    </>
  );
}

