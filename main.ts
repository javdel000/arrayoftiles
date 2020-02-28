namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
function buildLevel () {
    if (nextLevel == list.length) {
        game.over(false)
    }
    scene.setTileMap(list[nextLevel])
    for (let value of scene.getTilesByType(0)) {
        scene.place(value, playerr)
    }
    nextLevel += 1
}
let playerr: Sprite = null
let nextLevel = 0
let list: Image[] = []
list = [img`
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 5 3 5 3 3 3 3 3 3 
3 3 5 3 3 3 3 3 3 3 3 5 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 5 3 3 
3 3 3 3 3 3 5 3 3 3 5 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 5 3 3 3 3 3 3 3 
4 3 3 3 3 3 3 3 3 3 3 5 3 3 3 3 
5 3 3 3 3 3 3 5 3 3 3 3 3 3 3 3 
3 3 3 3 3 5 3 3 3 3 5 3 3 3 3 5 
3 3 3 3 3 3 3 3 3 3 3 3 5 3 3 3 
3 3 3 3 3 3 3 3 3 5 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 5 3 5 3 3 3 3 5 3 5 3 3 
3 3 3 3 3 3 3 3 5 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 5 3 4 3 5 3 
`, img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
4 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 4 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`, img`
f f f f f f f f f f f f f f f f 
f f f f f f f 5 f 5 f f f f f f 
f f 5 f f f f f f f f 5 f f f f 
f f f f f f f f f f f f f 5 f f 
f f f f f f 5 f f f 5 f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f 5 f f f f f f f 
4 f f f f f f f f f f 5 f f f f 
5 f f f f f f 5 f f f f f f f f 
f f f f f 5 f f f f 5 f f f f 5 
f f f f f f f f f f f f 5 f f f 
f f f f f f f f f 5 f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f 5 f 5 f f f f 5 f 5 f f 
f f f f f f f f 5 f f f f f f f 
f f f f f f f f f f 5 f 4 f 5 f 
`]
nextLevel = 0
playerr = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 2 2 . . . . . . . 
. . . . . . 2 2 2 2 2 . . . . . 
. . . . . 2 2 f 2 f 2 2 . . . . 
. . . . . 2 2 2 2 2 2 2 . . . . 
. . . . . . 2 f f 2 2 2 . . . . 
. . . . . . 2 2 2 2 2 2 . . . . 
. . . . . . . 2 2 2 . . . . . . 
. . . . . . . . 2 2 . . . . . . 
. . . . . . . . 2 . . . . . . . 
. . . . . . . 2 2 2 . . . . . . 
. . . . . . . . 2 . . . . . . . 
. . . . . . 2 2 2 2 . . . . . . 
. . . . . . . . . 2 . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(playerr, 1000, 1000)
buildLevel()
