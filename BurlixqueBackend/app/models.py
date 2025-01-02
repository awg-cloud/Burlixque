from .database import Base
from sqlalchemy import Column, Integer, String, Boolean, DateTime,ForeignKey
from sqlalchemy.sql.sqltypes import TIMESTAMP
from sqlalchemy.sql.expression import text 


class Users(Base):
  __tablename__ = "users"
  id = Column(Integer, primary_key=True, index=True, nullable=False)
  email = Column(String, nullable=False, unique=True)
  password = Column(String, nullable=False)
  created_at = Column(TIMESTAMP(timezone=True), server_default=text("now()"), nullable=False)

class UserPofile(Base):
  __tablename__ = "profile"
  id = Column(Integer, primary_key=True, index=True, nullable=False)
  full_name = Column(String, nullable=False)
  date_of_birth = Column(DateTime, nullable=False)
  school = Column(String, nullable=False)
  matric_number = Column(String, nullable=False)
  username = Column(String, nullable=False)
  home_address = Column(String, nullable=False)
  course = Column(String, nullable=False)
  department = Column(String, nullable=False)
  phone_number = Column(String, nullable=False)
  socials = Column(String, nullable=False)
  user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
  created_at = Column(TIMESTAMP(timezone=True), server_default=text("now()"), nullable=False)

class BankDetails(Base):
  __tablename__ = "Bank Details"
  id = Column(Integer, primary_key=True, index=True, nullable=False)
  bankname = Column(String, nullable=False)
  act_num = Column(String, nullable=False)
  act_name =Column(String, nullable=False)
  user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
  created_at = Column(TIMESTAMP(timezone=True), server_default=text("now()"), nullable=False)