controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . b b b b b b b . . . . . . . . . b 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . b b b b 5 b b b b . . . . . . . . b 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . b b b b 5 b b b b . . . . . . . . b 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . b f f f 5 f f f b . . . . . . . . b 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . b b b b 5 b b b b . . . . . . . . b 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . b b b b 5 b b b b . . . . . . . . b 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . b b b b 5 b b b b . . . . . . . . b 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . b b b b 5 b b b b . . . . . . . . b 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . b b b b b b b b b . . . . . . . . b 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 . . . . . . . . b 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . b b 1 1 1 1 1 1 1 1 1 1 1 b b . . . 5 . b 1 . 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . b b b 1 1 1 1 1 2 1 1 1 1 1 b b b b . . 5 5 5 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . b b e e e e e e e e e e 1 1 1 b b b b b b . d d . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . b b e 1 1 1 2 2 1 1 1 e 1 1 1 b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . b b e 1 1 1 2 2 1 1 1 e 2 1 1 b b b b b b b d d b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . b b e 1 1 1 2 2 1 1 1 e b 1 1 b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . b b e 2 2 2 2 2 2 2 2 e b 1 1 . . b b b b b d d b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . b b e 2 2 2 2 2 2 2 2 e b 1 1 . . . . . . . b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . b b e 1 1 1 2 2 1 1 1 e b 1 1 . . . . . . 5 2 2 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . b e 1 1 1 2 2 1 1 1 e 1 1 1 . . . . . . 5 5 5 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . e 1 1 1 2 2 1 1 1 e e e e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . e 1 1 1 2 2 1 1 1 e 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . e 1 1 1 2 2 1 1 1 e 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . e 1 1 1 2 2 1 1 1 e 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . e 1 1 1 2 2 1 1 1 e 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . e e e e e e e e e e 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . b b b b b b b . . . b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . b b b b b b b b . . . b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . b b b b b b b b . . . . . b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        `)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . b b b b 5 b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . b b b b 5 b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . b f f f 5 f f f b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . b b b b 5 b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . b b b b 5 b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . b b b b 5 b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . b b b b 5 b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . b b 1 1 1 1 1 1 1 1 1 1 1 b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . b b b 1 1 1 1 1 2 1 1 1 1 1 b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . b b b b 1 1 1 1 1 2 1 1 1 1 1 b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . b b b b 1 1 1 1 1 2 1 1 1 1 1 b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . b b b b 1 1 2 2 2 2 2 2 2 1 1 b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . b b b b b 1 1 1 1 1 2 1 1 1 1 1 . b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . e e e e e e e e e e b b 1 1 1 1 1 2 1 1 1 1 1 . . . b b b b b b b b b b b b b . . . . . 5 . . . . . . . . . . . . . . . . . . . . . . . . 
        . e 1 1 1 2 2 1 1 1 e b b 1 1 1 1 1 2 1 1 1 1 1 . . . . . . . b b b b 5 5 b b b b . . . 5 . . . . . . . . . . . . . . . . . . . . . . . . . 
        . e 1 1 1 2 2 1 1 1 e b . 1 1 1 1 1 2 1 1 1 1 1 . . . . . . . . . . b 5 2 d b d b d b d 5 b b b b b b b b b b b b b b b b b b b . . . . . . 
        . e 1 1 1 2 2 1 1 1 e . . 1 1 1 1 1 2 1 1 1 1 1 . . . . . . . . . . . 5 2 d b d b d b d 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . 
        . e 2 2 2 2 2 2 2 2 e . . e e e e e e e e e e e . . . . . . . . . . . 5 5 . b b b b b . 5 . . . . . . . . . . . . . . . . . . . . . . . . . 
        . e 2 2 2 2 2 2 2 2 e . . 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . 5 . . . . . . . . . . . . . . . . . . . . . . . . 
        . e 1 1 1 2 2 1 1 1 e . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . e 1 1 1 2 2 1 1 1 e . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . e 1 1 1 2 2 1 1 1 e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . e 1 1 1 2 2 1 1 1 e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . e 1 1 1 2 2 1 1 1 e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . e 1 1 1 2 2 1 1 1 e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . e 1 1 1 2 2 1 1 1 e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . e e e e e e e e e e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . b b b b b b b . . . b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . b b b b b b b b . . . b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . b b b b b b b b . . . . . b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        `)
})
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . b b b b b b b . . . . . . . . . . . . . b 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . b b b b 5 b b b b . . . . . . . . . . . . b 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . b b b b 5 b b b b . . . . . . . . . . . . b 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . b f f f 5 f f f b . . . . . . . . . . . . b 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . b b b b 5 b b b b . . . . . . . . . . . . b 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . b b b b 5 b b b b . . . . . . . . . . . . b 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . b b b b 5 b b b b . . . . . . . . . . . . b 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . b b b b 5 b b b b . . . . . . . . . . . . b 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . b b b b b b b b b . . . . . . . . . . . . b 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . b 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . b b 1 1 1 1 1 1 1 1 1 1 1 b b . . . . . . . 5 . b 1 . 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . b b b 1 1 1 1 1 2 1 1 1 1 1 b b b b . . . . . . 5 5 5 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . b b b b 1 1 1 1 1 2 1 1 1 1 1 b b b b b b . . . . . d d . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . b b b b 1 1 1 1 1 2 1 1 1 1 1 b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . b b b b 1 1 2 2 2 2 2 2 2 1 1 b b b b b b b b b b b d d b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . b b b b b 1 1 1 1 1 2 1 1 1 1 1 b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . e e e e e e e e e e b b 1 1 1 1 1 2 1 1 1 1 1 . . . . b b b b b b b d d b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . e 1 1 1 2 2 1 1 1 e b b 1 1 1 1 1 2 1 1 1 1 1 . . . . . . . . . . . b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . e 1 1 1 2 2 1 1 1 e b . 1 1 1 1 1 2 1 1 1 1 1 . . . . . . . . . . 5 2 2 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . e 1 1 1 2 2 1 1 1 e . . 1 1 1 1 1 2 1 1 1 1 1 . . . . . . . . . . 5 5 5 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . e 2 2 2 2 2 2 2 2 e . . e e e e e e e e e e e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . e 2 2 2 2 2 2 2 2 e . . 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . e 1 1 1 2 2 1 1 1 e . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . e 1 1 1 2 2 1 1 1 e . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . e 1 1 1 2 2 1 1 1 e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . e 1 1 1 2 2 1 1 1 e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . e 1 1 1 2 2 1 1 1 e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . e 1 1 1 2 2 1 1 1 e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . e 1 1 1 2 2 1 1 1 e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . e e e e e e e e e e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . b b b b b b b . . . b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . b b b b b b b b . . . b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . b b b b b b b b . . . . . b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        `)
})
info.onLifeZero(function () {
    mySprite.destroy(effects.spray, 500)
    game.over(false, effects.splatter)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        otherSprite.destroy(effects.fire, 100)
        music.baDing.play()
        if (otherSprite == mySprite4) {
            info.changeScoreBy(20)
        } else {
            info.changeScoreBy(10)
        }
    }
    if (controller.B.isPressed()) {
        otherSprite.x += 40
        music.pewPew.play()
    }
    if (!(controller.A.isPressed()) && !(controller.B.isPressed())) {
        otherSprite.x += 40
        info.changeLifeBy(-1)
        music.powerDown.play()
    }
})
let mySprite4: Sprite = null
let mySprite: Sprite = null
info.setScore(0)
info.setLife(4)
scene.setBackgroundImage(img`
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c f f c c c c c c f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f c c c c c f c c c c c c c c c c c c f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f c c c c f f c c c c c c c c c c f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f c c c f f c c c c c c c c c c f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f c c c f f f c c c c c c c c c f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f c c c f f f f c c c c c c c c f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f c c c f f c c c c c c c c c c f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f c c f f f c c c c c c c f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f c c c f f f c c c c c c c c c f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f c c f f f f c c c c c c c f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f c c c c c c f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c f c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c f f f c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f c c c c f f c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c f f c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f c c c f f c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c f f f c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f c c f f f c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c f f f f f c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f c c c f f f f c f f f f f c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c f f f c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f c c f f f f c c f f c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c f f f c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f c c c c f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f c c c f f c c f f f f f f c c c c c c c c c c c c c c c 
    c c c c c c c c c c f f f f c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c f f c c c c c c f f c c c c c f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f c f f f f f f f f f c c c c c c c c c f c c c c c c c c 
    c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c f f f c c c c f f f f f f c c c f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f c c c c c c c c f c c c c c c c c 
    c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c f f f f c c c c c f f f f c c c c f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f c c c c c c c c f f f f c c c c c c 
    c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c f f f c c c c f f f f f c c f f f c c c c c c c c c c c c c f c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f c c c c c c c c c f c c c c c c c c 
    c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c f f f f f f c f f f f f f f f c f f f f c c c c c c c c c c c f f c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f c c c c f f f f c c c c c c c 
    c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c f f f c c c c c c c c c c c c c f c c c c c f f f f f f f f f f f f f f f f f f f f c c c f f f c c c c c c c 
    c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f c c c c c c c c c c f f f f f c c c c c c c c c c c c f c c c c f f f f f f f f f f f f f f f f f f f f f f c c f f f f f c c c c c 
    c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f c c c c c c c c c c f f f f f f f c c c c c c c c c c c f f c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c 
    c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c f f f f f f c c c c c c c c c c c c f f c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c 
    c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f c c c c c f f f f f c c c c c c c c c c c f f f c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c 
    c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f c c f f f f f f f c c c c c c c c c c c f c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c 
    c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c f f f f c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c 
    c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c f f c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c 
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    `)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b 1 . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b 1 . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b 1 . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b 1 . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b 1 . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . b b b b b b b . . . . . . . . . . . . . b 1 . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . b b b b 5 b b b b . . . . . . . . . . . . b 1 . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . b b b b 5 b b b b . . . . . . . . . . . . b 1 . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . b f f f 5 f f f b . . . . . . . . . . . . b 1 . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . b b b b 5 b b b b . . . . . . . . . . . . b 1 . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . b b b b 5 b b b b . . . . . . . . . . . . b 1 . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . b b b b 5 b b b b . . . . . . . . . . . . b 1 . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . b b b b 5 b b b b . . . . . . . . . . . . b 1 . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . b b b b b b b b b . . . . . . . . . . . . b 1 . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . b 1 . . . . . . . . . . . . . . 
    . . . . . . . . . . . b b 1 1 1 1 1 1 1 1 1 1 1 b b . . . . . . . 5 . b 1 . 5 . . . . . . . . . . . . 
    . . . . . . . . . . b b b 1 1 1 1 1 2 1 1 1 1 1 b b b b . . . . . . 5 5 5 5 . . . . . . . . . . . . . 
    . . . . . . . . . b b b b 1 1 1 1 1 2 1 1 1 1 1 b b b b b b . . . . . d d . . . . . . . . . . . . . . 
    . . . . . . . . . b b b b 1 1 1 1 1 2 1 1 1 1 1 b b b b b b b b b b b b b b . . . . . . . . . . . . . 
    . . . . . . . . . b b b b 1 1 2 2 2 2 2 2 2 1 1 b b b b b b b b b b b d d b . . . . . . . . . . . . . 
    . . . . . . . . b b b b b 1 1 1 1 1 2 1 1 1 1 1 b b b b b b b b b b b b b b . . . . . . . . . . . . . 
    . e e e e e e e e e e b b 1 1 1 1 1 2 1 1 1 1 1 . . . . b b b b b b b d d b . . . . . . . . . . . . . 
    . e 1 1 1 2 2 1 1 1 e b b 1 1 1 1 1 2 1 1 1 1 1 . . . . . . . . . . . b b b . . . . . . . . . . . . . 
    . e 1 1 1 2 2 1 1 1 e b . 1 1 1 1 1 2 1 1 1 1 1 . . . . . . . . . . 5 2 2 5 . . . . . . . . . . . . . 
    . e 1 1 1 2 2 1 1 1 e . . 1 1 1 1 1 2 1 1 1 1 1 . . . . . . . . . . 5 5 5 5 . . . . . . . . . . . . . 
    . e 2 2 2 2 2 2 2 2 e . . e e e e e e e e e e e . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . e 2 2 2 2 2 2 2 2 e . . 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . e 1 1 1 2 2 1 1 1 e . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . e 1 1 1 2 2 1 1 1 e . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . e 1 1 1 2 2 1 1 1 e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . 
    . e 1 1 1 2 2 1 1 1 e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . 
    . e 1 1 1 2 2 1 1 1 e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . 
    . e 1 1 1 2 2 1 1 1 e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . 
    . e 1 1 1 2 2 1 1 1 e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . 
    . e e e e e e e e e e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . b b b b b . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . b b b b b b b . . . b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . b b b b b b b b . . . b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . b b b b b b b b . . . . . b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
let mySprite2 = sprites.create(img`
    . f . . 2 2 2 2 2 . . f . . . . 
    . f f 2 2 2 2 2 2 2 f f . . . . 
    . f e 2 2 2 2 e 2 2 2 f . . f . 
    . 2 2 e 2 2 e 2 2 2 2 2 . . f f 
    . 2 f 5 2 2 f 5 2 2 2 2 . . 2 . 
    2 2 5 5 2 2 5 5 2 2 2 2 . . 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 
    2 2 2 f f f f f 2 2 2 . . . . 2 
    . 2 f f f f f f f 2 2 . . . 2 2 
    . . 2 2 2 2 2 2 f 2 2 2 . 2 2 . 
    . . . . 2 2 2 2 2 2 2 2 2 2 2 . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    2 2 2 2 f 2 2 2 2 2 2 2 2 2 2 . 
    f 2 2 f 2 2 2 2 . . 2 2 2 2 2 . 
    . f 2 f 2 f 2 f . . . f 2 f . . 
    `, SpriteKind.Enemy)
mySprite4 = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . c c c c c c . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . c c c c 4 c c c . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . c c c c 4 c c c c . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . c f 2 f 4 f 2 f c . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . c 2 c c 4 c c c c . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . c 2 c c 4 c c c c . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . c 2 c c 4 c c c c . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . c c 2 c 4 c c c c . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . c c c c c c c c c . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . d d d d d d d d d . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . c c d d d d d d d d d d d c c . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . c c c d d d f f 2 d d d d d c c c . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . c c c c d f f d d 2 f d f d d c c c c . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . c c c c d f d d d f f d f d d c c c c . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . c c c c d d 2 2 f f 2 f 2 d d c c c c . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . c c c c c d d d f f 2 d f d d d c c c c . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . c 2 2 c c d d d d d 2 f d d d d c 2 c 2 . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . 2 c c c d d d f f f f d d d d c 2 2 f . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . f 2 c . d f f d d 2 d d d d d . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . d d d d d 2 d d d d d . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . e e e e e e e e e e e . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . d d d d d d d d d d d . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . d d d d d d d d d d d d d . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . d d d d d d d d d d d d d . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . d d d f d d d d d d d d d d d . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . d d f f d d d d d d d d d d d . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . d d d d d d d d d d d d f d d . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . d d d d d d d d d d d d f f d . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . d d d d d d d d d d d d f d d . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . d d d d d d d d d d d d d d d . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . c c c c c . . . c c c c c . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . c c c c c . . . c c c c c . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . c c c c c . . . c c c c c . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . c c f c c . . . c c c c c . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . c c f c c . . . c c c c c . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . c c c c c . . . c c c c c . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . c c c c c . . . c c c c c . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . c c c c c . . . c c c c c . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . c c c c c . . . c c c c c . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . c c c c c . . . c c c c c . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . c c c c c . . . c c f c c . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . c c c c c . . . c f f c c . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . c c c c c c c . . . c c c c c c c . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . c c c c c c c c . . . c c c c c c c c . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . c c c c c c c c . . . . . c c c c c c c c . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let mySprite3 = sprites.create(img`
    . f . . 2 2 2 2 2 . . f . . . . 
    . f f 2 2 2 2 2 2 2 f f . . . . 
    . f e 2 2 2 2 e 2 2 2 f . . f . 
    . 2 2 e 2 2 e 2 2 2 2 2 . . f f 
    . 2 f 5 2 2 f 5 2 2 2 2 . . 2 . 
    2 2 5 5 2 2 5 5 2 2 2 2 . . 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 
    2 2 2 f f f f f 2 2 2 . . . . 2 
    . 2 f f f f f f f 2 2 . . . 2 2 
    . . 2 2 2 2 2 2 f 2 2 2 . 2 2 . 
    . . . . 2 2 2 2 2 2 2 2 2 2 2 . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    2 2 2 2 f 2 2 2 2 2 2 2 2 2 2 . 
    f 2 2 f 2 2 2 2 . . 2 2 2 2 2 . 
    . f 2 f 2 f 2 f . . . f 2 f . . 
    `, SpriteKind.Enemy)
mySprite.setPosition(7, 80)
mySprite4.y = 80
mySprite2.follow(mySprite, 30)
mySprite3.follow(mySprite, 30)
mySprite4.follow(mySprite, 10)
game.onUpdate(function () {
    if (info.score() >= 2000) {
        game.over(true, effects.confetti)
    }
})
game.onUpdateInterval(5000, function () {
    mySprite3 = sprites.create(img`
        . f . . 2 2 2 2 2 . . f . . . . 
        . f f 2 2 2 2 2 2 2 f f . . . . 
        . f e 2 2 2 2 e 2 2 2 f . . f . 
        . 2 2 e 2 2 e 2 2 2 2 2 . . f f 
        . 2 f 5 2 2 f 5 2 2 2 2 . . 2 . 
        2 2 5 5 2 2 5 5 2 2 2 2 . . 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 
        2 2 2 f f f f f 2 2 2 . . . . 2 
        . 2 f f f f f f f 2 2 . . . 2 2 
        . . 2 2 2 2 2 2 f 2 2 2 . 2 2 . 
        . . . . 2 2 2 2 2 2 2 2 2 2 2 . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        2 2 2 2 f 2 2 2 2 2 2 2 2 2 2 . 
        f 2 2 f 2 2 2 2 . . 2 2 2 2 2 . 
        . f 2 f 2 f 2 f . . . f 2 f . . 
        `, SpriteKind.Enemy)
    mySprite3.setPosition(200, 80)
    mySprite3.follow(mySprite, 30)
})
game.onUpdateInterval(2000, function () {
    mySprite2 = sprites.create(img`
        . f . . 2 2 2 2 2 . . f . . . . 
        . f f 2 2 2 2 2 2 2 f f . . . . 
        . f e 2 2 2 2 e 2 2 2 f . . f . 
        . 2 2 e 2 2 e 2 2 2 2 2 . . f f 
        . 2 f 5 2 2 f 5 2 2 2 2 . . 2 . 
        2 2 5 5 2 2 5 5 2 2 2 2 . . 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 
        2 2 2 f f f f f 2 2 2 . . . . 2 
        . 2 f f f f f f f 2 2 . . . 2 2 
        . . 2 2 2 2 2 2 f 2 2 2 . 2 2 . 
        . . . . 2 2 2 2 2 2 2 2 2 2 2 . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        2 2 2 2 f 2 2 2 2 2 2 2 2 2 2 . 
        f 2 2 f 2 2 2 2 . . 2 2 2 2 2 . 
        . f 2 f 2 f 2 f . . . f 2 f . . 
        `, SpriteKind.Enemy)
    mySprite2.setPosition(200, 80)
    mySprite2.follow(mySprite, 30)
})
game.onUpdateInterval(10000, function () {
    mySprite4 = sprites.create(img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . c c c c c c . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . c c c c 4 c c c . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . c c c c 4 c c c c . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . c f 2 f 4 f 2 f c . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . c 2 c c 4 c c c c . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . c 2 c c 4 c c c c . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . c 2 c c 4 c c c c . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . c c 2 c 4 c c c c . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . c c c c c c c c c . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . d d d d d d d d d . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . c c d d d d d d d d d d d c c . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . c c c d d d f f 2 d d d d d c c c . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . c c c c d f f d d 2 f d f d d c c c c . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . c c c c d f d d d f f d f d d c c c c . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . c c c c d d 2 2 f f 2 f 2 d d c c c c . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c c c d d d f f 2 d f d d d c c c c . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . c 2 2 c c d d d d d 2 f d d d d c 2 c 2 . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 c c c d d d f f f f d d d d c 2 2 f . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . f 2 c . d f f d d 2 d d d d d . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . d d d d d 2 d d d d d . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . e e e e e e e e e e e . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . d d d d d d d d d d d . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . d d d d d d d d d d d d d . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . d d d d d d d d d d d d d . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . d d d f d d d d d d d d d d d . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . d d f f d d d d d d d d d d d . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . d d d d d d d d d d d d f d d . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . d d d d d d d d d d d d f f d . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . d d d d d d d d d d d d f d d . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . d d d d d d d d d d d d d d d . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . c c c c c . . . c c c c c . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . c c c c c . . . c c c c c . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . c c c c c . . . c c c c c . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . c c f c c . . . c c c c c . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . c c f c c . . . c c c c c . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . c c c c c . . . c c c c c . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . c c c c c . . . c c c c c . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . c c c c c . . . c c c c c . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . c c c c c . . . c c c c c . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . c c c c c . . . c c c c c . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . c c c c c . . . c c f c c . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . c c c c c . . . c f f c c . . . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . c c c c c c c . . . c c c c c c c . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . c c c c c c c c . . . c c c c c c c c . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c c c c c c . . . . . c c c c c c c c . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    mySprite4.setPosition(200, 80)
    mySprite4.follow(mySprite, 10)
})
