import { Link } from 'react-router-dom';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';

function Header() {
    return (
        <Container maxWidth="xl">
            <Box sx={{ bgcolor: '#0a0a23', height: "120px" }} >
                <header className="header">
                    <nav>
                        <Stack spacing={2} direction="row" sx={{ 
                            padding: "30px",   
                            justifyContent: "space-between", 
                            display: "flex"
                        }}>
                            <div style={{ 
                                display: "flex", 
                                justifyContent: "space-between", 
                                maxWidth: "500px"}}>
                                <Button variant="outlined" >
                                    <Link style={{color: "white"}} to="/">Home</Link>
                                </Button>
                                <Button variant="outlined" >
                                    <Link style={{color: "white"}} to="/module/quiz">Quiz</Link>
                                </Button>
                                <Button variant="outlined" >
                                    <Link style={{color: "white"}} to="/module/toy-problem">Toy Problem</Link>
                                </Button>
                                <Button variant="outlined" >
                                    <Link style={{color: "white"}} to="/module/lecture">Lecture</Link>
                                </Button>
                                <Button variant="outlined" >
                                    <Link style={{color: "white"}} to="/module/project">Project</Link>
                                </Button>
                            </div>
                            <div>
                                <Button variant="outlined"  className="header__item" style={{color: "white"}}>
                                    login
                                </Button>
                            </div>
                        </Stack>
                    </nav>
                </header>
            </Box>
        </Container>

    )
};

export default Header;