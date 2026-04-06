#!/usr/bin/env python3
"""
Module that contains the function floor which takes a float n as argument.
"""


def floor(n: float) -> int:
    """
    Return the floor of a float as an integer.
    """
    return int(n) if n >= 0 else int(n) - 1
