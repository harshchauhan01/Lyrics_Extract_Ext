
# Lyrics Extractor Extension
This Extension helps to extract the lyrics of a particular song mostly international songs.


## Deployment

To Use this project 

```bash
  1. Extract this project in your desktop
  2. Compressed it to zip .
  3. Open browser and enable developer mode.
  4. Then click on add package.
  5. Now you are ready to use it.
```


## API Reference

#### Get items

```http
  GET https://api.lyrics.ovh/v1/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `artist` | `string` | **Required**. Artist name |
| `songName` | `string` | **Required**. Song name |

