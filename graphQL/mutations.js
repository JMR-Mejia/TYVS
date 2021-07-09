const StatsService = require("../services/stats");

const statsService = new StatsService();

module.exports = {
  createStat: async (root, { input }) => {
    let inputArray = [
      input.video_id,
      input.trending_date,
      input.title,
      input.channel_title,
      input.category_id,
      input.publish_time,
      input.tags,
      input.views,
      input.likes,
      input.comment_count,
      input.thumbnail_link,
      input.comments_disabled,
      input.ratings_disabled,
      input.video_error_or_removed,
      input.description,
      input.dislikes,
    ];
    try {
      const Id = await statsService.createStat(inputArray);
      return Id;
    } catch (error) {
      console.error(error);
    }
  },
  deleteStat: async (root, { id }) => {
    try {
      const Id = await statsService.removeStat(id);
      return Id;
    } catch (error) {
      console.error(error);
    }
  },
};
