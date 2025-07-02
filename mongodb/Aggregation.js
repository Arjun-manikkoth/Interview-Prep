// Basic aggregation pipeline
db.users.aggregate([{ $match: { isActive: true } }]); // Filter documents

// Group stage
db.users.aggregate([{ $group: { _id: null, minAge: { $min: "$age" } } }]); // Min age across all docs
db.users.aggregate([{ $group: { _id: "$age" } }]); // Group by age
db.users.aggregate([{ $group: { _id: "$company.location" } }]); // Group by nested field
db.users.aggregate([{ $group: { _id: { age: "$age", gender: "$gender" } } }]); // Group by multiple fields

// Combining stages
db.users.aggregate([
    { $match: { gender: "female" } }, // First filter females
    { $group: { _id: { eyeColor: "$eyeColor", age: "$age", gender: "$gender" } } }, // Then group
]);

// Match after group
db.users.aggregate([
    { $group: { _id: { age: "$age", eyecolor: "$eyecolor" } } },
    { $match: { "_id.age": { $gt: 30 } } },
]);

// Count documents
db.users.aggregate([{ $count: "allDocumentsCount" }]);

// Count after grouping
db.users.aggregate([
    { $group: { _id: "$company.location.country" } },
    { $count: "countriesCount" },
]);

// Sort
db.users.aggregate([{ $sort: { name: 1 } }]);

// Project (reshape documents)
db.users.aggregate([{ $project: { name: 1, newAge: "$age" } }]);

// Unwind arrays
db.users.aggregate([{ $unwind: "$tags" }, { $project: { name: 1, gender: 1, tags: 1 } }]);

// Unwind and group
db.users.aggregate([{ $unwind: "$tags" }, { $group: { _id: "$tags" } }]);

// Aggregation with counts
db.users.aggregate([{ $group: { _id: "favoriteFruit", count: { $sum: 1 } } }]);
db.users.aggregate([{ $unwind: "$tags" }, { $group: { _id: "$tags", count: { $sum: 1 } } }]);

// Average calculation
db.users.aggregate([{ $group: { _id: "$favoriteFruit", avgAge: { $avg: "$age" } } }]);

// Type determination
db.users.aggregate([
    { $project: { name: 1, eyecolor: { $type: "$eyeColor" }, ageType: { $type: "$age" } } },
]);

// Allow disk use for large result sets if each stage is over 100mb
db.users.aggregate([], { allowDiskUse: true });

// Output results to a new collection
db.users.aggregate([
    { $group: { _id: { age: "$age", eyeColor: "$eyeColor" } } },
    { $out: "aggregationResults" },
]);

// Join collections (lookup)
db.users.aggregate([
    {
        $lookup: {
            from: "person",
            localField: "name",
            foreignField: "name",
            as: "outerCollection",
        },
    },
]);
