from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
# from datetime import timedelta

app=Flask(__name__)
# CORS(app)
# CORS(app, supports_credentials=True)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
jwt = JWTManager(app)
app.config['SECRET_KEY']='1234567'
# app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta (seconds=10)
from application import views 