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
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

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
    const [imgSrc, setimgSrc] = React.useState('./Certificados/OWASP.jpg');

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
      width: 610,
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
              background: '#0f1b61',
            }}
        >
            <Toolbar style={{justifyContent: 'space-evenly'}}>
                <Stack direction="row" spacing={12}>
                    <Button color="inherit" onClick={scrollAboutMe}>
                      <span className='commonText'>About Me</span>
                    </Button>
                    <Button color="inherit" onClick={scrollWorkHistory}>
                      <span className='commonText'>Work History</span>
                    </Button>
                    <Button color="inherit" onClick={scrollCertifications}>
                      <span className='commonText'>Certifications</span>
                    </Button>
                </Stack>
            </Toolbar>
        </AppBar>
        <Grid 
          ref={refAboutMe}
          className="background"
        >
          <Grid>
            <h2 className="title" style={{marginTop:'80px'}}>About Me</h2>
            <Avatar sx={{ marginTop:'30px' ,bgcolor: '#7f00e0', marginLeft: 'auto', marginRight:'auto', width: 56, height: 56 }}>LR</Avatar>
            <p className="aboutme">Hey, I'm <span style={{color:'#7f00e0'}}> Larissa Randow</span> </p>
            <Grid container sx={{marginTop:'20px', }} >
              <Grid item xs={4} sx={{marginLeft: 'auto',  }}>
                <p className="aboutme">Description</p>
                <p className="commonText" >
                My interest in programming started when I was 12 years old, when I became enchanted by the world of HTML and spent 
                hours coding and researching new tools to put on my blog. So when the time came to choose a college, it was no 
                surprise that Computer Science made my eyes light up. During the 4 years of the course, I was able to obtain a 
                solid scientific basis to develop programs, from the planning of the project to the implementation and management 
                of the software. This, added to the more than 3 years of experience in the market, makes me able to face any 
                challenge.
                </p>
              </Grid>
              <Grid item xs={4} sx={{marginRight: 'auto' }}>
                <p className="aboutme">Skills</p>
                <Grid sx={{justifyContent:'space-evenly', display:'flex'}}>
                  <Chip sx={{background:'#1b252f', color:'white'}} label="C#"/>
                  <Chip sx={{background:'#1b252f', color:'white'}} label=".Net" />
                  <Chip sx={{background:'#1b252f', color:'white'}} label="Typescript"/>
                </Grid>
                <Grid sx={{justifyContent:'space-evenly', display:'flex', marginTop:'30px'}}>
                  <Chip sx={{background:'#1b252f', color:'white'}} label="React" />
                  <Chip sx={{background:'#1b252f', color:'white'}} label="Angular" />
                  <Chip sx={{background:'#1b252f', color:'white'}} label="HTML" />
                  <Chip sx={{background:'#1b252f', color:'white'}} label="CSS" />
                </Grid>
                <Grid sx={{justifyContent:'space-evenly', display:'flex', marginTop:'30px'}}>
                  <Chip sx={{background:'#1b252f', color:'white'}} label="GitHub"/>
                  <Chip sx={{background:'#1b252f', color:'white'}} label="Git"/>
                  <Chip sx={{background:'#1b252f', color:'white'}} label="Azure" />
                </Grid>
                <Grid sx={{justifyContent:'space-evenly', display:'flex', marginTop:'30px'}}>
                  <Chip sx={{background:'#1b252f', color:'white'}} label="MySql"/>
                  <Chip sx={{background:'#1b252f', color:'white'}} label="Microsoft SQL Server" />
                  <Chip sx={{background:'#1b252f', color:'white'}} label="Oracle" />
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
            <Grid item xs={3} className='commonText'>
              <Grid container>
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
            <Grid item xs={5} className='commonText'>
              <h3 style={{color:'#0f1b61'}}>Full Stack Developer</h3>
              <p>
              - Designed and built a Clean API Architecture using .Net and C# for various business segments and services.<br/>
              - Created database in Microsoft SQL Server using Migration features in Entity Framework.<br/>
              - Developed Websites with React and Typescript in critical projects with a short deadline.<br/>
              - Managed the Git repository and set up pipelines in Microsoft Azure.<br/>
              - Mentored trainees on tasks, assisting them in resolving bugs and understanding the problem.<br/>

              </p>
            </Grid>
          </Grid>

          <Grid style={{justifyContent:'center', display:'flex'}}>
            <Grid item xs={3} className='commonText'>
              <Grid container>
                <p style={{float:'right', display:'inline-flex'}}>
                  <CalendarTodayIcon sx={{ color:  '#7f00e0', marginRight:'10px'}}/>
                  AUGUST 2020 - APRIL 2021
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
            <Grid item xs={5} className='commonText'>
              <h3 style={{color:'#0f1b61'}}>Software Developer Inter</h3>
              <p>
              - Developed software for both backend (C# and .Net) and frontend (Angular and Typescript).<br/>
              - Participated in meetings to define project requirements and create UML diagrams.<br/>
              - Presented the program's evolution to the client and obtained their feedback.<br/>
              - Paired programming with a senior developer to learn about programming best practices.<br/>

              </p>
            </Grid>
          </Grid>

          <Grid style={{justifyContent:'center', display:'flex'}}>
            <Grid item xs={3} className='commonText'>
              <Grid container>
                <p style={{float:'right', display:'inline-flex'}}>
                  <CalendarTodayIcon sx={{ color:  '#7f00e0', marginRight:'10px'}}/>
                  JULY 2019 - JULY 2020
                </p>
              </Grid>
              <Grid>
                <p style={{float:'right', display:'inline-flex'}}>
                  <BusinessIcon sx={{ color:  '#7f00e0', marginRight:'10px'}}/> 
                  University Vila Velha (UVV)
                </p>
              </Grid>
            </Grid>
            <Divider 
              orientation="vertical" 
              flexItem 
              style={{margin:'15px', background:'#7f00e0'}}/>
            <Grid item xs={5} className='commonText'>
              <h3 style={{color:'#0f1b61'}}>Software Developer Inter</h3>
              <p>
              - LAWVR is a Virtual Reality Project to reproduce high-risk working conditions in order to create a safe 
              training environment for the company's employees. Worked in a university lab, being supervised by a Ph.D. 
              professor.<br/>
              - Developed small tasks to integrate the Unity program using the C# programming language.<br/>
              - Tested resources from other programmers to find bugs and inconsistencies.<br/>
              - Took several courses to learn more about the platform.<br/>

              </p>
            </Grid>
          </Grid>
          <Divider sx={{height:'5%', borderBottomWidth:'3px'}}/>

        </Grid>        

        <Grid 
          ref={refCertifications}
          style={{
            marginTop: '80px',
            marginBottom:'5px'
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
                        height="200"
                        image={require('./Certificados/Cisco.jpg')}
                        onClick={() => {
                          setimgSrc('./Certificados/Cisco.jpg');
                          handleOpen();
                        }}
                      />
                      <CardContent>
                        <Typography className="certificado">
                          Cisco - Get Connect
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card className="movieRow--item">
                      <CardMedia
                        component="img"
                        height="194"
                        image={require('./Certificados/BigData.jpg')}
                        onClick={() => {
                          setimgSrc('./Certificados/BigData.jpg');
                          handleOpen();
                        }}
                      />
                      <CardContent>
                        <Typography className="certificado">
                          Oracle - Big Data
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card className="movieRow--item">
                      <CardMedia
                        component="img"
                        height="194"
                        image={require('./Certificados/IOT.jpg')}
                        onClick={() => {
                          setimgSrc('./Certificados/IOT.jpg');
                          handleOpen();
                        }}
                      />
                      <CardContent>
                        <Typography className="certificado">
                          Oracle - IOT
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card className="movieRow--item">
                      <CardMedia
                        component="img"
                        height="194"
                        image={require('./Certificados/IA.jpg')}
                        onClick={() => {
                          setimgSrc('./Certificados/IA.jpg');
                          handleOpen();
                        }}
                      />
                      <CardContent>
                        <Typography className="certificado">
                          Oracle - IA 
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card className="movieRow--item">
                      <CardMedia
                        component="img"
                        height="194"
                        image={require('./Certificados/OWASP.jpg')}
                        onClick={() => {
                          setimgSrc('./Certificados/OWASP.jpg');
                          handleOpen();
                        }}
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
      <footer className="footer">
            <span className="footertitle">GET IN TOUCH</span>

            <Grid className="teste">
              <a className="footertext" href="mailto:larissarandow@gmail.com"><EmailIcon /></a>
              <a className="footertext" href="https://www.linkedin.com/in/larissa-randow/"><LinkedInIcon /></a>
              <a className="footertext" href="https://github.com/LarissaRandow"><GitHubIcon /></a>
            </Grid>            

          
        </footer>      

      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <img src={require(`${imgSrc}`)} height="450" id="parent-modal-commonText"></img>
        </Box>
      </Modal>

    </>
  );
}

