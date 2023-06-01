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

export default function Tool() {

  const [tool, setTool] = useState([
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
      <Container maxWidth="lg" >
        <Stack spacing={2}>
          <Stack spacing={2} direction='row'>
            <Grid container>

              {tool.map((item, index) => (
                <Grid item xs={12} sm={6} md={3} style={{ margin: "20px 0" }} >
                  <Card style={{ marginRight: "10px", textAlign: "center", height: '120px' }} className={ToolStyles.iconbackground}>
                    <CardContent >
                      <NoteAltIcon style={{ fontSize: "40px" }} />
                      <Typography >
                        {item.toolName}
                      </Typography>

                    </CardContent>

                  </Card>

                </Grid>

              ))}

            </Grid>
          </Stack>
        </Stack>
      </Container>

    </>
  )
}
