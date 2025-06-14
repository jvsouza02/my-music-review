from sqlalchemy import Column, Integer, String, Float
from database import Base

class Song(Base):
    __tablename__ = "songs"

    id_song = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    artist = Column(String, index=True)
    genre = Column(String, index=True)
    review = Column(String, index=True)
    rating = Column(Float, index=True)