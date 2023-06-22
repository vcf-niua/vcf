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
    const [title, setTitle] = useState(false);
    const [imag, setImag] = useState(false);
    const [description, setDescription] = useState(false);
   





    let close = '/images/icon/close.png';

    let localValue = '/images/icon/local_value.png';
    let valueCapture = '/images/icon/value_capture.png';
    let valueCreation = '/images/icon/value_creation.png';
    let value_realization = '/images/icon/value_realization.png';

    function handleClickOpen(title, imag, description) {
        setTitle(title);
        setImag(imag);
        setDescription(description);
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
                            <Box className={styles.boxCard} onClick={()=>handleClickOpen("Local Value Recycling",localValue, "The re-investment of acquired monetary or in-kind contributions from the private sector within the same development site or scheme. This re-investment can pay for the initial public intervention but tends to fund further interventions." )}>
                                {/* <LocationCityIcon className={styles.hero_icon} /> */}
                                <img src={localValue} className={styles.iconStyle} />
                                <p className={styles.iconTitle}> Local Value </p>
                            </Box>


                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Box className={styles.boxCard} onClick={()=> handleClickOpen("Value Capture", valueCapture, "Arrangements by the public sector for the acquisition of a proportion of private sector returns for local reinvestment. This can take the form of monetary or In kind contributions from the private to public actors." )}>
                                <img src={valueCapture} className={styles.iconStyle} />
                                <p className={styles.iconTitle}>Value Capture</p>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Box className={styles.boxCard} onClick={()=> handleClickOpen("Value Creation", valueCreation, "The unlocking and increase in the potential value of under-used assets (land and/or structures) as a result of a public sector intervention to stimulate demand from the private sector")}>
                                <img src={valueCreation} className={styles.iconStyle} />
                                <p className={styles.iconTitle}>Value Creation</p>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                            <Box className={styles.boxCard} onClick={()=> handleClickOpen("Value Realisation", value_realization, "Subsequent investment and development from the private sector which ensures that potential asset value increase is realised.")}>
                                <img src={value_realization} className={styles.iconStyle} />
                                <p className={styles.iconTitle}> Value Realization </p>
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
                    {title}
                    </DialogTitle>


                    <Grid container spacing={1} px={1}>
                        <Grid item xs={12} md={3}>

                            <Paper sx={{ background: "#2D6E93" }}>
                                <DialogContent >
                                    <DialogContentText id="alert-dialog-description">
                                        {/* <LocationCityIcon  /> */}
                                        <img src={imag} className={`${styles.hero_icon2}`} width={90}/>
                                    </DialogContentText>
                                </DialogContent>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Paper >
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        {description}
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

                    <p style={{ marginTop: "10px" }}>
                    "The Ministry of Housing and Urban Affairs (MoHUA), Government of India (GoI) erstwhile Ministry of Urban Development aimed to guide the State Governments and Union Territories to leverage their assets, particularly the under-utilized resources such as land, to finance development of infrastructure.
                    </p>

                    <p style={{ marginTop: "10px" }}>With this intent, the MoHUA, GoI instituted the Policy <b>Framework for Value Capture Finance</b> in the year 2017. The Policy Framework was developed as an essential document to enlighten States and Union Territories of the country with the concepts and the key idea behind introducing VCF mechanisms at the local level to enhance financial strength and thereby provide better infrastructure. </p>
                    <p style={{ marginTop: "10px" }}>Further, the Ministry supported about 100 Cities (out of the 500 AMRUT Cities/ 100 Smart Cities) in availing <b>Technical Assistance for developing a Value Capture Finance (VCF) framework</b> (including procedural, legal and institutional aspects), so as to effectively capture the additional land/ property value being generated through public investments made as a part of the implementation of the Smart Cities Mission. As part of this initiative the existing VCF tools being implemented by the Cities were studied, as well as recommendations for adopting new tools were put forward.</p>
                    <p style={{ marginTop: "10px" }}>This portal attempts to utilize the information collated as part of the aforementioned Technical Assistance Reports, for the above Cities, to inform and enlighten other Cities/ Urban Local Bodies across India w.r.t the concepts/ mechanisms behind introducing VCF tools at the local level to enhance financial strength and thereby provide better infrastructure."</p>
                </div>
            </Container>
        </section>
    );
}
