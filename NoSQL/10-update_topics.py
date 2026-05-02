#!/usr/bin/env python3
"""Update topics of a school document"""

def update_topics(mongo_collection, name, topics):
    """Change topics of schools matching name"""
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
