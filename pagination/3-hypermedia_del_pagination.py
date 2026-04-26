#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination module.
"""
import csv
import math
from typing import List, Dict, Any


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        """Initializes a new Server instance.
        """
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset retrieval.
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0.
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """
        Returns a page of data from a given index, resistant to deletions.

        Args:
            index (int): The starting index of the requested page.
            page_size (int): The number of items to return.

        Returns:
            Dict: A dictionary with index, next_index, page_size, and data.
        """
        # Validar que el índice esté dentro del rango permitido
        assert isinstance(index, int) and 0 <= index < len(self.dataset())

        indexed_data = self.indexed_dataset()
        data = []
        current_index = index
        
        # Buscar los elementos ignorando los índices que fueron eliminados
        while len(data) < page_size and current_index < len(self.dataset()):
            item = indexed_data.get(current_index)
            if item:
                data.append(item)
            current_index += 1

        next_index = current_index if current_index < len(self.dataset()) else None

        return {
            "index": index,
            "next_index": next_index,
            "page_size": len(data),
            "data": data
        }
