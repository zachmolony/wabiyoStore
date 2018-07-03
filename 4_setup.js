function setup() {
    
    var a = createCanvas(400, 600)
    a.parent("main")
    
    // player 1

    player1 = createSprite(200, 400, PLAYER1.size, PLAYER1.size)
    player1.velocity.y = PLAYER1.velocity.y
    player1.velocity.x = PLAYER1.velocity.x
    player1.x = 200
    player1.y = 250
    player1.addImage(PLAYER1.img)
    player1.scale = PLAYER1.scale
    player1.restitution = PLAYER1.restitution
    player1.gravity = PLAYER1.gravity
    
    // player 2

    player2 = createSprite(200, 400, PLAYER2.size, PLAYER2.size)
    player2.velocity.y = PLAYER2.velocity.y
    player2.velocity.x = PLAYER2.velocity.x
    player2.x = 200
    player2.y = 250
    player2.addImage(PLAYER2.img)
    player2.scale = PLAYER2.scale
    player2.restitution = PLAYER2.restitution
    player2.gravity = PLAYER2.gravity
    
    // player 2

    player3 = createSprite(200, 400, PLAYER3.size, PLAYER3.size)
    player3.velocity.y = PLAYER3.velocity.y
    player3.velocity.x = PLAYER3.velocity.x
    player3.x = 200
    player3.y = 250
    player3.addImage(PLAYER3.img)
    player3.scale = PLAYER3.scale
    player3.restitution = PLAYER3.restitution
    player3.gravity = PLAYER3.gravity

    // bar 1
    bar1 = createSprite(100, 400, BAR1.size, BAR1.size)
    bar1.velocity.y = BAR1.velocity.y
    bar1.velocity.x = BAR1.velocity.x
    bar1.addImage(BAR1.img)
    bar1.scale = BAR1.scale
    bar1.position.x = (200)
    bar1.position.y = 150

    // bar 2

    bar2 = createSprite(100, 400, BAR2.size, BAR2.size)
    bar2.velocity.y = BAR2.velocity.y
    bar2.velocity.x = BAR2.velocity.x
    bar2.addImage(BAR2.img)
    bar2.scale = BAR2.scale
    bar2.position.x = (200)
    bar2.position.y = 300

    // bar 3

    bar3 = createSprite(100, 400, BAR3.size, BAR3.size)
    bar3.velocity.y = BAR3.velocity.y
    bar3.velocity.x = BAR3.velocity.x
    bar3.addImage(BAR3.img)
    bar3.scale = BAR3.scale
    bar3.position.x = (200)
    bar3.position.y = 450

    // bar 4

    bar4 = createSprite(100, 400, BAR3.size, BAR3.size)
    bar4.velocity.y = BAR4.velocity.y
    bar4.velocity.x = BAR4.velocity.x
    bar4.addImage(BAR4.img)
    bar4.scale = BAR4.scale
    bar4.position.x = (200)
    bar4.position.y = 600

    // floppy 1 

    floppy1 = createSprite(-38, -50, FLOPPY1.size, FLOPPY1.size)
    floppy1.velocity.y = BAR1.velocity.y
    floppy1.velocity.x = 1
    floppy1.addImage(FLOPPY1.img)
    floppy1.scale = FLOPPY1.scale
    floppy1.restitution = FLOPPY1.restitution
    floppy1.gravity = FLOPPY1.gravity

    // floppy 2

    floppy2 = createSprite(-38, 100, FLOPPY2.size, FLOPPY2.size)
    floppy2.velocity.y = BAR1.velocity.y
    floppy2.velocity.x = 1
    floppy2.addImage(FLOPPY2.img)
    floppy2.scale = FLOPPY2.scale
    floppy2.restitution = FLOPPY2.restitution
    floppy2.gravity = FLOPPY2.gravity

    // floppy 3

    floppy3 = createSprite(-38, 250, FLOPPY3.size, FLOPPY3.size)
    floppy3.velocity.y = BAR1.velocity.y
    floppy3.velocity.x = 1
    floppy3.addImage(FLOPPY3.img)
    floppy3.scale = FLOPPY3.scale
    floppy3.restitution = FLOPPY3.restitution
    floppy3.gravity = FLOPPY3.gravity

    // floppy 4

    floppy4 = createSprite(-38, 400, FLOPPY4.size, FLOPPY4.size)
    floppy4.velocity.y = BAR1.velocity.y
    floppy4.velocity.x = 1
    floppy4.addImage(FLOPPY4.img)
    floppy4.scale = FLOPPY4.scale
    floppy4.restitution = FLOPPY4.restitution
    floppy4.gravity = FLOPPY4.gravity

}