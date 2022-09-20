import axios from 'axios'
import Bank from '../models/bankModel.js'
import cheerio from 'cheerio'
import asyncHandler from 'express-async-handler'

async function getPriceFeed() {
    const myarr = []
    try {
        const siteUrl = "https://businessinfoeth.com/crypto-data/"

        const {data} = await axios({
            method: "GET",
            url: siteUrl
        })
        const $ = cheerio.load(data)
        const elemSelector = '#post-1817 > div > section > div > div > div > div > div > div'

        const keys = [
            'name',
            'price',
            'infliction',
            'numChange',
        ]

        $(elemSelector).each((parentIdx, parentElem) => {
            let keyIdx = 0
            const coinObj = {}
           if(parentIdx <= 9){
               $(parentElem).children().each((childIdx, childElem) => {
                   const tdval = $(childElem).text()

                   if(tdval){
                       coinObj[keys[keyIdx]] = tdval
                       
                       

                       keyIdx ++
                   }
                  
               })
               console.log(coinObj)
               myarr.push(coinObj)
           }
        
        })

       return myarr
      
    } catch (error) { 
        console.log(err)
    }
}

const getCrypto = asyncHandler(async(req, res) => {
    try {
        const cryptoPrice = await getPriceFeed()
        return res.status(200).json({
            cryptoPrice
        })
        
    } catch (error) {

        res.status(500).json
        throw new Error ('no crypto data my friend')
        
        
    }

})



export {
    getCrypto
}

