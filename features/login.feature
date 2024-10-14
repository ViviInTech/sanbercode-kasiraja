Feature: Kasir Aja Demo - Tera Komputer Store - Sanbertest

  Scenario Outline: As a user, I can log into my account

    Scenario: Verify the presence of login input fields
    Given I am on the login page
    Then I should see the email input field
    And I should see the password input field
    And I should see the login button

    Scenario: User cannot log in with invalid email and password
    Given I am on the login page
    When I login with via@gmail.com and 123
    Then I should see a flash message saying Kredensial yang Anda berikan salah

    Scenario: User cannot log in with invalid email
    Given I am on the login page
    When I login with via@gmail.com and 12345678
    Then I should see a flash message saying Kredensial yang Anda berikan salah

    Scenario: User cannot log in with invalid password
    Given I am on the login page
    When I login with viviainis20@gmail.com and 123
    Then I should see a flash message saying Kredensial yang Anda berikan salah

    Scenario: User cannot log in with invalid format email
    Given I am on the login page
    When I login with viviainis20gmail.com and 12345678
    Then I should see a flash message saying "email" must be a valid email

    Scenario: User can log into the secure area with valid credentials
    Given I am on the login page
    When I login with viviainis20@gmail.com and 12345678
    Then I should be redirected to the dashboard   