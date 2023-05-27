import { useEffect, useState } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import AppNavbar from "../../components/AppNavbar";
import { getBooksById, updateBooksById } from "../../api/bookApi";

//defining  edit booking components
const EditBooks = () => {
  //define state for data using the usestate hook
  const [data, setData] = useState({
    bookName: "",
    author: "",
    publisher: "",
    quantity: null,
    edition: null,
    status: "Pending",
  });

  const navigate = useNavigate();
 
  //to get id from URL params
  const { id } = useParams();

  const getBook = async () => {
    try {
      const res = await getBooksById(id);

      //update data with res.data
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  //to call getbook when component mount
  useEffect(() => {
    getBook();
  }, []);

  //to handle changes to data state
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  //to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      await updateBooksById(id, data);

    //navigate to root path
      navigate("/");
      toast.success("Books Updated Successfully");
    } catch (error) {
      console.log(error);
    }
    
  };

  return (
    <>
     <div
      
        
      style={{
       width: "100%",
       minHeight: "100vh",
       backgroundImage: `url('https://c.pxhere.com/photos/5b/ea/photo-122058.jpg!d')`,
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
                Update Books
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
                        InputLabelProps={{
                          shrink: true,
                        }}
                        
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
                        InputLabelProps={{
                          shrink: true,
                        }}
                       
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
                        Update
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

export default EditBooks;
