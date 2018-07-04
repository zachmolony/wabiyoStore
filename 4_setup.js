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
}
