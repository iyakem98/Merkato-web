import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'

import users from './data/users.js'
import feed from './data/feed.js'
import User from './models/userModel.js'
import connectDB from './config/db.js'
import Bank from './models/bankModel.js'
import banks from './data/banks.js'


dotenv.config()

connectDB()

const importData = async() => {
    try {
        await User.deleteMany()
        await Bank.deleteMany()
   
        const createdUsers = await User.insertMany(users)
        
        const adminUser = createdUsers[0]._id

        const sampleBanks = banks.map(b => {
            return {...b, user:adminUser}
        })
        
        await Bank.insertMany(sampleBanks)
        console.log(`Data Imported!`.green.inverse)
        process.exit()
    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}

const destroyData = async() => {
    try {
        await User.deleteMany()
        await Bank.deleteMany()
   
        
        
        console.log(`Data Destroyed!`.yellow.inverse)
        process.exit()
    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
}
else {
    importData()
}


