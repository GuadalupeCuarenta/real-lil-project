namespace SpriteKind {
    export const Tile = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -175
    }
})
function Generate_platform (Column: number, Row: number) {
    for (let i = 0; i <= Row; i++) {
        _true += 1
        if (_true == 2) {
            tiles.setTileAt(tiles.getTileLocation(Column + randint(-3, 2), i + 3), assets.tile`myTile0`)
            console.log("set")
            _true = 0
        }
    }
}
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (mySprite2.vy == 0) {
        mySprite2.vy = -175
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Lava`, function (sprite, location) {
	
})
let Height = 0
let _true = 0
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`Player one`, SpriteKind.Player)
controller.player1.moveSprite(mySprite, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite.ay = 300
mySprite.y = 0
tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 253))
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
Generate_platform(4, 250)
Generate_platform(15, 250)
game.onUpdateInterval(1000, function () {
    for (let index = 0; index <= 20; index++) {
        tiles.setTileAt(tiles.getTileLocation(1 + index, 256 - Height), assets.tile`Lava`)
    }
    Height += 1
})
game.onUpdateInterval(500, function () {
    tileUtil.setWalls(assets.tile`myTile0`, true)
    tileUtil.setWalls(assets.tile`myTile`, true)
    tileUtil.setWalls(assets.tile`Grass`, true)
    tileUtil.setWalls(assets.tile`myTile2`, true)
})
