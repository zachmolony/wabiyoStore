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
    
    // checks that the position of the sprite is on the position of the platform
    
    if ((player.position.x > platform1a.position.x - (platform1a.width / 2)) && (player.position.x < platform1a.position.x + (platform1a.width / 2)) && (player.position.y === platform1a.position.y)) {
        player.velocity.y = 0;
    } else if ((player.position.x > platform1b.position.x - (platform1b.width / 2)) && (player.position.x < platform1b.position.x + (platform1b.width / 2)) && (player.position.y === platform1b.position.y)) {
        player.velocity.y = 0;
    } else if ((player.position.x > platform1c.position.x - (platform1c.width / 2)) && (player.position.x < platform1c.position.x + (platform1c.width / 2)) && (player.position.y === platform1c.position.y)) {
        player.velocity.y = 0;
    } else if ((player.position.x > platform1d.position.x - (platform1d.width / 2)) && (player.position.x < platform1d.position.x + (platform1d.width / 2)) && (player.position.y === platform1d.position.y)) {
        player.velocity.y = 0;
    } else if ((player.position.x > platform1e.position.x - (platform1e.width / 2)) && (player.position.x < platform1e.position.x + (platform1e.width / 2)) && (player.position.y === platform1e.position.y)) {
        player.velocity.y = 0;
    } else if ((player.position.x > platform1f.position.x - (platform1f.width / 2)) && (player.position.x < platform1f.position.x + (platform1f.width / 2)) && (player.position.y === platform1f.position.y)) {
        player.velocity.y = 0;
    } else {
        player.velocity.y += 1;
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