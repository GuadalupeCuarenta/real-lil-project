namespace SpriteKind {
    export const Tile = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Lava`, function (sprite, location) {
    sprites.destroy(mySprite)
})
let Height = 0
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`Player one`, SpriteKind.Player)
mySprite.sayText(":)")
controller.player1.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite.ay = 300
mySprite.y = 0
tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 253))
game.onUpdateInterval(2000, function () {
    for (let index = 0; index <= 9; index++) {
        tiles.setTileAt(tiles.getTileLocation(1 + index, 256 - Height), assets.tile`Lava`)
    }
    Height += 1
})
