# Gigih Mid-Term Project (back-end)

## Database Structure

In this project, we use a MongoDB database to store our data. The database has 3 main Collections: videos, products, and comments. the videos collection stores information about videos, the products collection stores information from the list of products, and the comments collection stores comments from a video. The structure of the collections is as follows:

## Features

Required:

- Video Thumbnail List
- Product List
- Comment List
- Submit Comment

Additional:

- Insert video
- Get videos
- Get a video
- Insert product
- Get products
- Insert comment
- Get commments

## How to install & run project

Initialize a Node.js project and generates a package.json file with default values.

```bash
npm init -y
```

Use `npm` to install packages needed

```bash
npm i express bcrypt mongoose cors dotenv express nodemon
```

To run the program :

```bash
npm start
```

The second option required this command in package.json, inside the `scripts`:

```bash
"start": "nodemon index.js"
```

## Environment Variables

```bash
DATABASE_URL=mongodb://localhost:27017/tokoplay_db
PORT=5000
```

## How to run features

The server should start running on the specified port (e.g., `localhost:5000`).

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
POST  /videos
POST  /videos/:id/product
POST  /videos/:id/comment
```

## API Request and Response

### GET /videos

Returns all videos from the database.

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200
- **Content:**

```
{
  data:[
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

---

Return videos associated with the specified id.

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

### GET /videos/:id/products

---

Return all product from databases.

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

---

Return all comments from databases in certain videos id.

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
  data: [
    {
      video_id,
      username,
      comment,
      timestamp,
    }
  ]
}
```

### POST /videos

---

Creates a new video.

- **URL Params**  
  None
- **Data Params**
  ```
  {
    video_title: String,
    video_url: String,
    thumbnail_url: String,
    shop_name: String,
  }
  ```
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 201  
  **Content:**

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

### POST /videos/:id/products

---

Creates a new product.

- **URL Params**  
  None
- **Data Params**
  ```
  {
    video_id: String,
    name: String,
    price: Number,
    thumbnail_url: String,
    product_link: String,
  }
  ```
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 201  
  **Content:**

```
{
  data: {
    name,
    price,
    link_produk
  }
}
```

### POST /videos/:id/comments

---

Creates a new comment.

- **URL Params**  
  None
- **Data Params**
  ```
  {
    video_id: String,
    username: String,
    comment: String,
    timestamp: Date,
  }
  ```
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 201  
  **Content:**

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
