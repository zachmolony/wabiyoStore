function preload() {
    PLAYER.img = loadImage(PLAYER.src)
    CHEST.img = loadImage("assets/environment/chest_closed.png")
    open = loadImage("assets/environment/chest_open.png")
    keyimg = loadImage("assets/environment/key.png")
    signimg = loadImage("assets/environment/sign_exclaimation.png")
    signimg2 = loadImage("assets/environment/sign_question.png")
    button_up = loadImage("assets/environment/button_up.png")
    button_down = loadImage("assets/environment/button_down.png")
    gate_closed = loadImage("assets/environment/gate_closed.png")
    gate_open = loadImage("assets/environment/gate_open.png")

    // environment
    block1a = loadImage("assets/environment/block1.png")
    platform = loadImage("assets/environment/platform.png")
    waterfallimg = loadImage("assets/environment/waterfall.png")
    windowimg = loadImage("assets/environment/window.png")
    wooden_platform_img = loadImage("assets/environment/wooden_platform.png")
    
    // instructions
    arrow_img = loadImage("assets/instructions/arrows.gif")
    e_key_img = loadImage("assets/instructions/e_button.gif")
}