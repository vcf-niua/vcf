import React, { useState } from 'react'
import { 
    useEffect,
} from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Header from '@/components/Header';
import { Card, CardContent, CardHeader, Avatar, IconButton, CardActions, Grid, Container, Box, Divider } from '@mui/material';
import { Table, TableBody, TableRow, TableCell, Typography, List, ListItem, ListItemText } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import CardWithList from '@/components/CardWithList';
import Button from '@mui/material/Button';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ListSubheader from '@mui/material/ListSubheader';

import InfoCard from '@/components/InfoCard';
import fetchData from '@/services/fetch';
import utilsDate from '@/services/utils';
import utils from '@/services/utils';

import { API_ENDPOINT_CMS } from '@/services/const.jsx';
import pagesStyle from '@/styles/SpecificTool.module.scss';
export default function SpecificTool() {
    const router = useRouter();
    const {tool} = router.query;

   
    const [toolInfoState, setToolInfoState] = useState();
    const [toolDescription, setToolDescription] = useState();
    const [cityList, setCityList] = useState();
    const [cityDetails, setCityDetails] = useState();
    
    useEffect(() => {
		fetchData('tool-infos', 'GET', {
			'populate': 'icon'
		})
			.then(res => res.json())
			.then(setToolInfoState)
	}, [])

    useEffect(() => {
        if(tool) {
            fetchData('tool-infos', 'GET', {
                'filters[title][$eqi]': tool,
                'populate': 'icon,impact_indicators,impact_indicators.icon,case_studies'
            })
                .then(res => res.json())
                .then(setToolDescription)

            fetchData('cities', 'GET', {
                'filters[city_tools][tool_info][title][$eqi]': tool,
                'populate': 'state,state.icon,city_tools.tool_info'
            })
                .then(res => res.json())
                .then(res => {
                    let stateData = {}
                    res.data.forEach(c => {
                        if(!c.attributes.state.data) {
                            return
                        }

                        let thisStateData = stateData[c.attributes.state.data.attributes.name] || {
                            icon: c.attributes.state.data.attributes.icon ? API_ENDPOINT_CMS + c.attributes.state.data.attributes.icon.data.attributes.url : undefined,
                            cities: []
                        }

                        let cityList = thisStateData.cities || []

                        cityList.push(
                            c.attributes.name
                        )
                        
                        thisStateData.cities = cityList
                        stateData[c.attributes.state.data.attributes.name] = thisStateData
                    })
                    setCityList(stateData)
                })
        }
    }, [tool])

    useEffect(()=> {
        console.log(toolDescription)
    },[toolDescription])

    function renderVcfTools(toolInfoState) {
        let res =[];
        if(toolInfoState && toolInfoState.data) {
            toolInfoState.data.forEach((t, index) => {
                res.push(
                    <TableRow key={index}>
                        <TableCell 
                            className={`${pagesStyle.cell} ${pagesStyle.customColor}`} 
                            style={{ backgroundColor: (t.attributes.title === tool && 'rgba(76, 149, 191, 0.41)') }}> 
                                <Link style={{fontFamily: 'Gilroy'}} href={"/tools/" + t.attributes.title}>{t.attributes.title}</Link>
                        </TableCell>
                    </TableRow> 

                )
            })
        }
        return res
    }

    function definition(toolDescription) {
        if(toolDescription && toolDescription.data[0].attributes.description) {
            
            return (
                <Box pt={3} pl={5} className={pagesStyle.title}>
                    <Typography variant="h6"  mb={1} sx={{ fontWeight: 'bold' }}>
                        Definition
                    </Typography>

                    <Typography variant="body1">
                        {toolDescription.data[0].attributes.description}
                    </Typography>
                </Box>
                )
        }
    }

    function renderCitiesList(cityDetails) {
        // console.log(cityDetails)
        if(cityDetails && cityList[cityDetails]) {
            // console.log(cityList)
            console.log(cityList[cityDetails])

            let res = []

            cityList[cityDetails].cities.forEach((c, idx) => {
                res.push(
                    <div key={idx}>
                        <ListItem>
                            {/* <ListItemText primary={c}/> */}
                            <Link href={'/city/' + c}>{c}</Link>
                        </ListItem>
                        <Divider component="li" sx={{ backgroundColor: '#2D6E93' }}/>
                    </div>
                )
            })

            return (
                <Card 
                    style={{marginTop:"10px", boxShadow: "none"}} 
                >
                    <List component="nav"  style={{transition: "transform 250ms linear"}}>
                        {res}
                    </List>
                    </Card> 
            )
        }
        
       
    }
    
    function renderIndicator(toolDescription) {
        if(toolDescription && toolDescription.data.length > 0) {
            let indicators = toolDescription.data[0].attributes;
            if(indicators.impact_indicators.data.length > 0) {
                let state_indicator = indicators.impact_indicators;
                return (
                    <Box pt={3} pl={5} className={pagesStyle.title}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            Indicator impacting the Tool
                        </Typography>
        
                        <Grid container spacing={2} mt={1}>
                            {state_indicator.data.map((item, index) => (
                                <Grid key={index} item xs={6} sm={6} md={4}>
                                    <InfoCard
                                        icon={item.attributes.icon.data ? 
                                            (<img  style={{width: '40px', height: '40px'}} src={API_ENDPOINT_CMS + item.attributes.icon.data.attributes.url}/>) :
                                             (<NoteAltIcon/>)}
                                        title={item.attributes.title}
                                        
                                    >
                                    </InfoCard>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                )
            }
        }
    }
    function stateAdoptingTool(cityList) {
        if(cityList) {
            console.log(cityList)
            return (
                <Box pt={4} pl={5} className={pagesStyle.title}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        Cities adopting the Tool
                    </Typography>
                    <Grid container spacing={2} mt={1}>
                        {Object.keys(cityList).map((stateName, index) => (
                            <Grid item xs={6} sm={6} md={4} key={index}>
                                <CardWithList 
                                    title={stateName} 
                                    data={cityList[stateName].cities.length}  
                                    icon=<img src={cityList[stateName].icon}/>
                                    iconWidth={'90px'}
                                    listData={cityList[stateName].cities}
                                />
                               
                                {/* {cityDetails && renderCitiesList(cityDetails)} */}
                            </Grid>
                        ))}
                    </Grid>
                    
                </Box>
            )
        }
    }

    function rightSection() {
        return (
            <div>
                <h4 className={pagesStyle.titleHeading}>VCF Tools</h4>
                <Card className={pagesStyle.customCardLeft}>
                    <CardContent>
                        <Table>
                            <TableBody>
                            {renderVcfTools(toolInfoState)}
                            
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        );


    };

    function leftSection() {

        return (
            <div>
                <h4 className={pagesStyle.titleHeading}> 
                   {tool}
                 </h4>
                {definition(toolDescription)}
                {renderIndicator(toolDescription)}
                {stateAdoptingTool(cityList)}
            </div>
        )
    }

    return (
        <>
            <Container>
                <Grid container spacing={5} style={{ marginTop: "40px" }}>
                    <Grid item xs={12} sm={12} md={9}>
                        {leftSection()}
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        {rightSection()}
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
