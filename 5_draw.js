function draw() {
    clear()
    background(100)

    if ((player.position.y > 3000) && (back === false)) {
        player.x = 200;
        player.y = 250;
        player.velocity.y = 0
    } else if ((player.position.y > 3000) && (back === true) && (stage1 === true)) {
        player.velocity.y = 0;
        player.x = 1200;
        player.y = 200;
    } else if ((player.position.y > 3000) && (back === true) && (stage2 === true)) {
        player.velocity.y = 0;
        player.x = 1200;
        player.y = 400;
    }

    // player controls
    if (keyIsDown(37) === true) {
        player.x -= 10
    }
    if (keyWentDown(UP_ARROW) && player.collide(platform_a)) {
        player.velocity.y -= 12;
    } else if (keyWentDown(UP_ARROW) && player.collide(platform_b)) {
        player.velocity.y -= 12;
    } else if (keyWentDown(UP_ARROW) && player.collide(platform_c)) {
        player.velocity.y -= 12;
    } else if (keyWentDown(UP_ARROW) && player.collide(platform_d)) {
        player.velocity.y -= 12;
    } else if (keyWentDown(UP_ARROW) && player.collide(platform_e)) {
        player.velocity.y -= 12;
    } else if (keyWentDown(UP_ARROW) && player.collide(platform_f)) {
        player.velocity.y -= 12;
    } else if (keyWentDown(UP_ARROW) && (stage2 === true) && (player.position.x > 925) && (player.position.x < 975)) {
        player.velocity.y -= 12;
    }
    
    // off the right of the screen
    if (keyIsDown(39) === true && player.x != width + 200) {
        player.x += 10
    } else if ((stage1 == true) && (player.position.x > 1500)) {
        // if the user goes past stage 1
        clear()
        clearFirstStages()
        setup2()
        back = false
    } else if ((stage1 == true) && (player.position.x < 0)) {
        // if the user goes back past stage 1
        clear()
        clearFirstStages()
        setup1()
        back = true
    } else if ((stage2 == true) && (player.position.x > 1500)) {
        // if the user goes past stage 2
        clear()
        back = false
        clearFirstStages()
        setup3()
    } else if ((stage2 == true) && (player.position.x < 0)) {
        // if the user goes back past stage 2
        clear()
        clearFirstStages()
        setup1()
        back = true
    } else if ((stage3 == true) && (player.position.x < 0)) {
        // if the user goes back past stage 3
        clear()
        clearStage3()
        setup2()
        back = true
    }
    
    // redraw everything
    step();

    player.position.x = player.x;
    player.position.y = player.y;

    drawSprites()

}

function mousePressed() {
    console.log('sprite.position.y = ' + player.position.y)
    console.log('sprite.position.x = ' + player.position.x)
    console.log('mouseX = ' + mouseX)
    console.log('mouseY = ' + mouseY)
}
