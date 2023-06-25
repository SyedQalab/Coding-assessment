# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

- **Improved Readability:** The refactored code aims to improve readability by introducing separate functions for obtaining the candidate and hashing the candidate. This improves the clarity and maintainability of the code.
- **Modular Functions:** Breaking down the logic into separate functions enhances the readability of the codebase. The getCandidate function handles the logic to obtain the candidate based on the event, and the hashCandidate function performs the hashing if the candidate exceeds the maximum length. This modular approach makes it easier to understand and maintain the code.
- **Unit Tests:** The provided unit tests ensure that the original functionality of the deterministicPartitionKey function is maintained after refactoring. The tests cover different scenarios such as no input, an event with a specified partition key, and an event without a partition key. This ensures the refactored code behaves as expected.
The refactored code and unit tests aim to enhance readability, maintainability, and clarity of the codebase.