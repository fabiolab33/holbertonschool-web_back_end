#!/usr/bin/env python3
"""Return schools that match a topic"""

def schools_by_topic(mongo_collection, topic):
    """Return list of schools that contain a topic"""
    return list(mongo_collection.find({"topics": topic}))
