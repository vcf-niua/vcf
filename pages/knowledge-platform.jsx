import React, { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Container, Card, CardContent, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'next/link';

import fetchData from '@/services/fetch';
import { API_ENDPOINT_CMS } from '@/services/const.jsx';
import ToolInfoCard from '@/components/ToolInfoCard';

import styles from '@/styles/Tool.module.scss';

export default function KnowledgePlatform() {

    const [toolInfoState, setToolInfoState] = useState();
    useEffect(() => {
		fetchData('tool-infos', 'GET', {
			'populate': 'icon'
		})
			.then(res => res.json())
			.then(setToolInfoState)
	}, [])

	// useEffect(()=>{
	// 	console.log(toolInfoState);
	// },[toolInfoState])

    function renderToolBox(toolInfoState) {
		let res = []

		if(toolInfoState && toolInfoState.data) {
			toolInfoState.data.forEach((t, idx) => {
				let ic = '/images/icon/betterment_levy.svg'
				// console.log(t)
				if(t.attributes.icon.data) {
					ic = API_ENDPOINT_CMS + t.attributes.icon.data.attributes.url
				}
				res.push(
					<ToolInfoCard  key={idx} title={t.attributes.title} img={ic} />
				)
			})
		}
		

		return res
	}


    return (
        <>
        <Container maxWidth="lg" >
        <Box sx={{ flexGrow: 1, mt: 8 }} style={{paddingBottom: "100px"}} >
          <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }} >
            {renderToolBox(toolInfoState)}
          </Grid>
        </Box>
        </Container>
    	</>
    )
}
