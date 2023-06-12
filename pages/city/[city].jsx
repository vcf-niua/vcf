import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container, Grid, Box, Typography, Divider, Card, List, ListItem } from '@mui/material';
import LocationCityIcon from '@mui/icons-material/LocationCity';

import InfoCard from '@/components/InfoCard';
import fetchData from '@/services/fetch';

import styles from '@/styles/CityProfile.module.scss';

export default function CityProfile() {

    const router = useRouter();
    const { city } = router.query;

    const [cityData, setCityData] = useState();
    const [listToolState, setListToolState] = useState(false);

    const [eachGrid, setEachGrid] = useState();


    useEffect(() => {
        fetchData('cities', 'GET', {
            'filters[name][$eqi]': city,
            'populate': 'city_tools,city_tools,city_tools.annual_collection,city_tools.annual_collection.year,city_tools.tool_info,indicators.indicator,indicators.annual_collection'
        })
            .then(res => res.json())
            .then(setCityData)
    }, [city])

    // useEffect(() => {
    //     if(cityData) {
    //         settoolList(attrib)
    //     }
    // }, [cityData])

    function getCityIndicatorCatWise(cityData) {
        let indicatorGroup = {}

        if (cityData) {
            console.log(cityData, cityData.data.length > 0, cityData && cityData.data.length > 0)
        }

        if (cityData && cityData.data.length > 0) {
            let indicators = cityData.data[0].attributes.indicators

            if (indicators.length > 0) {
                indicators.forEach((i, idx) => {
                    if (i.annual_collection.length > 0) {
                        let value = i.annual_collection[0].amount
                        let indMeta = i.indicator.data.attributes

                        let indGroupData = indicatorGroup[indMeta.category] || {}

                        indGroupData[indMeta.title] = {
                            icon: <LocationCityIcon />,
                            value: value
                        }

                        indicatorGroup[indMeta.category] = indGroupData
                    }
                })
            }
        }
        console.log(cityData)
        console.log(indicatorGroup)

        return indicatorGroup
    }

    // function renderIndicatorBox(d) {
    //     return (

    //     )
    // }

    function renderIndicatorCat(d, catName) {
        console.log(d, catName)
        let catData = d[catName]
        let indCatBox = []

        if (catData) {
            Object.keys(catData).forEach((c, idx) => {
                indCatBox.push(
                    <Grid key={idx} item xs={6} sm={6} md={2.5}>
                        <InfoCard
                            icon={catData[c].icon}
                            title={c}
                            data={catData[c].value}
                        />
                    </Grid>
                )
            })

            return (
                <div>
                    <h4>{catName} Indicators</h4>
                    <Divider className={styles.line} />
                    <Grid container spacing={2} mt={1} mb={3}>
                        {indCatBox}
                    </Grid>
                </div>
            )
        }


    }

    function renderCityIndicators(cityData) {

        if (cityData) {
            let indicatorGroup = getCityIndicatorCatWise(cityData)

            return (
                <Box pt={3} className={styles.title}>
                    {renderIndicatorCat(indicatorGroup, 'City')}
                    {renderIndicatorCat(indicatorGroup, 'Finance')}
                    {renderIndicatorCat(indicatorGroup, 'Planning')}
                </Box>
            )
        }

    }

    function renderToolsGrid(cityData) {
        let res = []
        if (cityData && cityData.data.length > 0) {
            let toolsArr = cityData.data[0].attributes.city_tools

            toolsArr.forEach((t, idx) => {
                let toolsInfo = t.tool_info.data.attributes
                res.push(
                    <Grid key={idx} item xs={6} sm={6} md={2.5}>
                        <InfoCard
                            icon=<LocationCityIcon />
                            title={toolsInfo.title}
                            eachGrid={t}
                            cardType={'stateMenu'}
                            showDescriptionOfTool={showDescriptionOfTool}
                        />
                    </Grid>
                )
            })
        }

        return res
    }

    function renderToolInfo(obj) {
        console.log("Hiiii", obj);
        return (
            <Card className={styles.cardList} pb={4}>

                <h4 className={styles.cardHeader}> {obj.tool_info.data.attributes.title} </h4>
                <List className={styles.listContain}>

                    {
                    obj.defination ? 
                   (` <ListItem>
                        <Typography variant='title' className={styles.listTitle}>
                            Defination
                        </Typography>
                    </ListItem>
                    <Typography variant='body1' px={3} className={styles.listPara}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt in, dolorum laborum molestias adipisci, nam necessitatibus nulla illum, esse laudantium nesciunt dignissimos. Quos obcaecati pariatur in aspernatur, dignissimos tempora laudantium!
                    </Typography>
                    <Divider />`) : ''
                    }
                    <ListItem>
                        <Typography variant='title' className={styles.listTitle}>
                            Legal Framework
                        </Typography>

                    </ListItem>

                    <Typography variant='body1' px={3} className={styles.listPara}>
                         {obj.legal_framework_text}
                    </Typography>
                    <Divider />
                    <ListItem>
                        <Typography variant='title' className={styles.listTitle}>
                        Applicable charges
                        </Typography>

                    </ListItem>


                    <Typography variant='body1' px={3} className={styles.listPara}>
                        {obj.applicable_rates_text ? obj.applicable_rates_text :'N/A'}
                    </Typography>
                    <Divider />
                </List>

            </Card>
        )
    }

    function showDescriptionOfTool(showHide, obj) {
        console.log("", showHide, obj)
        setListToolState(showHide)
        setEachGrid(obj)
    }

    return (
        <Container>

            <h2 className={styles.city_name_heading}>{city}</h2>

            <Box pt={3} className={styles.title}>
                {renderCityIndicators(cityData)}
            </Box>
            <Box pt={3} className={styles.title}>
                <h4>Tools</h4>
                <Divider className={styles.line} />
                <Grid container spacing={2} mt={1} mb={1}>
                    {renderToolsGrid(cityData)}
                </Grid>
            </Box>
            {eachGrid && renderToolInfo(eachGrid)}
        </Container>
    )
}
