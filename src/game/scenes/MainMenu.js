import { EventBus } from '../EventBus';
import { Scene } from 'phaser';

export class MainMenu extends Scene
{
    blackBlock;  // Black block reference
    redBlock;    // Red block reference
    cursors;     // To capture keyboard input

    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        this.add.image(512, 384, 'background');

        this.logo = this.add.image(512, 300, 'logo').setDepth(100);

        this.add.text(512, 460, 'Main Menuasd', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setDepth(100).setOrigin(0.5);

        // Adding black block (movable)
        this.blackBlock = this.add.rectangle(100, 100, 100, 100, 0x000000);  // Black color

        // Adding red block (static)
        this.redBlock = this.add.rectangle(500, 100, 100, 100, 0xff0000);  // Red color

        EventBus.emit('current-scene-ready', this);

        // Emit the event with an object containing the array [1, 2, 3, 4]
        // EventBus.emit('current-scene-ready', {
        //     scene: this,
        //     data: [1, 2, 3, 4]
        // });

        // Enable the keyboard input
        this.cursors = this.input.keyboard.createCursorKeys();  // Phaser's built-in way to track cursor keys
    }

    update ()
    {
        // Handle the black block movement with collision detection
        this.moveBlackBlock();
    }

    // Method to move the black block with collision detection
    moveBlackBlock ()
    {
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

    // Method to check for collision between two blocks
    checkCollision (block1, block2)
    {
        // Check for overlap using Phaser's built-in method for rectangle overlap
        return Phaser.Geom.Intersects.RectangleToRectangle(block1.getBounds(), block2.getBounds());
    }

    changeScene ()
    {
        if (this.logoTween)
        {
            this.logoTween.stop();
            this.logoTween = null;
        }

        this.scene.start('New');
    }

    moveLogo (reactCallback)
    {
        if (this.logoTween)
        {
            if (this.logoTween.isPlaying())
            {
                this.logoTween.pause();
            }
            else
            {
                this.logoTween.play();
            }
        }
        else
        {
            this.logoTween = this.tweens.add({
                targets: this.logo,
                x: { value: 750, duration: 3000, ease: 'Back.easeInOut' },
                y: { value: 80, duration: 1500, ease: 'Sine.easeOut' },
                yoyo: true,
                repeat: -1,
                onUpdate: () => {
                    if (reactCallback)
                    {
                        reactCallback({
                            x: Math.floor(this.logo.x),
                            y: Math.floor(this.logo.y)
                        });
                    }
                }
            });
        }
    }
}
