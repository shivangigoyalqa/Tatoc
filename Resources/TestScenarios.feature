@Tatoc
Feature: Access tatoc webpage.

Scenario: wesite should have Tatoc heading
Given user is on tatoc homepage
Then It should have Tatoc heading on it

Scenario: when we click on basic course it redirect page to grid gate
Given user is on tatoc homepage
When we click on basic course
Then it redirect us grid gate page

Scenario: when we click on advance course it redirect page to hover menu
Given user is on tatoc homepage
When we click on advance course
Then it redirect us hover menu page

Scenario: website should have a footer
Given user is on tatoc homepage
Then it should have a footer

Scenario: Grid page should have a heading Grid Gate
Given we are on grid page
Then Grid Gate heading should be there

Scenario: when we click on green box frame dungeon page will open
Given we are on grid page
When we click on green box
Then frame dungeon page will open

Scenario: when we click on red box frame error page will open
Given we are on grid page
When we click on red box
Then error page will open

Scenario: Instructions should be there on grid gate page
Given we are on grid page
Then Instructions should be there

Scenario: when we are frame dungeon page box should be enabled
Given we are on frame dungeon page
Then boxes should be enabled

Scenario: when colors of both boxes are not same and we click on proceed than it will redirect to error page
Given we are on frame dungeon page
When we click on proceed link without changing color
Then it will redirect to error page

Scenario: when colors of both boxes are same and we click on proceed than it will redirect to drag page
Given we are on frame dungeon page
When we click on proceed link after changing color
Then it will redirect to drag page

Scenario: Drag me button should enabled on drag page
Given we are on drag around page
Then drag me button should be enabled


Scenario: when we click on proceed button without draging then it will redirect to error page
Given we are on drag around page
When we click on proceed button without draging
Then it will redirect page to error page

Scenario:when we click on proceed button after draging then it will redirect to popup window page
Given we are on drag around page
When we click on proceed button after draging
Then it will redirect to popup window page

Scenario: when we are on popup window page then launch window link should be valid
Given we are on popup window page
Then launch window link should be valid

Scenario: when we click on launch window link input box and submit button should be enabled
Given we are on popup window page
When we click on launch window link
Then input box and submit button should be enabled

Scenario: when we click on proceed button without launching other window then it will redirect to error page
Given we are on popup window page
When we click on proceed button
Then it will redirect window page to error page

Scenario: when we submit form empty and then we click on proceed button then it will redirect to error page
Given we are on popup window page
When we submit form empty and click on proceed button
Then it will redirect again to error page

Scenario: when we submit form after entering name and then we click on proceed button then it will redirect to cookie handling page
Given we are on popup window page
When we submit form after entering name and click on proceed button
Then it will redirect again to cookie handling page

Scenario: when we click on proceed button without generating token then it will redirect to error page
Given we are on cookie page
When we click on proceed button on cookie page
Then it will give error page

Scenario: when we generate token but without setting the cookie we click proceed button then it will redirect to error page
Given we are on cookie page
When we generate token and click on proceed button
Then it should redirect to error page

Scenario: when we set cookie properly and then click on proceed then it will redirct to end page
Given we are on cookie page
When we set cookie and then click on proceed
Then it will redirect to end page 

