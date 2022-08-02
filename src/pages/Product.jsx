import React from "react";
import Box from "@mui/material/Box";
import TextField  from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
//import { useState } from "react";

const Product=()=>{

        const [formValue, setformValue] = React.useState({
          title: '',
          price: '',
          description:'',
          image:'',
          category:''
        });
      
        const handleSubmit = async() => {
            // store the states in the form data
            const productFormData = new FormData();
            productFormData.append("title", formValue.title)
            productFormData.append("price", formValue.price)
            productFormData.append("description", formValue.description)
            productFormData.append("image", formValue.image)
            productFormData.append("category", formValue.category)
            
            try {
              // make axios post request
              const response = await axios({
                method: "post",
                url: "https://fakestoreapi.com/products",
                data: productFormData,
                headers: { "Content-Type": "multipart/form-data" },
              });
              
             
            } catch(error) {
              console.log(error)
            }
          }
      
        const handleChange = (event) => {
          setformValue({
            ...formValue,
            [event.target.name]: event.target.value
          });
        }

    

    return(
        <>
           
            <form onSubmit={handleSubmit}>
            <h4>Add Product</h4>
              <Box 
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: 'column',
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
                borderRadius: 1,
              }} >
                <TextField
                  type="text"
                  name="title"
                  placeholder="title"
                  value={formValue.title}
                  onChange={handleChange}
                  size="small"
                />
                <TextField
                  type="text"
                  name="price"
                  placeholder="price"
                  value={formValue.price}
                  onChange={handleChange}
                  size="small"
                />
                <TextField
                  type="text"
                  name="description"
                  placeholder="description"
                  value={formValue.description}
                  onChange={handleChange}
                  size="small"
                />
                <TextField
                  type="text"
                  name="image"
                  placeholder="image"
                  value={formValue.image}
                  onChange={handleChange}
                  size="small"
                />
                <TextField
                  type="text"
                  name="category"
                  placeholder="category"
                  value={formValue.category}
                  onChange={handleChange}
                  size="small"
                />



      <Button variant="contained"
        type="submit" style={{margin:"2em"}}
      >
        Add
      </Button>
      </Box>
    </form>
    <h6>add ini tidak menyimpan ke database hanya mengembalikan status </h6>
            </>

    )


};

export default Product;