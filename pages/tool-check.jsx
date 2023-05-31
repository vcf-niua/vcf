import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ToolStyles from '@/styles/Tool.module.scss';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Container, Card, CardContent, Grid } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';


export default function Tool() {


  return (
    <>
      <Header />
      {/* <Container maxWidth="lg" >
        <Stack spacing={2}>
          <Grid container>

            <Stack spacing={2} direction='row'>
              <Grid item xs={12} sm={6} md={3} >
                <Card >
                  <CardContent >
                    <NoteAltIcon style={{ fontSize: "40px" }} />
                    <Typography >
                      Lorem Ipsum
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>



            </Stack>



          </Grid>
        </Stack>
      </Container> */}
      <Container maxWidth="lg" >
        <Box sx={{ flexGrow: 1, mt: 8 }} style={{paddingBottom: "100px"}} >
          <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }} >

            <Grid item xs={2} sm={4} md={3} >
              <Card style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column',backgroundColor:"#226A96", color: '#fff'
              }}>
                <CardContent >
                  <NoteAltIcon style={{ width: "98px", height: "70px" }} />
                  <Typography mt={1}>
                    Lorem ipspum
                  </Typography>

                </CardContent>

              </Card>
            </Grid>

            

            <Grid item xs={2} sm={4} md={3} >
              <Card style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column'
              }}>
                <CardContent >
                  <NoteAltIcon style={{ width: "98px", height: "70px" }} />
                  <Typography mt={1}>
                    Lorem ipspum
                  </Typography>

                </CardContent>

              </Card>
            </Grid>

            <Grid item xs={2} sm={4} md={3} >
              <Card style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column'
              }}>
                <CardContent >
                  <NoteAltIcon style={{ width: "98px", height: "70px" }} />
                  <Typography mt={1}>
                    Lorem ipspum
                  </Typography>

                </CardContent>

              </Card>
            </Grid>

            <Grid item xs={2} sm={4} md={3} >
              <Card style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column'
              }}>
                <CardContent >
                  <NoteAltIcon style={{ width: "98px", height: "70px" }} />
                  <Typography mt={1}>
                    Lorem ipspum
                  </Typography>

                </CardContent>

              </Card>
            </Grid>

            <Grid item xs={2} sm={4} md={3} >
              <Card style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column'
              }}>
                <CardContent >
                  <NoteAltIcon style={{ width: "98px", height: "70px" }} />
                  <Typography mt={1}>
                    Lorem ipspum
                  </Typography>

                </CardContent>

              </Card>
            </Grid>

            <Grid item xs={2} sm={4} md={3} >
              <Card style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column'
              }}>
                <CardContent >
                  <NoteAltIcon style={{ width: "98px", height: "70px" }} />
                  <Typography mt={1}>
                    Lorem ipspum
                  </Typography>

                </CardContent>

              </Card>
            </Grid>

            <Grid item xs={2} sm={4} md={3} >
              <Card style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column'
              }}>
                <CardContent >
                  <NoteAltIcon style={{ width: "98px", height: "70px" }} />
                  <Typography mt={1}>
                    Lorem ipspum
                  </Typography>

                </CardContent>

              </Card>
            </Grid>

            <Grid item xs={2} sm={4} md={3} >
              <Card style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column'
              }}>
                <CardContent >
                  <NoteAltIcon style={{ width: "98px", height: "70px" }} />
                  <Typography mt={1}>
                    Lorem ipspum
                  </Typography>

                </CardContent>

              </Card>
            </Grid>

          </Grid>
        </Box>
      </Container>
    </>
  )
}
