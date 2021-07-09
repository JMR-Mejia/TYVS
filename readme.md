#TYVS

A API for to serve the trending data from youtube

## Installation

Before installing, [download and install Node.js](https://nodejs.org/es/download) la version utilizada es la v14.

Installation is done using the `npm install` command:

```bash
$ npm install
```

this will instal all dependencies for your execute.

### Quick Start

write your variable of environment.

- **PORT**: the port where the server will run

Database with postgres:
- **PGHOST**: the host of Database in default is 'localhost'
- **PGUSER**: the user of Database
- **PGDATABASE**: the name of the Database
- **PGPASSWORD**: the password of the Database
- **PGPORT**: the port of the Database

After installing the dependencies run the server:

Start the server in production:

```bash
$ npm run start
```

Start the server in development:

```bash
$ npm run dev
```

## Example Code Fragment for GraphQL

### Query

```
{
  getStats {
    id
    video_id
    tags
    trending_date
    title
    channel_title
    category_id
    publish_time
    views
    likes
    comment_count
    thumbnail_link
    comments_disabled
    ratings_disabled
    video_error_or_removed
    description
    dislikes
  }
}
```

### Mutation

```
mutation {
  createStat(input: {
    video_id: "video_id"
    tags: "tags"
    trending_date: "fecha"
    title: "titulo"
    channel_title: "titulo canal"
    category_id: 21
    publish_time: "2021-07-08"
    views: 100
    likes: 100
    comment_count: 100
    thumbnail_link: "link"
    comments_disabled: false
    ratings_disabled: false 
    video_error_or_removed: false
    description: "description"
    dislikes: 100
  })
}
```

To be able to manipulate the API graphically [here](http://tyvs.herokuapp.com/api/graphql-docs) API for apps [here](http://tyvs.herokuapp.com/api/graphql).

## People

The original author is [JMR-Mejia](https://github.com/JMR-Mejia)