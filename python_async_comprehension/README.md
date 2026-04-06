# Python - Async Comprehension

This project focuses on advanced asynchronous features introduced in Python 3.6+, specifically **Asynchronous Generators** and **Asynchronous Comprehensions**. It demonstrates how to yield values asynchronously, how to collect those values using concise comprehension syntax, and how to measure the performance of concurrent tasks.

## Learning Objectives

- Understand how to write and use an asynchronous generator.
- Implement asynchronous comprehensions to collect data from async iterables.
- Type-annotate generators and asynchronous functions correctly.
- Execute multiple async tasks in parallel using `asyncio.gather`.

---

## Tasks Summary


| Task | File | Description |
| --- | --- | --- |
| **0. Async Generator** | `0-async_generator.py` | An async coroutine that loops 10 times, waiting 1 second each time to yield a random number. |
| **1. Async Comprehensions** | `1-async_comprehension.py` | A coroutine that collects 10 random numbers from the async generator using an async comprehension. |
| **2. Run time for four parallel comprehensions** | `2-measure_runtime.py` | A coroutine that measures the total runtime of executing four `async_comprehension` tasks in parallel. |

## Runtime Explanation (Task 2)
The total runtime is roughly 10 seconds because `asyncio.gather` runs the four tasks concurrently. Since each task takes exactly 10 seconds (10 loops × 1 second delay) and they all start at the same time, the total elapsed time remains approximately 10 seconds rather than 40.
