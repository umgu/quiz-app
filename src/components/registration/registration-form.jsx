import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from "react-router-dom";

export default function RegistrationForm() {
  console.log("")
  let navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let firstName = data.get('fn');
    let lastName = data.get('ln');
    if(firstName && lastName) {
      navigate("/quiz/start");
    }
    else{
      alert("Enter your first and last name")
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Registration
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="fn"
            label="First name"
            name="fn"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="ln"
            label="Last name"
            type="text"
            id="ln"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Start quiz
          </Button>
        </Box>
      </Box>
    </Container>
  );
}