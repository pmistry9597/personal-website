import { Box } from "@mui/material"
import { FaCircle } from "react-icons/fa";

export default function SeparatedList(props) {
    return (
        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap'}}>
            {props.items[0]}
            {
                props.items.slice(1).map((it) => {
                    return <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <Box sx={{margin: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <FaCircle size={7} />
                        </Box>
                        {it}
                    </Box>
                })
            }
        </Box>
    )
}