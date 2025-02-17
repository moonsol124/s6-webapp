import { EventBus } from '../EventBus';
import { Scene } from 'phaser';

export class MainMenu extends Scene
{
    logoTween;

    constructor ()
    {
        super('MainMenu');
    }

    preload() {
        this.load.setPath('assets');
        this.load.tilemapTiledJSON('map', 'tileMap.tmj');
        this.load.image('Room_Builder_free_32x32', 'Modern_Interiors_Free_v2.2/Modern tiles_Free/Interiors_free/32x32/Room_Builder_free_32x32.png');
        this.load.spritesheet('sprite', 'Modern_Interiors_Free_v2.2/Modern tiles_Free/Characters_free/Adam_16x16.png', { frameWidth: 16, frameHeight: 32 });
        this.load.image('Interiors_free_32x32', 'Modern_Interiors_Free_v2.2/Modern tiles_Free/Interiors_free/32x32/Interiors_free_32x32.png');
    }

    create ()
    {
        const layerScale = 0.4
        const map = this.make.tilemap({ key: 'map' });
        const tileset = map.addTilesetImage('Room_Builder_free_32x32', 'Room_Builder_free_32x32');
        const furniture = map.addTilesetImage('Interiors_free_32x32', 'Interiors_free_32x32');

        const groundLayer = map.createLayer('ground', tileset, 0, 0);
        groundLayer.setCollisionByProperty({ collides: true });
        groundLayer.setScale(layerScale);
        groundLayer.setDepth(1);

        const furnitureLayer = map.createLayer('furniture', furniture, 0, 0);
        furnitureLayer.setCollisionByProperty({ collides: true });
        furnitureLayer.setScale(layerScale);
        furnitureLayer.setDepth(3)

        const divisionLayer = map.createLayer('division', tileset, 0, 0);
        divisionLayer.setCollisionByProperty({ collides: true });
        divisionLayer.setScale(layerScale);
        divisionLayer.setDepth(4)

        const wallLayer = map.createLayer('wall', tileset, 0, 0);
        wallLayer.setCollisionByProperty({ collides: true });
        wallLayer.setScale(layerScale);
        wallLayer.setDepth(2);
        EventBus.emit('current-scene-ready', this);
    }

    // changeScene ()
    // {
    //     if (this.logoTween)
    //     {
    //         this.logoTween.stop();
    //         this.logoTween = null;
    //     }

    //     this.scene.start('Game');
    // }

    // moveLogo (reactCallback)
    // {
    //     if (this.logoTween)
    //     {
    //         if (this.logoTween.isPlaying())
    //         {
    //             this.logoTween.pause();
    //         }
    //         else
    //         {
    //             this.logoTween.play();
    //         }
    //     }
    //     else
    //     {
    //         this.logoTween = this.tweens.add({
    //             targets: this.logo,
    //             x: { value: 750, duration: 3000, ease: 'Back.easeInOut' },
    //             y: { value: 80, duration: 1500, ease: 'Sine.easeOut' },
    //             yoyo: true,
    //             repeat: -1,
    //             onUpdate: () => {
    //                 if (reactCallback)
    //                 {
    //                     reactCallback({
    //                         x: Math.floor(this.logo.x),
    //                         y: Math.floor(this.logo.y)
    //                     });
    //                 }
    //             }
    //         });
    //     }
    // }
}
