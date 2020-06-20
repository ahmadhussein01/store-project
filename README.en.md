# Week 3  Project

## Guidelines

This is phase 2 of the store project. In this phase you will optimize your code using the new material you took in week 3. Try to do your best and enjoy the work.

- Don't forget to commit **working** code early and often.
- Leave comments that describe your work.
- Read the tasks carefully, and do them one by one. 
- After you are finished, submit a pull request following the steps that you have learned.

# Online Store Part-2
### Project Description 
We need to optimize the online store we've built using functions and helper functions.

Using the functions we would be able to make the project more readable, and avoid code repetition.

### Requirements
* **Task-1:** Create a helper function called `addNewProperty()` that gives you the ability to add new property to an object. The function should take three inputs: the object, propert name, and property value. (You can use this helper function in the other tasks)

* **Task-2:** Write a function called `jewelryInfo()` that prints all the information of the jewelry array.
    **Output example:**
    ```
    There are 3 categories in jewelry.
    1. There are 14 rings sold for 9$ each
    2. There are 25 bracelete sold for 14$ each
    3. There are 4 earings sold for 2$ each
    ```

* **Task-3:** Write a function called `getJewerlySubcategories()` that prints all the subcategories in the jewelry array.

* **Task-4:** Refactor the discount code that you wrote in the previous phase to make it as a function called `makeDiscount(percent)`. You can give the function the percent of the discout instead of always being 50%.

* **Task-5:** Instead of updating the inventory and the price manualy, write function called `updateInventory(subCategory, newInventory)` and `updatePrice(subCategory, newPrice)` to do that.

* **Task-6:** In the previous phase you added a new subcategory in the jewelry array. Now create a function to do this thing called `addSubCategory(name, inventory, price)`