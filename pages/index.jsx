
import {
    Container,
    Grid,
    Paper
} from "@mui/material";
import { useState } from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from '@mui/material/Button';
import Logo from '@/components/images/vcf_logo_with_text.svg';
import { API_ENDPOINT_CMS } from '@/services/const.jsx';

import styles from '@/styles/Home.module.scss';

export default function Home() {
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
        <section className={styles.home}>
            <Container>

                <div className={styles.hero_section}>
                    <Logo className={styles.hero_icon} />
                    {/* <h3>Value Capture Financing</h3> */}
                    <h1>  Unlocking the Power  <br /><span>Transforming Land Growth into Public Progress.</span></h1>
                    <p>Value Capture Finance is a method to monetise the rise in land values resulting from public infrastructure projects. It helps fund public projects by the government and generates a cycle of value creation, capture, and reinvestment.</p>
                </div>

                <div className={styles.text_container}>
                    <h1>VCF is unique means of Financing and entails four components</h1>
                    <div className={styles.containerBox}>
                        <Grid container spacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Grid item xs={12} sm={6} md={6}>
                                <Box className={styles.boxCard} onClick={() => handleClickOpen("Value Creation", valueCreation, "The unlocking and increase in the potential value of under-used assets (land and/or structures) as a result of a public sector intervention to stimulate demand from the private sector")}>
                                    <img src={valueCreation} className={styles.iconStyle} />
                                    <p className={styles.iconTitle}>Value Creation</p>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <Box className={styles.boxCard} onClick={() => handleClickOpen("Value Realisation", value_realization, "Subsequent investment and development from the private sector which ensures that potential asset value increase is realised.")}>
                                    <img src={value_realization} className={styles.iconStyle} />
                                    <p className={styles.iconTitle}> Value Realization </p>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <Box className={styles.boxCard} onClick={() => handleClickOpen("Value Capture", valueCapture, "Arrangements by the public sector for the acquisition of a proportion of private sector returns for local reinvestment. This can take the form of monetary or In kind contributions from the private to public actors.")}>
                                    <img src={valueCapture} className={styles.iconStyle} />
                                    <p className={styles.iconTitle}>Value Capture</p>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <Box className={styles.boxCard} onClick={() => handleClickOpen("Local Value Recycling", localValue, "The re-investment of acquired monetary or in-kind contributions from the private sector within the same development site or scheme. This re-investment can pay for the initial public intervention but tends to fund further interventions.")}>
                                    {/* <LocationCityIcon className={styles.hero_icon} /> */}
                                    <img src={localValue} className={styles.iconStyle} />
                                    <p className={styles.iconTitle}> Local Value </p>
                                </Box>


                            </Grid>

                        </Grid>
                    </div>
                    <p>VCF can therefore be defined as the appropriation of value, generated by public sector intervention and private sector investment in relation to an underused asset (land and/or structure), for local re-investment to produce public good and potential private benefit.</p>
                    <p style={{ marginTop: "10px" }}>VCF maintains both an:</p>
                    <p>
                        Inward rate of return: The revenue return for the private sector
                        following initial investment, and External rate of return: The proportion of this revenue
                        which is reinvested in the same development scheme for the public good.
                    </p>

                </div>

                <div className={styles.policy}>
                    <h1>Policy Guidelines</h1>
                    <a href="../docs/policy_guidelines.pdf" target="_blank" style={{fontFamily: 'Gilroy'}}>
                    <img src="./images/policy.png" alt="" width={250} />
                    <p> Value Capture Financing Policy </p>
                    </a>

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
                                        <img src={imag} className={`${styles.hero_icon2}`} width={90} />
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

            </Container>
        </section>
    )
}