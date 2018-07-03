function draw() {
    clear()
    background(1)

    bar1.debug = mouseIsPressed
    // when the sprite reaches the bottom of the screen
    let spriteBottom = getSpriteBottom()
    if (spriteBottom <= height) {  
    //console.log("You died. ")
    }

    let spriteTop = getSpriteTop()
    if (spriteTop === 0) {
    //player1.position.y = 0
    }

    // constant downward speed (i.e. gravity)
    player1.addSpeed(player1.gravity, 90)
    player2.addSpeed(player2.gravity, 90)
    player3.addSpeed(player3.gravity, 90)


    // player 1 controls
    if (keyIsDown(37) === true) {
        player1.x -= 10
    }
    if (keyWentDown(UP_ARROW)) {
        player1.velocity.y -= 150
    }
    if (keyIsDown(39) === true) {
        player1.x += 10
    }
    if (keyWentDown(DOWN_ARROW)) {
        player1.velocity.y = 150
    }

    // player 2 controls
    if (keyIsDown(65) === true) {
        player2.x -= 10
    }
    if (keyWentDown(87)) {
        player2.velocity.y -= 150
    }
    if (keyIsDown(68) === true) {
        player2.x += 10
    }
    if (keyWentDown(83)) {
        player2.velocity.y = 150
    }

    // player 3 controls
    if (keyIsDown(74) === true) {
        player3.x -= 10
    }
    if (keyWentDown(73)) {
        player3.velocity.y -= 150
    }
    if (keyIsDown(76) === true) {
        player3.x += 10
    }
    if (keyWentDown(75)) {
        player3.velocity.y = 150
    }

    // redraw everything
    step();

    player1.position.x = player1.x
    player1.position.y = player1.y
    player2.position.x = player2.x
    player2.position.y = player2.y
    player3.position.x = player3.x
    player3.position.y = player3.y

    drawSprites()

    //check bar at bottom
    if (bar1.position.y > 600) {
        bar1.position.x = (200)
        bar1.position.y = 0
    }
    if (bar2.position.y > 600) {
        bar2.position.x = (200)
        bar2.position.y = 0
    }
    if (bar3.position.y > 600) {
        bar3.position.x = (200)
        bar3.position.y = 0
    }
    if (bar4.position.y > 600) {
        bar4.position.x = (200)
        bar4.position.y = 0
    }
    //check floppys at bottom
    if (floppy1.position.y > 600 || floppy1.position.x > windowWidth) {
        floppy1.position.x = (-38)
        floppy1.position.y = (bar1.position.y - 50)
    }
    if (floppy2.position.y > 600 || floppy2.position.x > windowWidth) {
        floppy2.position.x = (-38),
        floppy2.position.y = (bar2.position.y - 50)
    }
    if (floppy3.position.y > 600 || floppy3.position.x > windowWidth) {
        floppy3.position.x = (-38),
        floppy3.position.y = (bar3.position.y - 50)
    }
    if (floppy4.position.y > 600 || floppy4.position.x > windowWidth) {
        floppy4.position.x = (-38),
        floppy4.position.y = (bar4.position.y - 50)
    }

    // SCORES
    
    if ((player1.overlap(floppy1)) || (player1.overlap(floppy2)) || (player1.overlap(floppy3)) || (player1.overlap(floppy4))) {
        score1 -= 1;
    }
    if ((player2.overlap(floppy1)) || (player2.overlap(floppy2)) || (player2.overlap(floppy3)) || (player2.overlap(floppy4))) {
        score2 -= 1;
    }
    if ((player3.overlap(floppy1)) || (player3.overlap(floppy2)) || (player3.overlap(floppy3)) || (player3.overlap(floppy4))) {
        score3 -= 1;
    }

    // score images player 1
    
    image(p1icon, 20, 20, 40, 40)
    
    if (score1 >= 66) {
        image(p1s3_img, 70, 20, 40, 40)
    }
    else if (score1 >= 33) {
        image(p1s2_img, 70, 20, 40, 40)
    }
    else if (score1 >= 1) {
        image(p1s1_img, 70, 20, 40, 40)
    }
    else {
        image(p1s0_img, 70, 20, 40, 40)
        image(skull1, 20, 20, 40, 40)
    }
    
    // score images player 2
    
    image(p2icon, 150, 20, 40, 40)
    
    if (score2 >= 66) {
        image(p2s3_img, 200, 20, 40, 40)
    }
    else if (score2 >= 33) {
        image(p2s2_img, 200, 20, 40, 40)
    }
    else if (score2 >= 1) {
        image(p2s1_img, 200, 20, 40, 40)
    }
    else {
        image(p2s0_img, 200, 20, 40, 40)
        image(skull1, 150, 20, 40, 40)
    }
    
    // score images player 3
    
    image(p3icon, 280, 20, 40, 40)

    if (score3 >= 66) {
        image(p3s3_img, 330, 20, 40, 40)
    }
    else if (score3 >= 33) {
        image(p3s2_img, 330, 20, 40, 40)
    }
    else if (score3 >= 1) {
        image(p3s1_img, 330, 20, 40, 40)
    }
    else {
        image(p3s0_img, 330, 20, 40, 40)
        image(skull1, 280, 20, 40, 40)
    }
}

function mousePressed() {
    console.log('sprite.position.y = ' + player1.position.y)
    console.log('mouseX = ' + mouseX)
    console.log('mouseY = ' + mouseY)
}