Your job is to write an algorithm that calculates the Qwasar version of a Levenshtein number between two words.

The Qwasar version of a Levenshtein number is simple: it's a value that represents how similar two given strings are.
It is found by comparing two strings and returning the difference between them. (For information, the Levenshtein number is a real concept but we've simplified it a bit for the purposes of this exercise.)

Let’s look at the following example:

  abc
  dbc
  ^  
The Levenshtein difference between these two strings is 1. The two strings are almost identical, other than one letter. That letter, 'd’, is close to the example, 'a’, meaning the Levenshtein value will be small.
