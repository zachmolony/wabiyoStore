function setup() {

    //var a = createCanvas(width, height)
    var a = createCanvas(1500, 800)
    a.parent("main")

    setup1()
}

// SETUP STAGE 1

function setup1() {

    // bool 
    stage1 = true
    stage2 = false
    stage3 = false

    // environment

    // block A
    platform_a = createSprite(150, 550, 400, 1)
    platform_a.x = 150
    platform_a.y = 550
    platform_a.shapeColor = color(0, 255, 0)
    platform_a.setCollider("rectangle", 0, 0, 400, 1)
    platform_a.addImage(block1a)

    // block F (a 2)
    platform_f = createSprite(510, 500, 50, 1)
    platform_f.x = 510
    platform_f.y = 500
    platform_f.shapeColor = color(0, 255, 0)
    platform_f.setCollider("rectangle", 0, 0, 50, 1)
    platform_f.addImage(platform)

    // block B
    platform_b = createSprite(670, 450, 50, 1)
    platform_b.x = 670
    platform_b.y = 450
    platform_b.shapeColor = color(0, 255, 0)
    platform_b.setCollider("rectangle", 0, 0, 50, 1)
    platform_b.addImage(platform)

    // block C
    platform_c = createSprite(830, 400, 50, 1)
    platform_c.x = 830
    platform_c.y = 400
    platform_c.shapeColor = color(0, 255, 0)
    platform_c.setCollider("rectangle", 0, 0, 50, 1)
    platform_c.addImage(platform)

    // block D
    platform_d = createSprite(990, 350, 50, 1)
    platform_d.x = 990
    platform_d.y = 350
    platform_d.shapeColor = color(0, 400, 0)
    platform_d.setCollider("rectangle", 0, 0, 50, 1)
    platform_d.addImage(platform)

    // block E
    platform_e = createSprite(1350, 350, 400, 1)
    platform_e.x = 1350
    platform_e.y = 350
    platform_e.shapeColor = color(0, 255, 0)
    platform_e.setCollider("rectangle", 0, 0, 400, 1)
    platform_e.addImage(block1a)
    
    // player
    player = createSprite(100, 526, 5, 5)
    player.velocity.y = PLAYER.velocity.y
    player.velocity.x = PLAYER.velocity.x
    player.x = 100
    player.y = 526
    player.scale = PLAYER.scale
    player.restitution = PLAYER.restitution
    player.gravity = PLAYER.gravity
    player.addImage(PLAYER.img)
    
    // reset player

    if (stage2 === true) {
        player.x = 1500
        player.y = 328
    } else {
        player.x = 100
        player.y = 526
    }
}

// CLEAR STAGE 1

function clearStage1() {
    platform_a.remove()
    platform_b.remove()
    platform_c.remove()
    platform_d.remove()
    platform_e.remove()
    platform_f.remove()
    player.remove()
}

// SETUP STAGE 2

function setup2() {

    // bool

    stage1 = false
    stage2 = true
    stage3 = false

    // spawn block
    platform_a = createSprite(100, 350, 400, 1)
    platform_a.x = 100
    platform_a.y = 350
    platform_a.shapeColor = color(0, 255, 0)
    platform_a.setCollider("rectangle", 0, 0, 400, 1)

    // block below spawn
    platform_b = createSprite(100, 650, 400, 1)
    platform_b.x = 350
    platform_b.y = 550
    platform_b.shapeColor = color(0, 255, 0)
    platform_b.setCollider("rectangle", 0, 0, 400, 1)

    // moving platform
    platform_c = createSprite(450, 650, 50, 1)
    platform_c.x = 350
    platform_c.y = 700
    platform_c.velocity.y = -4
    platform_c.shapeColor = color(0, 255, 0)
    platform_c.setCollider("rectangle", 0, 0, 50, 1)
    platform_c.addImage(platform)


    // middle block
    platform_d = createSprite(700, 650, 200, 1)
    platform_d.x = 700
    platform_d.y = 700
    platform_d.shapeColor = color(0, 255, 0)
    platform_d.setCollider("rectangle", 0, 0, 200, 1)

    // last platform
    platform_f = createSprite(980, 600, 50, 1)
    platform_f.x = 950
    platform_f.y = 700
    platform_f.shapeColor = color(0, 255, 0)
    platform_f.setCollider("rectangle", 0, 0, 50, 1)
    platform_f.addImage(platform)

    // end block
    platform_e = createSprite(1350, 550, 400, 1)
    platform_e.x = 1350
    platform_e.y = 350
    platform_e.shapeColor = color(0, 255, 0)
    platform_e.setCollider("rectangle", 0, 0, 400, 1)

    // chest closed
    if (chestIsOpen === false) {
        chest = createSprite(150, 622, 60, 64)
        chest.addImage(CHEST.img)
    } else if (chestIsOpen === true) {
        chest = createSprite(150, 622, 60, 64)
        chest.addImage(open)
    }
    
    // sign
    sign = createSprite(65, 619, 39, 60)
    sign.addImage(signimg)
    
    // player
    player = createSprite(100, 526, 5, 5)
    player.velocity.y = PLAYER.velocity.y
    player.velocity.x = PLAYER.velocity.x
    player.x = 100
    player.y = 526
    player.scale = PLAYER.scale
    player.restitution = PLAYER.restitution
    player.gravity = PLAYER.gravity
    player.addImage(PLAYER.img)
    
    // reset player

    if (stage3 === true) {
        player.x = 1250
        player.y = 526
    } else {
        player.x = 10
        player.y = 328
    }
}

// CLEAR STAGE 2

function clearStage2() {
    platform_a.remove()
    platform_b.remove()
    platform_c.remove()
    platform_d.remove()
    platform_e.remove()
    platform_f.remove()
    chest.remove()
    sign.remove()
    player.remove()
}

// SETUP STAGE 3

function setup3() {

    // bool

    stage1 = false
    stage2 = false
    stage3 = true

    // spawn block
    platform_a = createSprite(100, 550, 400, 1)
    platform_a.x = 100
    platform_a.y = 350
    platform_a.shapeColor = color(0, 255, 0)
    platform_a.setCollider("rectangle", 0, 0, 400, 1)

    // lower first platform
    platform_b = createSprite(550, 620, 250, 1)
    platform_b.x = 350
    platform_b.y = 550
    platform_b.shapeColor = color(0, 255, 0)
    platform_b.setCollider("rectangle", 0, 0, 250, 1)
    platform_b.addImage(wooden_platform_img)

    // upper first platform
    platform_c = createSprite(550, 500, 250, 1)
    platform_c.x = 350
    platform_c.y = 700
    platform_c.shapeColor = color(0, 255, 0)
    platform_c.setCollider("rectangle", 0, 0, 250, 1)
    platform_c.addImage(wooden_platform_img)

    // upper second platform
    platform_d = createSprite(900, 450, 250, 1)
    platform_d.x = 700
    platform_d.y = 700
    platform_d.shapeColor = color(0, 255, 0)
    platform_d.setCollider("rectangle", 0, 0, 250, 1)
    platform_d.addImage(wooden_platform_img)

    // lower second platform
    platform_f = createSprite(900, 620, 250, 1)
    platform_f.x = 950
    platform_f.y = 700
    platform_f.shapeColor = color(0, 255, 0)
    platform_f.setCollider("rectangle", 0, 0, 250, 1)
    platform_f.addImage(wooden_platform_img)

    // end block
    platform_e = createSprite(1350, 500, 300, 1)
    platform_e.x = 1350
    platform_e.y = 350
    platform_e.shapeColor = color(0, 255, 0)
    platform_e.setCollider("rectangle", 0, 0, 300, 1)

    // window
    window3 = createSprite(1175, 281, 180, 60)
    window3.addImage(windowimg)
    
    // waterfall
    if (button_pressed === false) {
        waterfall = createSprite(1175, 500, 50, 1000)
        waterfall.addImage(waterfallimg)
    }

    // sign
    sign = createSprite(970, 588, 39, 60)
    sign.addImage(signimg2)

    // buttom
    button = createSprite(910, 615, 180, 60)
    button.addImage(button_up)
    
    //gate
    gate = createSprite(1350, 435, 180, 60)
    gate.addImage(gate_closed)
    
    // player
    player = createSprite(100, 526, 5, 5)
    player.velocity.y = PLAYER.velocity.y
    player.velocity.x = PLAYER.velocity.x
    player.x = 100
    player.y = 526
    player.scale = PLAYER.scale
    player.restitution = PLAYER.restitution
    player.gravity = PLAYER.gravity
    player.addImage(PLAYER.img)

    // reset player

    player.x = 20
    player.y = 525
}

function clearStage3() {
    platform_a.remove()
    platform_b.remove()
    platform_c.remove()
    platform_d.remove()
    platform_e.remove()
    platform_f.remove()
    waterfall.remove()
    sign.remove()
    button.remove()
    gate.remove()
    player.remove()
    window3.remove()
}

function openGate() {
    gate.addImage(gate_open)
}
