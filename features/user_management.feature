Feature: To login user from sign in page

@Adduser
Scenario: Login user
Given I am on the default landing page and select login link 
When I navigate to login page
Then I navigate to homepage

@ActiveJob
Scenario: Active job widget
Given I am on the homepage
When I navigate to Post a job page
Then I am able to post a job