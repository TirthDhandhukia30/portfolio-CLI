#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";
import gradient from "gradient-string";
import figlet from "figlet";
import cliCursor from "cli-cursor";

const portfolio = {
  name: "Tirth Dhandhukia",
  title: "Web Dev, Data & UI/UX Enthusiast",
  github: "github.com/TirthDhandhukia30",
  website: "tirthdhandhukia.com",
  email: "tirth30.info@gmail.com",
  linkedin: "linkedin.com/in/tirthdhandhukia",
  twitter: "twitter.com/tirthhh",
  skills: ["React", "Node.js", "TypeScript", "Python", "AWS"],
  location: "undefined",
};

// Hide cursor for cleaner output
cliCursor.hide();

// Minimal gradient effects - only for accent elements
const accentGradient = gradient(["#667eea", "#764ba2"]);
const nameColor = chalk.hex("#2d3748");

// Get current GMT time and date
const now = new Date();
const gmtTime = now.toLocaleTimeString("en-US", {
  timeZone: "GMT",
  hour12: false,
  hour: "2-digit",
  minute: "2-digit",
});
const gmtDate = now.toLocaleDateString("en-US", {
  timeZone: "GMT",
  weekday: "short",
  month: "short",
  day: "numeric",
});

// Clean, minimal ASCII Art for name - different style
const asciiName = figlet.textSync("TIRTH", {
  font: "ANSI Shadow",
  horizontalLayout: "fitted",
});

// Create animated typing effect function
const typeWriter = (text, delay = 50) => {
  return new Promise((resolve) => {
    let i = 0;
    const timer = setInterval(() => {
      process.stdout.write(text[i]);
      i++;
      if (i >= text.length) {
        clearInterval(timer);
        resolve();
      }
    }, delay);
  });
};

// Modern, sleek, minimal card design
const timeInfo = `${gmtTime} GMT • ${gmtDate}`;
const card = `${chalk.hex("#a0aec0")(timeInfo).padStart(65)}

${chalk.bold.hex("#2d3748")(asciiName)}

${chalk.hex("#e2e8f0")("┌" + "─".repeat(48) + "┐")}
${chalk.hex("#e2e8f0")("│")} ${chalk.bold.hex("#4a5568")(
  portfolio.title.padEnd(46)
)} ${chalk.hex("#e2e8f0")("│")}
${chalk.hex("#e2e8f0")("└" + "─".repeat(48) + "┘")}

${chalk.bold.hex("#2d3748")("CONNECT")}
  ${chalk.hex("#a0aec0")("github")}      ${chalk.hex("#667eea")(
  portfolio.github
)}
  ${chalk.hex("#a0aec0")("website")}     ${chalk.hex("#667eea")(
  portfolio.website
)}
  ${chalk.hex("#a0aec0")("email")}       ${chalk.hex("#667eea")(
  portfolio.email
)}
  ${chalk.hex("#a0aec0")("linkedin")}    ${chalk.hex("#667eea")(
  portfolio.linkedin
)}
  ${chalk.hex("#a0aec0")("twitter")}     ${chalk.hex("#667eea")(
  portfolio.twitter
)}

${chalk.bold.hex("#2d3748")("STACK")}
  ${portfolio.skills
    .map((skill) => chalk.hex("#718096")(skill))
    .join(chalk.hex("#e2e8f0")(" • "))}

${chalk.bold.hex("#2d3748")("PROJECTS")}
  ${accentGradient("EVision")}
    ${chalk.hex("#718096")("AI-powered computer vision platform for real-time")}
    ${chalk.hex("#718096")("object detection and image analysis")}

  ${accentGradient("NOVA AI")}
    ${chalk.hex("#718096")("Intelligent automation assistant with natural")}
    ${chalk.hex("#718096")("language processing capabilities")}

  ${accentGradient("DailyDigest - n8n workflow")}
    ${chalk.hex("#718096")(
      "Automated workflow for personalized news aggregation"
    )}
    ${chalk.hex("#718096")("and content curation using n8n automation")}

${chalk.bold.hex("#2d3748")("LOCATION")}
  ${chalk.hex("#718096")(portfolio.location)}

${chalk.hex("#e2e8f0")("─".repeat(50))}
${chalk.hex("#a0aec0")("Run again:")} ${accentGradient("npx tirthh")}
`;

// Display with ultra-minimal border
console.log(
  boxen(card, {
    padding: 2,
    margin: 1,
    borderStyle: "single",
    borderColor: "#e2e8f0",
  })
);

// Show cursor back
cliCursor.show();
