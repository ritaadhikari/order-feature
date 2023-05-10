Feature: 
    As User
    I want to order
    So that I can get my food on the table

Background:
        Given User has navigated to login page
        And User enters email "ritaadhikari936@gmail.com" and password "ritaadhika@123"
        And the user has navigated to the home page
        And the user has clicked the order button
        And the user navigated to order page
       
# Scenario:Clicking the order button to make new order
#         When user clicks the makeoredr button
#         Then user should be navigated dinein page

# Scenario:User selects the table
#         Given the user has navigated to dinein page
#         When the user clicks the table
#         Then the user should be navigated to menu page

Scenario:User selects the food and make order
        # Given the user navigated to menu page
        When the user add the foods and clicks confirmorder button and navigates to next page and clicks confirmorder
        Then the sucess toast message should appear

Scenario:User orders the food with quick order
      When the clicks the quick order button and then the user add the foods and clicks confirmorder button and navigates to next page and clicks confirmorder
      Then the sucess toast message should appear

Scenario:click on quivk order button
      When the user clicks the quick order button 
      Then it navigates to the quick menu page