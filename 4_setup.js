function setup() {

    //var a = createCanvas(width, height)
    var a = createCanvas(1500, 800)
    a.parent("main")

    // player

    player = createSprite(200, 400, 50, 50)
    player.velocity.y = PLAYER.velocity.y
    player.velocity.x = PLAYER.velocity.x
    player.x = 200
    player.y = 250
    player.addImage(PLAYER.img)
    player.scale = PLAYER.scale
    player.restitution = PLAYER.restitution
    player.gravity = PLAYER.gravity

    // environment 1

    // block A
    platform1a = createSprite(200, 550, 400, 1)
    platform1a.x = 250
    platform1a.y = 289
    platform1a.shapeColor = color(0, 255, 0)
    platform1a.setCollider("rectangle", 0, 0, 400, 1)

    // block B
    platform1b = createSprite(650, 550, 50, 1)
    platform1b.x = 650
    platform1b.y = 550
    platform1b.shapeColor = color(0, 255, 0)
    platform1b.setCollider("rectangle", 0, 0, 50, 1)

    // block C
    platform1c = createSprite(800, 550, 50, 1)
    platform1c.x = 800
    platform1c.y = 550
    platform1c.shapeColor = color(0, 255, 0)
    platform1c.setCollider("rectangle", 0, 0, 50, 1)
}
