from fastapi import FastAPI, Depends
from fastapi_login import LoginManager
from fastapi.security import OAuth2PasswordRequestForm
from fastapi_login.exceptions import InvalidCredentialsException
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

SECRET = "your-secret-key"
manager = LoginManager(SECRET, token_url='/api/token')

fake_db = {'luzao': {'password': '1018'}}


@manager.user_loader()
def load_user(email: str):  # could also be an asynchronous function
    user = fake_db.get(email)
    return user


# the python-multipart package is required to use the OAuth2PasswordRequestForm
@app.post('/api/token')
def login(data: OAuth2PasswordRequestForm = Depends()):
    print(data.username)
    print(data.password)
    email = data.username
    password = data.password

    # we are using the same function to retrieve the user
    user = load_user(email)
    if not user:
        raise InvalidCredentialsException  # you can also use your own HTTPException
    elif password != user['password']:
        raise InvalidCredentialsException

    access_token = manager.create_access_token(
        data=dict(sub=email)
    )
    return {'access_token': access_token, 'token_type': 'bearer'}


# login required
@app.get('/api/data')
def protected_route(user=Depends(manager)):
    return {'hey': 'mrlove'}


@app.get('/')
def index():
    return {'lover': 'minuo'}
