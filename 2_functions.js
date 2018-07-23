// resize the p5.js canvas when the browser window changes size
function windowResized() {
    //  console.log('Resizing canvas to ' +  windowWidth + 'x' + windowHeight)
    //resizeCanvas(400, 600)
}

function step() {

    player.x += player.velocity.x;
    player.y += player.velocity.y;

    // GRAVITY
    
    // checks that the position of the sprite is on the position of the platform
    if (stage1 === true) {
        if ((player.position.x > platform1a.position.x - (platform1a.width / 2)) && (player.position.x < platform1a.position.x + (platform1a.width / 2)) && (player.position.y < platform1a.position.y+10 && player.position.y > platform1a.position.y-10)) {
            player.velocity.y = 0;
        } else if ((player.position.x > platform1b.position.x - (platform1b.width / 2)) && (player.position.x < platform1b.position.x + (platform1b.width / 2)) && (player.position.y < platform1b.position.y+10 && player.position.y > platform1b.position.y-10)) {
            player.velocity.y = 0;
        } else if ((player.position.x > platform1c.position.x - (platform1c.width / 2)) && (player.position.x < platform1c.position.x + (platform1c.width / 2)) && (player.position.y < platform1c.position.y+10 && player.position.y > platform1c.position.y-10)) {
            player.velocity.y = 0;
        } else if ((player.position.x > platform1d.position.x - (platform1d.width / 2)) && (player.position.x < platform1d.position.x + (platform1d.width / 2)) && (player.position.y < platform1d.position.y+10 && player.position.y > platform1d.position.y-10)) {
            player.velocity.y = 0;
        } else if ((player.position.x > platform1e.position.x - (platform1e.width / 2)) && (player.position.x < platform1e.position.x + (platform1e.width / 2)) && (player.position.y < platform1e.position.y+10 && player.position.y > platform1e.position.y-10)) {
            player.velocity.y = 0;
        } else if ((player.position.x > platform1f.position.x - (platform1f.width / 2)) && (player.position.x < platform1f.position.x + (platform1f.width / 2)) && (player.position.y < platform1f.position.y+10 && player.position.y > platform1f.position.y-10)) {
            player.velocity.y = 0;
        } else {
            player.velocity.y += 1;
        }   
    } else if (stage2 === true) {
        if ((player.position.x > platform2a.position.x - (platform2a.width / 2)) && (player.position.x < platform2a.position.x + (platform2a.width / 2)) && (player.position.y < platform2a.position.y+10 && player.position.y > platform2a.position.y-10)) {
            console.log("platform 1 collision")
            player.velocity.y = 0;
        } else if ((player.position.x > platform2b.position.x - (platform2b.width / 2)) && (player.position.x < platform2b.position.x + (platform2b.width / 2)) && (player.position.y === platform2b.position.y)) {
            player.velocity.y = 0;
        } else if ((player.position.x > platform2c.position.x - (platform2c.width / 2)) && (player.position.x < platform2c.position.x + (platform2c.width / 2)) && (player.position.y === platform2c.position.y)) {
            player.velocity.y = 0;
        } else if ((player.position.x > platform2d.position.x - (platform2d.width / 2)) && (player.position.x < platform2d.position.x + (platform2d.width / 2)) && (player.position.y === platform2d.position.y)) {
            player.velocity.y = 0;
        } else if ((player.position.x > platform2e.position.x - (platform2e.width / 2)) && (player.position.x < platform2e.position.x + (platform2e.width / 2)) && (player.position.y === platform2e.position.y)) {
            player.velocity.y = 0;
        } else if ((player.position.x > platform2f.position.x - (platform2f.width / 2)) && (player.position.x < platform2f.position.x + (platform2f.width / 2)) && (player.position.y === platform2f.position.y)) {
            player.velocity.y = 0;
        } else {
            player.velocity.y += 1;
        }   
    } else if (stage3 === true) {
        console.log("stage 3")
        if ((player.position.x > platform3a.position.x - (platform3a.width / 2)) && (player.position.x < platform3a.position.x + (platform3a.width / 2)) && (player.position.y === platform3a.position.y)) {
            player.velocity.y = 0;
        } else if ((player.position.x > platform3b.position.x - (platform3b.width / 2)) && (player.position.x < platform3b.position.x + (platform3b.width / 2)) && (player.position.y === platform3b.position.y)) {
            player.velocity.y = 0;
        } else if ((player.position.x > platform3c.position.x - (platform3c.width / 2)) && (player.position.x < platform3c.position.x + (platform3c.width / 2)) && (player.position.y === platform3c.position.y)) {
            player.velocity.y = 0;
        } else if ((player.position.x > platform3d.position.x - (platform3d.width / 2)) && (player.position.x < platform3d.position.x + (platform3d.width / 2)) && (player.position.y === platform3d.position.y)) {
            player.velocity.y = 0;
        } else if ((player.position.x > platform3e.position.x - (platform3e.width / 2)) && (player.position.x < platform3e.position.x + (platform3e.width / 2)) && (player.position.y === platform3e.position.y)) {
            player.velocity.y = 0;
        } else if ((player.position.x > platform3f.position.x - (platform3f.width / 2)) && (player.position.x < platform3f.position.x + (platform3f.width / 2)) && (player.position.y === platform3f.position.y)) {
            player.velocity.y = 0;
        } else {
            player.velocity.y += 5;
        }   
    }

    // STAGE 2 RULES
    // PLATFORM MOVEMENT

    if ((stage2 === true) && (platform2c.position.y < 200)) {
        console.log("too high")
        platform2c.velocity.y = 4
    }
    if ((stage2 === true) && (platform2c.position.y > 660)) {
        platform2c.velocity.y = -4
    }
    if ((stage2 === true) &&  (player.position.x > 425) && (player.position.x < 475) && (player.position.y < platform2c.position.y && player.position.y > platform2c.position.y - 30)) {
        player.velocity.y = platform2c.velocity.y
    }
}