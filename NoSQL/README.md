# NoSQL Project - MongoDB & Python (PyMongo)

## 📚 Description

This project introduces NoSQL databases using MongoDB and Python (PyMongo).  
It focuses on understanding how to create, read, update, and delete documents in a MongoDB database, as well as performing basic data analysis using logs.

You will learn how to interact with MongoDB both from the Mongo shell and using Python scripts.

---

## 📦 Project Structure

NoSQL

- 0-list_databases
- 1-use_or_create_database
- 2-insert
- 3-all
- 4-match
- 5-count
- 6-update
- 7-delete
- 8-all.py
- 9-insert_school.py
- 10-update_topics.py
- 11-schools_by_topic.py
- 12-log_stats.py

---

## 🚀 Features

### MongoDB Shell Scripts
- List all databases
- Create or switch databases
- Insert documents
- Query documents
- Filter documents
- Count documents
- Update documents
- Delete documents

### Python (PyMongo)
- Insert documents using `kwargs`
- Retrieve all documents from a collection
- Update specific fields in documents
- Filter documents by topic
- Analyze Nginx logs stored in MongoDB

---

## 📊 Example: Log Statistics Script

The `12-log_stats.py` script analyzes Nginx logs stored in MongoDB:

It displays:
- Total number of logs
- Number of logs per HTTP method:
  - GET
  - POST
  - PUT
  - PATCH
  - DELETE
- Number of requests to `/status`

---

## 🧪 Installation

### Install PyMongo
```bash
pip3 install pymongo==4.8.0
```

---

## Run MongoDB (if needed)
```bash
brew services start mongodb-community
```

### ▶️ Usege Examples

**Run Mongo Shell scripts**
```bash
cat 0-list_databases | mongosh
cat 1-use_or_create_database | mongosh
cat 2-insert | mongosh my_db
```

**Run Python scripts**
```bash
./8-main.py
./9-main.py
./10-main.py
./11-main.py
./12-log_stats.py
```

---

## 📌 Key Concepts Practiced

- CRUD operations in MongoDB
- MongoDB queries and filters
- Working with arrays in documents
- Python integration with MongoDB (PyMongo)
- Real-world log data analysis
