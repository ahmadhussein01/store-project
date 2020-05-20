# Week 2  Project

## Guidelines

The projects are meant to give you an idea of how well you understand, or can figure out, the material that you covered recently.
There's nothing to worry about, just try to do your best and enjoy the work.

- Fork this repo and clone down your fork to your laptop.
- Commit **working** code early and often (it is the best way that you can save your work).
- Leave comments that describe your work.
- Read the tasks carefully, and do them one by one. 
- After you are finished, submit a pull request following the steps that you have learned (guidelines for how to submit a pull request are in Pull Request[Lecture Notes]).

# Online Store Part-1
### Project Description 
We need to design a system for an online store and we need your help to set the structure.
- The store has **different departments**. There are departments for flowers, clothes, makeup, etc.
- Every department has a set of different products and every product has different properties such as `price`, `name`, `department name`, and more.

### Requirements
* **Task-1:** Declare 3 objects describing products that have at least 3 properties.
    **Example:**
    ```javascript
    let handbag = {
        color: "black",
        size: "small",
        price: 20
    };
    ```
* **Task-2:** Your customers will be happier if they can see your products. Can you add another property to your product object for the image URL?
    **Example:**
	```javascript
	handbag.imgSrc = 'https://yourImagePathHere';
	```

* **Task-3:** Cool, Now describe your product to help customers find it by printing out the value of your object properties using dot and bracket notation:
	**Example:**
	```javascript
	console.log(`Big sale on the ${handbag.color} handbags, they are available now just for ${handbag['price']}$`);
	```
* **Task-4:** Add one more properties to your object using dot notation.
    **Example:**
    ```javascript
    handbag.brand = "chanel";
    ```

* **Task-5:** Create an array named `jewelry` for the jewelry category.
* **Task-6:** Add three subcategories (`rings`, `bracelets` and `earrings`) as objects in this array. Every subcategory has three properties: `name`, `inventory` (which is the number of the products in the current subcategory), and `price`.

* **Task-7:** Now the owner has decided to make a 50% discount on all `jewelry` category products on Mother's Day. Your task is to change the price of each subcategory on the `jewelry` array.

* **Task-8:** After the discount, the last subcategory in the `jewelry` array is sold out. Can you change the value for its `inventory` property to 0?

* **Task-9:** Good news, there are 35 necklaces available now just for $14. Can you add them as another subcategory to the `jewelry` array?
