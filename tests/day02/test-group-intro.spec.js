import {test} from "@playwright/test";

test.describe("", () => {

    test.beforeAll(async () => {
        console.log("Before all is executed");
    });

    test.afterAll(async () => {
        console.log("After all is executed");
    }); 
    
    test.beforeEach(async () => {
        console.log("Before each is executed");
    });

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
