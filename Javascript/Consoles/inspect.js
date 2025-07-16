const company = {
    name: "TechNova",
    founded: 2015,
    departments: {
        engineering: {
            head: "Alice",
            employees: [
                { name: "John", role: "Frontend Developer" },
                { name: "Sara", role: "Backend Developer" },
            ],
        },
        hr: {
            head: "Bob",
            employees: [
                { name: "Karen", role: "Recruiter" },
                { name: "Tom", role: "Coordinator" },
            ],
        },
    },
};

console.dir(company); //displays hierarchial listing of an object properties
console.table(); //displays tabular data in  a structured format
