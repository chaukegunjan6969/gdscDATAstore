const DataStore = require("../model/model");

exports.dataRegister = async (req, res) => {
  const {
    Fullname,
    ProfileUrl,
    Post,
    Instagram,
    Github,
    LinkedIn,
    Teamname,
    Year,
  } = req.body;

  try {
    const addMember = DataStore.create({
      Fullname: Fullname,
      ProfileUrl: ProfileUrl,
      Post: Post,
      Instagram: Instagram,
      Github: Github,
      LinkedIn: LinkedIn,
      Teamname: Teamname,
      Year: Year,
    });
     
    console.log(addMember);
    return res.status(200).json({
      success: true,
      message: "Member Added Successfully",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Member Cannot Added succesfully, please try again later",
    });
  }
};
