import pandas as pd
from pymongo import MongoClient

# MongoDB connection details
mongo_uri = "mongodb+srv://saivamsi:xaERhJaqrfeWcoNn@cluster0.er7cxlv.mongodb.net/sample_mflix?retryWrites=true&w=majority"
db_name = "sample_mflix"
collection_name = "zomato"
csv_file_path = r"D:\Zomato\zomato\flask\zomato.csv"  # Use raw string for Windows file path

try:
    # Read CSV file into a DataFrame
    df = pd.read_csv(csv_file_path)

    # Convert DataFrame to dictionary
    data = df.to_dict(orient='records')

    # Connect to MongoDB
    client = MongoClient(mongo_uri)
    db = client[db_name]
    collection = db[collection_name]

    # Insert data into MongoDB collection
    result = collection.insert_many(data)

    print(f"Inserted {len(result.inserted_ids)} documents into the {collection_name} collection.")

except Exception as e:
    print(f"An error occurred: {e}")
