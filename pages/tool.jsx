import React, { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Container, Card, CardContent, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'next/link';

import fetchData from '@/services/fetch';
import { API_ENDPOINT_CMS } from '@/services/const.jsx';

import styles from '@/styles/Tool.module.scss';


export default function Tool() {

	const [toolInfoState, setToolInfoState] = useState();

	useEffect(() => {
		fetchData('tool-infos', 'GET', {
			'populate': 'icon'
		})
			.then(res => res.json())
			.then(setToolInfoState)
	}, [])

	useEffect(()=>{
		console.log(toolInfoState);
	},[toolInfoState])

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
					<Grid key={idx} item xs={2} sm={4} md={3} >
						<Link href={"/tools/" + t.attributes.title}>
							<Card>
								<CardContent className={styles.card}>
									<img src={ic} style={{ width: "80px" }} />
									<Typography mt={1}>
										{t.attributes.title}
									</Typography>
								</CardContent>
							</Card>
						</Link>
					</Grid>
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
