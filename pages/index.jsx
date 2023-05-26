import Footer from '@/components/Footer';
import Header from '@/components/Header';
import MapImg from '../public/map.jpeg'
import styles from '@/styles/Home.module.scss';
import Image from 'next/image';
import Slider from "react-slick";
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Row, Column } from 'react-foundation';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 100,
    slidesToShow: 1,
    swipeToSlide: true,
};

export default function Home() {


    return (
        <>
            <Header />
            <Image src="/map.jpeg" alt="My Image" width={800} height={1000} className={styles.banner} />

            <Box className={styles.containerBox}>
                <div className={styles.container}>
                    <Slider {...settings}>
                        <div >
                            <Grid container direction='row'>
                                <Grid item md={6}>
                                    <h2 className={styles.headingtext}>Value Capture Financing</h2>
                                    <p className={styles.headingtext}>Read more...</p>
                                </Grid>
                                <Grid item md={6}>
                                   
                                        <p className={styles.headingtext}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                    
                                </Grid>
                            </Grid>
                        </div>
                        <div>
                            <Grid container direction='row'>
                                <Grid item md={6}>

                                    <h2 className={styles.headingtext}>Value Capture Financing</h2>
                                    <p className={styles.headingtext}>Read more...</p>

                                </Grid>
                                <Grid item md={6}>
                                    
                                        <p className={styles.headingtext}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                    
                                </Grid>
                            </Grid>
                        </div>
                        <div>
                            <Grid container direction='row'>
                                <Grid item md={6}>
                                    <h2 className={styles.headingtext}>Value Capture Financing</h2>
                                    <p className={styles.headingtext}>Read more...</p>
                                </Grid>
                                <Grid item md={6}>
                                        <p className={styles.headingtext}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                </Grid>
                            </Grid>
                        </div>
                        <div>
                            <Grid container direction='row'>
                                <Grid item md={6}>
                                    <h2 className={styles.headingtext}>Value Capture Financing</h2>
                                    <h6 className={styles.headingtext}>Read more...</h6>
                                </Grid>
                                <Grid item md={6}>
                                        <p className={styles.headingtext}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                </Grid>
                            </Grid>
                        </div>

                    </Slider>
                </div>
            </Box>
            {/* <Footer /> */}
        </>
    )
}