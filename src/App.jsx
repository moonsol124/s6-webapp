import { useRef, useState } from 'react';
import Phaser from 'phaser';
import { PhaserGame } from './game/PhaserGame';
import { Container, Grid, Typography, Box, Paper } from '@mui/material';
import houses from './houses.json';

function App ()
{
    // The sprite can only be moved in the MainMenu Scene
    const [canMoveSprite, setCanMoveSprite] = useState(true);
    const [name, setName] = useState("Sample House");
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");
    const [contact, setContact] = useState("");
    const [img, setImg] = useState("https://www.tyrol.tl/images/cms/main/754x435/B_WIDI_kids_park_01_15.jpg");

    //  References to the PhaserGame component (game and scene are exposed)
    const phaserRef = useRef();

    const findHouse = (id) => {
        const matchedHouse = houses.find(house => house.id === id);
        if (matchedHouse != undefined) {
            setName(matchedHouse.name)
            setDescription(matchedHouse.description)
            setAddress(matchedHouse.address)
            setContact(matchedHouse.contact)
            setImg(matchedHouse.url)   
        }
      };

    // Event emitted from the PhaserGame component
    const currentScene = (obj) => {
        setName(obj.name)
        findHouse(obj.name)

        //setCanMoveSprite(scene.scene.key !== 'MainMenu');
    }

      // Arbitrary data for name, description, and address
      const paddingValue = 1; // Padding value for easy resizing
      const gapBetweenRows = 2; // Reduced gap between rows (spacing between Grid items)

    return (
        <Box id="app">
        {/* Phaser game component */}
        <PhaserGame ref={phaserRef} currentActiveScene={currentScene} />
  
            {/* Content section with Material-UI styling */}
            <Container maxWidth={false} sx={{ margin: 2, width: '100%' }}>
            <Typography variant="h4" gutterBottom>
            Property Details
        </Typography>

        {/* Grid Layout: 2 columns, 5 rows */}
        <Grid container spacing={gapBetweenRows} sx={{ width: '100%' }}> {/* Ensure grid spans 100% */}
            {/* Row 1: Random house image */}
            <Grid item xs={12}>
                <Paper elevation={3} sx={{ padding: paddingValue, width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <img
                        src={img}
                        alt="House"
                        width="100%"
                    />
                </Paper>
            </Grid>

        {/* Row 2: Name */}
        { name && (
        <Grid item xs={12}>
            <Paper elevation={3} sx={{ padding: paddingValue, width: '100%' }}>
            <Typography variant="body1">{name}</Typography>
            </Paper>
        </Grid>
        )}

        {/* Row 3: Description */}
        { description && (
        <Grid item xs={12}>
            <Paper elevation={3} sx={{ padding: paddingValue, width: '100%' }}>
            <Typography variant="body1">{description}</Typography>
            </Paper>
        </Grid>
        )}

        {/* Row 4: Address */}
        { address && (
        <Grid item xs={12}>
            <Paper elevation={3} sx={{ padding: paddingValue, width: '100%' }}>
            <Typography variant="body1">{address}</Typography>
            </Paper>
        </Grid>
        )}
        </Grid>
    </Container>
      </Box>
    )
}

export default App
