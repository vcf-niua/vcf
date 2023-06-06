import React from 'react'
import { Card, CardContent, CardHeader, Grid, Container, Box } from '@mui/material';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { Table, TableBody, TableRow, TableCell } from '@mui/material';
import Map from '@/components/Map';
import styles from '@/styles/IndiaMainPage.module.scss';

export default function IndiaMainPage() {

    function leftSection() {
        return (
            <Map />
        )
    }

    function rightSection() {
        return (
            <div>


                <Box pt={3} className={styles.title}>

                    <h4> States </h4>
                    <div className={styles.stateList}>
                        <Grid container spacing={2} mt={1}>

                            <Grid item xs={6} sm={6} md={6} className={styles.statehover}>
                                <p> All </p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} className={styles.statehover}>
                                <p> Arunachal Pradesh </p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} className={styles.statehover}>
                                <p > Andhra Pradesh </p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} className={styles.statehover}>
                                <p> Chhattisgarh</p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} className={styles.statehover}>
                                <p> Goa </p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} className={styles.statehover}>
                                <p> Gujarat </p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} className={styles.statehover}>
                                <p> Maharashtra</p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} className={styles.statehover}>
                                <p> Madhya Pradesh</p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} className={styles.statehover}>
                                <p> Kerala</p>
                            </Grid>
                           
                            <Grid item xs={6} sm={6} md={6} className={styles.statehover}>
                                <p> Assam </p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} className={styles.statehover}>
                                <p> Manipur </p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} className={styles.statehover}>
                                <p> Meghalaya </p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} className={styles.statehover}>
                                <p> Nagaland </p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} className={styles.statehover}>
                                <p> Uttar Pradesh </p>
                            </Grid>




                        </Grid>
                    </div>
                </Box>


                <Box pt={3} className={styles.title}>
                    <h4> Cities </h4>
                    <div className={styles.cityList}>
                        <Grid container spacing={2} mt={1}>

                            <Grid item xs={6} sm={6} md={6}>
                                <p> Mumbai </p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6}>
                                <p> Delhi </p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6}>
                                <p> Bangalore</p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6}>
                                <p> Hyderabad </p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6}>
                                <p> Ahmedabad </p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6}>
                                <p> Chennai </p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6}>
                                <p> Kolkata </p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6}>
                                <p> Surat </p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6}>
                                <p> Pune </p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6}>
                                <p> Jaipur </p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6}>
                                <p> Lucknow </p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6}>
                                <p> Meghalaya </p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6}>
                                <p> Kanpur </p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6}>
                                <p> Nagpur </p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6}>
                                <p> Indore </p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6}>
                                <p> Thane </p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6}>
                                <p> Bhopal </p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6}>
                                <p> Visakhapatnam </p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6}>
                                <p> Pimpri and Chinchwad </p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6}>
                                <p> Patna </p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6}>
                                <p> Vadodara </p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6}>
                                <p> Ghaziabad </p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6}>
                                <p> Ludhiana </p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6}>
                                <p> Agra </p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6}>
                                <p> Nashik </p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6}>
                                <p> Faridabad </p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6}>
                                <p> Meerut </p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6}>
                                <p> Rajkot </p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6}>
                                <p> Kalyan and Dombivali </p>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6}>
                                <p> Varanasi </p>
                            </Grid>
                            


                        </Grid>
                    </div>

                </Box>
            </div>
        )
    }
    return (
        <div className={styles.state_profile}>
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
        </div>
    )
}
