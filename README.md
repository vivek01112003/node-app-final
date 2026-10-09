Node.js To-Do REST API with Docker
Project Overview

A Node.js REST API built using Express.js to manage To-Do tasks. The application uses JSON file storage and Docker for containerization, with Docker Compose for deployment and persistent data storage.

Technologies Used
Node.js 20
Express.js
Docker
Docker Compose
Bash Scripting
Linux
Git and GitHub
Features
Create, retrieve, and delete To-Do tasks.
REST API using Express.js.
JSON file-based data storage.
Docker image creation and containerization.
Docker Compose service management.
Persistent storage using Docker volumes.
Automated deployment using Bash scripting.
Automatic container restart configuration.
Project Structure
node-app-todo/
├── app.js
├── package.json
├── package-lock.json
├── Dockerfile
├── docker-compose.yml
├── deploy.sh
└── README.md

API Endpoints
Method	Endpoint	Description
GET	/	Check application status
GET	/todos	Retrieve all tasks
POST	/todos	Create a new task
DELETE	/todos/:id	Delete a task by ID
Run Locally

Install dependencies:

npm install


Start the application:

npm start


Access the API at http://localhost:3000.

Run with Docker

Build the Docker image:

docker build -t node-todo-app .


Run the container:

docker run -d \
  --name node-todo-app \
  -p 3000:3000 \
  -v todo-data:/app/data \
  --restart unless-stopped \
  node-todo-app

Run with Docker Compose

Build and start the application:

docker compose up -d --build


Check container status:

docker compose ps


View application logs:

docker compose logs -f todo-app


Stop the application:

docker compose down


The named Docker volume preserves task data when containers are recreated, as long as the volume is not deleted.

Test the API

Check application status:

curl http://localhost:3000/


Retrieve all tasks:

curl http://localhost:3000/todos


Create a task:

curl -X POST http://localhost:3000/todos \
  -H "Content-Type: application/json" \
  -d '{"task":"Learn Docker"}'

Deployment Automation

The deploy.sh script automates Docker image building, replacement of the existing container, and application startup.

Run the script:

chmod +x deploy.sh
./deploy.sh


The script deploys the application locally on the machine running Docker.

Cloud Engineering Skills Demonstrated
Docker image creation and containerization.
Docker Compose orchestration.
Persistent storage using Docker volumes.
Port mapping and container lifecycle management.
Bash scripting and deployment automation.
Linux commands and application log troubleshooting.
Git and GitHub version control.
Future Enhancements
Deploy the application on AWS EC2.
Configure secure network access.
Add automated testing and input validation.
Implement CI/CD using GitHub Actions.
Add monitoring and centralized logging.
Author
Vivek Sanadi - Cloud Engineer
Your Name

Aspiring Cloud Engineer | Linux | Docker | AWS Fundamentals | Node.js
