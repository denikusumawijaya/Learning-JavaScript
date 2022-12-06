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
	printf("Insert a single quote \'");
	printf("Insert a tab \t");
	
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
	for (j = 0; j < 10; j++) {
		if (j == 4) {
			continue;
		}
		printf("%d\n", j);
	}
	
	//Arrays (can use for 2D array)
	int myNumbers[] = {25, 50, 75, 100};
	printf("%d", myNumbers[0]); //Access the elements
	myNumbers[0] = 33; //Change an array elements
	int myNUmbers_02[4]; //Set array size
	myNymbers[0] = 25;
	myNumbers[1] = 50;
	myNumbers[2] = 75;
	myNumbers[3] = 100;
	
	//C does not have a String type
	//another way of creating strings
	char greetings_02[] = {'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '!', '\0'}; //Null terminating character, it tells C taht this is the end of the string.
	printf("%lu\n", sizeof(greetings_02));
	
	//User input
	int myInput;
	printf("Type a number \n");
	scanf("%d", &myInput); //Have to specify the reference operator (&)
	printf("Your number is: %d", myInput);
	
	char firstName[30]; //Must specify the size of string
	printf("Enter your first name: \n");
	scanf("%s", firstName); //Do not have to specify the reference operator (&)
	printf("Hello %s.", firstName);
	
	//Memory address
	int myMemory = 43;
	printf("%p", &myMemory); //Output: 0x7ffe5367e044 Probably won't get the smae result.
	// &myMemory called pointer
	//Creating Pointers
	int myAge = 43; // an int variable
	printf("%d", myAge);  // Outputs the value of myAge (43)
	printf("%p", &myAge); // Outputs the memory address of myAge (0x7ffe5367e044)
	
	int myAge = 43;     // An int variable
	int* ptr = &myAge;  // A pointer variable, with the name ptr, that stores the address of myAge
	// Output the value of myAge (43)
	printf("%d\n", myAge);
	// Output the memory address of myAge (0x7ffe5367e044)
	printf("%p\n", &myAge);
	// Output the memory address of myAge with the pointer (0x7ffe5367e044)
	printf("%p\n", ptr);
	
	//Dereference
	int myAge = 43;     // Variable declaration
	int* ptr = &myAge;  // Pointer declaration
	// Reference: Output the memory address of myAge with the pointer (0x7ffe5367e044)
	printf("%p\n", ptr);
	// Dereference: Output the value of myAge with the pointer (43)
	printf("%d\n", *ptr);
	
	return 0;
}
