import { Grid, Paper, Typography } from "@mui/material";

export default function SkillsList(props) {
    return <Grid container spacing={props.spacing} direction='row' justifyContent='center'>
        {props.items.map((it, i) => {
            const [content, bgcolor] = it;
            return <Grid item key={i}>
                <Paper elevation={10} style={{color: 'white', fontWeight: 'bold', backgroundColor: bgcolor, padding: '5px'}}>
                    <Typography variant="def">{content}</Typography>
                </Paper>
            </Grid>
        })}
    </Grid>
}