// List all indexes on a collection
db.persons.getIndexes();

// Create a single field index
db.users.createIndex({ name: 1 }); // 1 for ascending, -1 for descending

// Create a compound index
db.users.createIndex({ name: 1, age: -1 });

// Create a unique index
db.users.createIndex({ email: 1 }, { unique: true });

// Create a TTL index (documents expire after 3600 seconds)
db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 });

// Create a text index
db.articles.createIndex({ content: "text" });

// Create a geospatial index
db.places.createIndex({ location: "2dsphere" });

// Drop an index
db.users.dropIndex("name_1");
