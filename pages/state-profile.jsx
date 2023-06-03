import React from 'react'
import { Card, CardContent, CardHeader, Grid, Container, Box } from '@mui/material';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { Table, TableBody, TableRow, TableCell } from '@mui/material';

import Map from '@/components/Map';

import styles from '@/styles/StateProfile.module.scss';

export default function StateProfile() {

    function renderCard(props) {
        return (
            <Card className={styles.customIndicatorCard} >
                <div className={styles.icon}>
                    {props.icon}
                </div>
                <div className={styles.content}>
                    <p>{props.title}</p>
                    <h2>{props.data}</h2>
                </div>
            </Card>
        )
    }

    function leftSection() {
        return (
            <Map/>
        )
    }

    function rightSection() {
        return (
            <div>
                <h1>State Profile</h1>

                <Box pt={3} className={styles.title}>

                    <h4 className={styles.titleHeading}> Rajasthan </h4>
                    <Grid container spacing={2} mt={1}>

                        <Grid item xs={6} sm={6} md={6}>
                            {renderCard({
                                icon: <LocationCityIcon/>,
                                title: 'Number of Cities',
                                data: 48
                            })}
                        </Grid>
                        <Grid item xs={6} sm={6} md={6}>
                            {renderCard({
                                icon: <LocationCityIcon/>,
                                title: 'Cities adopting VCF',
                                data: 38
                            })}
                        </Grid>
                        <Grid item xs={6} sm={6} md={6}>
                            <Card className={styles.customIndicatorCard}>
                                <div className={styles.icon}>
                                    <LocationCityIcon/>
                                </div>
                                <div className={styles.content}>
                                    <p>Total Population</p>
                                    <h2>20,30,400</h2>
                                </div>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6}>
                            <Card className={styles.customIndicatorCard}>
                                <div className={styles.icon}>
                                    <LocationCityIcon/>
                                </div>
                                <div className={styles.content}>
                                    <p>Urban Population</p>
                                    <h2>10,30,400</h2>
                                </div>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6}>
                            <Card className={styles.customIndicatorCard}>
                                <div className={styles.icon}>
                                    <LocationCityIcon/>
                                </div>
                                <div className={styles.content}>
                                    <p>Total Revenue (Cr)</p>
                                    <h2>134.65</h2>
                                </div>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6}>
                            <Card className={styles.customIndicatorCard}>
                                <div className={styles.icon}>
                                    <LocationCityIcon/>
                                </div>
                                <div className={styles.content}>
                                    <p>VCF Revenue (Cr)</p>
                                    <h2>27.55</h2>
                                </div>
                            </Card>
                        </Grid>

                    </Grid>
                </Box>

                
                <Box pt={3} className={styles.title}>
                <h4 className={styles.titleHeading}> Legislative Acts enabling VCF </h4>
                    
                <Card className={styles.customCardLeft}>
                    <CardContent>
                        <Table>
                            <TableBody>


                                <TableRow >
                                    <TableCell className={`${styles.cell} ${styles.customColor}`} > Rajasthan lands Special Irrigation Charges Act,1953  </TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell className={`${styles.cell} ${styles.customColor}`} > Rajasthan Urban Improvement Act,1959  </TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell className={`${styles.cell} ${styles.customColor}`} > Rajasthan Urban Improvement Trust Act,1959  </TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell className={`${styles.cell} ${styles.customColor}`} > Rajasthan land Special Irrigation  Charges Act,1953  </TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell className={`${styles.cell} ${styles.customColor}`} > Rajasthan Urban Improvement Act,1959  </TableCell>
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
        <div className={styles.state_profile}>
            <Container>
                <Grid container spacing={5} style={{ marginTop: "20px" }}>
                    <Grid item xs={12} sm={12} md={5}>
                        {rightSection()}
                        
                    </Grid>
                    <Grid item xs={12} sm={12} md={7}>
                    {leftSection()}
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
