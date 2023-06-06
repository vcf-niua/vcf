import React from 'react'
import { Box } from '@mui/material';
import Image from 'next/image';

export default function KnowledgePlatform() {




    return (
        <Box
            component="div"
            height="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Image
                src="/images/comming-soon.jpg"
                alt="My Image"
                width={1000}
                height={400}
            />
        </Box>
    )
}
