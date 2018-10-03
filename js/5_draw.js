function draw() {
    clear()
    background(0)

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

    // CLOSE 
    if (keyIsDown(89) === true) {
        closeit();
        
    }
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
    } else if ((stage1 === true) && (player.position.x > 1500)) {
        // if the user goes past stage 1
        back = false
        clear()
        clearStage1()
        setup2()
    } else if ((stage2 === true) && (player.position.x > 1500)) {
        // if the user goes past stage 2
        back = false
        clear()
        clearStage2()
        setup3()
    } else if ((stage2 === true) && (player.position.x < 0)) {
        // if the user goes back past stage 2
        back = true
        clear()
        clearStage2()
        setup1()
        console.log("back is true")
    } else if ((stage3 === true) && (player.position.x < 0)) {
        // if the user goes back past stage 3
        back = true
        clear()
        clearStage3()
        setup2()
    }
    
    // CHEST OPENING
    if (stage2 === true && player.overlap(chest) && keyIsDown(69)) {
        chestIsOpen = true;
        chest.addImage(open);
        // pickup key
        key_check = true
        key = createSprite(30, 30, 39, 60)
        key.addImage(keyimg)
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
    
    // gate opening
    if (stage3 === true && key_check === true && button_pressed === true && player.overlap(gate) && keyIsDown(69)) {
        openGate();
        //shirt = createSprite(855, 588, 39, 60)
        //shirt.addImage(shirt)
    }

    // redraw everything
    step();

    player.position.x = player.x;
    player.position.y = player.y;

    drawSprites();
}

 function closeit(){ 
    document.getElementById('main').setAttribute("style", "display:none");
    document.getElementById('store').setAttribute("style", "display:flex")
} 
setTimeout("closeit", 3000);


function mousePressed() {
    console.log('sprite.position.y = ' + player.position.y)
    console.log('sprite.position.x = ' + player.position.x)
    console.log('mouseX = ' + mouseX)
    console.log('mouseY = ' + mouseY)
}
