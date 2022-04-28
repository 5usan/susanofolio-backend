import axios from "axios";

const githubLink = "https://api.github.com/users/5usan/repos";

const portfolioController = {
  getRepos: async (req, res) => {
    try {
      const response = await axios.get(githubLink);
      const githubDatas = response.data;
      
      const filteredDetails = githubDatas.map((project, index) => ({
        name: project.name,
        description: project.description,
        dateCreated: new Date(project.created_at).toDateString(),
        link: project.html_url,
      }));
      res
        .status(200)
        .json({ allRepos: filteredDetails, status: 200, success: true });
    } catch (err) {
      res.status(500).json({ error: err.message, status: 500, success: false });
    }
  },
};

export { portfolioController };
