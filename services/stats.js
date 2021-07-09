const PostgresLib = require("../lib/postgres");

class StatsService {
  constructor() {
    this.collection = "stats";
    this.postgresDB = new PostgresLib();
  }

  async getStats(field, value) {
    const movies = await this.postgresDB.getAll(this.collection, field, value);

    return movies || [];
  }

  async getStat(id) {
    const movie = await this.postgresDB.get(this.collection, id);

    return movie || null;
  }

  // ['video_id', 'fecha', 'titulo', 'titulo canal', 21, new date(), 'tags', 100, 100, 100, 'link', false, false, false, 'description', 100]
  async createStat(values) {
    const movieId = await this.postgresDB.create(this.collection, values);
    return movieId || null;
  }

  async removeStat(id) {
    const movieId = await this.postgresDB.delete(this.collection, id);
    return movieId || null;
  }
}

module.exports = StatsService;
