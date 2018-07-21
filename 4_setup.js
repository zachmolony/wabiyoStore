function setup() {
    
    //var a = createCanvas(width, height)
    var a = createCanvas(1500, 800)
    a.parent("main")

    // player

    player = createSprite(100, 526, 50, 50)
    player.velocity.y = PLAYER.velocity.y
    player.velocity.x = PLAYER.velocity.x
    player.x = 100
    player.y = 526
    player.addImage(PLAYER.img)
    player.scale = PLAYER.scale
    player.restitution = PLAYER.restitution
    player.gravity = PLAYER.gravity
    
    setup1()
}

// SETUP STAGE 1

function setup1() {
    
    // reset player
    
    if (stage2 === true) {
        player.x = 1500
        player.y = 328
    } else {
        player.x = 200
        player.y = 250
    }
    
    // bool 
    
    stage1 = true
    stage2 = false
    stage3 = false

    // environment

    // block A
    platform1a = createSprite(150, 550, 400, 1)
    platform1a.x = 150
    platform1a.y = 550
    platform1a.shapeColor = color(0, 255, 0)
    //platform1a.setCollider("rectangle", 0, 0, 400, 1)

    // block F (a 2)
    platform1f = createSprite(510, 500, 50, 1)
    platform1f.x = 510
    platform1f.y = 500
    platform1f.shapeColor = color(0, 255, 0)
    //platform1f.setCollider("rectangle", 0, 0, 50, 1)
    
    // block B
    platform1b = createSprite(670, 450, 50, 1)
    platform1b.x = 670
    platform1b.y = 450
    platform1b.shapeColor = color(0, 255, 0)
    //platform1b.setCollider("rectangle", 0, 0, 50, 1)

    // block C
    platform1c = createSprite(830, 400, 50, 1)
    platform1c.x = 830
    platform1c.y = 400
    platform1c.shapeColor = color(0, 255, 0)
    //platform1c.setCollider("rectangle", 0, 0, 50, 1)
    
    // block D
    platform1d = createSprite(990, 350, 50, 1)
    platform1d.x = 990
    platform1d.y = 350
    platform1d.shapeColor = color(0, 400, 0)
    //platform1d.setCollider("rectangle", 0, 0, 50, 1)
    
    // block E
    platform1e = createSprite(1350, 350, 400, 1)
    platform1e.x = 1350
    platform1e.y = 350
    platform1e.shapeColor = color(0, 255, 0)
    //platform1e.setCollider("rectangle", 0, 0, 400, 1)
}   

// CLEAR STAGE 1 / 2

function clearFirstStages() {
    platform1a.remove()
    platform1b.remove()
    platform1c.remove()
    platform1d.remove()
    platform1e.remove()
    platform1f.remove()   
}

// SETUP STAGE 2

function setup2() {

    // reset player
    
    if (stage3 === true) {
        player.x = 1250
        player.y = 526
    } else {
        player.x = 10
        player.y = 328
    }
    
    // bool
    
    stage1 = false
    stage2 = true
    stage3 = false
    
    // environment
    
    platform1a.remove()
    platform1b.remove()
    platform1c.remove()
    platform1d.remove()
    platform1e.remove()
    platform1f.remove()
    
    // spawn block
    platform1a = createSprite(100, 350, 400, 1)
    platform1a.x = 100
    platform1a.y = 350
    platform1a.shapeColor = color(0, 255, 0)
    //platform1a.setCollider("rectangle", 0, 0, 400, 1)

    // block below spawn
    platform1b = createSprite(100, 650, 400, 1)
    platform1b.x = 350
    platform1b.y = 550
    platform1b.shapeColor = color(0, 255, 0)
    //platform1b.setCollider("rectangle", 0, 0, 400, 1)

    // moving platform
    platform1c = createSprite(450, 650, 50, 1)
    platform1c.x = 350
    platform1c.y = 700
    platform1c.velocity.y = -4
    platform1c.shapeColor = color(0, 255, 0)
    //platform1c.setCollider("rectangle", 0, 0, 50, 1)
    
    // middle block
    platform1d = createSprite(700, 650, 200, 1)
    platform1d.x = 700
    platform1d.y = 700
    platform1d.shapeColor = color(0, 255, 0)
    //platform1d.setCollider("rectangle", 0, 0, 200, 1)
    
    // last platform
    platform1f = createSprite(980, 600, 50, 1)
    platform1f.x = 950
    platform1f.y = 700
    platform1f.shapeColor = color(0, 255, 0)
    //platform1f.setCollider("rectangle", 0, 0, 50, 1)
    
    // end block
    platform1e = createSprite(1350, 550, 400, 1)
    platform1e.x = 1350
    platform1e.y = 350
    platform1e.shapeColor = color(0, 255, 0)
    //platform1e.setCollider("rectangle", 0, 0, 400, 1)

}   

// SETUP STAGE 3

function setup3() {

    // reset player
    
    player.x = 20
    player.y = 525
    
    // bool
    
    stage1 = false
    stage2 = false
    stage3 = true
    
    // environment 
    
    platform1a.remove()
    platform1b.remove()
    platform1c.remove()
    platform1d.remove()
    platform1e.remove()
    platform1f.remove()
    
    // spawn block
    platform1a = createSprite(100, 550, 400, 1)
    platform1a.x = 100
    platform1a.y = 350
    platform1a.shapeColor = color(0, 255, 0)
    //platform1a.setCollider("rectangle", 0, 0, 400, 1)

    // lower first platform
    platform1b = createSprite(550, 620, 250, 1)
    platform1b.x = 350
    platform1b.y = 550
    platform1b.shapeColor = color(0, 255, 0)
    //platform1b.setCollider("rectangle", 0, 0, 250, 1)

    // upper first platform
    platform1c = createSprite(550, 500, 250, 1)
    platform1c.x = 350
    platform1c.y = 700
    platform1c.shapeColor = color(0, 255, 0)
    //platform1c.setCollider("rectangle", 0, 0, 250, 1)
    
    // upper second platform
    platform1d = createSprite(900, 450, 250, 1)
    platform1d.x = 700
    platform1d.y = 700
    platform1d.shapeColor = color(0, 255, 0)
    //platform1d.setCollider("rectangle", 0, 0, 250, 1)
    
    // lower second platform
    platform1f = createSprite(900, 620, 250, 1)
    platform1f.x = 950
    platform1f.y = 700
    platform1f.shapeColor = color(0, 255, 0)
    //platform1f.setCollider("rectangle", 0, 0, 250, 1)
    
    // end block
    platform1e = createSprite(1350, 500, 300, 1)
    platform1e.x = 1350
    platform1e.y = 350
    platform1e.shapeColor = color(0, 255, 0)
    //platform1e.setCollider("rectangle", 0, 0, 300, 1)
    
    // waterfall
    waterfall = createSprite(1175, 300, 50, 1000)
    waterfall.x = 1175
    waterfall.y = 100
    waterfall.shapeColor = color(0, 255, 0)
    //waterfall.setCollider("rectangle", 0, 0, 50, 1000)

}   

function clearStage3() {
    platform1a.remove()
    platform1b.remove()
    platform1c.remove()
    platform1d.remove()
    platform1e.remove()
    platform1f.remove()
    waterfall.remove()
}