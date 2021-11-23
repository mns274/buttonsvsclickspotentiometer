// Declare a "SerialPort" object
let serial;
// fill in the name of your serial port here:
let portName = "/dev/tty.usbmodem11401";
let shipXpos = 10;

let varMode = "none";

let blockArr = []
let laserArr = []
let lspeed = -5

function setup() {
  createCanvas(400, 700);

  // make an instance of the SerialPort object
  serial = new p5.SerialPort();

  // Get a list the ports available
  serial.list();

  // Assuming our Arduino is connected, open the connection to it
  serial.open(portName);

  // When you get a list of serial ports that are available
  serial.on("list", gotList);

  // When you some data from the serial port
  serial.on("data", gotData);
}

// Got the list of ports
function gotList(thelist) {
  print("List of Serial Ports:");
  // theList is an array of their names
  for (let i = 0; i < thelist.length; i++) {
    // Display in the console
    print(i + " " + thelist[i]);
  }
}

// Called when there is data available from the serial port
function gotData() {
  // read the incoming data
  let currentString = serial.readLine();

  // trim off trailing whitespace
  trim(currentString);

  // if the incoming string is empty, do no more
  if (!currentString) return;

  console.log(currentString);

  if (isNaN(currentString)) {
    // if (currentString == "xpos") {
    //   varMode = "xpos";
    // }
  } else {
    shipXpos = round(map(currentString, 0, 1023, 0, width));
  }
}

function draw() {
  background(0);

	fill(255)
    noStroke()
    rect(shipXpos, 675, 10, 10)

	 if (keyIsPressed === true)
		blockArr.push(new Block(createVector(random(width), random(height/2)), color(255)))

	for (const block of blockArr) {
		block.show()
}
	for (const laser of laserArr) {
		laser.show()
		laser.move()

}
	for (const block of blockArr) {
		for (const laser of laserArr) {
			if(laser.laserpos.dist(block.rectpos) < 22) {
				blockArr.splice(block, 15)
				laser.laserpos.y *= -1
			}
		}
	}

	textSize(16);
	fill(random(255), random(255), random(255))
	textAlign(CENTER)
	text('BUTTONS VS CLICKS', width/2, height/2)

}
function mousePressed() {
	laserArr.push(new Laser(createVector(shipXpos, 675)))
}