import React, { useState } from 'react';
import {
    Avatar,
    Button,
    Container,
    Typography,
    IconButton,
    FormControl,
    InputLabel,
    Input,
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import Appbar from '../Components/Appbar';
import { useLocation } from 'react-router-dom';
import { updateUserProfile, uploadProfileImage } from '../service/api'; // Import the API functions
import { useNavigate } from "react-router-dom";

function EditProfile() {
    const location = useLocation();
    const { currentUser } = location.state || {};
    const navigate = useNavigate();
    const [nickname, setNickname] = useState(currentUser?.nickname || '');
    const [gender, setGender] = useState(currentUser?.gender || '');
    const [profileImage, setProfileImage] = useState(currentUser?.picture || '');
    const [selectedImage, setSelectedImage] = useState(null);

    const handleNicknameChange = (e) => {
        setNickname(e.target.value);
    };

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedImage(e.target.files[0]);
            setProfileImage(URL.createObjectURL(e.target.files[0])); // Preview the image
        }
    };

    const handleSave = async () => {
        let updatedUser = {
            ...currentUser,
            nickname,
            gender,
        };

        if (selectedImage) {
            try {
                const imageUrl = await uploadProfileImage(selectedImage);
                updatedUser.picture = imageUrl;
            } catch (error) {
                console.error('Error uploading image:', error);
                alert('Failed to upload image.');
                return;
            }
        }

        try {
            await updateUserProfile(updatedUser);
            alert('Profile updated successfully!');
            navigate('/profile');
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Failed to update profile.');
        }
    };

    return (
        <>
            <Appbar />
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '9rem', position: 'relative' }}>
                <Typography sx={{ fontFamily: 'Montserrat', fontWeight: '400', fontSize: '3rem' }}>
                    Edit Profile
                </Typography>
            </Container>

            <Container sx={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem', position: 'relative' }}>
                <Avatar
                    src={profileImage}
                    alt="Profile Photo"
                    sx={{ width: '10rem', height: '10rem' }}
                />
                <IconButton component="label" sx={{ position: 'absolute', right: '30rem', top: '7.5rem' }}>
                    <EditIcon />
                    <input type="file" accept="image/*" onChange={handleImageChange} hidden />
                </IconButton>
            </Container>

            <Container sx={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
                <FormControl sx={{ width: '50%' }}>
                    <InputLabel htmlFor="username-input">Username</InputLabel>
                    <Input
                        type='text'
                        name='nickname'
                        id="username-input"
                        value={nickname}
                        onChange={handleNicknameChange}
                    />
                </FormControl>
            </Container>

            <Container sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                <FormControl sx={{ width: '50%' }}>
                    <InputLabel htmlFor="gender-input">Gender</InputLabel>
                    <Input
                        type='text'
                        id="gender-input"
                        name="gender"
                        value={gender}
                        onChange={handleGenderChange}
                    />
                </FormControl>
            </Container>

            <Container sx={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                <Button variant="contained" onClick={handleSave}>Save</Button>
            </Container>
        </>
    );
}

export default EditProfile;
