import requests
from bs4 import BeautifulSoup

# Step 1: Make an HTTP GET request to the search page
url = 'https://genius.com/'  # Replace with the actual search URL
song = input()
params = {'q': song}  # Replace 'song name' with the desired search term
response = requests.get(url, params=params)

# Step 2: Check if the request was successful
if response.status_code == 200:
    soup = BeautifulSoup(response.content, 'html.parser')
    
    # Step 3: Find the "Top Result" section
    top_search_section = soup.find('div', 
                                   'search_results_label')
    print(top_search_section)
    # Step 4: Find all song results in the "Top Result" section
    if top_search_section:
        song_cards = top_search_section.find_all('mini-song-card')
        
        # Step 5: Extract details for each song card
        for song_card in song_cards:
            title = song_card.find('div', class_='mini_card-title').get_text(strip=True)
            artist = song_card.find('div', class_='mini_card-subtitle').get_text(strip=True)
            link = song_card.find('a', class_='mini_card')['href']
            
            # Display the extracted details
            print(f"Title: {title}")
            print(f"Artist: {artist}")
            print(f"Link: {link}\n")
    else:
        print("No top search results found.")
else:
    print("Failed to retrieve the webpage. Status code:", response.status_code)
