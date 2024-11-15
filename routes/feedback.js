import { createAdmin, createAlumni,createStudent,getAllUsers} from "../controllers/userController.js";
import { createCompany ,getCompanies} from "../controllers/companyController.js"
import { createReview,getAllReviews } from "../controllers/reviewController.js";
import { likeReviews } from "../controllers/likesContoller.js";
import expres from "express"
import { isAdmine } from "../middleware/middleware.js";

const router =expres.Router();

router.post("/admin/create",createAdmin);
router.post("/alumni/create",createAlumni);
router.post("/student/create",createStudent);
router.post("/company/create",isAdmine ,createCompany);
router.post("/review/create",createReview);
router.post("/like/add",likeReviews);

router.get("/user/get",getAllUsers);
router.get("/company/get",getCompanies);
router.get("/review/get",getAllReviews);


export default router;