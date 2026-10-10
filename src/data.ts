export type Project = { title: string; cat: 'Web' | 'Data' | 'Cloud'; img: string; video?: string; text: string; link?: string }
export const projects: Project[] = [
 { title: 'Oracle Smart Contract', cat: 'Cloud', img: 'images/ccbc/Oracle2.png', text: 'Smart contract with Oracle integration, built to learn Oracle blockchain and cloud tooling.', link: 'https://jinalpatel17.github.io/Oracle_SmartContract/' },
 { title: 'BI Dashboard', cat: 'Data', img: 'images/data/BI_Dashboard_image.png', text: 'Visual BI dashboard optimized to get more out of an organization\u2019s reports.', link: 'https://github.com/JinalPatel17/BiDashboard_preview' },
 { title: 'Power Query & Excel', cat: 'Data', img: 'images/data/Excel_loadup_data.png', text: 'Turning raw data into clean, usable data with Power Query and Excel.', link: 'https://github.com/JinalPatel17/PowerQueryExcel_preview' },
 { title: 'Robos Syndicate', cat: 'Web', img: 'images/portfolio/modals/Robot_syndicate_jinalpatel17.github.io.jpeg', text: 'My first React project, written with modern ECMAScript.', link: 'https://jinalpatel17.github.io/robot-syndicate/' },
 { title: 'CSS3 Grid', cat: 'Web', img: 'images/portfolio/modals/Gridpage_jinalpatel17.github.io.jpeg', text: 'Responsive page layout built with CSS Grid.' },
 { title: 'Login / Signup Template', cat: 'Web', img: 'images/portfolio/modals/LoginSignup_jinalpatel17.github.io.jpeg', text: 'Login and signup front end with animated background and text boxes.', link: 'https://jinalpatel17.github.io/LoginTemplate/' },
 { title: 'CSS3 Loading Animation', cat: 'Web', img: 'images/portfolio/modals/Loading_Animation.gif', text: 'Pure CSS loading animation.', link: 'https://jinalpatel17.github.io/Loading-Animation/' },
 { title: 'Wavering CSS3', cat: 'Web', img: 'images/portfolio/modals/wavering.jpg', video: 'images/portfolio/modals/wavering', text: 'Pure CSS wave animation.', link: 'https://jinalpatel17.github.io/Wavering_CSS_fun/' },
 { title: 'To-Do App', cat: 'Web', img: 'images/portfolio/modals/To_DoPage_jinalpatel17.github.io.jpeg', text: 'Classic JavaScript to-do list.', link: 'https://jinalpatel17.github.io/To-Do-Webpage/' },
 { title: 'Gradient Background', cat: 'Web', img: 'images/portfolio/modals/GradientBG_jinalpatel17.github.io.jpeg', text: 'Color gradient generator.', link: 'https://jinalpatel17.github.io/GradientBackground/' },
]
export const skills: Record<string, string[]> = {
 Frontend: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Angular', 'Vue.js', 'Redux', 'jQuery', 'Bootstrap'],
 Backend: ['Java', 'Spring Boot', 'Node.js', 'Express', 'NestJS', 'Django', 'PHP', 'Python'],
 'Cloud & DevOps': ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Jenkins', 'Git'],
 'Data & AI': ['Pandas', 'NumPy', 'SciPy', 'Matplotlib', 'Plotly', 'scikit-learn', 'TensorFlow', 'Keras', 'PyTorch', 'MLflow', 'Power BI'],
 Databases: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL Server', 'DynamoDB'],
 'Blockchain & Tools': ['Solidity', 'Web3.js', 'Postman', 'PowerShell', 'Shell'],
}
export const education = [
 { when: 'Sep 2023 - Apr 2024', what: 'Post-Graduate Certificate, Cloud Computing & Blockchain', where: 'Saskatchewan Polytechnic', note: 'Focused on building decentralized applications, cloud infrastructure, and scalable solutions using modern blockchain and cloud technologies.' },
//  { when: 'Jan - May 2023', what: 'Data Science & Data Analytics (course)', where: '365 Careers', note: 'Math and statistics fundamentals, Python, data visualization, machine learning and deep learning.' },
 { when: 'Aug 2022 - Apr 2023', what: 'Post-Graduate Certificate, Artificial Intelligence & Data Analytics', where: 'Saskatchewan Polytechnic', note: 'Applied analytics and artificial intelligence techniques to transform data into actionable insights and business solutions.' },
//  { when: 'Mar 2021 - Mar 2022', what: 'Full Stack Web Developer (course)', where: 'Zero To Mastery', note: 'Full-stack development from HTML/CSS to JavaScript, React, Redux and Node.js.' },
 { when: 'Aug 2016 - Aug 2020', what: 'B.Tech, Computer Science & Engineering', where: 'Parul University', note: 'Strong foundation in computer science, software development, databases, algorithms, and system design.' },
]
export const certificate = [
    {when: 'Jan - May 2023', what: 'Data Science & Data Analytics (course)', where: '365 Careers', note: 'Developed analytical and machine learning skills using Python, statistics, data visualization, and predictive modeling techniques.'},
    {when: 'Mar 2021 - Mar 2022', what: 'Full Stack Web Developer (course)', where: 'Zero To Mastery', note: 'Built full-stack web applications using HTML, CSS, JavaScript, React, Redux, and Node.js, with a focus on modern development practices.'},
]
// Created and designed by Jinal Patel | GitHub:https://github.com/JinalPatel17