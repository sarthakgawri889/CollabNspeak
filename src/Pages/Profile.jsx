import {
  Avatar,
  Button,
  Card,
  Container,
  Paper,
  Typography,
  IconButton,
  Tooltip,
  Menu,
  Box
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AssessmentIcon from "@mui/icons-material/Assessment";
import MailIcon from "@mui/icons-material/Mail";
import WcIcon from "@mui/icons-material/Wc";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { getUsers } from "../service/api";
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import CloseIcon from '@mui/icons-material/Close';

function Profile() {
  const theme = useTheme();
  const { user, logout, isAuthenticated } = useAuth0();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClickb = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const [isEditing, setIsEditing] = useState(false);
  const handleEditClick = () => {
    setIsEditing(true);
  };
  const hancleEditingClose = () => {
    setIsEditing(false);
  };
  const [, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(true);
  };

  const Linked = styled(Link)`
    text-decoration: none; /* Remove default underline */
    color: inherit; /* Inherit color from parent */
    cursor: pointer;
  `;

  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUsers();
        if (user) {
          const loggedInUser = response.find(u => u.sub === user.sub);
          setCurrentUser(loggedInUser);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [user]);

  const CustomPaper = styled(Paper)(() => ({
    height: "685px",
    width: "950px",
    backgroundColor: theme.palette.gray.main,
    borderRadius: "25px",
    margin: "1.4rem 17rem 1.4rem 17rem",
  }));

  console.log(currentUser)

  const ProfileHeading = styled(Typography)(() => ({
    font: theme.typography.header1,
    fontSize: "30px",
    margin: "0.5rem 0 0.2rem 1rem",
  }));

  const UserDetails = styled(Typography)(() => ({
    fontFamily: "Montserrat",
    fontWeight: "600",
    fontSize: "20px",
    color: "#00000096",
    margin: "30px 24px 30px 24px",
  }));

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated || !user || !currentUser) {
    return <div>No user data available</div>;
  }

  const userName = currentUser.nickname;
  const email = currentUser.email;

  return (
    <div>
      <CustomPaper>
        <Container sx={{ display: "flex", alignItems: "center" }}>
          <Paper sx={{ width: "100%", height: "60px", marginY: "1rem", borderRadius: 0 }}>
            <ProfileHeading>Profile</ProfileHeading>
          </Paper>

          <Container sx={{ width: "100%", height: "60px", marginY: "1rem", display: "flex", justifyContent: "flex-end", background: "white" }}>
            <Tooltip title="Account">
              <IconButton
                onClick={handleClickb}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar src={currentUser.picture} sx={{ width: 56, height: 56 }}>M</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 9.5,
                  ml: 129,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&::before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <Linked to="/" onClick={handleClick}>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <HomeIcon fontSize="small" />
                  </ListItemIcon>
                  <Box sx={{ textDecoration: 'none' }}>Home</Box>
                </MenuItem>
              </Linked>
              <Box onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Box>
            </Menu>
          </Container>
        </Container>

        <Container sx={{ display: "flex" }}>
          <Card sx={{ height: "570px", width: "380px" }}>
            <Container sx={{ marginY: "9px" }}>
              <UserDetails>Details</UserDetails>
            </Container>

            <Container sx={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
              <Avatar sx={{ width: "150px", height: "150px" }} src={currentUser.picture} />
            </Container>

            <Container sx={{ display: "flex", marginTop: "1rem" }}>
              <AccountCircleIcon sx={{ width: "30px", height: "30px" }} />
              <Typography variant="medium" sx={{ marginY: "0.68rem", marginX: "1rem" }}>
                {userName}
              </Typography>
            </Container>

            <Container sx={{ display: "flex", marginY: "0.7rem" }}>
              <AssessmentIcon sx={{ width: "30px", height: "30px" }} />
              <Typography variant="medium" sx={{ marginY: "0.68rem", marginX: "1rem" }}>
                {currentUser.level}
              </Typography>
            </Container>
            <Container sx={{ display: "flex", marginY: "0.7rem" }}>
              <MailIcon sx={{ width: "30px", height: "30px" }} />
              <Typography variant="medium" sx={{ marginY: "0.68rem", marginX: "1rem" }}>
                {email}
              </Typography>
            </Container>
            <Container sx={{ display: "flex", marginTop: "0.7rem" }}>
              <WcIcon sx={{ width: "30px", height: "30px" }} />
              <Typography variant="medium" sx={{ marginY: "0.68rem", marginX: "1rem" }}>
                {currentUser.gender}
              </Typography>
            </Container>

            <Container sx={{ display: "flex", marginY: "1rem", marginTop: "2.7rem" }} />
            <Container>
              <Button
                variant="contained"
                color="pri"
                sx={{
                  marginX: "1.8rem",
                  borderRadius: "25px",
                  color: "Black",
                  padding: "0.8rem",
                  width: "225px",
                  marginY: "0.5rem"
                }}
                onClick={handleEditClick}
              >
                <Typography variant="small" sx={{ fontWeight: "900", color: "White" }}>
                  Edit Profile
                </Typography>
              </Button>
              <Button
                variant="contained"
                color="pri"
                sx={{
                  marginX: "1.8rem",
                  borderRadius: "25px",
                  color: "Black",
                  padding: "0.8rem",
                  width: "225px",
                }}
              >
                <Typography variant="small" sx={{ fontWeight: "900", color: "White" }}>
                  Take Test
                </Typography>
              </Button>
            </Container>
          </Card>
          <Card sx={{ height: "570px", width: "568px", marginLeft: "1.5rem", position: 'relative' }}>
           
            <Container>
              <Container>
                {
                    isEditing? 
                    <>
                        <Container sx={{ display: 'flex', alignItems: 'center', position: 'relative', marginTop: '2vh' }}>
                            <Typography sx={{ fontFamily: 'Montserrat', fontWeight: '400', fontSize: '30px', flex: 1, textAlign: 'center' }}>
                                Edit Profile
                            </Typography>
                            <Box sx={{ position: 'absolute', right: 0 }}>
                                <Button onClick={hancleEditingClose}>
                                  <CloseIcon />
                                </Button>
                                
                            </Box>
                      </Container>
                        
                    </>
                    
                    :
                    <Container sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <Avatar
                            alt="Profile Picture"
                            src={"/src/images/xmpKItamQSS5555tCSJevg.jpg"}
                            sx={{ width: "558px", height: "570px", objectFit: 'cover', borderRadius: 0 }}
                          />
                    </Container>
                    
                  }
              </Container>
                
              
            </Container>
          </Card>
        </Container>
      </CustomPaper>
    </div>
  );
}

export default Profile;
