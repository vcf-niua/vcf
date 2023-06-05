import React from 'react'
import { Card, CardContent, CardHeader, Grid, Container, Box } from '@mui/material';
import styles from '@/styles/KnowledgePlatform.module.scss';
import { Table, TableBody, TableRow, TableCell, Typography, List, ListItem, ListItemText } from '@mui/material';
import NoteAltIcon from '@mui/icons-material/NoteAlt';

export default function KnowledgePlatform() {




    return (
        <div className={styles.state_profile}>
            <Container>
                <Grid container spacing={5} style={{ marginTop: "20px" }}>
                    <Grid item xs={12} sm={12} md={3}>
                        <h4 className={styles.titleHeading}>VCF Tools</h4>
                        <Card className={styles.customCardLeft}>
                            <CardContent>
                                <Table>
                                    <TableBody>
                                        <TableRow >
                                            <TableCell className={`${styles.cell} ${styles.customColor}`} >
                                                Legislative Acts
                                            </TableCell>
                                        </TableRow>
                                        <TableRow >
                                            <TableCell className={`${styles.cell} ${styles.customColor}`} >
                                                Case Studies                                                </TableCell>
                                        </TableRow>
                                        <TableRow >
                                            <TableCell className={`${styles.cell} ${styles.customColor}`} >
                                                Training Modules
                                            </TableCell>
                                        </TableRow>
                                        <TableRow >
                                            <TableCell className={`${styles.cell} ${styles.customColor}`} >
                                                Webinars
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={9}>

                        <Box sx={{ flexGrow: 1, mt: 8 }} style={{ paddingBottom: "100px" }} >
                            <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                                <h1>UP</h1>
                                    <Grid item xs={2} sm={4} md={3} >
                                        <Card>
                                            <CardContent sx={{ textAlign: "center" }}>
                                                <NoteAltIcon style={{ width: "98px", height: "70px" }} />
                                                <Typography mt={1} >
                                                    Card
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={2} sm={4} md={3} >
                                        <Card>
                                            <CardContent sx={{ textAlign: "center" }}>
                                                <NoteAltIcon style={{ width: "98px", height: "70px" }} />
                                                <Typography mt={1} >
                                                    Card
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={2} sm={4} md={3} >
                                        <Card>
                                            <CardContent sx={{ textAlign: "center" }}>
                                                <NoteAltIcon style={{ width: "98px", height: "70px" }} />
                                                <Typography mt={1} >
                                                    Card
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={2} sm={4} md={3} >
                                        <Card>
                                            <CardContent sx={{ textAlign: "center" }}>
                                                <NoteAltIcon style={{ width: "98px", height: "70px" }} />
                                                <Typography mt={1} >
                                                    Card
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={2} sm={4} md={3} >
                                        <Card>
                                            <CardContent sx={{ textAlign: "center" }}>
                                                <NoteAltIcon style={{ width: "98px", height: "70px" }} />
                                                <Typography mt={1} >
                                                    Card
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={2} sm={4} md={3} >
                                        <Card>
                                            <CardContent sx={{ textAlign: "center" }}>
                                                <NoteAltIcon style={{ width: "98px", height: "70px" }} />
                                                <Typography mt={1} >
                                                    Card
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
