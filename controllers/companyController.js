
import companyModel from "../models/Company.js";

export const createCompany=async (req, res) => {
    try {
      const { name,location,industry,email} = req.body;
      const company = new companyModel({
        name,
        location,
        industry,
        email
        
      });
      const savedcompanyobj=await company.save();
      res.json({
        savedcompanyobj,

        message: "Company created successfully"

      })
    } catch (error) {
      res.json({
          error:"Server error"
      }) 
      console.log(error)
    }
  };
  

  export const getCompanies=async(req,res)=>{
    try {
      const getcompanies=await companyModel.find()
      res.json({
        getcompanies
      })
    } catch (error) {
      res.json({
        error:"Cannot fetch data"
      })
      console.log(error)
    }
  }