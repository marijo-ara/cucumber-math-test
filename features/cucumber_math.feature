Feature: Cucumber Mathematics

  Scenario: Let’s eat cucumbers!
    Given I start with 5 cucumbers
    When I eat 4 cucumbers
    Then I should have 1 cucumber

  Scenario: Let’s eat carrots!
    Given I start with 10 carrots
    When I eat 9 carrots
    Then I should have 1 carrot 

  Scenario: Eat more carrots than available #Error Guessing
    Given I start with 10 carrots
    When I eat 12 carrots
    Then an error should be thrown

  Scenario: Eat more cucumbers than available #Error Guessing
    Given I start with 3 cucumbers
    When I eat 5 cucumbers
    Then an error should be thrown

  Scenario: Let’s make a salad!
    Given I start with 8 cucumbers
    And I start with 5 carrots
    When I make a salad with 3 cucumbers and 2 carrots
    Then I should have 5 cucumbers
    And I should have 3 carrots
    And I should have 1 salad

  Scenario: Let’s make multiple salads!
    Given I start with 10 cucumbers
    And I start with 6 carrots
    When I make a salad with 3 cucumbers and 2 carrots
    And I make a salad with 3 cucumbers and 2 carrots
    Then I should have 4 cucumbers
    And I should have 2 carrots
    And I should have 2 salads

 Scenario: Eat zero carrots #Equivalence Partitioning
  Given I start with 5 carrots
  When I eat 0 carrots
  Then I should have 5 carrots

Scenario: Eat all cucumbers #Boundary Value Analysis
  Given I start with 5 cucumbers
  When I eat 5 cucumbers
  Then I should have 0 cucumbers

Scenario: Make a salad after eating ingredients #State Transition Testing
  Given I start with 3 cucumbers
  And I start with 2 carrots
  When I eat 3 cucumbers
  And I eat 2 carrots
  Then I try to make a salad with 3 cucumbers and 2 carrots
  Then an error should be thrown

Scenario: Eat an item when inventory is empty # edge case
  Given I start with 0 carrots
  When I eat 1 carrot
  Then an error should be thrown

