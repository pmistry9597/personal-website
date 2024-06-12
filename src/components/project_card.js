import { Box, Button, Card, CardActions, CardContent, CardMedia, Paper, Typography } from "@mui/material";
import SkillsList from "./skills_list";

export default function ProjectCard(props) {
    const skilllist = props.skills ? (
        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '10px'}}>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Typography style={{fontSize: '15px', textTransform: 'uppercase', fontWeight: 'bold'}}>
                Skills Used:
            </Typography>
            </Box>
            <Box sx={{marginLeft: '10px', justifyContent: 'space-evenly', fontSize: '15px'}}>
                <SkillsList items={props.skills} spacing={1} />
            </Box>
        </Box>
    ) : '';
    return (
        <Paper elevation={10} sx={{height: 1, maxWidth: 360, borderRadius: '2px', overflow: 'hidden'}}>
        <Card sx={{ bgcolor: '#222', color: 'white', height: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
          <CardContent sx={{flexGrow: 5, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <Box sx={{marginBottom: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'start'}}>
                <Typography variant="posterbody" style={{fontSize: '40px'}}>
                {props.title}
                </Typography>
            </Box>
            <Box sx={{marginTop: '10px', height: 1, flexGrow: 5, display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
                <Typography>
                {props.body}
                </Typography>
            </Box>
            {skilllist}
          </CardContent>
          <Box sx={{width: 1, display: 'flex', flexDirection: 'column-reverse', alignItems: 'start'}}>
            <CardActions sx={{padding: '20px'}}>
                <Button target='_blank' href={props.viewrepo} size="small">View Repo</Button>
            </CardActions>
          </Box>
        </Card>
        </Paper>
      );
}