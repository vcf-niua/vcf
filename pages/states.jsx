import React from 'react';
import { useState, useEffect } from 'react';
import { 
    Button,
    MenuItem,
    InputLabel,
    FormControl,
    Grid, 
    Container, 
    Box } from '@mui/material';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Map from '@/components/Map';
import fetchData from '@/services/fetch';

import styles from '@/styles/IndiaMainPage.module.scss';

export default function IndiaMainPage() {

    const [stateName, setStateName] = useState('All');
    const [stateList, setStateList] = useState();
    const [citiesList, setCitiesList] = useState();
    const [statesGeoJson, setStatesGeoJson] = useState();

    const router = useRouter();

    useEffect(() => {
        fetchData('states', 'GET', {
            'sort': 'name'
        })
            .then(res => res.json())
            .then(setStateList)

        fetchData('map-stats', 'GET', {
            'for': 'state'
        })
            .then(res => res.json())
            .then(setStatesGeoJson)
    }, [])

    useEffect(() => {
        console.log(statesGeoJson)
    }, [statesGeoJson])

    useEffect(() => {
        let params = {
            'populate': 'cities'
        }
        if(stateName != 'All') {
            params['filters[name][$eqi]'] = stateName
        }
        fetchData('states', 'GET', params)
            .then(res => res.json())
            .then(setCitiesList)
    }, [stateName])

    function renderStateInput(stateList) {
        let res = []

        res.push(<MenuItem key="1000" value="All">All</MenuItem>)

        if(stateList) {
            stateList.data.forEach((s, idx) => {
                res.push(
                    <MenuItem key={idx} value={s.attributes.name}>{s.attributes.name}</MenuItem>
                )
            })
        }

        return res
    }

    function getCitiesList(d, stateName) {
        let c = []

        if(stateName == 'All') {
            citiesList.data.forEach(s => {
                c = c.concat(s.attributes.cities.data)
            })
            return c
        } else {
            return d.data[0].attributes.cities.data
        }
    }

    function renderCityList(citiesList) {
        let res = []

        if(citiesList) {
            let cities = getCitiesList(citiesList, stateName) //citiesList.data[0].attributes.cities.data

            console.log(cities)

            if(cities.length == 0) {
                return (
                    <Grid item xs={6} sm={6} md={6}>
                        <h4>Zero cities in {citiesList.data[0].attributes.name}</h4>
                    </Grid>
                )
            }

            cities.forEach((c, idx) => {
                res.push(
                    <Grid key={idx} item xs={6} sm={6} md={6}>
                        <Link href={'/city/' + c.attributes.name}><p>{c.attributes.name}</p></Link>
                    </Grid>
                )
            })
        }

        console.log(citiesList)

        return res
    }

    function leftSection() {
        return (
            <Map layerData={statesGeoJson} zoom={3.2}/>
        )
    }

    function rightSection() {
        return (
            <div>
                <div className={styles.state_selector_container}>
                    <FormControl fullWidth className={styles.state_input}>
                        <InputLabel id="state-name-label">State</InputLabel>
                        <Select
                            labelId="state-name-label"
                            id="state-name-select"
                            value={stateName}
                            label="State"
                            onChange={(e) => setStateName(e.target.value)}
                        >
                        {renderStateInput(stateList)}
                        </Select>
                    </FormControl>
                    <div className={styles.state_profile_button}>
                        <Button 
                            fullWidth 
                            variant="contained" 
                            size="large" 
                            disableElevation 
                            onClick={() => {router.push('/state/' + stateName)}} 
                            disabled={stateName == 'All' ? true : false}
                        >
                            Profile
                        </Button>
                    </div>
                </div>


                <Box pt={3} className={styles.cityList}>
                    <h4>Cities</h4>
                    <div>
                        <Grid style={{marginTop: '0px'}} container spacing={2}>
                            {renderCityList(citiesList)}
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
