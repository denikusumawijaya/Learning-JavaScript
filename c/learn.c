//For input output
#include <stdio.h>
//For boolean
#include <stdbool.h>

int main() {
	printf("Hello World\n");
	printf("I am learning C.");
	printf("Insert a new line \n");
	printf("Insert a backslash \\");
	printf("Insert a double quote\"");
	
	//Single line comments
	/*Multi line comments*/
	
	//Declaring variables
	int myNumber = 5;
	printf("%d\n", myNum);
	printf("%i\n", myNum);
	float myFloatNum = 5.99;
	printf("%f\n", myFloatNum);
	double myDoubleNum = 19.99;
	printf("%lf", myDoubleNum);
	char myLetter = 'D';
	printf("%c\n", myLetter);
	char greetings[] = "Hello World!";
	printf("%s", greetings);
	
	printf("My favorite number is: %d", myNum);
	printf("%d", myNumber > 3); //Returns 1 (true)
	const int myNumber_02 = 17; //Unchangeable and read only.
	
	//Logical Operators
	//&& || !
	
	//Booleans
	bool isProgrammingFun = true;
	
	//Conditional
	int time = 22;
	if (time < 10) {
		printf("Good morning.");
	} else if (time < 20) {
		printf("Good day.");
	} else {
		printf("Good evening.");
	}
	
	time = 20;
	(time < 18) ? printf("Good day.") : printf("Good evening.");
	
	int day = 4;
	switch (day) {
		case 1:
			printf("Monday");
			break;
		case 2:
			printf("Tuesday");
			break;
		case 3:
			printf("Wednesday");
			break;
		case 4:
			printf("Thrusday");
			break;
		case 5:
			printf("Friday");
			break;
		case 6:
			printf("Saturday");
			break;
		case 7:
			printf("Sunday");
			break;
		default:
			printf("Unregistered");
	}
	
	//Loops
	int loops = 0;
	while (loops < 5) {
		printf("%d\n", loops);
		loops++;
	}
	
	loops = 0;
	do {
		printf("%d\n", loops);
		loops++;
	} while (loops <5);
	
	int j;
	for (j = 0; j < 5; j++) {
		printf("%d\n", j);
	}
	
	//Break and Continue
	for (j = 0; j < 10; j++) {
		if (j == 4) {
			break;
		}
		printf("%d\n", j);
	}
	
	return 0;
}
