import {
    Typography,
    Link
} from "@mui/material";

import styles from '@/styles/Footer.module.scss';

export default function Footer() {
    return (
        <section className={styles.footer}>
            <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                style={{
                    fontFamily: 'inherit'
                }}
            >
                {"Value Capture Finance"}
            </Typography>
            <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                style={{
                    fontFamily: 'inherit'
                }}
            >
                {"Copyright © "}
                <Link color="inherit" href="https://niua.org">
                    National Institute of Urban Affairs
                </Link>{" "}
                {new Date().getFullYear()}
                {"."}
            </Typography>
        </section>
    )
}