import React, { useState } from 'react'
import Header from '@/components/Header';
import { Card, CardContent, CardActions, Grid, Container } from '@mui/material';
import { Table, TableBody, TableRow, TableCell, Typography, List, ListItem, ListItemText } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import pagesStyle from '@/styles/ExplainTool.module.scss';
import CardWithList from '@/components/CardWithList';

export default function ExplainTool() {

    const [expanded, setExpanded] = useState(false);
    const [defination, setDefination] = useState();
    const [isListOpen, setIsListOpen] = useState(false);



    const handleCardClick = (props) => {
        setIsListOpen(!isListOpen);
    };


    let tools = [
        {
            id: 1,
            tool: "Additional / Premium FAR",
            defination: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui hic quibusdam quos dignissimos repellat perspiciatis iure nemo magnam eaque, neque aliquid voluptatum aliquam! ",
            indicator: [
                {
                    id: 11,
                    icon: "iconImage",
                    title: "No. of persons living in slums"
                },
                {
                    id: 12,
                    icon: "iconImage2",
                    title: "Total Expenditure"
                },
                {
                    id: 13,
                    icon: "iconImage3",
                    title: "Total Revenue"
                },
                {
                    id: 14,
                    icon: "iconImage4",
                    title: "No. of persons living in slums"
                },
                {
                    id: 15,
                    icon: "iconImage5",
                    title: "Total Expenditure"
                },
            ],

            state_adopt_tool: [
                {
                    id: 1,
                    iconImage: "/image",
                    state_name: "Andhra Pradesh",
                    cities: [
                        {
                            id: 21,
                            cities_name: "Anantapur"
                        },
                        {
                            id: 22,
                            cities_name: "Nellore"
                        }

                    ]
                },
                {
                    id: 2,
                    iconImage: "/image2",
                    state_name: "Chhattisgarh",
                    cities: [
                        {
                            id: 27,
                            cities_name: "Bilaspur"
                        },
                        {
                            id: 28,
                            cities_name: "Raipur"
                        },

                    ]
                },
                {
                    id: 3,
                    iconImage: "/image3",
                    state_name: "Gujarat",
                    cities: [
                        {
                            id: 32,
                            cities_name: "Surat"
                        },
                        {
                            id: 33,
                            cities_name: "Ahmedabad"
                        }
                    ]
                },
                {
                    id: 4,
                    iconImage: "/image4",
                    state_name: "Kerala",
                    cities: [
                        {
                            id: 37,
                            cities_name: "kozhikode"
                        },
                        {
                            id: 38,
                            cities_name: "Kochi"
                        }
                    ]
                },
                {
                    id: 5,
                    iconImage: "/image5",
                    state_name: "Madhya Pradesh",
                    cities: [
                        {
                            id: 39,
                            cities_name: "Jabalpur"
                        },
                        {
                            id: 40,
                            cities_name: "Bhopal"
                        }
                    ]
                }
            ],
            cities: [
                {
                    id: 37,
                    cities_name: "kozhikode"
                },
                {
                    id: 38,
                    cities_name: "Kochi"
                }
            ]
        },
        {
            id: 2,
            tool: "Total Revenue",
            defination: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui hic quibusdam quos dignissimos repellat perspiciatis iure nemo magnam eaque, neque aliquid voluptatum aliquam! ",
            indicator: [
                {
                    id: 11,
                    icon: "iconImage",
                    title: "No. of persons living in slums"
                },
                {
                    id: 12,
                    icon: "iconImage2",
                    title: "Total Expenditure"
                },
                {
                    id: 13,
                    icon: "iconImage3",
                    title: "Total Revenue"
                },
                {
                    id: 14,
                    icon: "iconImage4",
                    title: "No. of persons living in slums"
                },
                {
                    id: 15,
                    icon: "iconImage5",
                    title: "Total Expenditure"
                },
            ],

            state_adopt_tool: [
                {
                    id: 1,
                    iconImage: "/image",
                    state_name: "Andhra Pradesh",
                    cities: [
                        {
                            id: 21,
                            cities_name: "Anantapur"
                        },
                        {
                            id: 22,
                            cities_name: "Nellore"
                        },
                        {
                            id: 23,
                            cities_name: "Machilipatnam"
                        },
                        {
                            id: 24,
                            cities_name: "Visakhapatnam"
                        },
                        {
                            id: 25,
                            cities_name: "Vijayawada"
                        },
                        {
                            id: 25,
                            cities_name: "Kurnool"
                        },
                        {
                            id: 26,
                            cities_name: "Guntur"
                        },
                    ]
                },
                {
                    id: 2,
                    iconImage: "/image2",
                    state_name: "Chhattisgarh",
                    cities: [
                        {
                            id: 27,
                            cities_name: "Bilaspur"
                        },
                        {
                            id: 28,
                            cities_name: "Raipur"
                        },
                        {
                            id: 29,
                            cities_name: "Naya Raipur"
                        },
                        {
                            id: 30,
                            cities_name: "Bhilai"
                        },
                        {
                            id: 31,
                            cities_name: "Ambikapur"
                        }

                    ]
                },
                {
                    id: 3,
                    iconImage: "/image3",
                    state_name: "Gujarat",
                    cities: [
                        {
                            id: 32,
                            cities_name: "Surat"
                        },
                        {
                            id: 33,
                            cities_name: "Ahmedabad"
                        },
                        {
                            id: 34,
                            cities_name: "Rajkot"
                        },
                        {
                            id: 35,
                            cities_name: "Vadodara"
                        },
                        {
                            id: 36,
                            cities_name: "Junagadh"
                        }

                    ]
                },
                {
                    id: 4,
                    iconImage: "/image4",
                    state_name: "Kerala",
                    cities: [
                        {
                            id: 37,
                            cities_name: "kozhikode"
                        },
                        {
                            id: 38,
                            cities_name: "Kochi"
                        }
                    ]
                },
                {
                    id: 5,
                    iconImage: "/image5",
                    state_name: "Madhya Pradesh",
                    cities: [
                        {
                            id: 39,
                            cities_name: "Jabalpur"
                        },
                        {
                            id: 40,
                            cities_name: "Bhopal"
                        }
                    ]
                }
            ],
            cities: [
                {
                    id: 37,
                    cities_name: "kozhikode"
                },
                {
                    id: 38,
                    cities_name: "Kochi"
                }
            ]
        },
        {
            id: 3,
            tool: "Share Tax Revenue",
            defination: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui hic quibusdam quos dignissimos repellat perspiciatis iure nemo magnam eaque, neque aliquid voluptatum aliquam! ",
            indicator: [
                {
                    id: 11,
                    icon: "iconImage",
                    title: "No. of persons living in slums"
                },
                {
                    id: 12,
                    icon: "iconImage2",
                    title: "Total Expenditure"
                },
                {
                    id: 13,
                    icon: "iconImage3",
                    title: "Total Revenue"
                },
                {
                    id: 14,
                    icon: "iconImage4",
                    title: "No. of persons living in slums"
                },
                {
                    id: 15,
                    icon: "iconImage5",
                    title: "Total Expenditure"
                },
            ],

            state_adopt_tool: [
                {
                    id: 1,
                    iconImage: "/image",
                    state_name: "Andhra Pradesh",
                    cities: [
                        {
                            id: 21,
                            cities_name: "Anantapur"
                        },
                        {
                            id: 22,
                            cities_name: "Nellore"
                        },
                        {
                            id: 23,
                            cities_name: "Machilipatnam"
                        },
                        {
                            id: 24,
                            cities_name: "Visakhapatnam"
                        },
                        {
                            id: 25,
                            cities_name: "Vijayawada"
                        },
                        {
                            id: 25,
                            cities_name: "Kurnool"
                        },
                        {
                            id: 26,
                            cities_name: "Guntur"
                        },
                    ]
                },
                {
                    id: 2,
                    iconImage: "/image2",
                    state_name: "Chhattisgarh",
                    cities: [
                        {
                            id: 27,
                            cities_name: "Bilaspur"
                        },
                        {
                            id: 28,
                            cities_name: "Raipur"
                        },
                        {
                            id: 29,
                            cities_name: "Naya Raipur"
                        },
                        {
                            id: 30,
                            cities_name: "Bhilai"
                        },
                        {
                            id: 31,
                            cities_name: "Ambikapur"
                        }

                    ]
                },
                {
                    id: 3,
                    iconImage: "/image3",
                    state_name: "Gujarat",
                    cities: [
                        {
                            id: 32,
                            cities_name: "Surat"
                        },
                        {
                            id: 33,
                            cities_name: "Ahmedabad"
                        },
                        {
                            id: 34,
                            cities_name: "Rajkot"
                        },
                        {
                            id: 35,
                            cities_name: "Vadodara"
                        },
                        {
                            id: 36,
                            cities_name: "Junagadh"
                        }

                    ]
                },
                {
                    id: 4,
                    iconImage: "/image4",
                    state_name: "Kerala",
                    cities: [
                        {
                            id: 37,
                            cities_name: "kozhikode"
                        },
                        {
                            id: 38,
                            cities_name: "Kochi"
                        }
                    ]
                },
                {
                    id: 5,
                    iconImage: "/image5",
                    state_name: "Madhya Pradesh",
                    cities: [
                        {
                            id: 39,
                            cities_name: "Jabalpur"
                        },
                        {
                            id: 40,
                            cities_name: "Bhopal"
                        }
                    ]
                }
            ],
            cities: [
                {
                    id: 37,
                    cities_name: "kozhikode"
                },
                {
                    id: 38,
                    cities_name: "Kochi"
                }
            ]
        },
        {
            id: 4,
            tool: "Property Tax Billed",
            defination: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui hic quibusdam quos dignissimos repellat perspiciatis iure nemo magnam eaque, neque aliquid voluptatum aliquam! ",
            indicator: [
                {
                    id: 11,
                    icon: "iconImage",
                    title: "No. of persons living in slums"
                },
                {
                    id: 12,
                    icon: "iconImage2",
                    title: "Total Expenditure"
                },
                {
                    id: 13,
                    icon: "iconImage3",
                    title: "Total Revenue"
                },
                {
                    id: 14,
                    icon: "iconImage4",
                    title: "No. of persons living in slums"
                },
                {
                    id: 15,
                    icon: "iconImage5",
                    title: "Total Expenditure"
                },
            ],

            state_adopt_tool: [
                {
                    id: 1,
                    iconImage: "/image",
                    state_name: "Andhra Pradesh",
                    cities: [
                        {
                            id: 21,
                            cities_name: "Anantapur"
                        },
                        {
                            id: 22,
                            cities_name: "Nellore"
                        },
                        {
                            id: 23,
                            cities_name: "Machilipatnam"
                        },
                        {
                            id: 24,
                            cities_name: "Visakhapatnam"
                        },
                        {
                            id: 25,
                            cities_name: "Vijayawada"
                        },
                        {
                            id: 25,
                            cities_name: "Kurnool"
                        },
                        {
                            id: 26,
                            cities_name: "Guntur"
                        },
                    ]
                },
                {
                    id: 2,
                    iconImage: "/image2",
                    state_name: "Chhattisgarh",
                    cities: [
                        {
                            id: 27,
                            cities_name: "Bilaspur"
                        },
                        {
                            id: 28,
                            cities_name: "Raipur"
                        },
                        {
                            id: 29,
                            cities_name: "Naya Raipur"
                        },
                        {
                            id: 30,
                            cities_name: "Bhilai"
                        },
                        {
                            id: 31,
                            cities_name: "Ambikapur"
                        }

                    ]
                },
                {
                    id: 3,
                    iconImage: "/image3",
                    state_name: "Gujarat",
                    cities: [
                        {
                            id: 32,
                            cities_name: "Surat"
                        },
                        {
                            id: 33,
                            cities_name: "Ahmedabad"
                        },
                        {
                            id: 34,
                            cities_name: "Rajkot"
                        },
                        {
                            id: 35,
                            cities_name: "Vadodara"
                        },
                        {
                            id: 36,
                            cities_name: "Junagadh"
                        }

                    ]
                },
                {
                    id: 4,
                    iconImage: "/image4",
                    state_name: "Kerala",
                    cities: [
                        {
                            id: 37,
                            cities_name: "kozhikode"
                        },
                        {
                            id: 38,
                            cities_name: "Kochi"
                        }
                    ]
                },
                {
                    id: 5,
                    iconImage: "/image5",
                    state_name: "Madhya Pradesh",
                    cities: [
                        {
                            id: 39,
                            cities_name: "Jabalpur"
                        },
                        {
                            id: 40,
                            cities_name: "Bhopal"
                        }
                    ]
                }
            ],
            cities: [
                {
                    id: 37,
                    cities_name: "kozhikode"
                },
                {
                    id: 38,
                    cities_name: "Kochi"
                }
            ]
        },
        {
            id: 5,
            tool: "Credit Rating",
            defination: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui hic quibusdam quos dignissimos repellat perspiciatis iure nemo magnam eaque, neque aliquid voluptatum aliquam! ",
            indicator: [
                {
                    id: 11,
                    icon: "iconImage",
                    title: "No. of persons living in slums"
                },
                {
                    id: 12,
                    icon: "iconImage2",
                    title: "Total Expenditure"
                },
                {
                    id: 13,
                    icon: "iconImage3",
                    title: "Total Revenue"
                },
                {
                    id: 14,
                    icon: "iconImage4",
                    title: "No. of persons living in slums"
                },
                {
                    id: 15,
                    icon: "iconImage5",
                    title: "Total Expenditure"
                },
            ],

            state_adopt_tool: [
                {
                    id: 1,
                    iconImage: "/image",
                    state_name: "Andhra Pradesh",
                    cities: [
                        {
                            id: 21,
                            cities_name: "Anantapur"
                        },
                        {
                            id: 22,
                            cities_name: "Nellore"
                        },
                        {
                            id: 23,
                            cities_name: "Machilipatnam"
                        },
                        {
                            id: 24,
                            cities_name: "Visakhapatnam"
                        },
                        {
                            id: 25,
                            cities_name: "Vijayawada"
                        },
                        {
                            id: 25,
                            cities_name: "Kurnool"
                        },
                        {
                            id: 26,
                            cities_name: "Guntur"
                        },
                    ]
                },
                {
                    id: 2,
                    iconImage: "/image2",
                    state_name: "Chhattisgarh",
                    cities: [
                        {
                            id: 27,
                            cities_name: "Bilaspur"
                        },
                        {
                            id: 28,
                            cities_name: "Raipur"
                        },
                        {
                            id: 29,
                            cities_name: "Naya Raipur"
                        },
                        {
                            id: 30,
                            cities_name: "Bhilai"
                        },
                        {
                            id: 31,
                            cities_name: "Ambikapur"
                        }

                    ]
                },
                {
                    id: 3,
                    iconImage: "/image3",
                    state_name: "Gujarat",
                    cities: [
                        {
                            id: 32,
                            cities_name: "Surat"
                        },
                        {
                            id: 33,
                            cities_name: "Ahmedabad"
                        },
                        {
                            id: 34,
                            cities_name: "Rajkot"
                        },
                        {
                            id: 35,
                            cities_name: "Vadodara"
                        },
                        {
                            id: 36,
                            cities_name: "Junagadh"
                        }

                    ]
                },
                {
                    id: 4,
                    iconImage: "/image4",
                    state_name: "Kerala",
                    cities: [
                        {
                            id: 37,
                            cities_name: "kozhikode"
                        },
                        {
                            id: 38,
                            cities_name: "Kochi"
                        }
                    ]
                },
                {
                    id: 5,
                    iconImage: "/image5",
                    state_name: "Madhya Pradesh",
                    cities: [
                        {
                            id: 39,
                            cities_name: "Jabalpur"
                        },
                        {
                            id: 40,
                            cities_name: "Bhopal"
                        }
                    ]
                }
            ],
            cities: [
                {
                    id: 37,
                    cities_name: "kozhikode"
                },
                {
                    id: 38,
                    cities_name: "Kochi"
                }
            ]
        },
        {
            id: 6,
            tool: "Land Value Tax Exchange",
            defination: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui hic quibusdam quos dignissimos repellat perspiciatis iure nemo magnam eaque, neque aliquid voluptatum aliquam! ",
            indicator: [
                {
                    id: 11,
                    icon: "iconImage",
                    title: "No. of persons living in slums"
                },
                {
                    id: 12,
                    icon: "iconImage2",
                    title: "Total Expenditure"
                },
                {
                    id: 13,
                    icon: "iconImage3",
                    title: "Total Revenue"
                },
                {
                    id: 14,
                    icon: "iconImage4",
                    title: "No. of persons living in slums"
                },
                {
                    id: 15,
                    icon: "iconImage5",
                    title: "Total Expenditure"
                },
            ],

            state_adopt_tool: [
                {
                    id: 1,
                    iconImage: "/image",
                    state_name: "Andhra Pradesh",
                    cities: [
                        {
                            id: 21,
                            cities_name: "Anantapur"
                        },
                        {
                            id: 22,
                            cities_name: "Nellore"
                        },
                        {
                            id: 23,
                            cities_name: "Machilipatnam"
                        },
                        {
                            id: 24,
                            cities_name: "Visakhapatnam"
                        },
                        {
                            id: 25,
                            cities_name: "Vijayawada"
                        },
                        {
                            id: 25,
                            cities_name: "Kurnool"
                        },
                        {
                            id: 26,
                            cities_name: "Guntur"
                        },
                    ]
                },
                {
                    id: 2,
                    iconImage: "/image2",
                    state_name: "Chhattisgarh",
                    cities: [
                        {
                            id: 27,
                            cities_name: "Bilaspur"
                        },
                        {
                            id: 28,
                            cities_name: "Raipur"
                        },
                        {
                            id: 29,
                            cities_name: "Naya Raipur"
                        },
                        {
                            id: 30,
                            cities_name: "Bhilai"
                        },
                        {
                            id: 31,
                            cities_name: "Ambikapur"
                        }

                    ]
                },
                {
                    id: 3,
                    iconImage: "/image3",
                    state_name: "Gujarat",
                    cities: [
                        {
                            id: 32,
                            cities_name: "Surat"
                        },
                        {
                            id: 33,
                            cities_name: "Ahmedabad"
                        },
                        {
                            id: 34,
                            cities_name: "Rajkot"
                        },
                        {
                            id: 35,
                            cities_name: "Vadodara"
                        },
                        {
                            id: 36,
                            cities_name: "Junagadh"
                        }

                    ]
                },
                {
                    id: 4,
                    iconImage: "/image4",
                    state_name: "Kerala",
                    cities: [
                        {
                            id: 37,
                            cities_name: "kozhikode"
                        },
                        {
                            id: 38,
                            cities_name: "Kochi"
                        }
                    ]
                },
                {
                    id: 5,
                    iconImage: "/image5",
                    state_name: "Madhya Pradesh",
                    cities: [
                        {
                            id: 39,
                            cities_name: "Jabalpur"
                        },
                        {
                            id: 40,
                            cities_name: "Bhopal"
                        }
                    ]
                }
            ],
            cities: [
                {
                    id: 37,
                    cities_name: "kozhikode"
                },
                {
                    id: 38,
                    cities_name: "Kochi"
                }
            ]
        },
    ];

    const [vcfTool, setVcfTool] = useState(tools);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    function indicator() {
        return (<div>
            <Grid container spacing={2}>
                {vcfTool[0].indicator.map((item, index) => (
                    <Grid item xs={6} sm={6} md={3}>
                        <Card style={{ height: "100px" }}>
                            <CardContent>
                                <Grid container>
                                    <Grid item xs={12} sm={12} md={4}>
                                        {/* <NoteAltIcon /> */}
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={8}>
                                        <Typography > {item.title} </Typography>
                                    </Grid>
                                </Grid>


                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>)
    }
    function adoptToolState() {
        return (<div>
            <Grid container spacing={2}>
                {vcfTool[0].state_adopt_tool.map((item, index) => (
                    <CardWithList stateName={item.state_name} cityList={item.cities}/>
                ))}
            </Grid>
        </div>)
    }

    function rightSection() {
        return (
            <div>
                <h3 style={{ textAlign: "center", backgroundColor: "rgb(1,136,209)", padding: "10px", color: "white" }}>VCF Tools</h3>
                <Card style={{ height: '300px', overflowY: 'auto' }}>
                    <CardContent>
                        <Table>
                            <TableBody>

                                {vcfTool.map((item, index) => (
                                    <TableRow key={index} className={pagesStyle.customColor}>
                                        <TableCell className={pagesStyle.cell}>
                                            {/* <NoteAltIcon style={{ fontSize: "20px", }} /> */}
                                        </TableCell>
                                        <TableCell className={pagesStyle.cell}>{item.tool} </TableCell>
                                    </TableRow>
                                ))}


                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        );


    };

    function leftSection() {

        return (
            <div>
                <h3 style={{ textAlign: "center", backgroundColor: "rgb(1,136,209)", padding: "10px", color: "white" }}>Premium/additional FAR</h3>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            Defination
                        </Typography>


                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {vcfTool[0].defination}
                        </Typography>
                    </AccordionDetails>
                </Accordion>


                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            Indicators impacting Tool
                        </Typography>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {indicator()}

                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            Citites Adopting the Tool
                        </Typography>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {adoptToolState()}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>Case Studies</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {adoptToolState()}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        )
    }

    return (
        <>
            <Header />
            <Container>
                <Grid container spacing={1} style={{ marginTop: "40px" }}>
                    <Grid item xs={12} sm={12} md={9}>
                        {leftSection()}
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        {rightSection()}
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
