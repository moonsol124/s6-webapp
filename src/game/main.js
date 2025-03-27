import { Boot } from './scenes/Boot';
import { Game } from './scenes/Game';
import { GameOver } from './scenes/GameOver';
import { MainMenu } from './scenes/MainMenu';
import Phaser from 'phaser';
import { Preloader } from './scenes/Preloader';

// Find out more information about the Game Config at:
// https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,   // Full width
    height: window.innerHeight, // Full height
    parent: 'game-container',
    // backgroundColor: '#00000',
    scale: {
        mode: Phaser.Scale.FIT, // FIT scales the game while maintaining aspect ratio
        autoCenter: Phaser.Scale.CENTER_BOTH // Ensures it's centered
    },
    scene: [
        Boot,
        Preloader,
        MainMenu,
        Game,
        GameOver
    ],
    physics: {
        default: 'arcade',  // Ensures Arcade Physics is used by default
        arcade: {
            gravity: { y: 0 },  // You can adjust gravity, if needed
            debug: false         // Set to true if you want to see physics boundaries in the game
        }
    }
};

const StartGame = (parent) => {

    return new Phaser.Game({ ...config, parent });

}

export default StartGame;
