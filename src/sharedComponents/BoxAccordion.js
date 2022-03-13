import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from "react-router-dom";
{/* <div key={index}>
<h2>{el.name}</h2>
<p>{el.description}</p>
<h3><Link to={`/module/quiz/${el.quiz.id}`} >Quiz</Link></h3>
<h3>Toy Problems</h3>
<h3>Lecture</h3>
<h3>Project</h3>
</div> */}
export default function SimplePaper({ module: {name, description, lecture, project, quiz, toyProblem}}) {
    console.log("accordion",lecture, project, quiz, toyProblem)
  return (
    <Box
      sx={{
        bgcolor: '#0a0a23',
        minHeight: "100px",
        '& > :not(style)': {
          m: 1,
        },
      }}
    >
    <Paper elevation={3} style={{height: "100%"}}>
        <h2>{name}</h2>
        <p>{description}</p>
    </Paper>
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Lectures</Typography>
        </AccordionSummary>
        <AccordionDetails>
            {lecture.map(el =>( 
                <Link key={el.id} to={el.url} target="_blank" >{el.text}</Link>
            ))}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Projects</Typography>
        </AccordionSummary>
        <AccordionDetails>
        {project.map(el =>( 
                <Link key={el.id} to={el.url} target="_blank" >{el.title}</Link>
            ))}
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>

    </Box>
  );
}