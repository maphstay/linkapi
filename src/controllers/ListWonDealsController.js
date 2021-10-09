import axios from "axios";

class ListWonDealsController {
  async getWonDeals() {
    try {
      const response = await axios.get(
        `${process.env.PIPEDRIVE_URL_API}/deals?&status=won&start=0&api_token=${process.env.PIPEDRIVE_API_TOKEN}`
      );
      const { data } = response.data;

      return data;
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
}

export default new ListWonDealsController();
