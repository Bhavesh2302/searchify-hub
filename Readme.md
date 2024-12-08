# Basic Search and Filter of Product
This application is a React-based user interface with a NodeJs based server consisting watches with Search and Filter Functionality.

## Features
- Search 
- Filter
- Pagination

### Technologies Used
- ReactJS for the frontend.
- Tailwind CSS - Open-source UI library for making user interface.
- Redux - Open-source state management library for managing application state.
- MongoDB for storing data and MongoDB Aggregation for Optimization.
- NodeJs and ExpressJs for API development.

### Installation
- Clone the repository
```bash
  git clone https://github.com/Bhavesh2302/searchify-hub.git
  ```

#### For frontend:
- Navigate to the frontend folder
```bash
cd client/
```
- Install dependencies
```bash
npm install
```
- Run the application
```bash
npm start
```
#### For Backend:
- Navigate to the backend folder
```bash
cd server/
```
- Install dependencies
```bash
npm install
```
- Run the application
```bash
npm run dev
```

### API Endpoints

#### Get Content
- Endpoint: /watch/get
- Method: GET
- Description: gets data of content.
- Returns: { content: Array of content of Watches }


### Database
- MongoDB
- watch Schema:
```bash
{
 name:{type: String},
    image:{type: String},
    brand:{type: String},
    category:{type: String},
    price:{type: Number},
    rating:{type:Number},
    suitable_for:{type: String}
}
```

### Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`port` - To run application in local

`mongodburl` - Mongo Atlas URL 

### Deployment
- [frontend](https://watch-hub-mania.netlify.app/)
- [backend](https://searchify-hub-server.onrender.com)