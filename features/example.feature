Feature: Simple Math

  Scenario: Adding two numbers
    Given I have two numbers 5 and 3
    When I add them
    Then the result should be 8
