import React from 'react'
import dynamic from 'next/dynamic'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, Avatar, IconButton, CardActions, Grid, Container, Box } from '@mui/material';
import Style from '@/styles/StateProfile.module.scss';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { Table, TableBody, TableRow, TableCell, Typography, List, ListItem, ListItemText } from '@mui/material';

import Map from '@/components/Map';

export default function StateProfile() {

    function leftSection() {
        return (
            <Map/>
        )
    }

    function rightSection() {
        return (
            <div>

                <Box pt={3} pl={5} className={Style.title}>

                    <h4 className={Style.titleHeading}> Rajasthan </h4>
                    <Grid container spacing={2} mt={1}>

                        <Grid item xs={6} sm={6} md={6}>
                            <Card className={Style.customIndicatorCard} >
                                <CardHeader

                                    avatar={<LocationCityIcon className={Style.icon} />}
                                    title="Number of Cities"
                                    subheader="28"
                                    subheaderTypographyProps={{ variant: 'title', color: "#fff", fontSize: "25px" }}
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6}>
                            <Card className={Style.customIndicatorCard}>
                                <CardHeader

                                    avatar={<LocationCityIcon className={Style.icon} />}
                                    title="Cities adopting VCF"
                                    subheader="38"
                                    subheaderTypographyProps={{ variant: 'title', color: "#fff", fontSize: "25px" }}
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6}>
                            <Card className={Style.customIndicatorCard}>
                                <CardHeader

                                    avatar={<LocationCityIcon className={Style.icon} />}
                                    title="Total Population"
                                    subheader="12"
                                    subheaderTypographyProps={{ variant: 'title', color: "#fff", fontSize: "25px" }}
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6}>
                            <Card className={Style.customIndicatorCard}>
                                <CardHeader

                                    avatar={<LocationCityIcon className={Style.icon} />}
                                    title="Urban Population"
                                    subheader="18"
                                    subheaderTypographyProps={{ variant: 'title', color: "#fff", fontSize: "25px" }}
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6}>
                            <Card className={Style.customIndicatorCard}>
                                <CardHeader

                                    avatar={<LocationCityIcon className={Style.icon} />}
                                    title="Total Revenue (INR)"
                                    subheader="18"
                                    subheaderTypographyProps={{ variant: 'title', color: "#fff", fontSize: "25px" }}
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6}>
                            <Card className={Style.customIndicatorCard}>
                                <CardHeader

                                    avatar={<LocationCityIcon className={Style.icon} />}
                                    title="VCF Revenue (INR)"
                                    subheader="23"
                                    subheaderTypographyProps={{ variant: 'title', color: "#fff", fontSize: "30px" }}
                                    titleTypographyProps={{ color: "#fff" }}
                                />
                            </Card>
                        </Grid>

                    </Grid>
                </Box>

                
                <Box pt={3} pl={5} className={Style.title}>
                <h4 className={Style.titleHeading}> Legislative Acts enabling VCF </h4>
                    
                <Card className={Style.customCardLeft}>
                    <CardContent>
                        <Table>
                            <TableBody>


                                <TableRow >
                                    <TableCell className={`${Style.cell} ${Style.customColor}`} > Rajasthan lands Special Irrigation Charges Act,1953  </TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell className={`${Style.cell} ${Style.customColor}`} > Rajasthan Urban Improvement Act,1959  </TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell className={`${Style.cell} ${Style.customColor}`} > Rajasthan Urban Improvement Trust Act,1959  </TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell className={`${Style.cell} ${Style.customColor}`} > Rajasthan land Special Irrigation  Charges Act,1953  </TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell className={`${Style.cell} ${Style.customColor}`} > Rajasthan Urban Improvement Act,1959  </TableCell>
                                </TableRow>
                               



                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                </Box>
            </div>
        )
    }
    return (
        <div>
            <Header />

            <Container>
                <Grid container spacing={5} style={{ marginTop: "20px" }}>
                    <Grid item xs={12} sm={12} md={7}>
                        {leftSection()}
                    </Grid>
                    <Grid item xs={12} sm={12} md={5}>
                        {rightSection()}
                    </Grid>
                </Grid>
            </Container>

            <Footer/>
        </div>
    )
}
