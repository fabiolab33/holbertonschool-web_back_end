# Python - Async

This project explores the fundamentals of asynchronous programming in Python 3.9 using `asyncio`. It covers the creation of coroutines, running concurrent tasks, measuring runtime in an async environment, and wrapping coroutines into `asyncio.Task` objects.

## Learning Objectives

- Understand `async` and `await` syntax.
- Execute an async program with `asyncio`.
- Run concurrent coroutines effectively.
- Create and manage `asyncio.Task` objects.
- Use the `random` module for generating asynchronous delays.

---

## Tasks Summary


| Task | File | Description |
| --- | --- | --- |
| **0. The basics of async** | `0-basic_async_syntax.py` | An asynchronous coroutine `wait_random` that waits for a random delay and returns it. |
| **1. Multiple coroutines** | `1-concurrent_coroutines.py` | An async routine `wait_n` that spawns `wait_random` n times and returns delays in ascending order. |
| **2. Measure the runtime** | `2-measure_runtime.py` | A function `measure_time` that calculates the average execution time per task for `wait_n`. |
| **3. Tasks** | `3-tasks.py` | A regular function `task_wait_random` that returns an `asyncio.Task` object. |
| **4. Tasks (Concurrent)** | `4-tasks.py` | An async routine `task_wait_n` that functions like `wait_n` but uses `task_wait_random`. |
