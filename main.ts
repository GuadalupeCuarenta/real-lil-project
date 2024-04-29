namespace SpriteKind {
    export const Tile = SpriteKind.create()
    export const PLayer2 = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (superjumpenabledplr1) {
        if (mySprite.vy == 0) {
            mySprite.vy = -600
        }
    } else {
        if (mySprite.vy == 0) {
            mySprite.vy = -175
        }
    }
})
function gravityswap (mySprite: Sprite) {
    mySprite.ay = -300
    timer.after(2000, function () {
        mySprite.ay = 300
    })
}
function tilemapposition () {
    abilitytf = false
    if (mySprite.tileKindAt(TileDirection.Left, assets.tile`myTile1`)) {
        console.log("tile to the left block")
        tiles.setTileAt(tiles.getTileLocation(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).column, mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).row), assets.tile`Sky`)
        abilitytf = true
    }
    if (mySprite.tileKindAt(TileDirection.Right, assets.tile`myTile1`)) {
        console.log("tile to right block")
        tiles.setTileAt(tiles.getTileLocation(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).column, mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).row), assets.tile`Sky`)
        abilitytf = true
    }
    if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile1`)) {
        console.log("tile above block")
        tiles.setTileAt(tiles.getTileLocation(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).column, mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).row), assets.tile`Sky`)
        abilitytf = true
    }
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile1`)) {
        console.log("tile below block")
        tiles.setTileAt(tiles.getTileLocation(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom).column, mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom).row), assets.tile`Sky`)
        abilitytf = true
    }
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile1`)) {
        console.log("tile on top block")
        tiles.setTileAt(tiles.getTileLocation(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).column, mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).row), assets.tile`Sky`)
        abilitytf = true
    }
    if (abilitytf) {
        random_ability = AbilitiesList._pickRandom()
        console.log(random_ability)
        if (random_ability == "concretefeet") {
            concretefeet1(mySprite, 1)
        } else if (random_ability == "superjump") {
            superjump(mySprite, 1)
        } else if (random_ability == "freeze") {
            freeze1(1)
        } else if (random_ability == "gravityswap") {
            gravityswap(mySprite)
        }
    }
}
function freeze1 (num: number) {
    if (num == 1) {
        console.log("bully player 1")
        controller.player2.moveSprite(mySprite2, 0, 0)
        mySprite2.ay = 0
        timer.after(4000, function () {
            controller.player2.moveSprite(mySprite2, 100, 0)
            mySprite2.ay = 300
        })
    } else {
        controller.player1.moveSprite(mySprite, 0, 0)
        mySprite.ay = 0
        timer.after(4000, function () {
            controller.player1.moveSprite(mySprite, 100, 0)
            mySprite.ay = 300
        })
    }
}
function concretefeet1 (mySprite: Sprite, num: number) {
    if (num == 1) {
        controller.player1.moveSprite(mySprite, 50, 0)
        timer.after(4000, function () {
            controller.player1.moveSprite(mySprite, 100, 0)
        })
    } else {
        controller.player2.moveSprite(mySprite, 50, 0)
        timer.after(4000, function () {
            controller.player2.moveSprite(mySprite, 100, 0)
        })
    }
}
scene.onOverlapTile(SpriteKind.PLayer2, assets.tile`Lava`, function (sprite, location) {
    sprites.destroy(mySprite2)
})
function Generate_platform (Column: number, Row: number) {
    for (let i = 0; i <= Row; i++) {
        RandomColumn = Column + randint(-3, 2)
        randomrow = i + 3
        _true += 1
        if (_true == 2) {
            tiles.setTileAt(tiles.getTileLocation(RandomColumn, randomrow), assets.tile`myTile0`)
            console.log("set")
            _true = 0
            if (Math.percentChance(45)) {
                tiles.setTileAt(tiles.getTileLocation(RandomColumn, randomrow + -1), assets.tile`myTile1`)
            }
        }
    }
}
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (superjumpenabledplr2) {
        if (mySprite2.vy == 0) {
            mySprite2.vy = -600
        }
    } else {
        if (mySprite2.vy == 0) {
            mySprite2.vy = -175
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Lava`, function (sprite, location) {
    sprites.destroy(mySprite)
})
function superjump (mySprite: Sprite, num: number) {
    if (num == 1) {
        superjumpenabledplr1 = true
        timer.after(5000, function () {
            superjumpenabledplr1 = false
        })
    } else {
        superjumpenabledplr2 = true
        timer.after(5000, function () {
            superjumpenabledplr2 = false
        })
    }
}
function tilemapposition2 () {
    abilitytf2 = false
    if (mySprite2.tileKindAt(TileDirection.Left, assets.tile`myTile1`)) {
        console.log("tile to the left block")
        tiles.setTileAt(mySprite2.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), assets.tile`Sky`)
        abilitytf2 = true
    }
    if (mySprite2.tileKindAt(TileDirection.Right, assets.tile`myTile1`)) {
        console.log("tile to right block")
        tiles.setTileAt(tiles.getTileLocation(mySprite2.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).column, mySprite2.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).row), assets.tile`Sky`)
        abilitytf2 = true
    }
    if (mySprite2.tileKindAt(TileDirection.Top, assets.tile`myTile1`)) {
        console.log("tile above block")
        tiles.setTileAt(tiles.getTileLocation(mySprite2.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).column, mySprite2.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).row), assets.tile`Sky`)
        abilitytf2 = true
    }
    if (mySprite2.tileKindAt(TileDirection.Bottom, assets.tile`myTile1`)) {
        console.log("tile below block")
        tiles.setTileAt(tiles.getTileLocation(mySprite2.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom).column, mySprite2.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom).row), assets.tile`Sky`)
        abilitytf2 = true
    }
    if (mySprite2.tileKindAt(TileDirection.Center, assets.tile`myTile1`)) {
        console.log("tile on top block")
        tiles.setTileAt(tiles.getTileLocation(mySprite2.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).column, mySprite2.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).row), assets.tile`Sky`)
        abilitytf2 = true
    }
    if (abilitytf2) {
        random_ability = AbilitiesList._pickRandom()
        console.log(random_ability)
        if (random_ability == "concretefeet") {
            concretefeet1(mySprite2, 2)
        } else if (random_ability == "superjump") {
            superjump(mySprite2, 2)
        } else if (random_ability == "freeze") {
            freeze1(2)
        } else if (random_ability == "gravityswap") {
            gravityswap(mySprite2)
        }
    }
}
let Height = 0
let abilitytf2 = false
let superjumpenabledplr2 = false
let _true = 0
let randomrow = 0
let RandomColumn = 0
let random_ability = ""
let abilitytf = false
let superjumpenabledplr1 = false
let AbilitiesList: string[] = []
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
    `, SpriteKind.PLayer2)
controller.player2.moveSprite(mySprite2, 100, 0)
mySprite2.ay = 300
mySprite2.y = 0
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, mySprite2)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(15, 253))
Generate_platform(4, 250)
Generate_platform(15, 250)
AbilitiesList = [
"concretefeet",
"superjump",
"freeze",
"gravityswap",
"Invulnerable"
]
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
game.onUpdateInterval(100, function () {
    tilemapposition()
    tilemapposition2()
})
