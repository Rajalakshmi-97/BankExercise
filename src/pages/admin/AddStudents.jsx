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
import { addStudents } from "../../api/studentsApi";

const AddStudents = () => {
  const [data, setData] = useState({
    userName: "",
    registerNumber: "",
    name: "",
    stream: "",
    admissionYear: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
 
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await addStudents(data);

      navigate("/all-Students");
      toast.success("Students Added Successfully");
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
                ADD Students
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
                        label="Students Register number"
                        variant="standard"
                        style={{
                          width: 250,
                        }}
                        name="registerNumber"
                        type="text"
                        value={data.registerNumber}
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
                        label="Students Username"
                        variant="standard"
                        style={{
                          width: 250,
                        }}
                        name="userName"
                        type="text"
                        value={data.userName}
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
                        label="Students Name"
                        variant="standard"
                        style={{
                          width: 250,
                        }}
                        name="name"
                        type="text"
                        value={data.name}
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
                        label="Students stream"
                        variant="standard"
                        style={{
                          width: 250,
                        }}
                        name="stream"
                        type="text"
                        value={data.stream}
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
                        label="Phone Number"
                        variant="standard"
                        style={{
                          width: 600,
                        }}
                        name="phoneNumber"
                        type="text"
                        value={data.phoneNumber}
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
                        label="Admission Year"
                        variant="standard"
                        style={{
                          width: 250,
                        }}
                        name="admissionYear"
                        type="number"
                        value={data.admissionYear}
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
                        label="Student Email"
                        variant="standard"
                        style={{
                          width: 250,
                        }}
                        name="email"
                        type="email"
                        value={data.email}
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
                        label="Student Password"
                        variant="standard"
                        style={{
                          width: 250,
                        }}
                        name="password"
                        type="password"
                        value={data.password}
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

export default AddStudents;
