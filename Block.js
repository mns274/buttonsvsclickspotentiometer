class Block {
    constructor(rectpos, recthue) {
    this.rectpos = rectpos
    this.hue = recthue
    this.bradius = 12
}
    
    show() {
    rectMode(RADIUS)
    fill(this.hue)
    rect(this.rectpos.x, this.rectpos.y, this.bradius, this.bradius)

}
}