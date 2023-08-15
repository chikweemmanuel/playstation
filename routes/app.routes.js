import { Router } from "express";
const router = Router()

router.get("/", (req, res) => {
    res.render('home')
})

router.get('/ps4', async (req, res) => {

    try {
        
    } catch (error) {
        
    }
    res.render("ps4")
})

export default router;