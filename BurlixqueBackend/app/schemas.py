from pydantic import BaseModel, EmailStr, field_validator, ValidationInfo
from datetime import datetime, date
from typing import Optional

class SignUp(BaseModel):
  email: EmailStr
  password: str
  confirm_password: str

  @field_validator("confirm_password")
  def passwords_match(cls, v: str, info: ValidationInfo) -> str:
    if "password" in info.data and v != info.data["password"]:
        raise ValueError("passwords do not match")
    return v

class SignupResponse(BaseModel):
  email: EmailStr
  
class Profile(BaseModel):
  full_name: str
  date_of_birth: date
  school: str
  matric_number: str
  username: str
  home_address: str
  course: str
  department: str
  phone_number: str
  socials: str

class BankDetails(BaseModel):
  bankname: str
  act_num: str
  act_name: str

class Login(BaseModel):
  email: EmailStr
  password: str

class TokenData(BaseModel):
   id: int

   