import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';

function Footer() {
    return (
        <Container maxWidth="xl">
            <Box sx={{ bgcolor: '#0a0a23' }} >
                <footer className="footer">
                    <Stack direction="row" style={{ display: "flex", justifyContent: "space-between"}}>
                        <Stack spacing={2} direction="column" sx={{
                            padding: "30px"
                        }}>
                            <div>
                                <h3>Contact Us</h3>
                                <div>
                                    <Button variant="outlined" >
                                        <Link style={{ color: "white" }} to="/">contact info Future</Link>
                                    </Button>
                                </div>
                                <div>
                                    <Button variant="outlined" >
                                        <Link style={{ color: "white" }} to="/">contact info Future</Link>
                                    </Button>
                                </div>
                                <div>
                                    <Button variant="outlined" >
                                        <Link style={{ color: "white" }} to="/">contact info Future</Link>
                                    </Button>
                                </div>
                            </div>
                        </Stack>
                        <Stack spacing={2} direction="column" sx={{
                            padding: "30px"
                        }}>
                            <div>
                                <h3>Contact Us</h3>
                                <div>
                                    <Button variant="outlined" >
                                        <Link style={{ color: "white" }} to="/">contact info Future</Link>
                                    </Button>
                                </div>
                                <div>
                                    <Button variant="outlined" >
                                        <Link style={{ color: "white" }} to="/">contact info Future</Link>
                                    </Button>
                                </div>
                                <div>
                                    <Button variant="outlined" >
                                        <Link style={{ color: "white" }} to="/">contact info Future</Link>
                                    </Button>
                                </div>
                            </div>
                        </Stack>
                        <Stack spacing={2} direction="column" sx={{
                            padding: "30px"
                        }}>
                            <div>
                                <h3>Contact Us</h3>
                                <div>
                                    <Button variant="outlined" >
                                        <Link style={{ color: "white" }} to="/">contact info Future</Link>
                                    </Button>
                                </div>
                                <div>
                                    <Button variant="outlined" >
                                        <Link style={{ color: "white" }} to="/">contact info Future</Link>
                                    </Button>
                                </div>
                                <div>
                                    <Button variant="outlined" >
                                        <Link style={{ color: "white" }} to="/">contact info Future</Link>
                                    </Button>
                                </div>
                            </div>
                        </Stack>
                        <Stack spacing={2} direction="column" sx={{
                            padding: "30px"
                        }}>
                            <div>
                                <h3>Contact Us</h3>
                                <div>
                                    <Button variant="outlined" >
                                        <Link style={{ color: "white" }} to="/">contact info Future</Link>
                                    </Button>
                                </div>
                                <div>
                                    <Button variant="outlined" >
                                        <Link style={{ color: "white" }} to="/">contact info Future</Link>
                                    </Button>
                                </div>
                                <div>
                                    <Button variant="outlined" >
                                        <Link style={{ color: "white" }} to="/">contact info Future</Link>
                                    </Button>
                                </div>
                            </div>
                        </Stack>
                    </Stack>
                </footer>
            </Box>
        </Container>
    )
}

export default Footer;