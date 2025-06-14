from sqlalchemy import select, and_, or_
from sqlalchemy.orm import Session
from sqlalchemy.exc import SQLAlchemyError
from models import Song

class SongRepository:
    def __init__(self, db: Session):
        self.db = db

    def create_review(self, song: Song):
        new_song = Song(**song.dict())
        try:
            self.db.add(new_song)
            self.db.commit()
            self.db.refresh(new_song)
            return new_song
        except SQLAlchemyError as e:
            raise RuntimeError("Database insert failed") from e

    def get_songs(self, search: str | None = None, genre: str | None = None):
        try:
            songs = select(Song)
            if search:
                songs = songs.where(or_(Song.title.ilike(f'%{search}%'), Song.artist.ilike(f'%{search}%')))
            if genre:
                songs = songs.where(Song.genre == genre)
            return self.db.execute(songs).scalars().all()
        except SQLAlchemyError as e:
            raise RuntimeError("Database query failed") from e
