from application import app
# from flask import Flask
# from flask import request
# from flask_pymongo import PyMongo
# from flask import jsonify
# from pymongo import MongoClient

# client = MongoClient('mongodb://localhost:27017/test')
# db = client['mydatabase']

# app=Flask(__name__)

# @app.route("/login",methods=['POST'])
# def login():   
#     data = jsonify(request.json)
#     print(data)
#     collection = db['users']
#     collection.insert_one(data)
#     return jsonify({'message': 'User registered successfully'})  
if __name__=="__main__":
    app.run (debug=True)