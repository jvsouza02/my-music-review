from repositories.song_repository import SongRepository

class SongService:
    def __init__(self, db):
        self.song_repository = SongRepository(db)

    def create_review(self, id_song, title, artist, genre, review, rating):
        return self.song_repository.create_review(id_song, title, artist, genre, review, rating)
    
    def update_review(self, id_song, title, artist, genre, review, rating):
        return self.song_repository.update_review(id_song, title, artist, genre, review, rating)
    
    def delete_review(self, id_song):
        return self.song_repository.delete_review(id_song)

    def get_songs(self, search: str, genre: str):
        return self.song_repository.get_songs(search, genre)
    
    def get_all_genres(self):
        return self.song_repository.get_all_genres()
    
