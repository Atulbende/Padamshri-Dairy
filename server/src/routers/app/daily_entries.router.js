import { Router } from "express";
import { auth } from "../../middleware/auth.middleware.js";
import { getGridDailyEntries,DailyEntriesSave ,DailyEntriesDelete} from "../../controllers/app/daily_entries.controllers.js";
const router=Router();

router.route('/getGridDailyEntries').post(auth,getGridDailyEntries);
router.route('/dailyEntriesSave').post(auth,DailyEntriesSave);
router.route('/dailyEntriesDelete').post(auth,DailyEntriesDelete)
export default router;

