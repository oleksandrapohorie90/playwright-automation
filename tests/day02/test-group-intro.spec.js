import {test} from "@playwright/test";
//1st param is the description
//2nd param is the callback function which will have the test steps
//test.describe is used to group the test cases
//{} is used to define the scope of the test.describe block
test.describe("User story", () => {

    test.beforeAll(async () => {
        console.log("Before all is executed");
    });

    test.afterAll(async () => {
        console.log("After all is executed");
    }); 
    //async () is used to define an asynchronous function which will be executed before each test case
    test.beforeEach(async () => {
        console.log("Before each is executed");
    });
    //async () is used to define an asynchronous function which will be executed after each test case
    test.afterEach(async () => {
        console.log("After each is executed");
    });

  test("Test case 1", async () => {
    console.log("Test case 1 is executed");
  });
  
  test("Test case 2", async () => {
    console.log("Test case 2 is executed");
    });
    
     test("Test case 3", async () => {
    console.log("Test case 3 is executed");
    });

});
