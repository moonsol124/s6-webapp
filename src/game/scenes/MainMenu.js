import { EventBus } from '../EventBus';
import { Scene } from 'phaser';

export class MainMenu extends Scene
{
    constructor ()
    {
        super('MainMenu');
    }

    init() {
        const { width, height } = this.scale;

        // Center and scale background dynamically
        const background = this.add.image(width / 2, height / 2, 'background')
        .setOrigin(0.5)
        .setDisplaySize(width, height);
    
    // Apply a green tint to the background (using hexadecimal color for green)
        background.setTint(0x00ff00);  // Green tint
        this.playerSpeed = 160;
        this.player = null;
        this.cursors = null;
        this.map = null;
        this.lastDirection = 'down';

    }

    preload() {
        this.load.setPath('assets');
        this.load.tilemapTiledJSON('map', 'Beginning_Fields.tmj');


        const prefix = '/The Fan-tasy Tileset (Free) 1.5.1/The Fan-tasy Tileset (Free)/Art';
        // character
        this.load.spritesheet('sprite', 'Modern_Interiors_Free_v2.2/Modern tiles_Free/Characters_free/Adam_16x16.png', { frameWidth: 16, frameHeight: 32 });

        // Buildings
        this.load.image('CityWall_Gate_1', `${prefix}/Buildings/CityWall_Gate_1.png`);
        this.load.image('House_Hay_1', `${prefix}/Buildings/House_Hay_1.png`);
        this.load.image('House_Hay_2', `${prefix}/Buildings/House_Hay_2.png`);
        this.load.image('House_Hay_3', `${prefix}/Buildings/House_Hay_3.png`);
        this.load.image('House_Hay_4_Purple', `${prefix}/Buildings/House_Hay_4_Purple.png`);
        this.load.image('Well_Hay_1', `${prefix}/Buildings/Well_Hay_1.png`);
        this.load.image('Atlas_Buildings', `${prefix}/Buildings/Atlas/Buildings.png`);
    
        // Props
        this.load.image('Banner_Stick_1_Purple', `${prefix}/Props/Banner_Stick_1_Purple.png`);
        this.load.image('Barrel_Small_Empty', `${prefix}/Props/Barrel_Small_Empty.png`);
        this.load.image('Basket_Empty', `${prefix}/Props/Basket_Empty.png`);
        this.load.image('Bench_1', `${prefix}/Props/Bench_1.png`);
        this.load.image('Bench_3', `${prefix}/Props/Bench_3.png`);
        this.load.image('BulletinBoard_1', `${prefix}/Props/BulletinBoard_1.png`);
        this.load.image('Chopped_Tree_1', `${prefix}/Props/Chopped_Tree_1.png`);
        this.load.image('Crate_Large_Empty', `${prefix}/Props/Crate_Large_Empty.png`);
        this.load.image('Crate_Medium_Closed', `${prefix}/Props/Crate_Medium_Closed.png`);
        this.load.image('Crate_Water_1', `${prefix}/Props/Crate_Water_1.png`);
        this.load.image('Fireplace_1', `${prefix}/Props/Fireplace_1.png`);
        this.load.image('HayStack_2', `${prefix}/Props/HayStack_2.png`);
        this.load.image('LampPost_3', `${prefix}/Props/LampPost_3.png`);
        this.load.image('Plant_2', `${prefix}/Props/Plant_2.png`);
        this.load.image('Sack_3', `${prefix}/Props/Sack_3.png`);
        this.load.image('Sign_1', `${prefix}/Props/Sign_1.png`);
        this.load.image('Sign_2', `${prefix}/Props/Sign_2.png`);
        this.load.image('Table_Medium_1', `${prefix}/Props/Table_Medium_1.png`);
        this.load.image('Atlas_Props', `${prefix}/Props/Atlas/Props.png`);
        
        // Animations
        //this.load.image('Campfire', `${prefix}/Props/Animation/Campfire.png`);
        this.load.spritesheet('Campfire', 
            `${prefix}/Props/Animation/Campfire.png`,
            { 
                frameWidth: 32,  // adjust these values based on your sprite sheet
                frameHeight: 32,  // adjust these values based on your sprite sheet
                startFrame: 0,
                endFrame: 7,       // 8 frames total (0-7)
                spacing: 0         // pixels between frames            
            }
        );
        
        // this.load.image('Animation_Flowers_Red', `${prefix}/Props/Animation/Flowers_Red.png`);
        // this.load.image('Animation_Flowers_White', `${prefix}/Props/Animation/Flowers_White.png`);
    
        this.load.spritesheet('Animation_Flowers_Red', 
            `${prefix}/Props/Animation/Flowers_Red.png`,
            { 
                frameWidth: 16,
                frameHeight: 16,
                startFrame: 0,
                endFrame: 7,  // 8 frames like campfire
                spacing: 0
            }
        );
    
        this.load.spritesheet('Animation_Flowers_White', 
            `${prefix}/Props/Animation/Flowers_White.png`,
            { 
                frameWidth: 16,
                frameHeight: 16,
                startFrame: 0,
                endFrame: 7,
                spacing: 0
            }
        );

        // Rocks
        this.load.image('Rock_Brown_1', `${prefix}/Rocks/Rock_Brown_1.png`);
        this.load.image('Rock_Brown_2', `${prefix}/Rocks/Rock_Brown_2.png`);
        this.load.image('Rock_Brown_4', `${prefix}/Rocks/Rock_Brown_4.png`);
        this.load.image('Rock_Brown_6', `${prefix}/Rocks/Rock_Brown_6.png`);
        this.load.image('Rock_Brown_9', `${prefix}/Rocks/Rock_Brown_9.png`);
        this.load.image('Atlas_Rocks', `${prefix}/Rocks/Atlas/Rocks.png`);
    
        // Trees and Bushes
        this.load.image('Bush_Emerald_1', `${prefix}/Trees and Bushes/Bush_Emerald_1.png`);
        this.load.image('Bush_Emerald_2', `${prefix}/Trees and Bushes/Bush_Emerald_2.png`);
        this.load.image('Bush_Emerald_3', `${prefix}/Trees and Bushes/Bush_Emerald_3.png`);
        this.load.image('Bush_Emerald_4', `${prefix}/Trees and Bushes/Bush_Emerald_4.png`);
        this.load.image('Bush_Emerald_5', `${prefix}/Trees and Bushes/Bush_Emerald_5.png`);
        this.load.image('Bush_Emerald_6', `${prefix}/Trees and Bushes/Bush_Emerald_6.png`);
        this.load.image('Bush_Emerald_7', `${prefix}/Trees and Bushes/Bush_Emerald_7.png`);
        this.load.image('Tree_Emerald_1', `${prefix}/Trees and Bushes/Tree_Emerald_1.png`);
        this.load.image('Tree_Emerald_2', `${prefix}/Trees and Bushes/Tree_Emerald_2.png`);
        this.load.image('Tree_Emerald_3', `${prefix}/Trees and Bushes/Tree_Emerald_3.png`);
        this.load.image('Tree_Emerald_4', `${prefix}/Trees and Bushes/Tree_Emerald_4.png`);
        this.load.image('Atlas_Trees_Bushes', `${prefix}/Trees and Bushes/Atlas/Trees_Bushes.png`);
    
        // Ground and Roads
        this.load.image('Tileset_Ground', `${prefix}/Ground Tileset/Tileset_Ground.png`);
        this.load.image('Road', `${prefix}/Ground Tileset/Tileset_Road.png`);
    
        // Rock Slopes
        this.load.image('Tileset_RockSlope', `${prefix}/Rock Slopes/Tileset_RockSlope.png`);
        this.load.image('Tileset_RockSlope_Simple', `${prefix}/Rock Slopes/Tileset_RockSlope_Simple.png`);
    
        // Water
        // this.load.image('Tileset_Water', `${prefix}/Water and Sand/Tileset_Water.png`);
        this.load.spritesheet('Tileset_Water', 
            `${prefix}/Water and Sand/Tileset_Water.png`,
            { 
                frameWidth: 16,    // Adjust if your water tiles are different size
                frameHeight: 16,   // Adjust if your water tiles are different size
                spacing: 0,
                margin: 0
            }
        );
    }

    create ()
    {
        this.anims.create({ key: 'move-up', frames: this.anims.generateFrameNumbers('sprite', { start: 54, end: 59 }), frameRate: 10, repeat: -1 });
        this.anims.create({ key: 'move-left', frames: this.anims.generateFrameNumbers('sprite', { start: 60, end: 65 }), frameRate: 10, repeat: -1 });
        this.anims.create({ key: 'move-right', frames: this.anims.generateFrameNumbers('sprite', { start: 48, end: 53 }), frameRate: 10, repeat: -1 });
        this.anims.create({ key: 'move-down', frames: this.anims.generateFrameNumbers('sprite', { start: 66, end: 71 }), frameRate: 10, repeat: -1 });
    
        this.anims.create({ key: 'idle-up', frames: [{ key: 'sprite', frame: 54 }], frameRate: 10 });
        this.anims.create({ key: 'idle-left', frames: [{ key: 'sprite', frame: 60 }], frameRate: 10 });
        this.anims.create({ key: 'idle-right', frames: [{ key: 'sprite', frame: 48 }], frameRate: 10 });
        this.anims.create({ key: 'idle-down', frames: [{ key: 'sprite', frame: 66 }], frameRate: 10 });
    
        this.cursors = this.input.keyboard.createCursorKeys();
 
        this.cameras.main.centerOn(this.scale.width / 2, this.scale.height / 2);
        
        this.cameras.main.setZoom(3); // Value less than 1 zooms out (shows more)

        const map = this.make.tilemap({ key: 'map' });

        const tilesets = [
            // Ground and atlas tilesets
            map.addTilesetImage('Tileset_Ground', 'Tileset_Ground'),
            map.addTilesetImage('Atlas_Buildings', 'Atlas_Buildings'),
            map.addTilesetImage('Tileset_RockSlope', 'Tileset_RockSlope'),
            map.addTilesetImage('Tileset_RockSlope_Simple', 'Tileset_RockSlope_Simple'),
            map.addTilesetImage('Tileset_Water', 'Tileset_Water'),
            map.addTilesetImage('Road', 'Road'),
            map.addTilesetImage('Animation_Flowers_Red', 'Animation_Flowers_Red'),
            map.addTilesetImage('Animation_Flowers_White', 'Animation_Flowers_White')
        ];
    
        const mapWidth = map.widthInPixels;
        const mapHeight = map.heightInPixels;
        const offsetX = (this.scale.width - mapWidth) / 2;
        const offsetY = (this.scale.height - mapHeight) / 2;

        // Create layers using the tilesets array
        const groundLayer = map.createLayer('Ground', tilesets, offsetX, offsetY);
        const flowerLayer = map.createLayer('Flowers', tilesets, offsetX, offsetY);
        const roadLayer = map.createLayer('Road', tilesets, offsetX, offsetY);
        const roadSlopeLayer = map.createLayer('RockSlopes', tilesets, offsetX, offsetY);
        const roadSlopeAutoLayer = map.createLayer('RockSlopes_Auto', tilesets, offsetX, offsetY);

        const waterLayer = map.createLayer('Water', tilesets, offsetX, offsetY);
        console.log(waterLayer)
        const objectLayer = map.getObjectLayer('Object Layer 1');
        
        const startPoint = objectLayer.objects.find(obj => obj.name === 'start');
        this.player = this.add.sprite(offsetX+startPoint.x, offsetY+startPoint.y, 'sprite').setScale(0.5);
        this.player.setDepth(3);
        this.physics.world.enable(this.player);
        roadSlopeAutoLayer.setCollisionByProperty({ collides: true });
        this.physics.add.collider(this.player, roadSlopeAutoLayer);
        
        roadSlopeLayer.setCollisionByProperty({ collides: true });
        this.physics.add.collider(this.player, roadSlopeLayer);

        this.anims.create({
            key: 'burn',
            frames: this.anims.generateFrameNumbers('Campfire', { 
                start: 0, 
                end: 7 
            }),
            frameRate: 12,        // Adjust speed of animation
            repeat: -1            // Loop forever
        });

        this.cameras.main.startFollow(this.player);
        
        if (objectLayer && objectLayer.objects) {
            
            let campfireCreated = false;  // Flag to track if we've created the campfire

            objectLayer.objects.forEach(object => {
                // console.log(object)

                if (object.gid) {
                    // Find the matching tileset by checking gid ranges
                    const matchingTileset = map.tilesets.find(tileset => 
                        object.gid >= tileset.firstgid && 
                        object.gid < (tileset.firstgid + tileset.total)
                    );
    
                    // console.log('Object GID:', object.gid, 'Matching Tileset:', matchingTileset?.name);
    
                    if (matchingTileset) {
                        // Get the image key from the tileset name
                        let imageKey = matchingTileset.name;
                        if (imageKey.includes('.png')) {
                            // Extract the base name from the path
                            imageKey = imageKey.split('/').pop().replace('.png', '');
                        }
    
                        // console.log('Using image key:', imageKey);
    
                        // Create the sprite
                        let sprite

                        if (imageKey === 'Campfire' && !campfireCreated) {
                            sprite = this.add.sprite(offsetX+object.x, offsetY+object.y, 'Campfire');
                            this.physics.world.enable(sprite);
                            sprite.body.setImmovable(true); // Prevent it from being pushed away
                            this.physics.add.collider(this.player, sprite);

                            // sprite = this.add.sprite(object.x, object.y, 'Campfire');
                            sprite.setOrigin(0, 1);
                            sprite.play('burn');
                            
                            campfireCreated = true;  // Set flag to prevent creating more campfires
                        } else {
                            // Create other sprites as normal
                            sprite = this.add.sprite(offsetX+object.x, offsetY+object.y, imageKey);
                            this.physics.world.enable(sprite);
                            sprite.body.setImmovable(true); // Prevent it from being pushed away
                            this.physics.add.collider(this.player, sprite);

                            sprite.setOrigin(0, 1);
                        }

                    } else {
                        console.warn('No matching tileset found for gid:', object.gid);
                    }
                }
            });
        }

        EventBus.emit('current-scene-ready', this);
    }

    update() {
        this.player.body.setVelocity(0);
        let moving = false;

        if (this.cursors.left.isDown) {
            this.player.body.setVelocityX(-160);
            this.player.anims.play('move-left', true);
            this.lastDirection = 'left';
            moving = true;
        } else if (this.cursors.right.isDown) {
            this.player.body.setVelocityX(160);
            this.player.anims.play('move-right', true);
            this.lastDirection = 'right';
            moving = true;
        }

        if (this.cursors.up.isDown) {
            this.player.body.setVelocityY(-160);
            this.player.anims.play('move-up', true);
            this.lastDirection = 'up';
            moving = true;
        } else if (this.cursors.down.isDown) {
            this.player.body.setVelocityY(160);
            this.player.anims.play('move-down', true);
            this.lastDirection = 'down';
            moving = true;
        }

        if (!moving) {
            this.player.anims.play(`idle-${this.lastDirection}`);
        }

        this.player.body.velocity.normalize().scale(160);
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
}
