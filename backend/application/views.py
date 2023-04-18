
import json
import bcrypt
from flask_bcrypt import Bcrypt
from application import app
from bson import  ObjectId
from flask import Response
from flask import request
from flask_pymongo import PyMongo
from flask import jsonify
from pymongo import MongoClient
import pickle
import bson.json_util as json_util
from werkzeug.security import check_password_hash
mongo_reg=PyMongo(app,uri='mongodb://localhost:27017/test')
db= mongo_reg.db
# client = MongoClient('mongodb://localhost:27017/test')
# db = client['mydatabase']
# class CustomEncoder(json.JSONEncoder):
#     def default(self, o):
#         if isinstance(o, user_info):
#             return {'attribute1': o.attribute1, 'attribute2': o.attribute2}
#         return super().default(o)
bcrypt = Bcrypt()
@app.route('/login',methods=['POST','GET'])
def login():   
  if request.method=='POST':
    # fn=request.form.get("Firstname")
    # ln=request.form.get("lname")
    # e=request.form.get("email")
    # p=request.form.get("pno")
        
    # print(fn)
    # db.userinfo.insert_many([{
    #     'fname':fn,'lname':ln,'email':e,'phone':p
    # }])
#     print(data)
    # data = request.json
    # print(data)
    # collection = db['users']
    # collection.insert_one(data)
    # return jsonify({'message': 'User registered successfully'})  
    data = request.get_json()
    fname = data["Firstname"]
    lname = data["Lastname"]
    email = data["Email"]
    passw = bcrypt.generate_password_hash(data["Passw"].encode('utf-8'))
    # cpass=data["Cpass"]
    user = {"fname": fname, "lname": lname, "email": email, "Password": passw}
    print(user)
    db.data.insert_one(user)
    return {"message": "User registered successfully"}
    # return {
    #     'message':'hello'
    # }
# @app.route('/check',methods=['POST','GET'])
# def check():
#   user_info = list(db.data.find())
#   user_info_json = json.dumps(user_info, default=str)
#   return Response(user_info_json, mimetype='application/json')
@app.route('/check',methods=['POST','GET'])

def check():
  if request.method=='POST':
    data = request.get_json()
    email = data["Email"]
    passw=data["Password"]
    # passw = bcrypt.hashpw((data["Password"]).encode('utf-8'),bcrypt.gensalt())

    user ={"email":email,"password":passw}
    print(user)
    user1 = db.data.find_one({'email': email})
    print(user1)
    # return  {"message": "User registered successfully"}
  if user1:
      # check if the password matches the hashed password in the database
      if bcrypt.check_password_hash(user1['Password'].decode('utf-8'), passw):
      # if bcrypt.checkpw(user1['Password'].encode('utf-8'), passw):
          return Response('Valid credendtials')
      else:
          return Response('inValid credendtials')
      # else:
      # return jsonify({'message': 'User does not exist'})
    # if(bcrypt.check_password_hash(user1['Password'].decode('utf-8'), passw)):
    #   return Response('Valid credendtials')
    # else :
    #   return Response('Invalid credendtials')
@app.route('/admincheck',methods=['POST','GET'])
def admincheck():
  if request.method=='POST':
    data = request.get_json()
    email = data["Email"]
    passw=data["Password"]
    user ={"email":email,"password":passw}
    # print(user)
    user1 = db.admin.find_one({'email': email})
    # print(user1)
    # return Response('Valid credendtials')
    if user1:
      if(passw==user1['Password']):
        return Response('Valid credendtials')
      #   print(user1)
      #   return Response((json.dumps(user1, default=str)),mimetype='application/json')
      else:
        return Response('Invalid credendtials')




