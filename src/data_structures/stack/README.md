# Stack

Stack is a collection of elements with following operations:

* *push* - push (insert) an element onto stack.
* *pop* - pop (remove) the most recently added element.
* *peek* - returns the the top (most recently added) element of stack.
* *isEmpty* - checks if stack is empty.

Stack is a LIFO (Last In First Out) or FILO (First In Last Out) data structure. 

## Implementation:

* Array:
  * Resizing Array: This implementation uses a resizing array, which double the underlying array when it is full and halves the underlying array when it is one-quarter full. The push and pop operations take constant *amortized* time.

    * push: double size of array when array is full.
    * pop: halve size of array when array is one-quarter full.

  > NOTE: JS arrays are dynamic and doesn't need resizing. However, just for fun to understand how it works behind the scenes, we limit the size of array and resize it explicitly in a performant manner.

  * Plain Array: This implementation uses array without explicit resizing.

* LinkedList:
Uses pointers to add/remove elements to/from stack.

## References:
- [Wikipedia](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))
- [Algorithms](https://algs4.cs.princeton.edu/home/)