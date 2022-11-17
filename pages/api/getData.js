const mongddstring = 'mongodb+srv://<username>:<password>@cluster0.ei9wg.mongodb.net/realword?retryWrites=true&w=majority'
import connectdb from './utils/connectdb';
import Student from './models/StudentSchema';

/** 
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiRequest} res

*/

export default async function getStudents(req, res) {
   try{
   const dbcon = await connectdb()  
   
   if(dbcon){
     console.log('connected to database!')
   }
   const students = await Student.find()
   res.status(200).send(students)
//    return students
   }catch(err){
     res.json(err)
     console.log(err)
   }

  }