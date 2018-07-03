/** 
  * It's advisable (but not necessary) to load assets in the preload function 
  * otherwise they may appear with a little delay
  */

function preload()
{
    // https://p5js.org/reference/#/p5/loadImage
    BAR1.img = loadImage(BAR1.src)
    // https://p5js.org/reference/#/p5/loadImage
    BAR2.img = loadImage(BAR2.src)
    // https://p5js.org/reference/#/p5/loadImage
    BAR3.img = loadImage(BAR3.src)
    // https://p5js.org/reference/#/p5/loadImage
    BAR4.img = loadImage(BAR4.src)
    // https://p5js.org/reference/#/p5/loadImage
    PLAYER1.img = loadImage(PLAYER1.src)
    PLAYER2.img = loadImage(PLAYER2.src)
    PLAYER3.img = loadImage(PLAYER3.src)

    FLOPPY1.img = loadImage(FLOPPY1.src)
    FLOPPY2.img = loadImage(FLOPPY2.src)
    FLOPPY3.img = loadImage(FLOPPY3.src)
    FLOPPY4.img = loadImage(FLOPPY4.src)

    p1s3_img = loadImage("assets/3em.png")
    p1s2_img = loadImage("assets/2em.png")
    p1s1_img = loadImage("assets/1em.png")
    p1s0_img = loadImage("assets/0em.png")
    p1icon = loadImage("assets/alien.png")
  
    p2s3_img = loadImage("assets/3em.png")
    p2s2_img = loadImage("assets/2em.png")
    p2s1_img = loadImage("assets/1em.png")
    p2s0_img = loadImage("assets/0em.png")
    p2icon = loadImage("assets/robot-face.png")

    p3s3_img = loadImage("assets/3em.png")
    p3s2_img = loadImage("assets/2em.png")
    p3s1_img = loadImage("assets/1em.png")
    p3s0_img = loadImage("assets/0em.png")
    p3icon = loadImage("assets/cowboy.png")
    
    skull1 = loadImage("assets/skull.png")
}