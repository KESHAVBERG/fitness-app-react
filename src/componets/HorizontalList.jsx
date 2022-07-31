import React from 'react'
import { Box } from '@mui/material'
import BodyPartCard from './BodyPartCard'
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
const HorizontalList = ({ data, selectedPart, setSelectedBodyPart }) => {
    return (
        <ScrollMenu>{
            data.map((item) => (
                <Box
                    key={item.id || item}
                    itemId={item.id || item}
                    title={item}
                    m='0 40px'
                >

                    <BodyPartCard item={item} slectedBodyPart={selectedPart}
                        setSelectedBodyPart={setSelectedBodyPart} />
                </Box>
            ))

        }</ScrollMenu>
    )
}

export default HorizontalList