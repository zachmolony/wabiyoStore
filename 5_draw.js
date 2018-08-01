function draw() {
    clear()
    background(10)

    // RESPAWNING
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

    // PLAYER CONTROLS

    // left
    if (keyIsDown(37) === true) {
        player.x -= 10
    }
    // up
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

    // right
    if (keyIsDown(39) === true) {
        player.x += 10
    } else if ((stage1 == true) && (player.position.x > 1500)) {
        // if the user goes past stage 1
        clear()
        clearStage1()
        setup2()
        back = false
    } else if ((stage1 == true) && (player.position.x < 0)) {
        // if the user goes back past stage 1
        clear()
        clearStage1()
        setup2()
        back = true
    } else if ((stage2 == true) && (player.position.x > 1500)) {
        // if the user goes past stage 2
        clear()
        back = false
        clearStage2()
        setup3()
    } else if ((stage2 == true) && (player.position.x < 0)) {
        // if the user goes back past stage 2
        clear()
        clearStage2()
        setup1()
        back = true
    } else if ((stage3 == true) && (player.position.x < 0)) {
        // if the user goes back past stage 3
        clear()
        clearStage3()
        setup2()
        back = true
    }

    // pickup key
    if (key_check === true && player.position.x === 80 && player.overlap(keys)) {
        //keys.remove();
        keys.position.x = 30;
        keys.position.y = 30;
    }

    // CHEST OPENING
    if (stage2 === true && player.overlap(chest) && keyIsDown(69)) {
        chest.addImage(open);
        setupKey();
    }

    // BUTTON PRESSING
    if (stage3 === true && button_pressed === false && player.overlap(button) & player.position.x > 908 && player.position.x < 920) {
        button.addImage(button_down);
        button_pressed = true;
        waterfall.remove();
    }

    // WATERFALL BARRIER
    if (stage3 === true && player.overlap(waterfall) && button_pressed === false) {
        console.log("waterfall")
        player.position.x = 1150;
        player.velocity.y = 10;
    }

    // redraw everything
    step();

    player.position.x = player.x;
    player.position.y = player.y;

    drawSprites();
}

function mousePressed() {
    console.log('sprite.position.y = ' + player.position.y)
    console.log('sprite.position.x = ' + player.position.x)
    console.log('mouseX = ' + mouseX)
    console.log('mouseY = ' + mouseY)
}
