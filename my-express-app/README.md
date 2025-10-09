# My Express App

This is a simple Express server application scaffolded to run on port 8001. 

## Project Structure

```
my-express-app
├── src
│   └── app.js          # Entry point of the application
├── package.json        # Configuration file for npm
├── yarn.lock           # Dependency lock file
├── Dockerfile          # Docker configuration for the application
├── .gitignore          # Files and directories to ignore in Git
└── README.md           # Project documentation
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd my-express-app
   ```

2. **Install dependencies:**
   ```
   yarn install
   ```

3. **Run the server:**
   ```
   yarn start
   ```

The server will start and listen on port 8001.

## Docker

To build and run the application using Docker, use the following commands:

1. **Build the Docker image:**
   ```
   docker build -t my-express-app .
   ```

2. **Run the Docker container:**
   ```
   docker run -p 8001:8001 my-express-app
   ```

The application will be accessible at `http://localhost:8001`.

## License

This project is licensed under the MIT License.