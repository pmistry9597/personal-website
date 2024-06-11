import { Paper, Typography } from "@mui/material";

export default function SkillsList(props) {
    return <>
        {props.items.map((it, i) => {
            const [content, bgcolor] = it;
            return <Paper key={i} elevation={10} style={{color: 'white', fontSize: '20px', fontWeight: 'bold', backgroundColor: bgcolor, padding: '5px'}}>
                <Typography variant="def">{content}</Typography>
            </Paper>
        })}
    </>
}