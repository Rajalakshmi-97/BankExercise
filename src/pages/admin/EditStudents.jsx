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
import { getStudentsById, updateStudentsById } from "../../api/studentsApi";

const EditStudents = () => {
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

  const { id } = useParams();

  const getStudent = async () => {
    try {
      const res = await getStudentsById(id);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStudent();
  }, []);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await updateStudentsById(id, data);

      navigate("/all-students");
      toast.success("Students Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  
  };

  console.log(data, "data");
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
                Update Student
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
                        label="Students Stream"
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

export default EditStudents;
