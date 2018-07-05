function draw() {
    clear()
    background(150)

    if (player.position.y > 800) {
        player.x = 100;
        player.y = 400;
        player.velocity.y = 0
    }

    // player controls
    if (keyIsDown(37) === true && player.x != 30) {
        player.x -= 10
    }
    if (keyWentDown(UP_ARROW) && player.collide(platform1a)) {
        player.velocity.y -= 15;
    }
    if (keyIsDown(39) === true && player.x != width - 40) {
        player.x += 10
    }

    // redraw everything
    step();

    player.position.x = player.x
    player.position.y = player.y

    drawSprites()

}

function mousePressed() {
    console.log('sprite.position.y = ' + player.position.y)
    console.log('mouseX = ' + mouseX)
    console.log('mouseY = ' + mouseY)
}
