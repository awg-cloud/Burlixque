import jwt
from datetime import datetime, timedelta
from fastapi import Depends, HTTPException, status
from .schemas import TokenData
from jose import JWTError, jwt
from fastapi.security import OAuth2PasswordBearer
from . database import get_db
from sqlalchemy.orm import Session
from . import models
from . config import settings

SECRET_KEY = settings.secret_key
ALGORITHM = settings.algorithm
EXPIRE_MINUTES = settings.expire_minutes

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

def create_access_token(data: dict):
  
  to_encode = data.copy()
  
  expire_minutes = datetime.utcnow() + timedelta(minutes=EXPIRE_MINUTES)

  to_encode.update({"exp": expire_minutes})

  encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
  return encoded_jwt

def verify_access_token(token: str, credential_exception):

  try:
    payload = jwt.decode(token, SECRET_KEY, algorithms=['HS256'])

    id: str = payload.get("user_id")
    if not id:
      raise credential_exception
    
    token_data = TokenData(id=id)
  
  except JWTError:
    raise credential_exception

  return token_data

def get_current_user(token:str = Depends(oauth2_scheme), db: Session = Depends(get_db)):

  credential_exception = HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=
                                       "unable to validate credentials", headers={"WWW-AUTHENTICATE":"Bearer"})
  
  #user = db.query(models.Users).filter(models.Users.email).first()

  return verify_access_token(token, credential_exception)