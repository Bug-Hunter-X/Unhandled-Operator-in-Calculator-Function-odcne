# Unhandled Operator Bug in Calculator Function

This repository demonstrates a common error in JavaScript functions: failure to handle all possible inputs or operations.  The `calculate` function correctly handles addition, subtraction, multiplication, and division.  However, it throws an error if any other operator is provided.  The solution adds error handling for modulo operator and improves the default error handling.

## Bug

The original code lacks support for the modulo operator (`%`).  This results in an error if a user attempts to use this operator.  Additionally, the default error message could be more informative.

## Solution

The solution expands the `switch` statement to include the modulo operator and improves error handling for unsupported operations.