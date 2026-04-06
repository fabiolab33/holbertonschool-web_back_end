#!/usr/bin/env python3
"""
Módulo que contiene una función para calcular el suelo de un número.
"""


def floor(n: float) -> int:
    """
    Calcula el suelo (floor) de un número flotante y lo devuelve como entero.
    """
    return int(n) if n >= 0 else int(n) - 1
