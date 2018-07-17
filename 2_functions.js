// resize the p5.js canvas when the browser window changes size
function windowResized() {
    //  console.log('Resizing canvas to ' +  windowWidth + 'x' + windowHeight)
    //resizeCanvas(400, 600)
}

function step() {

    player.x += player.velocity.x;
    player.y += player.velocity.y;
    
    platform1f.x += platform1f.velocity.x;
    platform1f.y += platform1f.velocity.y;

    // GRAVITY

    if (!player.collide(platform1a) && !player.collide(platform1b) && !player.collide(platform1c) && !player.collide(platform1d) && !player.collide(platform1e) && !player.collide(platform1f)) {
        player.velocity.y += 1;
    } else {
        player.velocity.y = 0;
    }

    // STAGE 2 RULES
    // PLATFORM MOVEMENT

    if (stage2 === true && platform1c.position.y < 200) {
        platform1c.velocity.y = 4
    }
    if (stage2 === true && platform1c.position.y > 660) {
        platform1c.velocity.y = -4
    }
    if ((stage2 === true) &&  (player.position.x > 425) && (player.position.x < 475) && (player.position.y < platform1c.position.y && player.position.y > platform1c.position.y - 30)) {
        player.velocity.y = platform1c.velocity.y
    }
}

/*
    
    if (player.position.y > 500)
    
    
    if (player.y < 500 && !player.collide(platform) && !player.collide(platform2)) {
        player.velocity.y += 1;
    }
    else {
        player.velocity.y = 0;
    }
}

    if (!player1.collide(bar1) && !player1.collide(bar2) && !player1.collide(bar3) && !player1.collide(bar4)) {
        player1.velocity.y += 1;
    } else {
        player1.velocity.y = 0;
    }
}
    */
