import { Scene } from 'phaser';

export class Preloader extends Scene {
    constructor() {
        super('Preloader');
    }

    init() {
        // Get the current game width & height for responsive positioning
        const { width, height } = this.scale;

        // Center the progress bar
        this.add.rectangle(width / 2, height / 2, 468, 32).setStrokeStyle(1, 0xffffff);

        // Progress bar fill
        const bar = this.add.rectangle(width / 2 - 230, height / 2, 4, 28, 0xffffff);

        // Update progress bar as assets load
        this.load.on('progress', (progress) => {
            bar.width = 4 + (460 * progress);
        });
    }

    preload() {
        // Load assets
        this.load.setPath('assets');
    }

    create() {
        // Transition to the main menu after loading
        this.scene.start('MainMenu');
    }
}
