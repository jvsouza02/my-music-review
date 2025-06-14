from sqlalchemy.orm import Session
from models import Song

class SongRepository:
    def __init__(self, db: Session):
        self.db = db

    def get_songs(self, search, genre):
        return self.db.query(Song).filter(
            (Song.title.ilike(f"%{search}%")) | (Song.artist.ilike(f"%{search}%")),
            Song.genre.ilike(f"%{genre}%")
        ).all()