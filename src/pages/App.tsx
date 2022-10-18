import { AppBar, Box, Card, Container, Grid, Paper, Toolbar, Typography } from "@mui/material";
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
        <AppBar 
            style={{
              position:'fixed', 
              background: 'black'
            }}
        >
          <Container>
            <Toolbar style={{justifyContent: 'space-evenly'}}>
                <Stack direction="row" spacing={12}>
                    <Button color="inherit" onClick={scrollAboutMe} >About Me</Button>
                    <Button color="inherit" onClick={scrollWorkHistory}>Work History</Button>
                    <Button color="inherit" onClick={scrollCertifications}>Certifications</Button>
                </Stack>
            </Toolbar>
          </Container>
        </AppBar>
      
        <Container>
        <div style={{marginTop:80}} ref={refAboutMe}></div>
          <Card>
            <h2>About Me</h2>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam est diam, ultricies sodales commodo vitae, imperdiet nec ligula. Phasellus lobortis et lectus ac scelerisque. Quisque lacinia feugiat volutpat. Vestibulum et leo placerat, auctor augue nec, feugiat lorem. Quisque turpis est, placerat ac dignissim et, dictum at neque. Donec ipsum urna, interdum vitae odio quis, vestibulum porta magna. Aliquam aliquam scelerisque pretium. Pellentesque ac odio venenatis, bibendum sapien eu, blandit dui. Vivamus lacinia tellus eros, consequat laoreet metus rhoncus ac. Morbi ac massa nibh. Suspendisse neque ipsum, interdum sit amet bibendum a, tempus id velit. Quisque vitae nunc dapibus, pellentesque risus eleifend, pellentesque nunc.
              Proin semper maximus arcu a tempus. Cras ut dapibus massa. Donec volutpat quam elit, nec aliquet nulla varius quis. Fusce venenatis molestie nisl eu fringilla. Cras at tincidunt justo. Curabitur sed libero viverra, convallis urna ut, sodales nisi. Curabitur posuere pellentesque tellus in rhoncus. Praesent nec pulvinar tellus. Phasellus sodales lorem at metus porttitor, ut suscipit ligula dignissim. Nulla convallis, enim nec convallis ultrices, tortor ex molestie magna, semper cursus sem neque ut velit. Integer tincidunt odio magna, quis sollicitudin odio placerat eget.
              Mauris at felis a neque vehicula dictum eget nec felis. Ut rutrum nec augue id sagittis. Nunc sem dolor, luctus eu venenatis vitae, placerat condimentum mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sagittis, magna venenatis lobortis ornare, urna mauris volutpat libero, ac commodo sapien ipsum hendrerit sapien. Maecenas luctus nunc nec libero finibus congue. Nam sagittis fringilla neque sit amet tincidunt.
              Integer ac sagittis odio, non tempor ante. Aenean molestie gravida augue. Ut iaculis cursus sem laoreet gravida. Proin viverra iaculis velit at luctus. Etiam pellentesque interdum ullamcorper. Morbi tristique nulla vel urna efficitur, ac sodales mi venenatis. Mauris lacinia lacus ac ex sollicitudin, sit amet convallis lectus posuere. Nam elit justo, vestibulum suscipit finibus vel, egestas vel ligula. Aliquam erat volutpat. Nullam eget vulputate metus, vitae feugiat elit. Aenean ornare magna quis vestibulum mollis. Aenean nec lorem elementum, viverra quam eu, efficitur sem.
              Nulla felis justo, commodo eu lobortis sed, faucibus at nibh. Maecenas faucibus molestie magna non semper. Phasellus nec lacus sed metus maximus maximus. Nullam et risus in libero pulvinar vestibulum ornare eleifend lectus. Sed neque mauris, fringilla varius vestibulum a, fringilla ac dui. Mauris ac felis felis. Aenean dolor dui, dapibus non euismod a, facilisis in nunc. Proin fermentum sem libero, sit amet lacinia libero rutrum ac. Nulla eu tellus iaculis, accumsan massa vitae, volutpat ligula.
              
            </h3>
          </Card>

          <div style={{marginTop:80}} ref={refWorkHistory}></div>
          <Card>
              <h2 >Work History</h2>
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam est diam, ultricies sodales commodo vitae, imperdiet nec ligula. Phasellus lobortis et lectus ac scelerisque. Quisque lacinia feugiat volutpat. Vestibulum et leo placerat, auctor augue nec, feugiat lorem. Quisque turpis est, placerat ac dignissim et, dictum at neque. Donec ipsum urna, interdum vitae odio quis, vestibulum porta magna. Aliquam aliquam scelerisque pretium. Pellentesque ac odio venenatis, bibendum sapien eu, blandit dui. Vivamus lacinia tellus eros, consequat laoreet metus rhoncus ac. Morbi ac massa nibh. Suspendisse neque ipsum, interdum sit amet bibendum a, tempus id velit. Quisque vitae nunc dapibus, pellentesque risus eleifend, pellentesque nunc.
                Proin semper maximus arcu a tempus. Cras ut dapibus massa. Donec volutpat quam elit, nec aliquet nulla varius quis. Fusce venenatis molestie nisl eu fringilla. Cras at tincidunt justo. Curabitur sed libero viverra, convallis urna ut, sodales nisi. Curabitur posuere pellentesque tellus in rhoncus. Praesent nec pulvinar tellus. Phasellus sodales lorem at metus porttitor, ut suscipit ligula dignissim. Nulla convallis, enim nec convallis ultrices, tortor ex molestie magna, semper cursus sem neque ut velit. Integer tincidunt odio magna, quis sollicitudin odio placerat eget.
                Mauris at felis a neque vehicula dictum eget nec felis. Ut rutrum nec augue id sagittis. Nunc sem dolor, luctus eu venenatis vitae, placerat condimentum mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sagittis, magna venenatis lobortis ornare, urna mauris volutpat libero, ac commodo sapien ipsum hendrerit sapien. Maecenas luctus nunc nec libero finibus congue. Nam sagittis fringilla neque sit amet tincidunt.
                Integer ac sagittis odio, non tempor ante. Aenean molestie gravida augue. Ut iaculis cursus sem laoreet gravida. Proin viverra iaculis velit at luctus. Etiam pellentesque interdum ullamcorper. Morbi tristique nulla vel urna efficitur, ac sodales mi venenatis. Mauris lacinia lacus ac ex sollicitudin, sit amet convallis lectus posuere. Nam elit justo, vestibulum suscipit finibus vel, egestas vel ligula. Aliquam erat volutpat. Nullam eget vulputate metus, vitae feugiat elit. Aenean ornare magna quis vestibulum mollis. Aenean nec lorem elementum, viverra quam eu, efficitur sem.
                Nulla felis justo, commodo eu lobortis sed, faucibus at nibh. Maecenas faucibus molestie magna non semper. Phasellus nec lacus sed metus maximus maximus. Nullam et risus in libero pulvinar vestibulum ornare eleifend lectus. Sed neque mauris, fringilla varius vestibulum a, fringilla ac dui. Mauris ac felis felis. Aenean dolor dui, dapibus non euismod a, facilisis in nunc. Proin fermentum sem libero, sit amet lacinia libero rutrum ac. Nulla eu tellus iaculis, accumsan massa vitae, volutpat ligula.
              </h3>
            </Card>

            <div style={{marginTop:80}} ref={refCertifications}></div>
            <Card>
              <h2>Certifications</h2>
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam est diam, ultricies sodales commodo vitae, imperdiet nec ligula. Phasellus lobortis et lectus ac scelerisque. Quisque lacinia feugiat volutpat. Vestibulum et leo placerat, auctor augue nec, feugiat lorem. Quisque turpis est, placerat ac dignissim et, dictum at neque. Donec ipsum urna, interdum vitae odio quis, vestibulum porta magna. Aliquam aliquam scelerisque pretium. Pellentesque ac odio venenatis, bibendum sapien eu, blandit dui. Vivamus lacinia tellus eros, consequat laoreet metus rhoncus ac. Morbi ac massa nibh. Suspendisse neque ipsum, interdum sit amet bibendum a, tempus id velit. Quisque vitae nunc dapibus, pellentesque risus eleifend, pellentesque nunc.
                Proin semper maximus arcu a tempus. Cras ut dapibus massa. Donec volutpat quam elit, nec aliquet nulla varius quis. Fusce venenatis molestie nisl eu fringilla. Cras at tincidunt justo. Curabitur sed libero viverra, convallis urna ut, sodales nisi. Curabitur posuere pellentesque tellus in rhoncus. Praesent nec pulvinar tellus. Phasellus sodales lorem at metus porttitor, ut suscipit ligula dignissim. Nulla convallis, enim nec convallis ultrices, tortor ex molestie magna, semper cursus sem neque ut velit. Integer tincidunt odio magna, quis sollicitudin odio placerat eget.
                Mauris at felis a neque vehicula dictum eget nec felis. Ut rutrum nec augue id sagittis. Nunc sem dolor, luctus eu venenatis vitae, placerat condimentum mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sagittis, magna venenatis lobortis ornare, urna mauris volutpat libero, ac commodo sapien ipsum hendrerit sapien. Maecenas luctus nunc nec libero finibus congue. Nam sagittis fringilla neque sit amet tincidunt.
                Integer ac sagittis odio, non tempor ante. Aenean molestie gravida augue. Ut iaculis cursus sem laoreet gravida. Proin viverra iaculis velit at luctus. Etiam pellentesque interdum ullamcorper. Morbi tristique nulla vel urna efficitur, ac sodales mi venenatis. Mauris lacinia lacus ac ex sollicitudin, sit amet convallis lectus posuere. Nam elit justo, vestibulum suscipit finibus vel, egestas vel ligula. Aliquam erat volutpat. Nullam eget vulputate metus, vitae feugiat elit. Aenean ornare magna quis vestibulum mollis. Aenean nec lorem elementum, viverra quam eu, efficitur sem.
                Nulla felis justo, commodo eu lobortis sed, faucibus at nibh. Maecenas faucibus molestie magna non semper. Phasellus nec lacus sed metus maximus maximus. Nullam et risus in libero pulvinar vestibulum ornare eleifend lectus. Sed neque mauris, fringilla varius vestibulum a, fringilla ac dui. Mauris ac felis felis. Aenean dolor dui, dapibus non euismod a, facilisis in nunc. Proin fermentum sem libero, sit amet lacinia libero rutrum ac. Nulla eu tellus iaculis, accumsan massa vitae, volutpat ligula.
              </h3>
            </Card>
        </Container>
      </>
    );
}

