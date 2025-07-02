db.users.updateOne({ age: 26 }, { $set: { age: 27 } });

// Update by ObjectId
db.users.updateOne({ _id: ObjectId("659f5c8ac6801899e8e01985") }, { $set: { name: "New Name" } });

// Update operators
db.users.updateOne({ _id: ObjectId("id") }, { $inc: { age: 3 } }); // Increment field
db.users.updateOne({ _id: ObjectId("id") }, { $rename: { name: "firstName" } }); // Rename field
db.users.updateOne({ _id: ObjectId("id") }, { $unset: { age: "" } }); // Remove field

// Array update operatorsAdd commentMore actions
db.users.updateOne({ _id: ObjectId("id") }, { $push: { hobbies: "Swimming" } }); // Add to array
db.users.updateOne({ _id: ObjectId("id") }, { $pull: { hobbies: "Bowling" } }); // Remove from array
db.users.updateOne({ _id: ObjectId("id") }, { $pullAll: { hobbies: ["Bowling", "Swimming"] } }); // Remove multiple
db.users.updateOne({ _id: ObjectId("id") }, { $addToSet: { hobbies: "Dancing" } }); // Add if not exists

// Update multiple documents
db.users.updateMany({ address: { $exists: true } }, { $unset: { address: "" } });

// Replace entire document
db.users.replaceOne({ age: 41 }, { name: "John", age: 30, place: "New York" });
