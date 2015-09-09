SYSTEM_MODE(SEMI_AUTOMATIC); //Disable connecting to cloud

void setup()
{
	pinMode(D7, OUTPUT);
	Serial.begin(9600);
}

void loop()
{
	digitalWrite(D7, HIGH);
	Serial.println("Turned LED on!");
	delay(2000);
	digitalWrite(D7, LOW);
	Serial.println("Turned LED off!");
	delay(1000);
}
