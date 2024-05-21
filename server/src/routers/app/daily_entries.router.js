import { Router } from "express";
import { auth } from "../../middleware/auth.middleware.js";
import { getGridDailyEntries } from "../../controllers/app/daily_entries.controllers.js";
const router=Router();

router.route('/getGridDailyEntries').post(auth,getGridDailyEntries)

export default router;

