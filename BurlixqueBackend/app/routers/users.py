from ..database  import get_db
from fastapi import HTTPException, Depends, status, APIRouter
from .. import schemas, models, utils
from sqlalchemy.orm import Session
from ..oauth2 import get_current_user, oauth2_scheme


router = APIRouter(
  prefix="/users"
)

@router.post("/", status_code=status.HTTP_201_CREATED, response_model=schemas.SignupResponse)
def SignUP(user:schemas.SignUp, db: Session = Depends(get_db)):
  hashed_password = utils.hash(user.password)
  user.password = hashed_password

  user_data = user.dict()
  
  existing_user_count = db.query(models.Users).filter(models.Users.email == user.email).count()
  if existing_user_count > 0:
    raise HTTPException(status_code=409, detail="User already exist")

  new_user = models.Users(**user_data)
  db.add(new_user)
  db.commit()
  db.refresh(new_user)

  return new_user

@router.post("/profile/", status_code=status.HTTP_201_CREATED)
def create_profile(user: schemas.Profile, db: Session = Depends(get_db), current_user:
                    int = Depends(get_current_user)):
  
  existing_profile = db.query(models.UserPofile).filter(models.UserPofile.user_id == current_user.id).first()

  if existing_profile:
    raise HTTPException(status_code=status.HTTP_302_FOUND, detail="User profile already exists")

  profile = models.UserPofile(user_id=current_user.id, **user.dict())
  db.add(profile)
  db.commit()
  db.refresh(profile)

  return profile

@router.get("/profile/", response_model=schemas.Profile)
def get_user_profile(db: Session = Depends(get_db), current_user:
                    int = Depends(get_current_user)):

  profile = db.query(models.UserPofile).filter(models.UserPofile.user_id == current_user.id).first()

  if profile == None:
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User profile does not exist")
  
  return profile 

@router.put("/profile/", status_code=status.HTTP_200_OK, response_model=schemas.Profile)
def update_profile(user_profile: schemas.Profile, db: Session = Depends(get_db), current_user:
                    int = Depends(get_current_user)):
  
  query = db.query(models.UserPofile).filter(models.UserPofile.user_id == current_user.id)
  

  if query.first() == None:
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User does not have a profile yet")
  
  query.update(user_profile.dict(), synchronize_session=False)
  db.commit()

  return query.first()

@router.post("/bankdetails", status_code=status.HTTP_201_CREATED)
def create_bankdetails(user: schemas.BankDetails, db: Session = Depends(get_db), current_user:
                    int = Depends(get_current_user)):
  
  bank_details = models.BankDetails(user_id=current_user.id, **user.dict())
  db.add(bank_details)
  db.commit()
  db.refresh(bank_details)

  return bank_details

@router.put("/bankdetails/")
def update_bankdetails(details:schemas.BankDetails, db: Session = Depends(get_db),  current_user:int = Depends(get_current_user)):
  
  query = db.query(models.BankDetails).filter(models.BankDetails.user_id == current_user.id)

  if query.first() == None:
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User does not have bank details saved")
  

  query.update(details.dict(), synchronize_session=False)
  db.commit()

  return query.first()

@router.get("/bankdetails/", response_model=schemas.BankDetails)
def get_bankdetails(db: Session = Depends(get_db), current_user:
                    int = Depends(get_current_user)):

  details = db.query(models.BankDetails).filter(models.BankDetails.user_id == current_user.id).first()

  if details is None:
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User bank details does not exist")
  
  return details 