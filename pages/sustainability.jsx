import React from 'react'
import { Box } from '@mui/material';
import Image from 'next/image';

export default function Sustainability() {

    return (
        <Box
            component="div"
            display="flex"
            alignItems="center"
            justifyContent="center"
            backgroundSize= "cover"
            height= "70vh"


        >
            <Image
                src="/images/comming-soon.png"
                alt="My Image"
                width={1000}
                height={400}
            />
        </Box>
    )
}
