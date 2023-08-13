# Gigih Mid-Term Project

## Database Structure

In this project, we use a MongoDB database to store our data. The database has 3 main Collections: videos, products, and comments. the videos collection stores information about videos, the products collection stores information from the list of products, and the comments collection stores comments from a video. The structure of the collections is as follows:

### Videos Collection

```
{
  video_title: String,
  video_url: String,
  thumbnail_url: String,
  shop_name: String,
}
```

### Products Collection

```
{
  video_id: String,
  name: String,
  price: Number,
  thumbnail_url: String,
  product_link: String,
}
```

### Comments Collection

```
{
  video_id: String,
  username: String,
  comment: String,
  timestamp: Date,
}
```

## API Structure

The API is built using Node.js and Express.js. The API supports the following endpoints:

```
GET   /videos
GET   /videos/:id
GET   /videos/:id/product
GET   /videos/:id/comment
POST  /videos/
POST  /videos/:id/product
POST  /videos/:id/comment
```

## API Request and Response

### GET /videos

Returns all videos in the system.

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
  videos:[
                {
                    video_title,
                    video_url,
                    thumbnail_url,
                    shop_name
                }
            ]
}
```
