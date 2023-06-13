import React from 'react';
import { 
    useEffect,
    useState
} from 'react';
import { useRouter } from 'next/router';
import { Card, CardContent, CardHeader, Grid, Container, Box } from '@mui/material';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { Table, TableBody, TableRow, TableCell } from '@mui/material';

import Map from '@/components/Map';
import InfoCard from '@/components/InfoCard';

import fetchData from '@/services/fetch';
import { API_ENDPOINT_CMS } from '@/services/const.jsx';

import styles from '@/styles/StateProfile.module.scss';

export default function StateProfile() {

    const router = useRouter();
    const {state} = router.query;

    const [stateProfile, setStateProfile] = useState();

    useEffect(() => {
        if(state) {
            fetchData('states', 'GET', {
                'filters[name][$eqi]': state,
                'populate': 'laws,laws.law_document,cities'
            })
                .then(res => res.json())
                .then(setStateProfile)
        }
    }, [state])

    useEffect(() => {
        console.log(stateProfile)
    }, [stateProfile])

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

    function renderDataGrid(attribs) {
        let data = {
            'Number of Cities': attribs.no_of_cities,
            'Cities adopting VCF': attribs.cities.data.length,
            'Total Population': attribs.population,
            'Total Revenue (Cr)': attribs.total_revenue,
            'VCF Revenue (Cr)': attribs.total_vcf_revenue
        }

        let res = []
        Object.keys(data).forEach((i, idx) => {
            if(data[i]) {
                res.push(
                    <Grid key={idx} item xs={6} sm={6} md={6}>
                        <InfoCard
                            icon=<LocationCityIcon/>
                            title={i}
                            data={data[i]}
                        />
                    </Grid>
                )
            }
            
        })

        return res
    }

    //Listing State wise Act
    function vcfAct(stateProfile) {
        let res = []

        if(stateProfile) {
            let actList = stateProfile.data[0].attributes.laws;
            actList.map((item, index)=> {
                let doc = item.law_document.data.attributes.url
                res.push(
                    <TableRow key={index}>
                        <TableCell className={`${styles.cell} ${styles.customColor}`} > <a href={API_ENDPOINT_CMS + doc} target="_blank"> {item.law_title}  </a>  </TableCell>
                    </TableRow>
                )
            })
        }
        
        return res
    }

    function renderStateProfile(stateProfile) {
        if(stateProfile) {
            let state_name = stateProfile.data[0].attributes.name;
            return (
                <Box pt={3} className={styles.title}>
                    <h4 className={styles.titleHeading}> {stateProfile.data[0].attributes.name} </h4>
                    <Grid container spacing={2} mt={1}>
                        {renderDataGrid(stateProfile.data[0].attributes)}
                    </Grid>
                </Box>
            )
        }
    }

    function leftSection() {
        return (
            <Map/>
        )
    }

    function rightSection() {
        return (
            <div>
                {/* <h1>State Profile</h1> */}

                {renderStateProfile(stateProfile)}
                
                <Box pt={3} className={styles.title}>
                <h4 className={styles.titleHeading}> Legislative Acts enabling VCF </h4>
                    
                <Card className={styles.customCardLeft}>
                    <CardContent>
                        <Table>
                            <TableBody>
                                {vcfAct(stateProfile)}
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
