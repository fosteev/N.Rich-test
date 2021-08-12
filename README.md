# N.Rich-test
Test app for N.Rich

### Backend

#### Docker build backend

``
docker build -t n.rich-test-backend:current .
``

#### Docker run backend

``
docker run -p 3001:3000 --restart=always --name n.rich-test-backend -d n.rich-test-backend:current
``


### Frontend

``
docker build -t n.rich-test-frontend:current .
``

#### Docker run backend

``
docker run -p 3000:80 --restart=always --name n.rich-test-frontend -d n.rich-test-frontend:current
``