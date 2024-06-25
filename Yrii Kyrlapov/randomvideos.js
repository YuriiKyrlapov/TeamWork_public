db.videos.aggregate([

    { $sample: { size: 2 } },

    { $lookup: {
        from: 'users'
        LocalField: '_id'
        as: 'autor_info'
    }}
])