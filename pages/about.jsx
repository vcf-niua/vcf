import { Container, Grid, Paper } from "@mui/material";
import { useState } from "react";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import { Icon } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from '@mui/material/Button';


import styles from "@/styles/About.module.scss";

export default function About() {
    const [open, setOpen] = useState(false);
    let close = '/images/icon/close.png';
    let localValue = '/images/icon/local_value.png';
    let valueCapture = '/images/icon/value_capture.png';
    let valueCreation = '/images/icon/value_creation.png';
    let value_realization = '/images/icon/value_realization.png';

    function handleClickOpen() {
        setOpen(true);
    }
    function handleClose() {
        setOpen(false);
    }
    return (
        <section className={styles.about}>
            <Container>
                <div className={styles.hero_section}>
                    <h1>
                        <span>
                            VCF is unique means of Financing and entails four components
                        </span>
                    </h1>
                </div>
                <div className={styles.containerBox}>
                    <Grid container spacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={12} sm={6} md={6}>
                            <Box className={styles.boxCard} onClick={handleClickOpen}>
                                {/* <LocationCityIcon className={styles.hero_icon} /> */}
                                <img src={localValue} className={styles.iconStyle}/>
                                <p>Value Creation</p>
                            </Box>
                             
                            
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Box className={styles.boxCard} onClick={handleClickOpen}>
                                <img src={valueCapture} className={styles.iconStyle}/>
                            <p>Value Creation</p>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Box className={styles.boxCard} onClick={handleClickOpen}>
                                <img src={valueCreation} className={styles.iconStyle}/>
                                <p>Value Creation</p>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                            <Box className={styles.boxCard} onClick={handleClickOpen}>
                                <img src={value_realization} className={styles.iconStyle}/>
                            <p style={{color:"#fff"}}>Value Creation</p>
                            </Box>
                        </Grid>
                    </Grid>
                </div>
                {/* Modal */}
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title" className={styles.popUpTitle}>
                        Financing and entails four components
                    </DialogTitle>


                    <Grid container spacing={1} px={1}>
                        <Grid item xs={12} md={3}>

                            <Paper sx={{ background: "#2D6E93" }}>
                                <DialogContent >
                                    <DialogContentText id="alert-dialog-description">
                                        <LocationCityIcon className={`${styles.hero_icon2}`} />

                                    </DialogContentText>
                                </DialogContent>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Paper >
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium magni aliquid cupiditate facere corporis tempora eligendi minima obcaecati, molestias suscipit nam repellat. Quaerat laudantium unde velit numquam expedita totam nulla?
                                    </DialogContentText>

                                </DialogContent>
                            </Paper>
                        </Grid>
                    </Grid>
                    <DialogActions>
                        {/* <Button onClick={handleClose}>Disagree</Button> */}
                        <Button onClick={handleClose} autoFocus>
                            <img src={close} />
                        </Button>
                    </DialogActions>

                </Dialog>
                {/* End Modal */}
                <div className={styles.text_container}>
                    <p>
                        VCF can therefore be defined as the appropriation of value, generated by public sector
                        intervention and private sector investment in relation to an underused asset (land and/or
                        structure), for local re-investment to produce public good and potential private benefit.
                    </p>
                    <p style={{ marginTop: "10px" }}>VCF maintains both an:</p>
                    <p>
                        VCF maintains both an: Inward rate of return: The revenue return for the private sector
                        following initial investment, and External rate of return: The proportion of this revenue
                        which is reinvested in the same development scheme for the public good.
                    </p>

                </div>
            </Container>
        </section>
    );
}
