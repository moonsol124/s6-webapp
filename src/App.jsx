import { useRef, useState } from 'react';
import Phaser from 'phaser';
import { PhaserGame } from './game/PhaserGame';
import { Container, Grid, Typography, Box, Paper } from '@mui/material';

function App ()
{
    // The sprite can only be moved in the MainMenu Scene
    const [canMoveSprite, setCanMoveSprite] = useState(true);
    const [name, setName] = useState("Sample House");
    const [description, setDescription] = useState("This is a beautiful house with lots of charm and a great location. It is spacious and has a lovely garden.");
    const [address, setAddress] = useState("1234 Elm St, Springfield, IL 62704");
    const [contact, setContact] = useState("Phone: (555) 123-4567");

    //  References to the PhaserGame component (game and scene are exposed)
    const phaserRef = useRef();
    const [spritePosition, setSpritePosition] = useState({ x: 0, y: 0 });

    const changeScene = () => {

        const scene = phaserRef.current.scene;

        if (scene)
        {
            scene.changeScene();
        }
    }

    const moveSprite = () => {

        const scene = phaserRef.current.scene;

        if (scene && scene.scene.key === 'MainMenu')
        {
            // Get the update logo position
            scene.moveLogo(({ x, y }) => {

                setSpritePosition({ x, y });

            });
        }
    }

    const addSprite = () => {

        const scene = phaserRef.current.scene;

        if (scene)
        {
            // Add more stars
            const x = Phaser.Math.Between(64, scene.scale.width - 64);
            const y = Phaser.Math.Between(64, scene.scale.height - 64);

            //  `add.sprite` is a Phaser GameObjectFactory method and it returns a Sprite Game Object instance
            const star = scene.add.sprite(x, y, 'star');

            //  ... which you can then act upon. Here we create a Phaser Tween to fade the star sprite in and out.
            //  You could, of course, do this from within the Phaser Scene code, but this is just an example
            //  showing that Phaser objects and systems can be acted upon from outside of Phaser itself.
            scene.add.tween({
                targets: star,
                duration: 500 + Math.random() * 1000,
                alpha: 0,
                yoyo: true,
                repeat: -1
            });
        }
    }

    // Event emitted from the PhaserGame component
    const currentScene = (obj) => {
        console.log ("event emited!")
        setName(obj.name)

        //setCanMoveSprite(scene.scene.key !== 'MainMenu');
    }

    const houseImages = [
        'https://res.cloudinary.com/brickandbatten/images/w_2560,h_1566,c_scale/f_auto,q_auto/v1713267421/wordpress_assets/313364-Alabaster-Caviar-TeakStain-A-copy/313364-Alabaster-Caviar-TeakStain-A-copy.jpg?_i=AA',
      ];
      const randomHouseImage = houseImages[Math.floor(Math.random() * houseImages.length)];
    
      // Arbitrary data for name, description, and address
      const paddingValue = 1; // Padding value for easy resizing
      const gapBetweenRows = 2; // Reduced gap between rows (spacing between Grid items)

    return (
        <Box id="app">
        {/* Phaser game component */}
        <PhaserGame ref={phaserRef} currentActiveScene={currentScene} />
  
            {/* Content section with Material-UI styling */}
            <Container sx={{ marginTop: 4, width: '100%' }}> {/* Ensure container spans 100% */}
        <Typography variant="h4" gutterBottom>
            Property Details
        </Typography>

        {/* Grid Layout: 2 columns, 5 rows */}
        <Grid container spacing={gapBetweenRows} sx={{ width: '100%' }}> {/* Ensure grid spans 100% */}
            {/* Row 1: Random house image */}
            <Grid item xs={12}>
                <Paper elevation={3} sx={{ padding: paddingValue, width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <img
                        src="https://res.cloudinary.com/brickandbatten/images/w_2560,h_1566,c_scale/f_auto,q_auto/v1713267421/wordpress_assets/313364-Alabaster-Caviar-TeakStain-A-copy/313364-Alabaster-Caviar-TeakStain-A-copy.jpg?_i=AA"
                        alt="House"
                        width="100%"
                    />
                </Paper>
            </Grid>

            {/* Row 2: Name */}
            <Grid item xs={12}>
                <Paper elevation={3} sx={{ padding: paddingValue, width: '100%' }}>
                    <Typography variant="body1">{name}</Typography>
                </Paper>
            </Grid>

            {/* Row 3: Description */}
            <Grid item xs={12}>
                <Paper elevation={3} sx={{ padding: paddingValue, width: '100%' }}>
                    <Typography variant="body1">{description}</Typography>
                </Paper>
            </Grid>

            {/* Row 4: Address */}
            <Grid item xs={12}>
                <Paper elevation={3} sx={{ padding: paddingValue, width: '100%' }}>
                    <Typography variant="body1">{address}</Typography>
                </Paper>
            </Grid>
        </Grid>
    </Container>
      </Box>
    )
}

export default App
