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
    const [mapData, setMapData] = useState();

    useEffect(() => {
        (async () => {
            if(state) {
                let dataStates = await fetchData('states', 'GET', {
                    'filters[name][$eqi]': state,
                    'populate': 'laws,laws.law_document,cities,indicators,indicators.state_indicator,indicators.state_indicator.icon,centroid'
                })
                let jsonPromise = await dataStates.json()
                setStateProfile(jsonPromise)
                
                fetchData('map-stats', 'GET', {
                    'for': 'cities',
                    'state': state
                })
                    .then(res => res.json())
                    .then(setMapData)
            }
        })();
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

    function renderDataGrid(city,indicators) {
      if(indicators.length > 0) {
        let res = []
       
            indicators.forEach((i, idx)=> {
                let val = i.value
                if(val) {
                    val = val.toLocaleString('hi')
                } else {
                    val = 'NA'
                }
                res.push(
                    <Grid key={idx} item xs={6} sm={6} md={6}>
                        <InfoCard
                            icon=<img src={API_ENDPOINT_CMS + i.state_indicator.data.attributes.icon.data.attributes.url}/>
                            title={i.state_indicator.data.attributes.title}
                            data={val}
                        />
                    </Grid>
                )
            })
            res.push(
                <Grid  item xs={6} sm={6} md={6}>
                            <InfoCard
                                icon=<LocationCityIcon/>
                                title="Cities Adopting VCF Pilot Tools"
                                data={city.cities.data.length}
                            />
                        </Grid>
            )
            return res
      }
        
       

    }

    //Listing State wise Act
    function vcfAct(stateProfile) {
        let res = []

        if(stateProfile) {
            let actList = stateProfile.data[0].attributes.laws;
            actList.map((item, index)=> {
                if(item.law_document.data) {
                    let doc = item.law_document.data.attributes.url
                res.push(
                    <TableRow key={index}>
                        <TableCell className={`${styles.cell} ${styles.customColor}`} > <a href={API_ENDPOINT_CMS + doc} target="_blank" style={{fontFamily: 'Gilroy'}}> {item.law_title}  </a>  </TableCell>
                    </TableRow>
                )
                }
                
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
                        {renderDataGrid(stateProfile.data[0].attributes,stateProfile.data[0].attributes.indicators)}
                    </Grid>
                </Box>
            )
        }
    }

    function getCenterPoint(stateProfile) {
        if(stateProfile) {
            return stateProfile.data[0].attributes.centroid
        }
    }

    function leftSection() {
        return (
            <Map linkPath={"city"} layerData={mapData} center={getCenterPoint(stateProfile)} zoom={5.5}/>
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
