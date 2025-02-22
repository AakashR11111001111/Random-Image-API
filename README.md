## API Endpoint

### Get a Random Image  
**GET** [`https://random-image-api-1-ufo9.onrender.com/photos/random`](https://random-image-api-1-ufo9.onrender.com/photos/random)  

⚠ **Note:** This API is hosted on a free-tier service, so response times may vary. Sometimes it may take a few seconds to load the response. Please be patient! ⏳

#### Example Response  
```json
{
  "id": 1,
  "image_url": "https://example.com/random-image.jpg"
}
```

📌 **Usage:** Make a GET request to `/photos/random` to receive a random image.

### Get a Random Image  
**GET** [`https://random-image-api-1-ufo9.onrender.com/photos/random`](https://random-image-api.onrender.com/images/random)  

⚠ **Note:** This API is hosted on a free-tier service, so response times may vary. Sometimes it may take a few seconds to load the response. Please be patient! ⏳

#### Example Response  
```json
{
  "success": true,
  "message": {
    "id": "p7MXFYxP43Y",
    "description": "A window with a view of a tree outside",
    "image_URL": "https://images.unsplash.com/photo-1739381337576-d14376e305d2?ixid=M3w3MTMyNjF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDAyNDkwMjh8&ixlib=rb-4.0.3"
  }
}
```

## Installation

##### Step 1  
```sh
 git clone https://github.com/AakashR11111001111/Random-Image-API
```

##### Step 2  
```sh
cd <your-folder-name>
```

##### Step 3(Optional)  
```sh
npm install
```

##### Step 4  
```sh
npm start
```

## Usage

#### To get a random image, make a GET request to:  
```sh
http://localhost:2000/photos/random
```

## Technologies Used
- **Node.js** - JavaScript runtime  
- **Express.js** - Web framework for Node.js  

## Contributing

We appreciate contributions from the community! If you would like to contribute, please follow these steps:

### 🛠 How to Contribute  
1. **Fork the Repository** – Click on the "Fork" button at the top-right corner of this repository.  
2. **Clone Your Fork** – Copy the forked repository to your local machine:  
   ```sh
   git clone https://github.com/your-username/repository-name.git
   
