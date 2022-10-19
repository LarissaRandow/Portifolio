import { AppBar, autocompleteClasses, Avatar, Box, Card, Chip, Container, Divider, Grid, Paper, Toolbar, Typography } from "@mui/material";
import { spacing, Stack } from "@mui/system";
import Button from "@mui/material/Button";
import React, { MutableRefObject, useRef, useState } from "react";
import './App.css';
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

    return(
      <>
      <Grid container>
        <AppBar 
            style={{
              position:'fixed', 
              background: '#6A5ACD',
            }}
        >
            <Toolbar style={{justifyContent: 'space-evenly'}}>
                <Stack direction="row" spacing={12}>
                    <Button color="inherit" onClick={scrollAboutMe} >About Me</Button>
                    <Button color="inherit" onClick={scrollWorkHistory}>Work History</Button>
                    <Button color="inherit" onClick={scrollCertifications}>Certifications</Button>
                </Stack>
            </Toolbar>
        </AppBar>
        </Grid>
        <Grid 
        ref={refAboutMe}
        style={{
          marginTop: '80px'
        }} 
        >
          <Grid sx={{
              backgroundImage: `url(${"https://img.freepik.com/free-vector/abstract-flowing-waves-background_1048-11741.jpg?w=2000"})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}>
              <h2 className="title">About Me</h2>
              <Avatar sx={{ bgcolor: '#6A5ACD', marginLeft: 'auto', marginRight:'auto', width: 56, height: 56 }}>LR</Avatar>
              
              <Grid container>
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
                <Grid item xs={4} sx={{marginRight: 'auto'}}>
                  <p className="aboutme">Skills</p>
                  <Chip label="Chip Filled" style={{marginLeft: '50px'}}/>
                  <Chip label="Chip Filled" />
                  <Chip label="Chip Filled" />
                  <Chip label="Chip Filled" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          

        <Grid ref={refWorkHistory}
          style={{
            margin: '80px 10px 0px 10px',
          }} 
        >
            <h2 className="title">Work History</h2>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam est diam, ultricies sodales commodo vitae, imperdiet nec ligula. Phasellus lobortis et lectus ac scelerisque. Quisque lacinia feugiat volutpat. Vestibulum et leo placerat, auctor augue nec, feugiat lorem. Quisque turpis est, placerat ac dignissim et, dictum at neque. Donec ipsum urna, interdum vitae odio quis, vestibulum porta magna. Aliquam aliquam scelerisque pretium. Pellentesque ac odio venenatis, bibendum sapien eu, blandit dui. Vivamus lacinia tellus eros, consequat laoreet metus rhoncus ac. Morbi ac massa nibh. Suspendisse neque ipsum, interdum sit amet bibendum a, tempus id velit. Quisque vitae nunc dapibus, pellentesque risus eleifend, pellentesque nunc.
              Proin semper maximus arcu a tempus. Cras ut dapibus massa. Donec volutpat quam elit, nec aliquet nulla varius quis. Fusce venenatis molestie nisl eu fringilla. Cras at tincidunt justo. Curabitur sed libero viverra, convallis urna ut, sodales nisi. Curabitur posuere pellentesque tellus in rhoncus. Praesent nec pulvinar tellus. Phasellus sodales lorem at metus porttitor, ut suscipit ligula dignissim. Nulla convallis, enim nec convallis ultrices, tortor ex molestie magna, semper cursus sem neque ut velit. Integer tincidunt odio magna, quis sollicitudin odio placerat eget.
              Mauris at felis a neque vehicula dictum eget nec felis. Ut rutrum nec augue id sagittis. Nunc sem dolor, luctus eu venenatis vitae, placerat condimentum mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sagittis, magna venenatis lobortis ornare, urna mauris volutpat libero, ac commodo sapien ipsum hendrerit sapien. Maecenas luctus nunc nec libero finibus congue. Nam sagittis fringilla neque sit amet tincidunt.
              Integer ac sagittis odio, non tempor ante. Aenean molestie gravida augue. Ut iaculis cursus sem laoreet gravida. Proin viverra iaculis velit at luctus. Etiam pellentesque interdum ullamcorper. Morbi tristique nulla vel urna efficitur, ac sodales mi venenatis. Mauris lacinia lacus ac ex sollicitudin, sit amet convallis lectus posuere. Nam elit justo, vestibulum suscipit finibus vel, egestas vel ligula. Aliquam erat volutpat. Nullam eget vulputate metus, vitae feugiat elit. Aenean ornare magna quis vestibulum mollis. Aenean nec lorem elementum, viverra quam eu, efficitur sem.
              Nulla felis justo, commodo eu lobortis sed, faucibus at nibh. Maecenas faucibus molestie magna non semper. Phasellus nec lacus sed metus maximus maximus. Nullam et risus in libero pulvinar vestibulum ornare eleifend lectus. Sed neque mauris, fringilla varius vestibulum a, fringilla ac dui. Mauris ac felis felis. Aenean dolor dui, dapibus non euismod a, facilisis in nunc. Proin fermentum sem libero, sit amet lacinia libero rutrum ac. Nulla eu tellus iaculis, accumsan massa vitae, volutpat ligula.
            </h3>
          </Grid>

          <Paper 
            ref={refCertifications}
            style={{
              margin: '80px 10px 0px 10px',
            }} 
          >
            <h2 className="title">Certifications</h2>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam est diam, ultricies sodales commodo vitae, imperdiet nec ligula. Phasellus lobortis et lectus ac scelerisque. Quisque lacinia feugiat volutpat. Vestibulum et leo placerat, auctor augue nec, feugiat lorem. Quisque turpis est, placerat ac dignissim et, dictum at neque. Donec ipsum urna, interdum vitae odio quis, vestibulum porta magna. Aliquam aliquam scelerisque pretium. Pellentesque ac odio venenatis, bibendum sapien eu, blandit dui. Vivamus lacinia tellus eros, consequat laoreet metus rhoncus ac. Morbi ac massa nibh. Suspendisse neque ipsum, interdum sit amet bibendum a, tempus id velit. Quisque vitae nunc dapibus, pellentesque risus eleifend, pellentesque nunc.
              Proin semper maximus arcu a tempus. Cras ut dapibus massa. Donec volutpat quam elit, nec aliquet nulla varius quis. Fusce venenatis molestie nisl eu fringilla. Cras at tincidunt justo. Curabitur sed libero viverra, convallis urna ut, sodales nisi. Curabitur posuere pellentesque tellus in rhoncus. Praesent nec pulvinar tellus. Phasellus sodales lorem at metus porttitor, ut suscipit ligula dignissim. Nulla convallis, enim nec convallis ultrices, tortor ex molestie magna, semper cursus sem neque ut velit. Integer tincidunt odio magna, quis sollicitudin odio placerat eget.
              Mauris at felis a neque vehicula dictum eget nec felis. Ut rutrum nec augue id sagittis. Nunc sem dolor, luctus eu venenatis vitae, placerat condimentum mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sagittis, magna venenatis lobortis ornare, urna mauris volutpat libero, ac commodo sapien ipsum hendrerit sapien. Maecenas luctus nunc nec libero finibus congue. Nam sagittis fringilla neque sit amet tincidunt.
              Integer ac sagittis odio, non tempor ante. Aenean molestie gravida augue. Ut iaculis cursus sem laoreet gravida. Proin viverra iaculis velit at luctus. Etiam pellentesque interdum ullamcorper. Morbi tristique nulla vel urna efficitur, ac sodales mi venenatis. Mauris lacinia lacus ac ex sollicitudin, sit amet convallis lectus posuere. Nam elit justo, vestibulum suscipit finibus vel, egestas vel ligula. Aliquam erat volutpat. Nullam eget vulputate metus, vitae feugiat elit. Aenean ornare magna quis vestibulum mollis. Aenean nec lorem elementum, viverra quam eu, efficitur sem.
              Nulla felis justo, commodo eu lobortis sed, faucibus at nibh. Maecenas faucibus molestie magna non semper. Phasellus nec lacus sed metus maximus maximus. Nullam et risus in libero pulvinar vestibulum ornare eleifend lectus. Sed neque mauris, fringilla varius vestibulum a, fringilla ac dui. Mauris ac felis felis. Aenean dolor dui, dapibus non euismod a, facilisis in nunc. Proin fermentum sem libero, sit amet lacinia libero rutrum ac. Nulla eu tellus iaculis, accumsan massa vitae, volutpat ligula.
            </h3>
          </Paper>
      </>
    );
}

