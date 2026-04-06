#!/usr/bin/env python3
"""
Module that contains an async routine task_wait_n that uses task_wait_random.
"""
import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawns task_wait_random n times with the specified max_delay and returns
    the list of all delays in ascending order.
    """
    delays = []
    # Create a list of tasks using task_wait_random
    tasks = [task_wait_random(max_delay) for _ in range(n)]

    # Use as_completed to get results as they finish (ascending order)
    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)

    return delays
