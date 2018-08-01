// resize the p5.js canvas when the browser window changes size
function windowResized() {
    //  console.log('Resizing canvas to ' +  windowWidth + 'x' + windowHeight)
    //resizeCanvas(400, 600)
}

function step() {

    player.x += player.velocity.x;
    player.y += player.velocity.y;

    platform_f.x += platform_f.velocity.x;
    platform_f.y += platform_f.velocity.y;

    // GRAVITY

    if ((player.position.x > platform_a.position.x - (platform_a.width / 2)) && (player.position.x < platform_a.position.x + (platform_a.width / 2)) && (player.position.y < platform_a.position.y + 10 && player.position.y > platform_a.position.y - 10)) {
        player.velocity.y = 0;
    } else if ((player.position.x > platform_b.position.x - (platform_b.width / 2)) && (player.position.x < platform_b.position.x + (platform_b.width / 2)) && (player.position.y < platform_b.position.y + 10 && player.position.y > platform_b.position.y - 10)) {
        player.velocity.y = 0;
    } else if ((player.position.x > platform_c.position.x - (platform_c.width / 2)) && (player.position.x < platform_c.position.x + (platform_c.width / 2)) && (player.position.y < platform_c.position.y + 10 && player.position.y > platform_c.position.y - 10)) {
        player.velocity.y = 0;
    } else if ((player.position.x > platform_d.position.x - (platform_d.width / 2)) && (player.position.x < platform_d.position.x + (platform_d.width / 2)) && (player.position.y < platform_d.position.y + 10 && player.position.y > platform_d.position.y - 10)) {
        player.velocity.y = 0;
    } else if ((player.position.x > platform_e.position.x - (platform_e.width / 2)) && (player.position.x < platform_e.position.x + (platform_e.width / 2)) && (player.position.y < platform_e.position.y + 10 && player.position.y > platform_e.position.y - 10)) {
        player.velocity.y = 0;
    } else if ((player.position.x > platform_f.position.x - (platform_f.width / 2)) && (player.position.x < platform_f.position.x + (platform_f.width / 2)) && (player.position.y < platform_f.position.y + 10 && player.position.y > platform_f.position.y - 10)) {
        player.velocity.y = 0;
    } else {
        player.velocity.y += 1;
    }

    // STAGE 2 RULES
    // PLATFORM MOVEMENT

    if (stage2 === true && platform_c.position.y < 200) {
        platform_c.velocity.y = 4
    }
    if (stage2 === true && platform_c.position.y > 660) {
        platform_c.velocity.y = -4
    }
    if ((stage2 === true) && (player.position.x > 425) && (player.position.x < 475) && (player.position.y < platform_c.position.y && player.position.y > platform_c.position.y - 10)) {
        player.velocity.y = platform_c.velocity.y
    }
}