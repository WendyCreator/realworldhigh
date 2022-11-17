import { useRouter } from 'next/router'
import studentdata from '../../database/studentdata';
import Layouts from '../../Components/Layouts';
import {motion} from 'framer-motion'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())
const Results = ()=>{
    const { data, error } = useSWR('/api/getData', fetcher)
    const router = useRouter();
    const {stdid} = router.query;
    let num = 1;
    

    const singlestd = data.find((std)=>{
        return std.studentid == stdid
    })

    const keyss = Object.keys(singlestd.subjects);
    const valuess = Object.values(singlestd.subjects);
    const len = keyss.length;
 
    const getScore = (subject,ty)=>{
    return singlestd.subjects[subject][ty]
     }
    const getTotal = (subject)=>{
    return singlestd.subjects[subject][0] + singlestd.subjects[subject][1]
     }
     const calculateScore = (avg)=>{
        const studentGradeFinal = valuess.flat(1)
        return (Math.ceil((studentGradeFinal.reduce((t,e)=>t+e,0))/avg))
     }
    

     const giveGrade = (grd)=>{
        let mainGrade; 
        if(grd >= 75){
         mainGrade =  'A'
        }else if(grd < 75 && grd >= 65){
          mainGrade =  'B'
         }else if(grd < 65 && grd >= 55){
          mainGrade =  'C'
         }else if(grd < 55 && grd >= 45){
          mainGrade =  'D'
         }else if(grd < 45 && grd >= 35){
          mainGrade =  'E'
         }else{
          mainGrade = 'F'
          
         }
         return mainGrade
      }
     const interprete = (grade)=>{
        let mainGrade; 
        if(grade == 'A'){
         mainGrade =  'Distinction'
        }else if(grade== 'B'){
          mainGrade =  'Upper Credit'
         }else if(grade == 'C'){
          mainGrade =  'Credit'
         }else if(grade == 'D'){
          mainGrade =  'Lower Credit'
         }else if(grade == 'E'){
          mainGrade =  'Pass'
         }else{
          mainGrade = 'Fail'
          
         }
         return mainGrade
      }
     
    
    
    
    return(
        <>
        <motion.div className='sidebar h-sreen bg-purple-50 w-3/4'
          initial={{opacity:0, x: 100}}
          animate={{opacity:1, x: 0}}
          transition={{duration:1}}
         >
         <h1 className='text-3xl text-center font-bold'>Terminal Examination Statement Of Results</h1>
          <table className='table-auto table border'>
            <thead>
                <tr className='border hover:bg-purple-800 bg-purple-600 text-purple-50'>
                    <th>#</th>
                    <th>Reg Number:</th>
                    <th>Full Name:</th>
                    <th>Class:</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>{`2022/00${singlestd.studentid}`}</td>
                    <td>{`${singlestd.firstname} ${singlestd.lastname}`}</td>
                    <td>{singlestd.studentclass}</td>
                    
                </tr>
            </tbody>
            </table>
            <h1 className='text-3xl text-center font-bold'>Student Results</h1>
            <table  className='table-auto table border'>
            <thead>
                <tr className='border hover:bg-purple-800 bg-purple-600 text-purple-50'>
                    <th>#</th>
                    <th>Subject:</th>
                    <th>C.A(30):</th>
                    <th>Exam(70):</th>
                    <th>Total(100):</th>
                    <th>Grade:</th>
                    <th>Interpretation:</th>
                </tr>
                {
                    keyss.map(keys=>{
                        return (
                            <tr key={keys}>
                                <td>{num++}</td>
                                <td>{keys}</td>
                                <td>{getScore(keys,0)}</td>
                                <td>{getScore(keys,1)}</td>
                                <td>{getTotal(keys)}</td>
                                <td>{giveGrade(getTotal(keys))}</td>
                                <td>{interprete(giveGrade(getTotal(keys)))}</td>
                                    
                                    
                            </tr>
                        )
                    })
                 
                }
            </thead>
            </table>
            <table>
                <thead>
                <tr className='border hover:bg-gray-800 bg-gray-600 text-purple-50'>
                    <th className='border'>Total Score</th>
                    <th className='border'>{calculateScore(1)}</th>
                    <th className='border'>Student Average Mark</th>
                    <th className='border'>{calculateScore(len)}</th>
                    
                </tr>
                </thead>
            </table>
            </motion.div>
        </>
    )
}

export default Results

Results.getLayout = (pages)=>{
    return(
     <Layouts>
     {pages}
   </Layouts>
    )
     }