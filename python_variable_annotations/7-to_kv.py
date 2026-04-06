#!/usr/bin/env python3
"""
Module that contains a function to create a tuple from a string and a number.
"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Returns a tuple where the first element is k and the second is v squared.
    """
    return (k, float(v ** 2))
