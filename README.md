## Brainflix

Brainflix is a fully responsive full-stack web application that mimics YouTube. This was one of the first React apps that I created while attending the Brainstation Software Engineering bootcamp. Some of the features include being able to select what video you would like to watch, commenting on each video and uploading a video. Initially the project was built using Express and node for the backend but I decided to go back and build a database using MySQL ,Knex, express and node.

![Home Page Screenshot](https://res.cloudinary.com/dui1zm17r/image/upload/v1682915123/Github/Screenshot_2023-05-01_at_4.23.52_PM_adnzwe.png)

## Tech Stack

**Client:** 
HTML5,CSS3,SASS,Javascript,React,NodeJS

[![My Skills](https://skillicons.dev/icons?i=js,html,css,sass,react,nodejs,)](https://skillicons.dev)

**Server:**
NodeJS, Express, MySQL, knex

[![My Skills](https://skillicons.dev/icons?i=nodejs,express,mysql)](https://skillicons.dev)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_USER`
`DB_HOST`
`DB_PASSWORD`
`DB_DATABASE`

## Run Locally

Clone the project

```bash
  git clone git@github.com:David-McCaig/david-mccaig-brainflix-server.git for back end
```

Install dependencies

```bash
  npm install 
```

In server side 
run migration and seed files to set up your database.

```bash
  npx knex migrate:latest 
  npx knex seed:run 
```
Start the server on the server side 

```bash
  npm run dev 
```

Now the app should be live! 

## API Documentation


#### Get all videos

```
  GET /videos
```

#### Get videos by id

```
  GET /videos/:id
```

#### Get selected comments by videos id

```
  GET /videos/:id/comments
```

#### Post a video

```
  Post /videos/upload
```

#### Post a comment

```
  Post /comments/upload
```
