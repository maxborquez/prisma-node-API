import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient()

router.get('/products', async (req, res) => {
    const products = await prisma.product.findMany()
    res.json(products)
})

router.post('/products', async (req, res) =>{
    const newProduct = await prisma.product.create({
        data: req.body,
    })
    res.json(newProduct);
})

export default router;