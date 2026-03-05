### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById selects a single element by id;
geElementByClass selects multiple elements by class name;
querySelector selects the first match;
querySelectorAll selects all the matches;

### 2. How do you create and insert a new element into the DOM?

creating a new element:
const newElement = document.createElement("div");
inserting the element:
document.body.appendNewChild(newElement);
adding content to the element:
newElement.innerText = "Hi, I am Chanchal";

### 3. What is Event Bubbling? And how does it work?

Event Bubbling is: when an event is triggered in the child element and then it moves to the parent element just like a bubble. When we click the child element, first the child runs and then the bubble goes up to parents to trigger them.

### 4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is: when we use parent to handle the child using the event bubbling. During the event bubbling when the event moves from a child to it's parent, we can use parent to get the child from which the event was triggered.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

The preventDefault() method prevents the browser from doing the default behavior and the stopPropagation() method stops propagating an event.
