namespace SpriteKind {
    export const target = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.throwDart()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.target, function (sprite, otherSprite) {
    game.gameOver(true)
})
let mySprite: Sprite = null
let myDart: Dart = null
let select = game.askForNumber("Choose a number 1-3", 1)
if (select == 1) {
    scene.setBackgroundColor(4)
    myDart = darts.create(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, SpriteKind.Player)
    myDart.controlWithArrowKeys()
    myDart.setTrace()
    mySprite = sprites.create(img`
        . . . . f f f f f f f f . . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . f 1 1 1 2 2 2 2 2 2 1 1 1 f . 
        f 1 1 1 2 1 1 1 1 1 1 2 1 1 1 f 
        f 1 1 2 1 1 1 1 1 1 1 1 2 1 1 f 
        f 1 1 2 1 1 1 2 2 1 1 1 2 1 1 f 
        f 1 1 2 1 1 2 1 1 2 1 1 2 1 1 f 
        f 1 1 2 1 1 2 1 1 2 1 1 2 1 1 f 
        f 1 1 2 1 1 1 2 2 1 1 1 2 1 1 f 
        f 1 1 2 1 1 1 1 1 1 1 1 2 1 1 f 
        f 1 1 1 2 1 1 1 1 1 1 2 1 1 1 f 
        . f 1 1 1 2 2 2 2 2 2 1 1 1 f . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . . . f f f f f f f f . . . . 
        `, SpriteKind.target)
    mySprite.setPosition(randint(100, 150), randint(10, 70))
} else if (select == 2) {
    scene.setBackgroundColor(7)
    myDart = darts.create(img`
        4 4 4 . . 4 4 4 4 4 . . . . . . 
        4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
        b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
        . b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
        . b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
        b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
        c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
        c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
        c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
        c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
        . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
        . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
        . . c 4 4 d 4 4 4 4 4 d d 5 d c 
        . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
        . . . . c c b 4 4 4 b b 4 5 4 4 
        . . . . . . c c c c c c b b 4 . 
        `, SpriteKind.Player)
    myDart.controlWithArrowKeys()
    myDart.setTrace()
    mySprite = sprites.create(img`
        . . . . f f f f f f f f . . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . f 1 1 1 2 2 2 2 2 2 1 1 1 f . 
        f 1 1 1 2 1 1 1 1 1 1 2 1 1 1 f 
        f 1 1 2 1 1 1 1 1 1 1 1 2 1 1 f 
        f 1 1 2 1 1 1 2 2 1 1 1 2 1 1 f 
        f 1 1 2 1 1 2 1 1 2 1 1 2 1 1 f 
        f 1 1 2 1 1 2 1 1 2 1 1 2 1 1 f 
        f 1 1 2 1 1 1 2 2 1 1 1 2 1 1 f 
        f 1 1 2 1 1 1 1 1 1 1 1 2 1 1 f 
        f 1 1 1 2 1 1 1 1 1 1 2 1 1 1 f 
        . f 1 1 1 2 2 2 2 2 2 1 1 1 f . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . . . f f f f f f f f . . . . 
        `, SpriteKind.target)
    mySprite.setPosition(randint(100, 150), randint(10, 70))
} else if (select == 3) {
    scene.setBackgroundColor(11)
    myDart = darts.create(img`
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 8 6 6 . . . 6 8 . . 
        . . . e e e 8 8 6 6 . 6 7 8 . . 
        . . e 2 2 2 2 e 8 6 6 7 6 . . . 
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
        e 2 2 2 2 2 2 2 4 e 2 e e c . . 
        e e 2 e 2 2 4 2 2 e e e c . . . 
        e e e e 2 e 2 2 e e e c . . . . 
        e e e 2 e e c e c c c . . . . . 
        . c c c c c c c . . . . . . . . 
        `, SpriteKind.Player)
    myDart.controlWithArrowKeys()
    myDart.setTrace()
    mySprite = sprites.create(img`
        . . . . f f f f f f f f . . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . f 1 1 1 2 2 2 2 2 2 1 1 1 f . 
        f 1 1 1 2 1 1 1 1 1 1 2 1 1 1 f 
        f 1 1 2 1 1 1 1 1 1 1 1 2 1 1 f 
        f 1 1 2 1 1 1 2 2 1 1 1 2 1 1 f 
        f 1 1 2 1 1 2 1 1 2 1 1 2 1 1 f 
        f 1 1 2 1 1 2 1 1 2 1 1 2 1 1 f 
        f 1 1 2 1 1 1 2 2 1 1 1 2 1 1 f 
        f 1 1 2 1 1 1 1 1 1 1 1 2 1 1 f 
        f 1 1 1 2 1 1 1 1 1 1 2 1 1 1 f 
        . f 1 1 1 2 2 2 2 2 2 1 1 1 f . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . . . f f f f f f f f . . . . 
        `, SpriteKind.target)
    mySprite.setPosition(randint(100, 150), randint(10, 70))
} else {
    game.gameOver(false)
}
