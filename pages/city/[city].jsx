import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container, Grid, Box, Typography, Divider, Card, List, ListItem } from '@mui/material';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

import Map from '@/components/Map';
import InfoCard from '@/components/InfoCard';
import fetchData from '@/services/fetch';

import { API_ENDPOINT_CMS } from '@/services/const.jsx';
import styles from '@/styles/CityProfile.module.scss';

export default function CityProfile() {

    const router = useRouter();
    const { city } = router.query;

    const [cityData, setCityData] = useState();

    const [showToolDetails, setShowToolDetails] = useState();

    const tableData = [
        ['Row 1, Column 1', 'Row 1, Column 2'],

    ];


    useEffect(() => {
        fetchData('cities', 'GET', {
            'filters[name][$eqi]': city,
            'populate': 'city_tools,city_tools,city_tools.annual_collection,city_tools.annual_collection.year,city_tools.tool_info,city_tools.tool_info.icon,indicators.indicator,indicators.indicator.icon,indicators.annual_collection,centroid'
        })
            .then(res => res.json())
            .then(setCityData)


    }, [city])

    useEffect(() => {
        if (cityData) {
            console.log(cityData)
        }
    }, [cityData])



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

                        if (i.indicator.data) {
                            let indMeta = i.indicator.data.attributes

                            let indGroupData = indicatorGroup[indMeta.category] || {}

                            indGroupData[indMeta.title] = {
                                icon: <img style={{ width: '40px', height: '40px' }} src={API_ENDPOINT_CMS + i.indicator.data.attributes.icon.data.attributes.url} />,
                                value: value
                            }

                            indicatorGroup[indMeta.category] = indGroupData
                        }
                    }
                })
            }
        }
        // console.log(cityData)
        // console.log(indicatorGroup)

        return indicatorGroup
    }

    function handleInfoCardClick(toolInfoObj) {
        let mkPipe = unified().use(remarkParse).use(remarkHtml)

        Promise.all([
            mkPipe.process(toolInfoObj.applicable_rates_text),
            mkPipe.process(toolInfoObj.legal_framework_text)
        ])
            .then((v) => {
                toolInfoObj.applicable_rates_text_html = v[0]
                toolInfoObj.legal_framework_text_html = v[1]

                setShowToolDetails(toolInfoObj)
            })
    }

    function renderIndicatorCat(d, catName) {
        // console.log(d, catName)
        let catData = d[catName]
        let indCatBox = []

        if (catData) {
            Object.keys(catData).forEach((c, idx) => {

                let val = catData[c].value

                if(val) {
                    val = val.toLocaleString('hi')
                } else {
                    val = 'NA'
                }
                
                indCatBox.push(
                    <Grid key={idx} item xs={6} sm={6} md={3}>
                        <InfoCard
                            icon={catData[c].icon}
                            title={c}
                            data={catName=== 'Planning' && c ==='Master/ Development plan updated in last 10 years' ? catData[c].value === 1 ? "Yes" : "No" : val}
                        // cardType = "checkMenu" 

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
                if (t.tool_info.data) {
                    let toolsInfo = t.tool_info.data.attributes
                    let icon = toolsInfo.icon.data.attributes.url
                    res.push(
                        <Grid key={idx} item xs={6} sm={6} md={3}>

                            <InfoCard
                                icon=<img style={{ width: '40px', height: '40px' }} src={API_ENDPOINT_CMS + icon} />
                                title={toolsInfo.title}
                                onClick={() => handleInfoCardClick(t)}
                                backgroundColor={"#286080"}
                            />
                        </Grid>
                    )
                }


            })
        }

        return res
    }

    function annualCollection(cell) {
        if (cell.amount && cell.year.data) {
            return (<>
                <TableCell className={styles.list}>
                   {cell.amount ? cell.amount : 'N/A'}
                </TableCell>
                <TableCell className={styles.list}>
                   {cell.year.data ? cell.year.data.attributes.name : 'N/A'}

                </TableCell>
            </>)
        }else if(cell.amount || cell.year.data) {
            return (<>
                <TableCell className={styles.list}>
                   {cell.amount ? cell.amount : 'N/A'}
                </TableCell>
                <TableCell className={styles.list}>
                   {cell.year.data ? cell.year.data.attributes.name : 'N/A'}

                </TableCell>
            </>)
        }
    }

    function renderToolInfo(showToolDetails) {

        return (
            <Card className={styles.cardList} pb={4}>
                <h4 className={styles.cardHeader}> {showToolDetails.tool_info.data.attributes.title} </h4>
                <List className={styles.listContain}>
                    <ListItem>
                        <Typography variant='title' className={styles.listTitle}>
                            Legal Framework
                        </Typography>
                    </ListItem>
                    <Typography variant='body1' px={3} className={styles.listPara}>
                        <section className={styles.markdown_container} dangerouslySetInnerHTML={{ __html: showToolDetails.legal_framework_text_html.value }}></section>
                    </Typography>
                    <Divider />
                    <ListItem>
                        <Typography variant='title' className={styles.listTitle}>
                            Applicable charges
                        </Typography>

                    </ListItem>
                    <Typography variant='body1' px={3} className={styles.listPara}>
                        <section className={styles.markdown_container} dangerouslySetInnerHTML={{ __html: showToolDetails.applicable_rates_text_html.value }}></section>
                    </Typography>
                    <Divider />

                    <ListItem>
                        <Typography variant='title' className={styles.listTitle}>
                            Annual charges/ collection
                        </Typography>

                    </ListItem>
                    <Typography variant='body1' px={3} className={styles.listPara}>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell> <strong> Amount (INR Cr.) </strong> </TableCell>
                                        <TableCell> <strong> Year</strong> </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {showToolDetails.annual_collection.map((cell, rowIndex) => (
                                        <TableRow key={rowIndex}>
                                            {annualCollection(cell)}

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Typography>
                    <Divider />
                </List>
            </Card>
        )
    }

    function getCenterPoint(cityProfile) {
        if(cityProfile && cityProfile.data.length > 0) {
            console.log(cityProfile)
            return cityProfile.data[0].attributes.centroid
        }
    }

    return (
        <Container>
            <Grid container>
                <Grid item xs={12} sm={12} mt={4} pl={0}>
                    <h2 className={styles.city_name_heading}>{city}</h2>
                </Grid>
                <Grid item style={{height: '250px'}} xs={12} sm={12} mt={4}>
                    <Map center={getCenterPoint(cityData)} zoom={9} disableHighlight={true}/>
                </Grid>
                

                
            </Grid>
            
            
            

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
            {showToolDetails && renderToolInfo(showToolDetails)}
        </Container>
    )
}
