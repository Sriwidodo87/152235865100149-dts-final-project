import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid,Box } from "@mui/material";
import Modal from '@mui/material/Modal';

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




export default function CardProduct({propsP}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
      
  return (
    <>
        <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 ,margin:"2px"}}>
            <CardMedia
                component="img"
                height="auto"
                // image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                image={propsP.image}     
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {propsP.title}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={handleOpen}>Detail</Button>
            </CardActions>
            </Card>
        </Grid>
                <div>
                {/* <Button onClick={handleOpen}>Open modal</Button> */}
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                     Title :{propsP.title}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{color:"blue"}}>
                    <strong>Description:</strong> {propsP.description}
                    </Typography>
                    <Typography id="modal-modal-category" sx={{ mt: 2 }} style={{color:"blue"}}>
                    <strong> Category :</strong> {propsP.category}
                    </Typography>
                    <Typography id="modal-modal-price" sx={{ mt: 2 }} style={{color:"blue"}}>
                     <strong>Price :</strong>{propsP.price}
                    </Typography>
                  </Box>
                </Modal>
                </div>
        </>

  );
}
