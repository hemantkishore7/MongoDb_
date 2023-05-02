//Q4:Find all the company drives which appeared between 15 oct-2022 and 31-oct-2022

db.comapnydrives.find({
  $and: [
    {drive_date:{$gte : new Date('2020-10-15')}},
    {drive_date: {$lte : new Date('2020-10-31')}}]
})

//Q6:Find all the company drives and students who are appeared for the placement.

db.comapnydrives.aggregate([{
  $lookup:{
    from:'Users',
    localField:'userid',
    foreignField:'userid',
    as: 'userInfo'
  }
  },
  {
   $project:{
     _id:0,
     'userInfo.name':1,
     company:1,
     drive_date:1,
     'userInfo.email':1,
     
   }
  }
  ])

//Q2:Find the number of problems solved by the user in codekata

db.codekata.aggregate([{
  $lookup:{
     from:'Users',
    localField:'userid',
    foreignField:'userid',
    as: 'userInfo'
  }
},
{
  $project:{
    _id:0,
    'userInfo.name':1,
    problems:1,
    userid:1
  }
}])
