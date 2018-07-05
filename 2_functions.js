// resize the p5.js canvas when the browser window changes size
function windowResized() {
    //  console.log('Resizing canvas to ' +  windowWidth + 'x' + windowHeight)
    //resizeCanvas(400, 600)
}


function step() {
    player.x += player.velocity.x;
    player.y += player.velocity.y;
    
    // GRAVITY
    
    if (player.y < height - 40) {
        player.velocity.y += 1;
    }
    else {
        player.velocity.y = 0;
    }
}

    /*
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
