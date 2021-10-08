import axios from "axios";

class ListAllDealsController {
  async index(req, res) {
    try {
      const response = await axios.get(
        `${process.env.PIPEDRIVE_URL_API}/deals?&api_token=${process.env.PIPEDRIVE_API_TOKEN}`
      );
      return res.status(200).json(response.data);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error" });
    }
  }
}

export default new ListAllDealsController();
