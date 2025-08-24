// src/data/experts.js
import avatar1 from "../../public/assets/avatar1.png";
import avatar2 from "../../public/assets/avatar2.png";
import avatar3 from "../../public/assets/avatar3.png";
import avatar4 from "../../public/assets/avatar4.png";
import avatar5 from "../../public/assets/avatar5.png";

export const experts = [
  {
    id: 1,
    name: "John Smith",
    title: "Music Instructor",
    skills: ["Guitar Lessons", "Piano Lessons", "Photography"],
    stars: 5,
    img: avatar1,
    reviews: 120,
    bio: "John Smith is a professional music instructor with 10 years of experience in teaching guitar and piano.John Smith is a professional music instructor with 10 years of experience in teaching guitar and piano.John Smith is a professional music instructor with 10 years of experience in teaching guitar and piano.",
    experience: [
      {
        role: "Senior Music Teacher at Harmony School",
        year: "2015 - Present",
      },
      { role: "Freelance Music Tutor",
        year: "2010 - 2015" },
    ],
    education: [
      {
        edu:"Bachelor of Music Education",
        year: "2009",
      },
      {
        edu: "Master of Music",
        year: "2011",
      }
    ],
    contact: {
      email: "john.smith@email.com",
      phone: "(555) 987-6543",
      location: "New York, NY",
    },
  },
  {
    id: 2,
    name: "Ava Grace",
    title: "Chef & Culinary Coach",
    skills: ["Cooking", "Baking"],
    stars: 4,
    img: avatar2,
    reviews: 80,
    bio: "Ava is a passionate chef who teaches cooking and baking to students of all levels.Ava is a passionate chef who teaches cooking and baking to students of all levels.Ava is a passionate chef who teaches cooking and baking to students of all levels.",
    experience: [
      { role: "Head Chef at Gourmet Kitchen", year: "2018 - Present" },
      { role: "Culinary Instructor at Food Academy", year: "2016 - 2018" },
      { role: "Line Cook at Culinary Delights", year: "2014 - 2016" },
    ],
    education: [
      {
        edu: "Diploma in Culinary Arts",
        year: "2016",
      },
    ],
    contact: {
      email: "ava.grace@email.com",
      phone: "(555) 234-5678",
      location: "Los Angeles, CA",
    },
  },
  {
    id: 3,
    name: "Emma Brown",
    title: "Wellness Coach",
    skills: ["Yoga", "Meditation", "Wellness Coaching"],
    stars: 5,
    img: avatar3,
    reviews: 150,
    bio: "Emma specializes in yoga, meditation, and holistic wellness with over 6 years of experience.Emma specializes in yoga, meditation, and holistic wellness with over 6 years of experience.Emma specializes in yoga, meditation, and holistic wellness with over 6 years of experience.",
    experience: [
      { role: "Yoga Instructor at Calm Studio", year: "2017 - Present" },
      { role: "Wellness Coach at HealthPlus", year: "2015 - 2017" },
    ],
    education: [
      {
        edu: "Certified Yoga Instructor",
        year: "2017",
      },
      {
        edu: "Bachelor of Arts in Psychology",
        year: "2017",
      },
      {
        edu: "Master of Arts in Psychology",
        year: "2015",
      }
    ],
    contact: {
      email: "emma.brown@email.com",
      phone: "(555) 876-5432",
      location: "San Francisco, CA",
    },
  },
  {
    id: 4,
    name: "Liam Johnson",
    title: "Digital Marketing Expert",
    skills: ["Digital Marketing", "SEO"],
    stars: 4,
    img: avatar4,
    reviews: 70,
    bio: "Liam helps businesses grow online with SEO and marketing strategies.Liam helps businesses grow online with SEO and marketing strategies.Liam helps businesses grow online with SEO and marketing strategies.",
    experience: [
      { role: "SEO Specialist at WebWorks", year: "2016 - Present" },
      { role: "Digital Marketing Intern at Creative Agency", year: "2015 - 2016" },
      { role: "Social Media Manager at Trendy Agency", year: "2014 - 2015" },
      { role: "Marketing Assistant at StartUp Inc.", year: "2013 - 2014" }
    ],
    education: [
      {
        edu: "Bachelor of Arts in Marketing",
        year: "2015",
      },
      {
        edu: "MBA in Marketing",
        year: "2014",
      },
    ],
    contact: {
      email: "liam.j@email.com",
      phone: "(555) 543-2109",
      location: "Chicago, IL",
    },
  },
  {
    id: 5,
    name: "Sophia Wilson",
    title: "Art Instructor",
    skills: ["Painting", "Drawing", "Art Therapy"],
    stars: 5,
    img: avatar5,
    reviews: 120,
    bio: "Sophia is a creative art instructor who brings out the artist in everyone.Sophia is a creative art instructor who brings out the artist in everyone.Sophia is a creative art instructor who brings out the artist in everyone.",
    experience: [
      { role: "Art Instructor at Creative Minds", year: "2014 - Present" },
      { role: "Art Therapist at Healing Arts", year: "2012 - 2014" },
    ],
    education: [
      {
        edu: "Bachelor of Fine Arts",
        year: "2013",
      },
    ],
    contact: {
      email: "sophia.w@email.com",
      phone: "(555) 765-4321",
      location: "Austin, TX",
    },
  },
  {
    id: 6,
    name: "Noah Carter",
    title: "Fitness Trainer",
    skills: ["Fitness Training", "Nutrition"],
    stars: 4,
    img: avatar1,
    reviews: 156,
    bio: "Noah is a dedicated fitness trainer who helps clients achieve their health goals.Noah is a dedicated fitness trainer who helps clients achieve their health goals.Noah is a dedicated fitness trainer who helps clients achieve their health goals.",
    experience: [
      { role: "Fitness Trainer at FitLife Gym", year: "2019 - Present" },
    ],
    education: [
      {
        edu: "Certified Personal Trainer",
        year: "2018",
      },
      {
        edu: "Bachelor of Science in Kinesiology",
        year: "2016",
      },
    ],
    contact: {
      email: "noah.carter@email.com",
      phone: "(555) 123-4567",
      location: "Miami, FL",
    },
  },
  {
    id: 7,
    name: "Olivia Adams",
    title: "Public Speaking Coach",
    skills: ["Public Speaking", "Coaching"],
    stars: 5,
    img: avatar2,
    reviews: 26,
    bio: "Olivia is a skilled public speaking coach who helps individuals improve their communication skills.Olivia is a skilled public speaking coach who helps individuals improve their communication skills.Olivia is a skilled public speaking coach who helps individuals improve their communication skills.",
    experience: [
      { role: "Public Speaking Coach at SpeakEasy", year: "2020 - Present" },
      { role: "Communication Specialist at MediaCorp", year: "2018 - 2020" },
      { role: "Content Writer at BlogSphere", year: "2016 - 2018" }
    ],
    education: [
      {
        edu: "Master of Communication",
        year: "2019",
      },
    ],
    contact: {
      email: "olivia.adams@email.com",
      phone: "(555) 234-5678",
      location: "Los Angeles, CA",
    },
  },
  {
    id: 8,
    name: "James Lee",
    title: "Web Developer",
    skills: ["Web Development", "App Design"],
    stars: 3,
    img: avatar3,
    reviews: 78,
    bio: "James is a talented web developer with a passion for creating user-friendly applications.James is a talented web developer with a passion for creating user-friendly applications.James is a talented web developer with a passion for creating user-friendly applications.",
    experience: [
      { role: "Web Developer at Tech Solutions", year: "2019 - Present" },
    ],
    education: [
      {
        edu: "Bachelor of Computer Science",
        year: "2018",
      },
    ],
    contact: {
      email: "james.lee@email.com",
      phone: "(555) 345-6789",
      location: "Seattle, WA",
    },
  },
  {
    id: 9,
    name: "Mia Scott",
    title: "Interior Designer",
    skills: ["Interior Design", "Home Styling"],
    stars: 5,
    img: avatar4,
    reviews: 69,
    bio: "Mia is a creative interior designer who transforms spaces into beautiful and functional works of art.Mia is a creative interior designer who transforms spaces into beautiful and functional works of art.Mia is a creative interior designer who transforms spaces into beautiful and functional works of art.",
    experience: [
      { role: "Interior Designer at Design Studio", year: "2018 - Present" },
      { role: "Junior Designer at Home Interiors", year: "2016 - 2018" },
    ],
    education: [
      {
        edu: "Bachelor of Interior Design",
        year: "2017",
      },
      {
        edu: "Bachelor of Arts in Interior Design",
        year: "2015",
      }
    ],
    contact: {
      email: "mia.scott@email.com",
      phone: "(555) 456-7890",
      location: "New York, NY",
    },
  },
  {
    id: 10,
    name: "Ethan Walker",
    title: "Video Editor",
    skills: ["Video Editing", "Cinematography"],
    stars: 4,
    img: avatar5,
    reviews: 89,
    bio: "Ethan is a skilled video editor who brings stories to life through editing.Ethan is a skilled video editor who brings stories to life through editing.Ethan is a skilled video editor who brings stories to life through editing.",
    experience: [
      { role: "Video Editor at Creative Studio", year: "2019 - Present" },
      { role: "Assistant Editor at FilmWorks", year: "2017 - 2019" },
      { role: "Video Editing Intern at MediaHouse", year: "2016 - 2017" },
      { role: "Freelance Video Editor", year: "2015 - 2016" }
    ],
    education: [
      {
        edu: "Bachelor of Film Production",
        year: "2018",
      },
    ],
    contact: {
      email: "ethan.walker@email.com",
      phone: "(555) 678-9012",
      location: "Los Angeles, CA",
    },
  },
  {
    id: 11,
    name: "Lucas White",
    title: "Music Producer",
    skills: ["Music Production", "DJ"],
    stars: 5,
    img: avatar1,
    reviews: 59,
    bio: "Lucas is a talented music producer who creates captivating sounds and beats.Lucas is a talented music producer who creates captivating sounds and beats.Lucas is a talented music producer who creates captivating sounds and beats.",
    experience: [
      { role: "Music Producer at SoundWave", year: "2018 - Present" },
    ],
    education: [
      {
        edu: "Bachelor of Music Production",
        year: "2017",
      },
      {
        edu: "Bachelor of Arts in Music",
        year: "2015",
      }
    ],
    contact: {
      email: "lucas.white@email.com",
      phone: "(555) 789-0123",
      location: "Nashville, TN",
    },
  },
  {
    id: 12,
    name: "Amelia Green",
    title: "Graphic Designer",
    skills: ["Graphic Design", "UI/UX"],
    stars: 4,
    img: avatar2,
    reviews: 80,
    bio: "Amelia is a creative graphic designer who specializes in visual storytelling.Amelia is a creative graphic designer who specializes in visual storytelling.Amelia is a creative graphic designer who specializes in visual storytelling.",
    experience: [
      { role: "Graphic Designer at Creative Agency", year: "2019 - Present" },
      { role: "Junior Graphic Designer at Design Co.", year: "2018 - 2019" }
    ],
    education: [
      {
        edu: "Bachelor of Graphic Design",
        year: "2018",
      },
    ],
    contact: {
      email: "amelia.green@email.com",
      phone: "(555) 890-1234",
      location: "San Francisco, CA",
    },
  },
];
