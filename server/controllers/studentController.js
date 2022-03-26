const students = [
    { 
        id: 1,
     name: 'matthew'
    },
 
    {
        id:2,
        name: 'bobby'
 
    },
 
    {
        id:3,
        name: 'cady'
    }
    
]
let globalID = 4

 module.exports = {
     getStudents: (req, res) => {
         res.status(200).send(students)
     },

     addStudent: (req, res) => {
        const { studentName } = req.body
        const newUser =  {
            id:globalID,
            name:studentName
        }
        students.push(newUser)
        console.log(students)
        res.status(200).send(students)

     },
     updateStudents: (req, res) => {
         

     },

     deleteStudents: (req, res) => {
        const { id } = req.params
        const index = students.findIndex
        (e => e.id === +id)
        students.splice(index,1)
        res.status(200).send(students)

 }
}