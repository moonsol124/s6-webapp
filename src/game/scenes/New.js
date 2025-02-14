import { EventBus } from '../EventBus';
import { Scene } from 'phaser';

export class New extends Scene {
    blackBlock;  // Black block reference
    redBlock;    // Red block reference

    constructor() {
        super('New');
    }

    init() {
        this.playerSpeed = 160;  // Speed of the character
        this.tileSize = 32;      // Grid-based movement
        this.player = null;      // Player reference
        this.cursors = null;     // Keyboard input reference
        this.map = null;         // Tilemap reference
    }

    preload() {
        // Load the tilemap and tileset
        this.load.setPath('assets');
        this.load.tilemapTiledJSON('map', 'tile.json');  // Load the map
        this.load.image('Grass', 'Grass.png');  // Load the tileset image (Grass.png)
        this.load.image('Tilled_Dirt', 'Tilled_Dirt.png');  // Load the tileset image (Tilled_Dirt.png)
    }

    create() {
        // Set background color
        this.cameras.main.setBackgroundColor(0x87ceeb); 
        this.blackBlock = this.add.rectangle(100, 100, 100, 100, 0x000000);  // Black color
        this.redBlock = this.add.rectangle(500, 100, 100, 100, 0xff0000);  // Red color

        // Set the depth to make sure blackBlock is on top of the tilemap layers
        this.blackBlock.setDepth(1);
        this.redBlock.setDepth(2);  // If you want the red block to be above the black block

        // Create the tilemap
        this.map = this.make.tilemap({ key: 'map' });
    
        // Add the tilesets to the map
        const grassTileset = this.map.addTilesetImage('Grass');
        const tilledDirtTileset = this.map.addTilesetImage('Tilled_Dirt');
        
        // Create the ground layer and **scale it**
        const groundLayer = this.map.createLayer('Tile Layer 1', grassTileset, 0, 0);
        const tilledLayer = this.map.createLayer('Tile Layer 2', tilledDirtTileset, 0, 0);
        groundLayer.setScale(1);  // Scale ground tiles
        tilledLayer.setScale(1);  // Scale Tilled_Dirt tiles

        // Set the depth of layers so they appear behind the blocks
        groundLayer.setDepth(0);
        tilledLayer.setDepth(0);

        // Enable keyboard input
        this.cursors = this.input.keyboard.createCursorKeys();
    
        // Emit that the scene is ready
        EventBus.emit('current-scene-ready', this);
    }

    update () {
        // Handle the black block movement with collision detection
        this.moveBlackBlock();
    }

    moveBlackBlock () {
        let movementSpeed = 5;  // Move by 5 pixels per frame

        // Save the current position of the black block
        let originalX = this.blackBlock.x;
        let originalY = this.blackBlock.y;

        // Handle movement in the x direction
        if (this.cursors.left.isDown)
        {
            this.blackBlock.x -= movementSpeed;  // Move left
        }
        else if (this.cursors.right.isDown)
        {
            this.blackBlock.x += movementSpeed;  // Move right
        }

        // Handle movement in the y direction
        if (this.cursors.up.isDown)
        {
            this.blackBlock.y -= movementSpeed;  // Move up
        }
        else if (this.cursors.down.isDown)
        {
            this.blackBlock.y += movementSpeed;  // Move down
        }

        // Check for collision with the red block
        if (this.checkCollision(this.blackBlock, this.redBlock))
        {
            // If there's a collision, revert to the original position
            this.blackBlock.x = originalX;
            this.blackBlock.y = originalY;
        }
    }

    checkCollision (block1, block2)
    {
        // Check for overlap using Phaser's built-in method for rectangle overlap
        return Phaser.Geom.Intersects.RectangleToRectangle(block1.getBounds(), block2.getBounds());
    }
}
