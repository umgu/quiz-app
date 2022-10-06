import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from "react-router-dom";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function SuccessfullModal() {
    const [open, setOpen] = React.useState(true);
    // const { NavLink } = useNavigate();

    return (
        <div>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Successfully Submitted!!!
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        You can check your rank on leaderboard
                    </Typography>
                    <Link to="/">
                        <Button variant="contained" disableElevation>
                            Home
                        </Button>
                    </Link>
                    {" "}
                    <Link to="/">
                        <Button variant="contained" disableElevation>
                            Learderboard
                        </Button>
                    </Link>
                </Box>
            </Modal>
        </div>
    );
}
