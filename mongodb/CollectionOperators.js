// Create a collection
db.createCollection("user");

// Create a capped collection (fixed size)
db.createCollection("user", { capped: true, size: 1048576 }); // 1MB size limitAdd commentMore actions

// Show all collections in current database
//show collections

// Drop a collection
db.collection.drop();
