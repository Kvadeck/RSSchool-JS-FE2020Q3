Presentation transcript

First Slide. Introduction.

Hello, today i want to talk about call stack. At first its important thing when
you debugging your application. It get to know what point you are in the running process.
If you know what you can define where is error happened. And try to fix that error.
I want try to explain what is that call stack is. What operations does this data structure support.
We making clear what happens after the function run. We try to test it size, is it big or not.
Anyway this is only general representation what is the Call Stack. I hope you will like it. Let's
get it started.

Second slide. What is Stack?
In general stack is data structure it look like Array, but it's not. Ussually it support operations 
like insert or delete. But not to allow you get it element by index directly. When you add something 
it has a special order. That order called LIFO. LIFO mean's Last In First Out. For example we have two 
element's. After we added if we whant to delete. What element we added last was deleted from the top. 
We use that data structure to save the order of function call. We have only one stack becouse js is single 
threaded language. One function execution at a time. But for asynchronous task's JS uses event loop concept.
Also for long asynchronous tasks we have webworkers.

Third slide. What exactly saved in Call Stack?
When js engine is start to execute your script, it creates a global execute context. In the browser environment
it's window object. Global execution context pushed to the stack, after that engine finds function invocation and 
create a new execution context to be pushed in the stack. All finded function's create execution context and has 
been pushed in the stack. When running reached the last function, it execute the function and started pop process.
It's mean first execution context of the function deleted from the stack, in fact, this is the last. And so along 
by the chain until callstack is be empty.

Four slide. What will be after lunch.
We have a simple function one(). First of all our call stack have initial state and it will be null. After call the
function one() global exexution context will be pushed to the stack, after that function one() is pushed to the call stack. 
Not the function as is pushed to stack. It was execution context of this function. What will happen next is execute
of function body like variable declare or initialize and return of function statement. Next when function finished
the execution is removed from the call stack and go to down level and so on.
 
Six slide. Call stack size limit.
We must be very careful when we using recursion. Becouse if we doing something wrong we stucked in infinite call loop,
and he for sure overflow our stack. Unfortunately stack has size limit. It depends on the browser, in different browser we have 
different size. For example Chrome has 41753 iterations. Under this case iterations mean count of function call. On the slide
i have some code example for this. Try to execute it. What count of iteration in your browser?  







