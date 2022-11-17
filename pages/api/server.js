const mongddstring = 'mongodb+srv://<username>:<password>@cluster0.ei9wg.mongodb.net/realword?retryWrites=true&w=majority'
import connectdb from './utils/connectdb';
import Student from './models/StudentSchema';

/** 
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiRequest} res

*/

export default async function addstudent(req, res) {
   try{
    const datainit = req.body;
    const data = JSON.parse(datainit)
   console.log('connecting to database')
   const dbcon = await connectdb()  
   if(dbcon){
     console.log('connected to database!')
   }

   
   const student = await Student.create(data)
  res.json({message: 'Data inserted Successfully'})
   }catch(err){
     res.json(err)
     console.log(err)
   }

  }