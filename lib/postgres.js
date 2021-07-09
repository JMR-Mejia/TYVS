const { Client } = require("pg");

const config = require("../config");

class PostgresLib {
  constructor() {
    this.client = new Client({
      user: config.pgUser,
      host: config.pgHost,
      database: config.pgDatabase,
      password: config.pgPassword,
      port: config.pgPort,
    });
    this.client.connect();
  }

  getAll(collection, field, value) {
    const where = `WHERE ${field} = ${value}`;
    return this.client
      .query(`SELECT * FROM ${collection} ${!field || !value ? '' : where}`)
      .then((res) => res.rows)
      .catch((e) => console.error(e.stack));
  }

  get(collection, id) {
    return this.client
      .query(`SELECT * FROM ${collection} WHERE id = ${id}`)
      .then((res) => res.rows[0])
      .catch((e) => console.error(e.stack));
  }

  create(collection, values) {
    return this.client
      .query(
        `INSERT INTO ${collection}(
          video_id,
          trending_date,
          title,
          channel_title,
          category_id,
          publish_time,
          tags,
          views,
          likes,
          comment_count,
          thumbnail_link,
          comments_disabled,
          ratings_disabled,
          video_error_or_removed,
          description,
          dislikes
      ) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) RETURNING *`,
        values
      )
      .then((res) => res.rows[0].id)
      .catch((e) => console.error(e.stack));
  }

  delete(collection, id) {
    return this.client
      .query(`DELETE FROM ${collection} WHERE id = ${id}`)
      .then((res) => {
        if (res.rowCount === 1) {
          return id;
        }
      })
      .catch((e) => console.error(e.stack));
  }
}

module.exports = PostgresLib;
