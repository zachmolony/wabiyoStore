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

    stage2 = true
    
    // spawn block
    platform1a = createSprite(100, 350, 400, 1)
    platform1a.x = 100
    platform1a.y = 350
    platform1a.shapeColor = color(0, 255, 0)
    platform1a.setCollider("rectangle", 0, 0, 400, 1)

    // first platform
    platform1b = createSprite(100, 700, 400, 1)
    platform1b.x = 350
    platform1b.y = 550
    platform1b.shapeColor = color(0, 255, 0)
    platform1b.setCollider("rectangle", 0, 0, 400, 1)

    // block below spawn
    platform1c = createSprite(450, 700, 50, 1)
    platform1c.x = 350
    platform1c.y = 700
    platform1c.shapeColor = color(0, 255, 0)
    platform1c.setCollider("rectangle", 0, 0, 50, 1)
    
    // middle block
    platform1d = createSprite(700, 700, 200, 1)
    platform1d.x = 700
    platform1d.y = 700
    platform1d.shapeColor = color(0, 255, 0)
    platform1d.setCollider("rectangle", 0, 0, 200, 1)
    
    // moving platform
    platform1f = createSprite(950, 700, 50, 1)
    platform1f.x = 950
    platform1f.y = 700
    platform1f.velocity.y = -4
    platform1f.shapeColor = color(0, 255, 0)
    platform1f.setCollider("rectangle", 0, 0, 50, 1)
    
    // end block
    platform1e = createSprite(1350, 350, 400, 1)
    platform1e.x = 1350
    platform1e.y = 350
    platform1e.shapeColor = color(0, 255, 0)
    platform1e.setCollider("rectangle", 0, 0, 400, 1)

    
    /*

    // block A
    platform1a = createSprite(150, 550, 400, 1)
    platform1a.x = 150
    platform1a.y = 550
    platform1a.shapeColor = color(0, 255, 0)
    platform1a.setCollider("rectangle", 0, 0, 400, 1)

    // block F (a 2)
    platform1f = createSprite(510, 500, 50, 1)
    platform1f.x = 510
    platform1f.y = 500
    platform1f.shapeColor = color(0, 255, 0)
    platform1f.setCollider("rectangle", 0, 0, 50, 1)
    
    // block B
    platform1b = createSprite(670, 450, 50, 1)
    platform1b.x = 670
    platform1b.y = 450
    platform1b.shapeColor = color(0, 255, 0)
    platform1b.setCollider("rectangle", 0, 0, 50, 1)

    // block C
    platform1c = createSprite(830, 400, 50, 1)
    platform1c.x = 830
    platform1c.y = 400
    platform1c.shapeColor = color(0, 255, 0)
    platform1c.setCollider("rectangle", 0, 0, 50, 1)
    
    // block D
    platform1d = createSprite(990, 350, 50, 1)
    platform1d.x = 990
    platform1d.y = 350
    platform1d.shapeColor = color(0, 400, 0)
    platform1d.setCollider("rectangle", 0, 0, 50, 1)
    
    // block E
    platform1e = createSprite(1350, 350, 400, 1)
    platform1e.x = 1350
    platform1e.y = 350
    platform1e.shapeColor = color(0, 255, 0)
    platform1e.setCollider("rectangle", 0, 0, 400, 1) */
}   

function setup2() {

    // reset player
    
    player.x = 200
    player.y = 250
    
    // environment 1
    
    platform1a.remove()
    platform1b.remove()
    platform1c.remove()
    platform1d.remove()
    platform1e.remove()
    platform1f.remove()

    // block A
    platform1a = createSprite(100, 350, 400, 1)
    platform1a.x = 100
    platform1a.y = 350
    platform1a.shapeColor = color(0, 255, 0)
    platform1a.setCollider("rectangle", 0, 0, 400, 1)

    // block B
    platform1b = createSprite(350, 550, 50, 1)
    platform1b.x = 350
    platform1b.y = 550
    platform1b.shapeColor = color(0, 255, 0)
    platform1b.setCollider("rectangle", 0, 0, 50, 1)

    // block C
    platform1c = createSprite(700, 700, 50, 1)
    platform1c.x = 700
    platform1c.y = 700
    platform1c.shapeColor = color(0, 255, 0)
    platform1c.setCollider("rectangle", 0, 0, 50, 1)
    
    // block E
    platform1e = createSprite(1350, 350, 400, 1)
    platform1e.x = 1350
    platform1e.y = 350
    platform1e.shapeColor = color(0, 255, 0)
    platform1e.setCollider("rectangle", 0, 0, 400, 1)
    
}   
