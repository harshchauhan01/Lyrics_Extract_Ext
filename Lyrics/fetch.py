import requests
from bs4 import BeautifulSoup
import json

song=""
artist=""
artist=input()
song=input()

def add_song_data(artist, title, lyrics):
    song_data = {
        "artist": artist,
        "title": title,
        "lyrics": lyrics
    }
    try:
        with open('result.json', 'r') as file:
            
            try:
                data = json.load(file)
            except json.JSONDecodeError:
            
                print("Warning: result.json is invalid or empty. Starting fresh.")
                data = {"songs": []}
    except FileNotFoundError:
        
        data = {"songs": []}
    
    
    data['songs'].append(song_data)
    
    
    with open('result.json', 'w') as file:
        json.dump(data, file, indent=4)
    print("Song data added successfully!")


def fetchlyrics(song,artist):

    output = ""
    url = f"https://genius.com/{artist}-{song}-lyrics"
    print(url)
    
    resp = requests.get(url)
    
    if resp.status_code == 200:
        soup = BeautifulSoup(resp.content, 'html.parser')
        
        
        heading = soup.find_all('div', class_='Lyrics__Container-sc-1ynbvzw-1')

        for element in heading:
        
            lyrics_text = element.get_text(separator='\n', strip=True)
            
        
            lyrics_text = lyrics_text.replace('<br>', '\n')
            
            output += lyrics_text + "\n"
        add_song_data(artist,song,output)
        
    else:
        print("Failed")
        output= "failed"
    return output
    
fetchlyrics(song,artist)


