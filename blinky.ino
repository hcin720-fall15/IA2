void setup()
{
	pinMode(D7, OUTPUT);
	Serial.begin(9600);
}
void loop()
{
	//Turn the LED on
	digitalWrite(D7, HIGH);

	//Send a message to the computer over the serial port
	Serial.println("Turned LED on!");

	//Send a message to the cloud
	Spark.publish("LEDEvent", "on");

	//Wait 2 seconds
	delay(2000);

	digitalWrite(D7, LOW);
	Serial.println("Turned LED off!");
	Spark.publish("LEDEvent", "off");
	delay(1000);
}
