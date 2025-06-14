from repositories.song_repository import SongRepository
from domains.song import Song

class SongService:
    def __init__(self, db):
        self.song_repository = SongRepository(db)

    def create_review(self, song: Song):
        return self.song_repository.create_review(song)
    
    def get_song(self, id_song: int):
        return self.song_repository.get_song(id_song)
    
    def update_review(self, song: Song):
        return self.song_repository.update_review(song)
    
    def delete_review(self, id_song: int):
        return self.song_repository.delete_review(id_song)

    def get_songs(self, search: str, genre: str):
        return self.song_repository.get_songs(search, genre)
    
    def get_all_genres(self):
        return self.song_repository.get_all_genres()
    
