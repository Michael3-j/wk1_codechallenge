### Challenge 1: Student Grade Generator
This is a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

I used a function called studentMarks with a parameter called marks.
I declered grade using let.
The if statement is used to to determine the grade of a particular marks in the order of ;
A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.


## Challenge 2: Speed Detector
This is a function that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

I used a function called checkSpeed with a parameter called speed.
speedLimit and kilometerPerSecond are declered using const.
The first if statement is used to determine if the speedLimmit has been observed, if the speedLimmit is below 70 "Ok."is returned.
The function also has an annonimas function in which Math.floor is used to round off the demerit points after the poinst are calculated using
(speed - speedlimite)/kilometerPerSecond).
If the calculated demerit points are above 12 then the drivers license is suspended,if the points are below 12 the points will be displayed.

## Challenge 3: Net Salary Calculator 
