### Challenge 1: Student Grade Generator
This is a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

I used a function called studentMarks with a parameter called marks.
I declered grade using let.
The if statement is used to to determine the grade of a particular marks in the order of ;
A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.


## Challenge 2: Speed Detector
This is a function that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

I used a function called raderDevice with a parameter called speed.
speedLimit and kilometerPerSecond are declered using const.
The first if statement is used to determine if the speedLimmit has been observed, if the speedLimmit is below 70 "Ok."is returned.
If the calculated demerit points are above 12 then the drivers license is suspended,if the points are below 12 the points will be displayed.

## Challenge 3: Net Salary Calculator 
Net Salary = Gross salary – All deductions
Basic Salary and Benefits (inputs). Deductions: PAYE (tax), NHIF, and NSSF contributions. How It Works Takes basic salary and benefits as inputs. Calculates: Gross salary = Basic salary + Benefits. PAYE, NHIF, and NSSF deductions. Computes the net salary: Net Salary = Gross Salary − (PAYE + NHIF + NSSF) Net Salary=Gross Salary−(PAYE+NHIF+NSSF)
How to Run the Programs Prerequisites Install Node.js.
Steps Save the programs as separate files:
Grade Calculator: Challenge-1.js Speed Test Program: Challenge-2.js Net Salary Calculator: Challenge-3.js Open a terminal and navigate to the directory containing the files.
Run the desired program using:
node fileName.js Replace fileName.js with the program you want to run. For example:
node gradeCalculator.js Modify the inputs directly in the code to test with different values
Examples: Run the Grade Calculator: node Challenge-1.js. Run the Speed Test Program: node Challenge-2.js. Run the Net Salary Calculator: node Challenge-3.js.
Troubleshooting Error: "node: command not found" Ensure Node.js is properly installed and added to your system PATH. No Output Double-check the file and input values.
Future Improvements Add interactive inputs using readline for dynamic data entry. Create a single program with a menu to select which calculator to use. Export results to a file or display them on a user-friendly web interface.
