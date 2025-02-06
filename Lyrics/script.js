async function fetchLyrics() {
  const artist = document.getElementById('artist').value;
  const songTitle = document.getElementById('songTitle').value;
  const url = `https://api.lyrics.ovh/v1/${artist}/${songTitle}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Lyrics not found');
    }
    const data = await response.json();
    document.getElementById('lyricsDisplay').textContent = data.lyrics;
  } catch (error) {
    try {
      const resultResponse = await fetch('result.json');
      if (!resultResponse.ok) {
        throw new Error('Local lyrics file not found');
      }
      const resultData = await resultResponse.json();
      const song = resultData.songs.find(
        (item) => item.title.toLowerCase() === songTitle.toLowerCase()
      );
      
      if (song && song.lyrics) {
        document.getElementById('lyricsDisplay').textContent = song.lyrics;
      } else {
        document.getElementById('lyricsDisplay').textContent = 'Lyrics not found';
      }
    } catch (jsonError) {
      document.getElementById('lyricsDisplay').textContent = `Error: ${jsonError.message}`;
    }
  }
}

document.getElementById('fetchLyricsButton').addEventListener('click', fetchLyrics);


