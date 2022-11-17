// const mongoose = require('mongoose');
import mongoose from 'mongoose'


 const connectdb = async()=> mongoose.connect(process.env.MONGO_STRING)
 export default connectdb
