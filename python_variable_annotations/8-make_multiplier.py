#!/usr/bin/env python3
"""
Module that contains a function that returns another function.
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Returns a function that multiplies a float by the given multiplier.
    """
    def multiplier_func(n: float) -> float:
        """
        Multiplies a float by the outer multiplier.
        """
        return n * multiplier

    return multiplier_func
