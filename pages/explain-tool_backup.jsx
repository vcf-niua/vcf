import React, { useState } from 'react';
import pagesStyle from '@/styles/ExplainTool.module.scss';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

const Row = ({ rowData }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <TableRow>
                <TableCell>
                    <IconButton size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                    </IconButton>
                </TableCell>
                <TableCell>{rowData.column}</TableCell>

            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
                    <Collapse in={open} unmountOnExit>
                        <Grid container>
                            <Grid item xs={3} style={{ padding: "5px" }}>
                                <Card style={{ marginRight: "10px", backgroundColor: "rgb(103,165,201)" }}>
                                    <Grid container spacing={2} >
                                        <Grid item xs={4} >
                                            <Image src="/images/andhra-pradesh.jpg" alt="My Image" width={80} height={80} />
                                        </Grid>
                                        <Grid item xs={5}>
                                            <CardContent>
                                                <Typography variant="body2" color="textSecondary" style={{}}>
                                                    Andhra pradesh
                                                </Typography>
                                            </CardContent>
                                        </Grid>
                                    </Grid>

                                    {/* <CardActions>
                                        Actions for the card
                                    </CardActions> */}
                                </Card>
                            </Grid>
                            <Grid item xs={3} style={{ padding: "5px" }}>
                                <Card style={{ marginRight: "10px" }}>
                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary">
                                            Content of the collapsible card
                                        </Typography>
                                    </CardContent>
                                    {/* <CardActions>
                                        Actions for the card
                                    </CardActions> */}
                                </Card>
                            </Grid>
                            <Grid item xs={3} style={{ padding: "5px" }}>
                                <Card style={{ marginRight: "10px" }}>
                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary">
                                            Content of the collapsible card
                                        </Typography>
                                    </CardContent>

                                </Card>
                            </Grid>
                            <Grid item xs={3} style={{ padding: "5px" }}>
                                <Card >
                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary">
                                            Content of the collapsible card
                                        </Typography>
                                    </CardContent>

                                </Card>
                            </Grid>
                        </Grid>

                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
};




const ExplainTool = () => {
    const tableData = [
        { column: 'Defination' },
        { column: 'Indicators Tmpacting Tool', code: 'ind_impact' },
        { column: 'Cities adopting the Tool' },
        { column: 'Case Studies' },
    ];

    function getDetailsOfSomething(i) {
        if(i == 1) {
            return <p>Hi</p>
        } else if() {
            {i.variable}
        }
    }

    function renderAccordion(state) {
        let res = []

        [1, 2, 3, 4].forEach((i, idx) => {
            res.push(
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        {i.title}
                    </AccordionSummary>
                    <AccordionDetails>
                        {getDetailsOfSomething(i)}
                    </AccordionDetails>
                </Accordion>
            )
        })

        return res
    }

    return (
        <>
            <Header />
            <Container>
                <Box style={{ marginTop: "80px" }} >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={9}>
                            <h3 style={{ textAlign: "center", backgroundColor: "rgb(1,136,209)", padding: "10px", color: "white" }}>Premium/additional FAR</h3>
                            <Card>
                                {isState && renderAccordion(state)}
                                {/* <Table>

                                    <TableBody style={{ textAlign: "right" }}>
                                        {tableData.map((rowData, index) => (
                                            <Row key={index} rowData={(rowData)} />
                                        ))}
                                    </TableBody>
                                </Table> */}
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <h3 style={{ textAlign: "center", backgroundColor: "rgb(1,136,209)", padding: "10px", color: "white" }}>VCF Tools</h3>
                            <Card style={{ height: '300px', overflowY: 'auto' }}>
                                <CardContent>
                                    <Table>

                                        <TableBody>
                                            <TableRow>
                                                <TableCell>Cell 1</TableCell>

                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Cell 2</TableCell>

                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Cell 3</TableCell>

                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Cell 4</TableCell>

                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Cell 5</TableCell>

                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Cell 5</TableCell>

                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Cell 5</TableCell>

                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Cell 5</TableCell>

                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Cell 5</TableCell>

                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Cell 5</TableCell>

                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Cell 5</TableCell>

                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Cell 5</TableCell>

                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Cell 15</TableCell>

                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Cell 25</TableCell>

                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Cell3 5</TableCell>

                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Cell 345</TableCell>

                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Cell 5</TableCell>

                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default ExplainTool;
