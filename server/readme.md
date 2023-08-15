# Gigih Mid-Term Project (Back-End)

## Database Structure

This project employs a MongoDB database to store data, organized into three main collections: videos, products, and comments. The _videos_ collection stores information about videos, the _products_ collection stores details about products, and the _comments_ collection holds comments related to videos. Here's an overview of the collection structures:

## Features

Mandatory:

- Video Thumbnail List
- Product List
- Comment List
- Submit Comment

Additional:

- Add Video
- Retrieve Video
- Add Product

## Installation and Running the Project

1. Initialize a Node.js project and generate a default package.json file:

```bash
npm init -y
```

2. Install required packages using npm:

```bash
npm i express bcrypt mongoose cors dotenv express nodemon
```

3. To run the program, execute:

```bash
npm start
```

For the second option, add the following command in the package.json file within the `scripts` section:

```
"start": "nodemon index.js"
```

## Environment Variables

Configure the following environment variables:

```bash
DATABASE_URL=mongodb://localhost:27017/tokoplay_db
PORT=5000
```

## How to Use Features

Launch the server, which will run on the specified port (e.g., `localhost:5000`).

### Videos Collection

```
{
  video_title: String,
  video_url: String,
  thumbnail_url: String,
  shop_name: String
}
```

### Products Collection

```
{
  video_id: String,
  name: String,
  price: Number,
  thumbnail_url: String,
  product_link: String
}
```

### Comments Collection

```
{
  video_id: String,
  username: String,
  comment: String,
  timestamp: Date
}
```

## API Structure

The API is built using Node.js and Express.js, providing the following endpoints:

```
GET   /videos
GET   /videos/:id
GET   /videos/:id/product
GET   /videos/:id/comment
POST  /videos
POST  /videos/:id/product
POST  /videos/:id/comment
```

## API Request and Response

### GET /videos

Retrieve all videos from the database.

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response (Code: 200)**

```
{
  data: [
    {
      _id,
      video_title,
      video_url,
      thumbnail_url,
      shop_name
    }
  ]
}
```

### GET /videos/:id

Retrieve videos associated with the specified ID.

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response (Code: 200)**

```
{
  data: [
    {
      _id,
      video_title,
      video_url,
      thumbnail_url,
      shop_name
    }
  ]
}
```

### GET /videos/:id/product

Retrieve all products from the database.

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response (Code: 200)**

```
{
  data: [
    [
      {
        video_id,
        name,
        price,
        thumbnail_produk,
        link_produk
      }
    ]
  ]
}
```

### GET /videos/:id/comment

Retrieve all comments from the database related to a certain video ID.

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response (Code: 200)**

```
{
  data: [
    {
      video_id,
      username,
      comment,
      timestamp
    }
  ]
}
```

### POST /videos

Create a new video.

- **URL Params**  
  None
- **Data Params**

```
{
  video_title: String,
  video_url: String,
  thumbnail_url: String,
  shop_name: String
}
```

- **Headers**  
  Content-Type: application/json
- **Success Response (Code: 201)**

```
{
  data: {
    video_title,
    video_url,
    thumbnail_url,
    shop_name
  }
}
```

### POST /videos/:id/product

Create a new product.

- **URL Params**  
  None
- **Data Params**

```
{
  video_id: String,
  name: String,
  price: Number,
  thumbnail_url: String,
  product_link: String
}
```

- **Headers**  
  Content-Type: application/json
- **Success Response (Code: 201)**

```
{
  data: {
    name,
    price,
    link_produk
  }
}
```

### POST /videos/:id/comment

Create a new comment.

- **URL Params**  
  None
- **Data Params**

```
{
  video_id: String,
  username: String,
  comment: String,
  timestamp: Date
}
```

- **Headers**  
  Content-Type: application/json
- **Success Response (Code: 201)**

```
{
  data: {
    video_id,
    username,
    comment,
    timestamp
  }
}
```
