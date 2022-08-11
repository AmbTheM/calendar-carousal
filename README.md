# calendar-carousal
A simple calendar carousal that is mobile friendly. This component is reusable and can be imolemented wherver a date in the future starting from today has to be selected. For examoke booking a table in restaurants or booking flights.


## Approach
An array of Date type stores 6 dates starting from today and then 5 days ahead, the overflow is limited to only show three date components. Whenever either the user presses the forward button or swipes left, the scroll window moves ahead by 288px to create an animated effect, after that the dates array is updated with 3 more days into the future, The date object is updated via adding 3 days converted into miliseconds and then the object is appended onto the array.
Swiping is done via checking the difference between the position of the inital touch, and the point where the touch ends. 
