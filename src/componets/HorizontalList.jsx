import React from 'react'
import { Box } from '@mui/material'
import BodyPartCard from './BodyPartCard'
const HorizontalList = ({data, selectedPart, setSelectedBodyPart}) => {
    return (
        <div>{
            data.map((item)=>(
                <Box 
                key={item.id||item}
                itemId = {item.id||item}
                title = {item}
                m='0 40px'
                >

                <BodyPartCard item={item}/>
                </Box>
            ))

        }</div>
    )
}

export default HorizontalList