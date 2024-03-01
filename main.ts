namespace SpriteKind {
    export const Tile = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -150
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite2.vy == 0) {
        mySprite2.vy = -150
    }
})
function Generate_Platforms () {
	
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Lava`, function (sprite, location) {
    sprites.destroy(mySprite)
    sprites.destroy(mySprite2)
})
let Height = 0
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`Player one`, SpriteKind.Player)
controller.player1.moveSprite(mySprite, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite.ay = 300
mySprite.y = 0
tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 253))
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, mySprite)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . e e e e e e e e . . . . 
    . . . e e e e e e e e e e . . . 
    . . e e e e e e e e e e e e . . 
    . . e e e e e e e e e e e e . . 
    . . f d d d d d d d d d d f . . 
    . . f d d f d d d d f d d f . . 
    . . f d d d d d d d d d d f . . 
    . . f d d d d d d d d d d f . . 
    . . f d d d d d d d d d d f . . 
    . . f d d f d d d d f d d f . . 
    . . f d d d f f f f d d d f . . 
    . . f d d d d d d d d d d f . . 
    . . f f f f f f f f f f f f . . 
    `, SpriteKind.Player)
controller.player2.moveSprite(mySprite2, 100, 0)
mySprite2.ay = 300
mySprite2.y = 0
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, mySprite2)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(15, 253))
game.onUpdateInterval(1000, function () {
    for (let index = 0; index <= 20; index++) {
        tiles.setTileAt(tiles.getTileLocation(1 + index, 256 - Height), assets.tile`Lava`)
    }
    Height += 1
})
