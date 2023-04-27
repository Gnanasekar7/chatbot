
# import jwt
# import bcrypt
# from flask_bcrypt import Bcrypt
# from application import app
# from flask import Response,request,make_response,jsonify
# from datetime import datetime,timedelta
# from flask_pymongo import PyMongo
# from functools import wraps
# from flask_jwt_extended import jwt_required,create_access_token

# mongo_reg=PyMongo(app,uri='mongodb://localhost:27017/test')
# db= mongo_reg.db

# bcrypt = Bcrypt()




# @app.route('/login',methods=['POST','GET'])
# def login():   
#   if request.method=='POST':
#     data = request.get_json()
#     fname = data["Firstname"]
#     lname = data["Lastname"]
#     email = data["Email"]
#     passw = bcrypt.generate_password_hash(data["Passw"].encode('utf-8'))
#     # cpass=data["Cpass"]
#     user = {"fname": fname, "lname": lname, "email": email, "Password": passw}
#     print(user)
#     db.data.insert_one(user)
#     return {"message": "User registered successfully"}



import jwt
import bcrypt
from flask_bcrypt import Bcrypt
from application import app
from flask import Response, request, make_response, jsonify
from datetime import datetime, timedelta
from flask_pymongo import PyMongo
from functools import wraps
from flask_jwt_extended import jwt_required, create_access_token
from marshmallow import Schema, fields, validate, ValidationError

mongo_reg = PyMongo(app, uri='mongodb://localhost:27017/test')
db = mongo_reg.db
bcrypt = Bcrypt()


# Define a schema for the User model
class UserSchema(Schema):
    Firstname = fields.Str(required=True)
    Lastname = fields.Str(required=True)
    Email = fields.Email(required=True)
    Passw = fields.Str(required=True, validate=validate.Length(min=8, max=15))
    Cpass = fields.Str(required=True, validate=validate.Length(min=8, max=15))


# Create an instance of the User schema
user_schema = UserSchema()


@app.route('/Register', methods=['POST'])
def register():
    try:
        # Validate the input data against the User schema
        f=request.get_json()
        # print(f)
        # print(user_schema.load(request.get_json()))
        data = user_schema.load(request.get_json())
        print(data)
        # Check if the email is already registered
        if db.users.find_one({'email': data['Email']}):
            return {'message': 'Email already registered'}

        # Check if the passwords match
        if data['Passw'] != data['Cpass']:
            return {'message': 'Passwords do not match'}

        # Hash the password
        hashed_password = bcrypt.generate_password_hash(data['Passw'].encode('utf-8'))

        # Save the user to the database
        user = {
            'firstname': data['Firstname'],
            'lastname': data['Lastname'],
            'email': data['Email'],
            'password': hashed_password
        }
        db.users.insert_one(user)

        # Return a success message
        # response = jsonify({'message': 'Login successful'},'ok')
        # response.headers['Authorization'] = f'Bearer {token}'
        # response.headers.add('Access-Control-Allow-Origin', '  *')
        # response.headers.add('Access-Control-Allow-Headers', 'Authorization')
        # response.headers.add('Access-Control-Allow-Methods', '*')
        # response.headers.add('Access-Control-Check', 'ok')
        # response.headers.add('HTTP status', 'ok')
        # print(response)
        # return response,200
        return {'message': 'User registered successfully'}


    except ValidationError as error:
        # Return an error message if the input data does not match the schema
        return {'message': error.messages}, 400


@app.route('/login', methods=['POST'])

def check():
  if request.method=='POST':
    data = request.get_json()
    email = data["Email"]
    passw=data["Password"]
    user ={"email":email,"password":passw}
    # print(user)
    user1 = db.data.find_one({'email': email})
    # print(user1)
  if user1:
      # check if the password matches the hashed password in the database
    if bcrypt.check_password_hash(user1['Password'].decode('utf-8'), passw):

      # return Response('Valid credendtials')
      # token=jwt.encode({'user':user1['email'], 'exp':datetime.utcnow()+timedelta(minutes=30)}, app.config['SECRET_KEY'])
      # return jsonify({'token':token}) 
      # additional= {"pass":user1['Password']}
      token=create_access_token(identity=user1['email'], expires_delta=timedelta(seconds=10))
      print(token)
      # return jsonify(access_token=token)
      # return Response.access_control_allow_headers('*')
      response = jsonify({'message': 'Login successful'})
      response.headers['Authorization'] = f'Bearer {token}'
      response.headers.add('Access-Control-Allow-Origin', '  *')
      print(response)
      return response
    else:
       return Response('InValid credendtials')
      
@app.route('/admincheck',methods=['POST','GET'])
def admincheck():
  if request.method=='POST':
    data = request.get_json()
    email = data["Email"]
    passw=data["Password"]
    # user ={"email":email,"password":passw}
    # print(user)
    user1 = db.admin.find_one({'email': email})
    # print(user1)
    # return Response('Valid credendtials')
    if user1:
      if(passw==user1['Password']):
        token=create_access_token(identity=user1['email'], expires_delta=timedelta(seconds=10))
        print(token)
        # return Response('Valid credendtials')
      #   print(user1)
      #   return Response((json.dumps(user1, default=str)),mimetype='application/json')
        response = jsonify({'message': 'Valid credendtials'})
        response.headers['Authorization'] = f'Bearer {token}'
        response.headers.add('Access-Control-Allow-Origin', '  *')
        response.headers.add('Access-Control-Allow-Headers', 'Authorization')
        print(response)
        return response
      else:
        return Response('Invalid credendtials')
@app.route('/protected-user',methods=['POST','GET'])
def protecteduser():
     auth_header = request.headers.get('Authorization')
     if auth_header:
      return jsonify({'message': 'Token is valid'})
@app.route('/protected-admin',methods=['POST','GET'])
def protectedadmin():
     auth_header = request.headers.get('Authorization')
     if auth_header:
      return jsonify({'message': 'Token is valid'})


