from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import os

app = Flask(__name__)
CORS(app)

# MongoDB connection details
mongo_uri = "mongodb+srv://saivamsi:xaERhJaqrfeWcoNn@cluster0.er7cxlv.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Cluster0"
db_name = "sample_mflix"
collection_name = "zomato"

# Connect to MongoDB
try:
    client = MongoClient(mongo_uri, serverSelectionTimeoutMS=5000)
    db = client[db_name]
    collection = db[collection_name]
    # Fetch all restaurant data from MongoDB and store it in a list
    restaurants = list(collection.find({}, {'_id': False}))
except Exception as e:
    print("Error connecting to MongoDB:", e)
    restaurants = []

@app.route('/restaurants', methods=['GET'])
def get_restaurants():
    if not restaurants:
        return jsonify({"error": "Failed to retrieve data from MongoDB"}), 500
    return jsonify(restaurants[:19])  # Return top 19 restaurants by default

@app.route('/search', methods=['POST'])
def search_restaurants():
    if not restaurants:
        return jsonify({"error": "Failed to retrieve data from MongoDB"}), 500
    return jsonify(restaurants[:19])  # Return top 19 restaurants

@app.route('/filter', methods=['POST'])
def filter_restaurants():
    if not restaurants:
        return jsonify({"error": "Failed to retrieve data from MongoDB"}), 500
    filters = request.json
    print("Received filters:", filters)  # Debugging line

    # Ensure default values for filters
    filters['country'] = filters.get('country', '')
    filters['costMin'] = filters.get('costMin', 0)
    filters['costMax'] = filters.get('costMax', float('inf'))
    filters['cuisine'] = filters.get('cuisine', '')
    filters['rating'] = filters.get('rating', 0)

    filtered_restaurants = [r for r in restaurants if
                            (not filters['country'] or filters['country'].lower() in r.get('Locality Verbose', '').lower()) and
                            (not filters['costMin'] or r.get('Average Cost for two', 0) >= int(filters['costMin'])) and
                            (not filters['costMax'] or r.get('Average Cost for two', 0) <= int(filters['costMax'])) and
                            (not filters['cuisine'] or filters['cuisine'].lower() in r.get('Cuisines', '').lower()) and
                            (not filters['rating'] or r.get('Aggregate rating', 0) >= float(filters['rating']))]
    print("Filtered results:", filtered_restaurants[:19])  # Debugging line
    return jsonify(filtered_restaurants[:19])  # Return top 19 filtered restaurants

@app.route('/restaurant/<int:restaurant_id>', methods=['GET'])
def get_restaurant_by_id(restaurant_id):
    if not restaurants:
        return jsonify({"error": "Failed to retrieve data from MongoDB"}), 500
    
    # Find the restaurant with the given ID
    restaurant = next((r for r in restaurants if r.get('Restaurant ID') == restaurant_id), None)
    
    if restaurant is None:
        return jsonify({"error": "Restaurant not found"}), 404
    
    return jsonify(restaurant)

if __name__ == '__main__':
    app.run(debug=True)
