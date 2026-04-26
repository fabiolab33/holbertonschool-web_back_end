# Pagination Project

This project explores different pagination strategies used in REST APIs to handle large datasets efficiently. It covers simple pagination, hypermedia-driven pagination (HATEOAS), and deletion-resilient pagination techniques. 

## Learning Objectives
By the end of this project, I am able to explain:
* How to paginate a dataset with simple `page` and `page_size` parameters.
* How to paginate a dataset with hypermedia metadata (HATEOAS).
* How to implement pagination that is resilient to data deletion, ensuring users don't miss items when rows are removed between queries.

## Requirements
* **Setup:** Requires `Popular_Baby_Names.csv` dataset.

## Files & Tasks


| File | Description |
| --- | --- |
| `0-simple_helper_function.py` | Helper function `index_range` to calculate start/end indexes. |
| `1-simple_pagination.py` | Basic pagination method to retrieve specific pages from the dataset. |
| `2-hypermedia_pagination.py` | Implementation of HATEOAS, returning a dictionary with navigation metadata. |
| `3-hypermedia_del_pagination.py` | Deletion-resilient pagination using an indexed dataset to handle missing rows. |

### Deletion-resilient Pagination
The core logic for task 3 ensures that if rows are deleted from the CSV between requests, the next page request will still return the next available data without skipping items. This is achieved by using a `while` loop to find the next valid existing indexes in the cached dictionary.
