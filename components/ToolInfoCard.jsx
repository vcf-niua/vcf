import React from 'react'
import {
    Card,
    CardContent,
    Grid
} from '@mui/material';
import Link from 'next/link';
import Typography from '@mui/material/Typography';

import styles from '@/styles/Tool.module.scss';
export default function ToolInfoCard(props) {
    return (
        <Grid  item xs={2} sm={4} md={3} >
            <Link href={"/tools/" + props.title}>
                <Card>
                    <CardContent className={styles.card}>
                        <img src={props.img} style={{ width: "80px" }} />
                        <Typography mt={1}>
                            {props.title}
                        </Typography>
                    </CardContent>
                </Card>
            </Link>
        </Grid>
    )
}