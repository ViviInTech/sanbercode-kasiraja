Feature: CRUD Kategori
  Scenario: Akses page
    Given I am logged in
    And I am on the kategori page

  Scenario: Add a new kategori
    Given I am logged in
    And I am on the kategori page
    When I add a new kategori with name "Baterai" and description "Baterai Laptop"
    Then I should see the kategori "Baterai" in the list

  Scenario: Add a new kategori with empty name
    Given I am logged in
    And I am on the kategori page
    When I click the button simpan
    Then I should see an error message