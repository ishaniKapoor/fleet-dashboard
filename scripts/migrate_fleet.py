import json
from pymongo import MongoClient

with open('../data/fleet-data.json', 'r', encoding='utf-8') as file:
    data = json.load(file)

uri="mongodb+srv://ishanikaps_db_user:<db_password>@fleetnodeproject.ccurbbt.mongodb.net/?retryWrites=true&w=majority"

try:
    client = MongoClient(uri)
    db = client["Fleet"]
    collection = db["fleets"]

    client.admin.command('ping')
    print("Pinged your deployment. Successfully connected to mongoDB!")

    test_doc = data
    result = collection.insert_one(test_doc)
    print(f"Inserted doc id: {result.inserted_id}")
except Exception as e:
    print(f"Connection failed: {e}")
finally:
    client.close()