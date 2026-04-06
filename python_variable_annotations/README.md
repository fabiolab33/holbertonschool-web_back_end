# Python - Variable Annotations

This project focuses on **Type Annotations** in Python 3.9. Type annotations (also known as type hints) are a way to specify the expected data types for variables, function parameters, and return values. This practice improves code readability, helps in catching bugs early using static analysis tools like `mypy`, and serves as excellent documentation.

## Learning Objectives

- Understand type annotations in Python 3.
- Use type annotations to specify function signatures and variable types.
- Understand the concept of Duck Typing.
- Validate code using `mypy`.

---

## Tasks Summary


| Task | File | Description |
| --- | --- | --- |
| **0. Basic annotations - add** | `0-add.py` | Function `add` that takes two floats and returns their sum as a float. |
| **1. Basic annotations - concat** | `1-concat.py` | Function `concat` that takes two strings and returns a concatenated string. |
| **2. Basic annotations - floor** | `2-floor.py` | Function `floor` that takes a float and returns its floor as an integer. |
| **3. Basic annotations - to string** | `3-to_str.py` | Function `to_str` that takes a float and returns its string representation. |
| **4. Define variables** | `4-define_variables.py` | Definition of variables with specific types: `int`, `float`, `boolean`, and `str`. |
| **5. Complex types - list of floats** | `5-sum_list.py` | Function `sum_list` that takes a list of floats and returns their sum as a float. |
| **6. Complex types - mixed list** | `6-sum_mixed_list.py` | Function `sum_mixed_list` that takes a list of integers and floats and returns their sum as a float. |
| **7. Complex types - tuple** | `7-to_kv.py` | Function `to_kv` that takes a string and a number, returning a tuple (string, square of number as float). |
| **8. Complex types - functions** | `8-make_multiplier.py` | Function `make_multiplier` that returns a function (Callable) to multiply a float. |
| **9. Duck type an iterable** | `9-element_length.py` | Annotating a function using `Iterable`, `Sequence`, `List`, and `Tuple`. |
