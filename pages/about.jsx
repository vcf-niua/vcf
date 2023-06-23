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
import Logo from '@/components/images/vcf_logo_with_text.svg';
import NIUALogo from '../components/images/niua.svg';
import NIUAUsu from '../components/images/USULogo.svg';



import styles from "@/styles/About.module.scss";

export default function About() {



    return (
        <section className={styles.about}>
            <Container>
               <div className={styles.brand}>
                    <NIUALogo width={250} />
               </div>
                <p>The National Institute of Urban Affairs (NIUA) is India’s leading national think tank on urban planning and development. As a hub for generation and dissemination of cutting-edge research in the urban sector, NIUA seeks to provide innovative solutions to address the challenges of a fast urbanising India, and pave the way for more inclusive and sustainable cities of the future.
                </p>
                <p>Since the 1970s, Indian cities have undergone a transformative journey. Following rapid industrialisation post-Independence, increase in population has taken place alongside large- scale rural to urban migration. With urban hubs swelling in size and density, exciting opportunities for growth have come into view whilst being accompanied by new risks and challenges. As cruxes of economic and political power, the question of how cities are planned, governed, and indeed, for who, becomes all the more crucial.
                </p>
                <p>It is against this backdrop, NIUA was established as an autonomous body in 1976 under the aegis of the Ministry of Housing and Urban Affairs (MoHUA). Then the institute was registered as a society under the Societies Registration Act XXI of 1860. Since then, it has worked closely with the Ministry of Housing and Urban Affairs, alongside other government and civil sectors, to identify key areas of research, and address the lacunae in urban policy and planning. With a team spanning planners, engineers, researchers, architects and analysts, the Institute provides cross disciplinary expertise and technical assistance for city and state-level projects, as well as developing toolkits and customised training programmes to strengthen the capacity of local and regional, and governing agencies. In its aims of enriching and expanding urban knowledge bases</p>
                <p>concerns:</p>
                <ul className={styles.list}>
                    <li>Urbanization &amp; Economic Growth</li>
                    <li>Urban Governance (Digital) &amp; Municipal Finance</li>
                    <li>Urban Infrastructure &amp; Built Environment </li>
                    <li>Environment, Climate Change &amp; Resilience</li>
                    <li>Social Development (Inclusive and sustainable cities)
                    </li>
                </ul>
                <p>The skills, resources and deep-rooted knowledge NIUA has accumulated over the years in the urban sector also make it the first port of call for international donors and funding institutions seeking to develop meaningful partnerships in the country. Whilst helping bolster India’s urban narrative at the global level, NIUA is also committed to aligning its efforts in accord with the UN Sustainable
                    Development Goals, ensuring that global targets are achieved through locally adapted and integrated urban frameworks.
                </p>

                <div className={styles.brand}>
                <NIUAUsu width={350} />
               </div>

                
                <p>USU is a ‘Horizontal’ at the National Institute of Urban Affairs that fosters multi- sectoral research and policy design in the urban sector.  It is built on the philosophy that cities are complex, multi-dimensional systems that require cutting-edge thinking across multiple scales and themes to evolve comprehensive solutions. Through our work, we hope to seed innovations, initiatives, and partnerships that can respond to the specific needs of urbanism in the Global South.</p>
                <div  className={styles.brand}>
                    <Logo width={250} />
                    </div>
<p>The Ministry of Housing and Urban Affairs (MoHUA), Government of India (GoI) erstwhile Ministry of Urban Development aimed to guide the State Governments and Union Territories to leverage their assets, particularly the under-utilized resources such as land, to finance development of infrastructure.</p>
<p>With this intent, the MoHUA, GoI instituted the Policy Framework for Value Capture Finance in the year 2017. The Policy Framework was developed as an essential document to enlighten States and Union Territories of the country with the concepts and the key idea behind introducing VCF mechanisms at the local level to enhance financial strength and thereby provide better infrastructure.</p>
<p>Further, the Ministry supported about 100 Cities (out of the 500 AMRUT Cities/ 100 Smart Cities) in availing Technical Assistance for developing a Value Capture Finance (VCF) framework (including procedural, legal and institutional aspects), so as to effectively capture the additional land/ property value being generated through public investments made as a part of the implementation of the Smart Cities Mission. As part of this initiative the existing VCF tools being implemented by the Cities were studied, as well as recommendations for adopting new tools were put forward.
</p>
<p>This portal attempts to utilize the information collated as part of the aforementioned Technical Assistance Reports, for the above Cities, to inform and enlighten other Cities/ Urban Local Bodies across India w.r.t the concepts/ mechanisms behind introducing VCF tools at the local level to enhance financial strength and thereby provide better infrastructure.
</p>
                
            </Container>
        </section>
    );
}
