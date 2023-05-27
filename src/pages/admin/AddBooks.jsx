import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import DescriptionIcon from "@mui/icons-material/Description";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AppNavbar from "../../components/AppNavbar";
import { addBooks } from "../../api/bookApi";

const AddBooks = () => {
  const [data, setData] = useState({
    bookName: "",
    author: "",
    publisher: "",
    quantity: null,
    edition: null,
    status: "Pending",
  });

  const navigate = useNavigate();
  //   to handle data state
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
//to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // call add  book api function with data as argument
    try {
      await addBooks(data);

      navigate("/");
      toast.success("Books Added Successfully");
    } catch (error) {
      console.log(error);
    }
    
  };
//log data for debugging purposes
  console.log(data,"dayay")

  //Return jsx element to render ui for addbooks page
  return (
    <>
      <div
    
        
    style={{
     width: "100%",
     minHeight: "100vh",
     backgroundImage: `url('https://p1.pxfuel.com/preview/561/32/858/books-reading-learning-school-education-library.jpg')`,
     backgroundPosition: "center",
     backgroundRepeat: "revert",
     backgroundSize: "cover",
     backgroundAttachment: "fixed",
    }}
   >
        <AppNavbar />

        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // height: '100vh',
            flexDirection: "column",
            marginTop: "2rem",
          }}
        >
          <Paper
            sx={{ width: "700px", overflow: "hidden", marginBottom: "2rem" }}
            style={{
            
              backgroundColor: "ivory"}}
          
          >
            <Box
              sx={{
                width: "100%",
                marginBottom: "1rem",
                marginTop: "2rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  color: "primary",
                  marginLeft: "2rem",
                }}
              >
                ADD Books
              </Typography>
            </Box>
            <Divider style={{ marginBottom: "1rem" }} />

            <FormControl style={{ paddingLeft: "2rem" }}>
              <form onSubmit={handleSubmit}>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-end",
                      }}
                    >
                      {}
                      <AccountCircle
                        sx={{ color: "action.active", mr: 1, my: 0.5 }}
                      />
                      {/* )} */}
                      <TextField
                        id="input-with-sx"
                        label="Book Name"
                        variant="standard"
                        style={{
                          width: 250,
                        }}
                        name="bookName"
                        type="text"
                        value={data.bookName}
                        onChange={handleChange}
                        
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-end",
                      }}
                    >
                      {}
                      <AccountCircle
                        sx={{ color: "action.active", mr: 1, my: 0.5 }}
                      />
                      {/* )} */}
                      <TextField
                        id="input-with-sx"
                        label="Book Author"
                        variant="standard"
                        style={{
                          width: 250,
                        }}
                        name="author"
                        type="text"
                        value={data.author}
                        onChange={handleChange}
                       
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-end",
                      }}
                    >
                      {}
                      <DescriptionIcon
                        sx={{ color: "action.active", mr: 1, my: 0.5 }}
                      />
                      {/* )} */}
                      <TextField
                        id="input-with-sx"
                        label="Publisher"
                        variant="standard"
                        style={{
                          width: 600,
                        }}
                        name="publisher"
                        type="text"
                        value={data.publisher}
                        onChange={handleChange}
                        
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-end",
                      }}
                    >
                      {}
                      <AccountCircle
                        sx={{ color: "action.active", mr: 1, my: 0.5 }}
                      />
                      {/* )} */}
                      <TextField
                        id="input-with-sx"
                        label="Book Quantity"
                        variant="standard"
                        style={{
                          width: 250,
                        }}
                        name="quantity"
                        type="number"
                        value={data.quantity}
                        onChange={handleChange}
                       
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-end",
                      }}
                    >
                      {}
                      <AccountCircle
                        sx={{ color: "action.active", mr: 1, my: 0.5 }}
                      />
                      {/* )} */}
                      <TextField
                        id="input-with-sx"
                        label="Book Edition"
                        variant="standard"
                        style={{
                          width: 250,
                        }}
                        name="edition"
                        type="number"
                        value={data.edition}
                        onChange={handleChange}
                        
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      style={{
                        textAlign: "center",
                        marginTop: "1rem",
                        marginBottom: "1rem",
                      }}
                    >
                      <Button
                        type="submit"
                        variant="contained"
                        color="success"
                        style={{
                          width: "150px",
                          fontWeight: "bold",
                          fontSize: "20px",
                        }}
                      >
                        Submit
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </form>
            </FormControl>
          </Paper>
        </Container>
      </div>
    </>
  );
};

export default AddBooks;
