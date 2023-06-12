import {
    Container
} from '@mui/material';

import Logo from '@/components/images/logo.svg';

import styles from '@/styles/Home.module.scss';

export default function Home() {

    return (
        <section className={styles.home}>
            <Container>

                <div className={styles.hero_section}>
                    <Logo className={styles.hero_icon}/>
                    <h3>Value Capture Financing</h3>
                    <h1><span>Unlocking the Power of Value: Transforming Land Growth into Public Progress.</span></h1>
                    <p>Value Capture Finance is a method to monetise the rise in land values resulting from public infrastructure projects. It helps fund public projects by the government and generates a cycle of value creation, capture, and reinvestment.</p>
                </div>

                <div className={styles.text_container}>
                    <h1>Summary of the Study</h1>
                    <p>Value Capture Finance is a method to monetise the rise in land values resulting from public infrastructure projects. It helps fund public projects by the government and generates a cycle of value creation, capture, and reinvestment.</p>
                </div>

                <div>
                    <h1>Policy Guidelines</h1>
                    <p>View and download the policy document</p>
                </div>

            </Container>
        </section>
    )
}