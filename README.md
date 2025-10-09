# Task List Servers

This project contains two server implementations: a FastAPI server in Python and an Express server in Node.js. Both provide endpoints for managing a task list.

## Project Structure

The project includes the following files and directories:

- `python-server/src/main.py`: FastAPI server implementation with endpoints to add and retrieve tasks.
- `python-server/src/__init__.py`: Marks the `src` directory as a Python package.
- `python-server/requirements.txt`: Python dependencies for the FastAPI server.
- `python-server/Dockerfile`: Docker configuration for the Python server.
- `my-express-app/src/app.js`: Express server implementation with the same endpoints as the Python server.
- `my-express-app/package.json`: Configuration and dependencies for the Node.js app.
- `my-express-app/Dockerfile`: Docker configuration for the Node.js server.
- `docker-compose.yml`: Defines and starts both servers as containers.

## Getting Started

To run both servers using Docker:

```sh
docker compose up
```

This command will build the Docker images for both servers and start the containers.

- The FastAPI server will be available at port `8000`.
- The Express server will be available at port `8001`.

## API Endpoints

Both servers provide the following endpoints:

- `GET /`: Returns "Hello World".
- `POST /tasks`: Adds a task to the task list. The request body must contain a `text` field.
- `GET /tasks`: Returns the current task list.

## Notes

- Changes to the Node.js code are automatically reflected thanks to `nodemon`.
- The task list is stored in memory and will reset when the container restarts.
