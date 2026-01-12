import type { Course, LessonDetailMap } from '@/types/course';

export const courses: Course[] = [
  {
    id: 'js-fundamentals',
    title: 'JavaScript Fundamentals',
    description: 'Pelajari dasar-dasar JavaScript dari nol hingga mahir',
    modules: [
      {
        id: 'basics',
        title: 'Basics',
        lessons: [
          { id: 'lesson-1', title: 'Variables & Data Types', type: 'challenge', isCompleted: false },
          { id: 'lesson-2', title: 'Operators', type: 'challenge', isCompleted: false },
          { id: 'lesson-3', title: 'Conditionals', type: 'challenge', isCompleted: false },
        ],
      },
      {
        id: 'functions',
        title: 'Functions',
        lessons: [
          { id: 'lesson-4', title: 'Function Declaration', type: 'challenge', isCompleted: false },
          { id: 'lesson-5', title: 'Arrow Functions', type: 'challenge', isCompleted: false },
        ],
      },
    ],
  },
];

export const lessonDetails: LessonDetailMap = {
  'lesson-1': {
    id: 'lesson-1',
    title: 'Variables & Data Types',
    type: 'challenge',
    isCompleted: false,
    descriptionMarkdown: `# Variables & Data Types

Dalam JavaScript, kita menggunakan **variabel** untuk menyimpan data. Ada 3 cara untuk mendeklarasikan variabel:

- \`let\` - nilai bisa diubah
- \`const\` - nilai tidak bisa diubah (konstanta)
- \`var\` - cara lama (tidak direkomendasikan)

## Contoh

\`\`\`javascript
let nama = "Budi";
const umur = 25;
let isActive = true;
\`\`\`

## Tugas

Buatlah variabel \`message\` yang berisi string \`"Hello, World!"\` dan tampilkan ke console.

**Expected Output:**
\`\`\`
Hello, World!
\`\`\`
`,
    starterCode: `// Buat variabel message di sini
let message = "";

// Tampilkan ke console
console.log(message);
`,
    expectedOutput: 'Hello, World!',
    solutionCode: `let message = "Hello, World!";
console.log(message);`,
  },
  'lesson-2': {
    id: 'lesson-2',
    title: 'Operators',
    type: 'challenge',
    isCompleted: false,
    descriptionMarkdown: `# Operators

JavaScript memiliki berbagai jenis operator:

## Arithmetic Operators
- \`+\` Addition
- \`-\` Subtraction  
- \`*\` Multiplication
- \`/\` Division
- \`%\` Modulus

## Contoh

\`\`\`javascript
let a = 10;
let b = 3;
console.log(a + b); // 13
console.log(a % b); // 1
\`\`\`

## Tugas

Hitung hasil dari \`15 + 25\` dan simpan di variabel \`result\`, lalu tampilkan ke console.

**Expected Output:**
\`\`\`
40
\`\`\`
`,
    starterCode: `// Hitung 15 + 25 dan simpan di variabel result
let result;

// Tampilkan ke console
console.log(result);
`,
    expectedOutput: '40',
    solutionCode: `let result = 15 + 25;
console.log(result);`,
  },
  'lesson-3': {
    id: 'lesson-3',
    title: 'Conditionals',
    type: 'challenge',
    isCompleted: false,
    descriptionMarkdown: `# Conditionals

Conditionals digunakan untuk membuat keputusan dalam kode.

## If-Else Statement

\`\`\`javascript
let nilai = 85;

if (nilai >= 80) {
  console.log("A");
} else if (nilai >= 60) {
  console.log("B");
} else {
  console.log("C");
}
\`\`\`

## Tugas

Buatlah variabel \`angka\` dengan nilai \`10\`. Jika angka **genap**, tampilkan \`"Genap"\`, jika **ganjil** tampilkan \`"Ganjil"\`.

**Expected Output:**
\`\`\`
Genap
\`\`\`
`,
    starterCode: `let angka = 10;

// Cek apakah genap atau ganjil
if (/* kondisi */) {
  console.log("Genap");
} else {
  console.log("Ganjil");
}
`,
    expectedOutput: 'Genap',
    solutionCode: `let angka = 10;

if (angka % 2 === 0) {
  console.log("Genap");
} else {
  console.log("Ganjil");
}`,
  },
  'lesson-4': {
    id: 'lesson-4',
    title: 'Function Declaration',
    type: 'challenge',
    isCompleted: false,
    descriptionMarkdown: `# Function Declaration

Function adalah blok kode yang bisa dipanggil berulang kali.

## Syntax

\`\`\`javascript
function namaFungsi(parameter) {
  // kode
  return hasil;
}
\`\`\`

## Contoh

\`\`\`javascript
function sapa(nama) {
  return "Halo, " + nama + "!";
}

console.log(sapa("Budi")); // Halo, Budi!
\`\`\`

## Tugas

Buatlah function \`tambah\` yang menerima 2 parameter dan mengembalikan hasil penjumlahannya. Panggil function dengan nilai \`5\` dan \`3\`.

**Expected Output:**
\`\`\`
8
\`\`\`
`,
    starterCode: `// Buat function tambah di sini
function tambah(a, b) {
  // return hasil penjumlahan
}

// Panggil function dan tampilkan hasilnya
console.log(tambah(5, 3));
`,
    expectedOutput: '8',
    solutionCode: `function tambah(a, b) {
  return a + b;
}

console.log(tambah(5, 3));`,
  },
  'lesson-5': {
    id: 'lesson-5',
    title: 'Arrow Functions',
    type: 'challenge',
    isCompleted: false,
    descriptionMarkdown: `# Arrow Functions

Arrow function adalah cara modern untuk menulis function di JavaScript (ES6+).

## Syntax

\`\`\`javascript
// Function biasa
function kali(a, b) {
  return a * b;
}

// Arrow function
const kali = (a, b) => a * b;
\`\`\`

## Contoh

\`\`\`javascript
const sapa = (nama) => "Halo, " + nama;
console.log(sapa("Andi")); // Halo, Andi
\`\`\`

## Tugas

Buatlah arrow function \`kuadrat\` yang menerima satu angka dan mengembalikan kuadratnya. Panggil dengan nilai \`7\`.

**Expected Output:**
\`\`\`
49
\`\`\`
`,
    starterCode: `// Buat arrow function kuadrat di sini
const kuadrat = (n) => {
  // return kuadrat dari n
};

// Panggil function dan tampilkan hasilnya
console.log(kuadrat(7));
`,
    expectedOutput: '49',
    solutionCode: `const kuadrat = (n) => n * n;

console.log(kuadrat(7));`,
  },
};

export function getCourse(courseId: string): Course | undefined {
  return courses.find((c) => c.id === courseId);
}

export function getLessonDetail(lessonId: string) {
  return lessonDetails[lessonId];
}

export function getAllLessonsFromCourse(courseId: string): string[] {
  const course = getCourse(courseId);
  if (!course) return [];
  return course.modules.flatMap((m) => m.lessons.map((l) => l.id));
}
