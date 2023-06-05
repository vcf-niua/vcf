import React, { useState } from 'react'
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, Avatar, IconButton, CardActions, Grid, Container, Box } from '@mui/material';
import { Table, TableBody, TableRow, TableCell, Typography, List, ListItem, ListItemText } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import pagesStyle from '@/styles/SpecificTool.module.scss';
import CardWithList from '@/components/CardWithList';
import Button from '@mui/material/Button';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ListSubheader from '@mui/material/ListSubheader';

import InfoCard from '@/components/InfoCard';

export default function SpecificTool() {

    let tools = [
        {
            id: 1,
            tool: "Premium/additional FAR",
            defination: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui hic quibusdam quos dignissimos repellat perspiciatis iure nemo magnam eaque, neque aliquid voluptatum aliquam! ",
            indicator: [
                {
                    id: 11,
                    icon: "iconImage",
                    title: "No. of persons living in slums "
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

    function renderCard(props) {
        return (
            <Card className={pagesStyle.customIndicatorCard} >
                <div className={pagesStyle.icon}>
                    {props.icon}
                </div>
                <div className={pagesStyle.content}>
                    <p>{props.title}</p>
                    {/* <h2>{props.data}</h2> */}
                </div>
            </Card>
        )
    }

    function definition() {
        return (<div>
            <h4 className={pagesStyle.titleHeading}>Premium/additional FAR</h4>
            <Box pt={3} pl={5} className={pagesStyle.title}>
                <Typography variant="h6"  mb={1} sx={{ fontWeight: 'bold' }}>
                    Definition
                </Typography>

                <Typography variant="body1">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, veniam alias laboriosam totam aspernatur quia a illum natus beatae ex aut facere ratione, provident porro iusto officia sunt reiciendis. Temporibus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, veniam alias laboriosam totam aspernatur quia a illum natus beatae ex aut facere ratione, provident porro iusto officia sunt reiciendis. Temporibus?
                </Typography>
            </Box>
        </div>)
    }
    function indicator() {
        return (<div>
            <Box pt={3} pl={5} className={pagesStyle.title}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Indicator impacting the Tool
                </Typography>

                <Grid container spacing={2} mt={1}>
                    {vcfTool[0].indicator.map((item, index) => (
                        <Grid item xs={6} sm={6} md={3}>
                            {/* <Card className={pagesStyle.customIndicatorCard}>
                                <CardHeader

                                    avatar={<LocationCityIcon className={pagesStyle.icon} />}
                                    title={item.title}
                                />
                            </Card> */}
                            <InfoCard
                                icon=<LocationCityIcon/>
                                title={item.title}
                                
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>

        </div>)
    }
    function stateAdoptingTool() {
        return (<div>
            <Box pt={4} pl={5} className={pagesStyle.title}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Cities adopting the Tool
                </Typography>

                <Grid container spacing={2} mt={1}>
                    {vcfTool[0].state_adopt_tool.map((item, index) => (
                    // <CardWithList />
                    <Grid item xs={6} sm={6} md={3}>
                        <InfoCard title={item.state_name} cityList={item.cities} data={34}  icon=<LocationCityIcon/> />
                    </Grid>
                ))}

                </Grid>

            </Box>
        </div>)
    }

    function rightSection() {
        return (
            <div>
                <h4 className={pagesStyle.titleHeading}>VCF Tools</h4>
                <Card className={pagesStyle.customCardLeft}>
                    <CardContent>
                        <Table>
                            <TableBody>

                                {vcfTool.map((item, index) => (
                                    <TableRow key={index}>
                                        {/* <TableCell className={pagesStyle.cell}>
                                            <NoteAltIcon style={{ fontSize: "20px", }} />
                                        </TableCell> */}

                                        <TableCell className={`${pagesStyle.cell} ${pagesStyle.customColor}`} style={{ backgroundColor: (index === 0 && 'rgba(76, 149, 191, 0.41)') }}>{item.tool} </TableCell>

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
                {definition()}
                {indicator()}
                {stateAdoptingTool()}
            </div>
        )
    }

    return (
        <>
            <Container>
                <Grid container spacing={5} style={{ marginTop: "40px" }}>
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
