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
  const [tools, setTools] = useState([
    {
      id: 1,
      toolName: "Premium/additional FAR",
      link: ""
    },
    {
      id: 2,
      toolName: "Tax increment Finance",
      link: ""
    },
    {
      id: 3,
      toolName: "Transferable Development Rights",
      link: ""
    },
    {
      toolName: "Vacant Land Tax",
      link: ""
    },
    {
      toolName: "Development charges/ Cost Levy",
      link: ""
    },
    {
      toolName: "Bettement Levy",
      link: ""
    },
    {
      toolName: "Land Pooling",
      link: ""
    },
    {
      toolName: "Land Use Change Fee",
      link: ""
    },
    {
      toolName: "Land Acquisition and Development (Rajasthan)",
      link: ""
    },
    {
      toolName: "Land Value Tax (Including Property tax)",
      link: ""
    },
    {
      toolName: "Regularisation of Unauthorised Construction",
      link: ""
    },
    {
      toolName: "Air Rights",
      link: ""
    },
    {
      toolName: "Town Planning Charges",
      link: ""
    },
    {
      toolName: "City Level Infrastructure Fund (Telangana)",
      link: ""
    },
    {
      toolName: "Encroachment Fee Building",
      link: ""
    },
    {
      toolName: "Penalisation Fees",
      link: ""
    }
  ])


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
            {tools.map((tool,index)=>(
               <Grid item xs={2} sm={4} md={3} >
               <Card className={ToolStyles.customCard}>
                 <CardContent sx={{textAlign:"center"}}>
                   <NoteAltIcon style={{ width: "98px", height: "70px" }} />
                   <Typography mt={1} >
                   {tool.toolName}
                   </Typography>
 
                 </CardContent>
 
               </Card>
             </Grid>
            ))}
           
            


          </Grid>
        </Box>
      </Container>
    </>
  )
}
