void setup() {
  Serial.begin(9600);

  while(!Serial) {
    //wait until port opens
  }

}

void loop() {
  
  int potinput = analogRead(A0);
  Serial.println(potinput);
  delay(100);
  
}
