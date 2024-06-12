import { Box } from "@mui/material";

export default function CorneredBox(props) {
    return <Box sx={{width: 1, height: 1, position: 'relative',
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{
            width: props.width, height: props.height, position: 'absolute', left: 0, top: 0,
            borderLeft: `40px solid ${props.topLeftCol}`, borderTop: `40px solid ${props.topLeftCol}`, borderTopLeftRadius: props.cornerRad,
        }
            }></div>
        <div style={{
            width: props.width, height: props.height, position: 'absolute', right: 0, bottom: 0,
            borderRight: `40px solid ${props.bottomRightCol}`, borderBottom: `40px solid ${props.bottomRightCol}`, borderBottomRightRadius: props.cornerRad,
        }
            }></div>
        <Box sx={{margin: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>{props.children}</Box>
    </Box>
}