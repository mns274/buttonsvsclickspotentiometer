class Laser {
    constructor(laserpos) {
    this.laserpos = laserpos
    // this.lasery = lasery
    this.lradius = 10

}
    show() {
    fill(0, 255, 0)
    ellipse(this.laserpos.x, this.laserpos.y, this.lradius, this.lradius)
    }
    
    move() {
    this.laserpos.y += lspeed
    }
}