import Bank from '../models/bankModel.js'
import asyncHandler from 'express-async-handler'

const getBanks = asyncHandler(async(req, res) => {
    const banks = await Bank.find({})
    res.json(banks)
})

const getBankById = asyncHandler(async(req, res) => {
    const bank = await Bank.findById(req.params.id)
    if (bank){
        res.json(bank)
    }

    else {
        res.status(404).json({message: "product not found"})
    }
})

export {
    getBanks,
    getBankById
}