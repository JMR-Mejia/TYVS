const StatsService = require("../services/stats");

const statsService = new StatsService();

module.exports = {
  getStats: async () => {
    try {
      const stats = await statsService.getStats();
      return stats;
    } catch (error) {
      console.error(error);
    }
  },
  getStat: async (root, {id}) => {
    try {
      const stat = await statsService.getStat(id);
      return stat;
    } catch (error) {
      console.error(error);
    }
  },
};
