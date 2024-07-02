db.users.countDocuments( 
    
    { country: { $in: ["Germany", "USA"] },

   blocked: false, 

   balance: { $gte: 10, $lte: 1000 } })