import React from 'react'
import styles from '@/styles/CityProfile.module.scss';
import { Container, Grid, Box, Typography, Divider, Card, List, ListItem, ListItemText } from '@mui/material';
import { CardHeader } from '@mui/material';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import InfoCard from '@/components/InfoCard';

export default function Cityrofile() {
    return (
        <Container>

            <Box pt={3} className={styles.title}>

                <h4> City Indicators </h4>
                <Divider className={styles.line} />
                <Grid container spacing={2} mt={1} mb={3}>

                    <Grid item xs={6} sm={6} md={2}>
                        <InfoCard
                            icon=<LocationCityIcon />
                            title='City area (Sq.km.)'
                            data={48}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={2}>
                        <InfoCard
                            icon=<LocationCityIcon />
                            title='No. of ward'
                            data={48}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={2}>
                        <InfoCard
                            icon=<LocationCityIcon />
                            title='Population 
            (as per census 2011)'
                            data={48}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={2}>
                        <InfoCard
                            icon=<LocationCityIcon />
                            title='Population (2021)'
                            data={48}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={2}>
                        <InfoCard
                            icon=<LocationCityIcon />
                            title='Total worker population'
                            data={48}
                        />
                    </Grid>

                    <Grid item xs={6} sm={6} md={2}>
                        <InfoCard
                            icon=<LocationCityIcon />
                            title='No. of persons living in slums'
                            data={48}
                        />
                    </Grid>



                </Grid>

                <h4> Finance Indicators </h4>
                <Divider className={styles.line} />
                <Grid container spacing={2} mt={1} mb={3}>

                    <Grid item xs={6} sm={6} md={2}>
                        <InfoCard
                            icon=<LocationCityIcon />
                            title='City area (Sq.km.)'
                            data={48}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={2}>
                        <InfoCard
                            icon=<LocationCityIcon />
                            title='No. of ward'
                            data={48}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={2}>
                        <InfoCard
                            icon=<LocationCityIcon />
                            title='Population 
            (as per census 2011)'
                            data={48}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={2}>
                        <InfoCard
                            icon=<LocationCityIcon />
                            title='Population (2021)'
                            data={48}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={2}>
                        <InfoCard
                            icon=<LocationCityIcon />
                            title='Total worker population'
                            data={48}
                        />
                    </Grid>

                    <Grid item xs={6} sm={6} md={2}>
                        <InfoCard
                            icon=<LocationCityIcon />
                            title='No. of persons living in slums'
                            data={48}
                        />
                    </Grid>

                </Grid>

                <h4> Planning Indicators </h4>
                <Divider className={styles.line} />
                <Grid container spacing={2} mt={1} mb={3}>

                    <Grid item xs={6} sm={6} md={2}>
                        <InfoCard
                            icon=<LocationCityIcon />
                            title='City area (Sq.km.)'
                            data={48}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={2}>
                        <InfoCard
                            icon=<LocationCityIcon />
                            title='No. of ward'
                            data={48}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={2}>
                        <InfoCard
                            icon=<LocationCityIcon />
                            title='Population 
            (as per census 2011)'
                            data={48}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={2}>
                        <InfoCard
                            icon=<LocationCityIcon />
                            title='Population (2021)'
                            data={48}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={2}>
                        <InfoCard
                            icon=<LocationCityIcon />
                            title='Total worker population'
                            data={48}
                        />
                    </Grid>

                    <Grid item xs={6} sm={6} md={2}>
                        <InfoCard
                            icon=<LocationCityIcon />
                            title='No. of persons living in slums'
                            data={48}
                        />
                    </Grid>

                </Grid>

                <h4> Tools </h4>
                <Divider className={styles.line} />
                <Grid container spacing={2} mt={1} mb={1}>

                    <Grid item xs={6} sm={6} md={2}>
                        <InfoCard
                            icon=<LocationCityIcon />
                            title='City area (Sq.km.)'
                            data={48}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={2}>
                        <InfoCard
                            icon=<LocationCityIcon />
                            title='No. of ward'
                            data={48}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={2}>
                        <InfoCard
                            icon=<LocationCityIcon />
                            title='Population 
            (as per census 2011)'
                            data={48}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={2}>
                        <InfoCard
                            icon=<LocationCityIcon />
                            title='Population (2021)'
                            data={48}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={2}>
                        <InfoCard
                            icon=<LocationCityIcon />
                            title='Total worker population'
                            data={48}
                        />
                    </Grid>

                    <Grid item xs={6} sm={6} md={2}>
                        <InfoCard
                            icon=<LocationCityIcon />
                            title='No. of persons living in slums'
                            data={48}
                        />
                    </Grid>

                </Grid>

                <Card className={styles.cardList} pb={4}>
                    
                    <h4 className={styles.cardHeader}> Land Acquisition and Development  </h4>
                    <List className={styles.listContain}>
                        
                    <ListItem>
                        <Typography variant='title' className={styles.listTitle}>
                        List Item 1
                            </Typography>
                            
                        </ListItem>
                       
                        
                        <Typography variant='body1' px={3} className={styles.listPara}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt in, dolorum laborum molestias adipisci, nam necessitatibus nulla illum, esse laudantium nesciunt dignissimos. Quos obcaecati pariatur in aspernatur, dignissimos tempora laudantium!
                        </Typography>
                        <Divider />
                        <ListItem>
                        <Typography variant='title' className={styles.listTitle}>
                        List Item 2
                            </Typography>
                            
                        </ListItem>
                       
                        
                        <Typography variant='body1' px={3} className={styles.listPara}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt in, dolorum laborum molestias adipisci, nam necessitatibus nulla illum, esse laudantium nesciunt dignissimos. Quos obcaecati pariatur in aspernatur, dignissimos tempora laudantium!
                        </Typography>
                        <Divider />
                        <ListItem>
                        <Typography variant='title' className={styles.listTitle}>
                        List Item 3
                            </Typography>
                            
                        </ListItem>
                       
                        
                        <Typography variant='body1' px={3} className={styles.listPara}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt in, dolorum laborum molestias adipisci, nam necessitatibus nulla illum, esse laudantium nesciunt dignissimos. Quos obcaecati pariatur in aspernatur, dignissimos tempora laudantium!
                        </Typography>
                        <Divider />
                    </List>

                </Card>
            </Box>
        </Container>
    )
}
