export const javascriptTopics = [
  {
    category: "JavaScript Fundamentals",
    topics: [
      {
        concept: "Variables",

        definition:
          "Variables are containers used to store values in memory.",

        example: `
let name = "Sachin";
const age = 27;

console.log(name);
console.log(age);
        `,

        output: `
Sachin
27
        `,

        realWorldUseCase:
          "Store user information, API responses, configuration values and application state.",

        interviewQuestion:
          "Difference between var, let and const?"
      },

      {
        concept: "Data Types",

        definition:
          "JavaScript supports primitive and reference data types.",

        example: `
const name = "Sachin";
const age = 27;
const isActive = true;
const user = {
  name: "Sachin"
};
        `,

        output: `
string
number
boolean
object
        `,

        realWorldUseCase:
          "Represent users, products, orders and business entities.",

        interviewQuestion:
          "Difference between primitive and reference data types?"
      },

      {
        concept: "Functions",

        definition:
          "Functions are reusable blocks of code that perform specific tasks.",

        example: `
function greet(name){
  return "Hello " + name;
}

console.log(greet("Sachin"));
        `,

        output: `
Hello Sachin
        `,

        realWorldUseCase:
          "Validation, API integration, business logic, calculations.",

        interviewQuestion:
          "Difference between Function Declaration and Function Expression?"
      }
    ]
  },

  {
    category: "ES6+ Features",

    topics: [
      {
        concept: "Arrow Functions",

        definition:
          "A shorter syntax for writing functions introduced in ES6.",

        example: `
const add = (a,b) => a + b;

console.log(add(10,20));
        `,

        output: `
30
        `,

        realWorldUseCase:
          "React event handlers, callbacks, array methods.",

        interviewQuestion:
          "How does 'this' behave inside arrow functions?"
      },

      {
        concept: "Destructuring",

        definition:
          "Extract values from objects or arrays into variables.",

        example: `
const user = {
  name: "Sachin",
  city: "Pune"
};

const { name, city } = user;
        `,

        output: `
Sachin
Pune
        `,

        realWorldUseCase:
          "React props, API responses, Redux state.",

        interviewQuestion:
          "Benefits of object destructuring?"
      },

      {
        concept: "Spread Operator",

        definition:
          "Expands arrays and objects into individual elements.",

        example: `
const arr1 = [1,2];
const arr2 = [...arr1,3,4];
        `,

        output: `
[1,2,3,4]
        `,

        realWorldUseCase:
          "Immutable state updates in React.",

        interviewQuestion:
          "Spread vs Rest Operator?"
      }
    ]
  },

  {
    category: "Advanced JavaScript",

    topics: [
      {
        concept: "Closures",

        definition:
          "A closure allows a function to access variables from its outer scope even after the outer function has executed.",

        example: `
function counter() {
 let count = 0;

 return function() {
   count++;
   return count;
 }
}

const c = counter();

console.log(c());
console.log(c());
        `,

        output: `
1
2
        `,

        realWorldUseCase:
          "Private variables, React hooks, memoization.",

        interviewQuestion:
          "Explain closure with a practical example."
      },

      {
        concept: "Hoisting",

        definition:
          "JavaScript moves declarations to the top during compilation.",

        example: `
console.log(a);

var a = 10;
        `,

        output: `
undefined
        `,

        realWorldUseCase:
          "Understanding execution flow and debugging.",

        interviewQuestion:
          "Why are let and const not hoisted like var?"
      },

      {
        concept: "Execution Context",

        definition:
          "The environment where JavaScript code executes.",

        example: `
function test(){
  let x = 10;
}

test();
        `,

        output: `
Execution Context Created
Execution Context Destroyed
        `,

        realWorldUseCase:
          "Debugging call stack and memory issues.",

        interviewQuestion:
          "What happens during the creation phase?"
      }
    ]
  },

  {
    category: "Async JavaScript",

    topics: [
      {
        concept: "Promises",

        definition:
          "Promises represent eventual completion or failure of asynchronous operations.",

        example: `
fetch("/users")
 .then(res => res.json())
 .then(data => console.log(data));
        `,

        output: `
Users Data
        `,

        realWorldUseCase:
          "API calls, file uploads, database queries.",

        interviewQuestion:
          "Promise states?"
      },

      {
        concept: "Async Await",

        definition:
          "Cleaner syntax for handling promises.",

        example: `
async function getUsers() {
 const response = await fetch("/users");
 return response.json();
}
        `,

        output: `
Users Data
        `,

        realWorldUseCase:
          "Backend APIs and React Query.",

        interviewQuestion:
          "Difference between async/await and promises?"
      },

      {
        concept: "Event Loop",

        definition:
          "Mechanism that manages asynchronous execution.",

        example: `
console.log("1");

setTimeout(() => {
 console.log("2");
},0);

console.log("3");
        `,

        output: `
1
3
2
        `,

        realWorldUseCase:
          "Node.js applications and browser rendering.",

        interviewQuestion:
          "Difference between Microtask Queue and Callback Queue?"
      }
    ]
  },

  {
    category: "Performance",

    topics: [
      {
        concept: "Debouncing",

        definition:
          "Delays function execution until user stops triggering events.",

        example: `
searchInput.addEventListener(
 "input",
 debounce(search,500)
);
        `,

        output: `
API call after typing stops
        `,

        realWorldUseCase:
          "Search bars and filters.",

        interviewQuestion:
          "Debounce vs Throttle?"
      },

      {
        concept: "Throttling",

        definition:
          "Limits function execution rate.",

        example: `
window.addEventListener(
 "scroll",
 throttle(loadData,1000)
);
        `,

        output: `
Runs once per second
        `,

        realWorldUseCase:
          "Scroll and resize handlers.",

        interviewQuestion:
          "When should throttle be preferred?"
      }
    ]
  },

  {
    category: "Node.js",

    topics: [
      {
        concept: "Streams",

        definition:
          "Process data piece by piece instead of loading entire data into memory.",

        example: `
fs.createReadStream("large-file.txt");
        `,

        output: `
Chunk Based Processing
        `,

        realWorldUseCase:
          "Video streaming and file uploads.",

        interviewQuestion:
          "Advantages of Streams?"
      },

      {
        concept: "Node Event Loop",

        definition:
          "Handles asynchronous operations efficiently in Node.js.",

        example: `
setTimeout(() => {
 console.log("Hello");
},0);
        `,

        output: `
Executed via Event Loop
        `,

        realWorldUseCase:
          "High-performance backend services.",

        interviewQuestion:
          "Explain Node.js event loop phases."
      }
    ]
  }
];
import React, { useState } from "react";

const topics = [
  {
    concept: "Closures",
    definition:
      "A closure allows a function to access variables from its outer scope even after the outer function has finished execution.",
    example: `function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const c = counter();

console.log(c());
console.log(c());`,
    useCase:
      "Private variables, React hooks, memoization, authentication systems.",
    interviewQuestion:
      "How do closures help implement data privacy in JavaScript?",
  },

  {
    concept: "Promises",
    definition:
      "Promises represent eventual completion or failure of an asynchronous operation.",
    example: `fetch("/users")
  .then(res => res.json())
  .then(data => console.log(data));`,
    useCase:
      "API calls, file uploads, database operations.",
    interviewQuestion:
      "What are the three states of a Promise?",
  },

  {
    concept: "Async Await",
    definition:
      "Async/Await provides a cleaner syntax for handling asynchronous operations.",
    example: `async function getUsers() {
  const res = await fetch("/users");
  return await res.json();
}`,
    useCase:
      "Backend APIs, React Query, database queries.",
    interviewQuestion:
      "What happens if an awaited promise rejects?",
  },

  {
    concept: "Event Loop",
    definition:
      "The event loop manages asynchronous operations and execution order.",
    example: `console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

console.log("3");`,
    useCase:
      "Node.js servers, browser asynchronous tasks.",
    interviewQuestion:
      "Difference between Microtask Queue and Callback Queue?",
  },

  {
    concept: "Debouncing",
    definition:
      "Delays function execution until the user stops triggering events.",
    example: `const debouncedSearch =
 debounce(searchFn, 500);`,
    useCase:
      "Search bars, autocomplete fields.",
    interviewQuestion:
      "Difference between debounce and throttle?",
  },

  {
    concept: "Prototype",
    definition:
      "JavaScript uses prototypes for inheritance.",
    example: `function User(name) {
  this.name = name;
}

User.prototype.greet = function() {
  return "Hello";
};`,
    useCase:
      "Object inheritance and memory optimization.",
    interviewQuestion:
      "What is the prototype chain?",
  },

  {
    concept: "Call Apply Bind",
    definition:
      "Methods used to explicitly control the value of 'this'.",
    example: `person.greet.call(user);
person.greet.apply(user);
const fn = person.greet.bind(user);`,
    useCase:
      "Function borrowing and context management.",
    interviewQuestion:
      "Difference between call, apply and bind?",
  },
];

function JavaScriptNotes() {
  const [search, setSearch] = useState("");

  const filteredTopics = topics.filter((topic) =>
    topic.concept
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-950 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-white mb-4">
          📚 JavaScript Notes
        </h1>

        <p className="text-center text-slate-300 mb-8">
          Complete JavaScript concepts for Frontend,
          MERN and Full Stack Interviews
        </p>

        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search Concept..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full max-w-lg px-5 py-3 rounded-2xl border border-slate-600 bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <div className="grid gap-8">
          {filteredTopics.map((topic, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 shadow-xl"
            >
              <h2 className="text-3xl font-bold text-cyan-400 mb-5">
                {topic.concept}
              </h2>

              <div className="space-y-5">
                <div>
                  <h3 className="text-white font-semibold mb-2">
                    📖 Definition
                  </h3>

                  <p className="text-slate-300">
                    {topic.definition}
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-2">
                    💻 Example
                  </h3>

                  <pre className="bg-slate-950 text-green-400 p-4 rounded-xl overflow-auto">
                    {topic.example}
                  </pre>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-2">
                    🌎 Real World Use Case
                  </h3>

                  <p className="text-slate-300">
                    {topic.useCase}
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-2">
                    🎯 Interview Question
                  </h3>

                  <p className="text-yellow-300">
                    {topic.interviewQuestion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredTopics.length === 0 && (
          <div className="text-center text-white mt-10">
            No concepts found.
          </div>
        )}
      </div>
    </div>
  );
}

export default JavaScriptNotes;

