from fastapi import FastAPI, Depends, Body, Query, Path, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import Optional, Annotated, List
from database import get_db
from services.song_service import SongService

app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,      
    allow_credentials=True,      
    allow_methods=["*"],          
    allow_headers=["*"],          
)

class Song(BaseModel):
    title: Annotated[str, Field(..., min_length=1, max_length=100)]
    artist: Annotated[str, Field(..., min_length=2, max_length=100)]
    genre: Annotated[str, Field(..., min_length=2, max_length=100)]
    review: Annotated[Optional[str], Field(max_length=100)] = None
    rating: Annotated[float, Field(..., ge=0, le=10)]

class SongsOut(BaseModel):
    id_song: int
    title: str
    artist: str
    genre: str
    review: str
    rating: float

    class Config:
        orm_mode = True

class SongUpdate(BaseModel):
    title: Optional[str] = None
    artist: Optional[str] = None
    genre: Optional[str] = None
    review: Optional[str] = None
    rating: Optional[float] = None

def validate_review_lenght(review: str):
    if review and len(review) < 2 and len(review) > 63:
        raise ValueError("Review must be at least 2 and at most 63 characters long.")

@app.post('/song/')
def create_review(song: Annotated[Song, Body(..., Depends=[validate_review_lenght], title="Create and review song", description="Method used to create and review song at the same time", )], db = Depends(get_db)):
    song_service = SongService(db)
    try:
        return song_service.create_review(song)
    except ValueError as e:
        HTTPException(status_code=404, detail=str(e))
    except RuntimeError as e:
        HTTPException(status_code=500, detail="Server error. Try again.")

@app.get('/songs', response_model=List[SongsOut])
def get_songs(search: Annotated[str, Query(max_length=60)] = None, genre: Annotated[str, Query(...)] = None, db = Depends(get_db)):
    song_service = SongService(db)
    try:
        return song_service.get_songs(search, genre)
    except ValueError as e:
        HTTPException(status_code=404, detail=str(e))
    except RuntimeError as e:
        HTTPException(status_code=500, detail="Server error. Try to reload the page.")

@app.delete('/song/{id_song}')
def delete_song(id_song: Annotated[int, Path(..., ge=0)], db = Depends(get_db)):
    song_service = SongService(db)
    try:
        return song_service.delete_song(id_song)
    except ValueError as e:
        HTTPException(status_code=404, detail=str(e))
    except RuntimeError as e:
        HTTPException(status_code=500, detail="Server error. Try again.")

@app.get('/songs/genres')
def get_genres(db = Depends(get_db)):
    song_service = SongService(db)
    try:
        return song_service.get_all_genres()
    except ValueError as e:
        HTTPException(status_code=404, detail=str(e))
    except RuntimeError as e:
        HTTPException(status_code=500, detail="Server error. Try to reload the page.")