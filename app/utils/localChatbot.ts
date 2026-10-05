import { profileData } from "@/app/data/profile";

export function getLocalChatbotResponse(message: string): string {
  const query = message.toLowerCase();

  if (/^(مرحبا|هلا|احلا|اهلا|اهلين|سلام|السلام عليكم)/.test(query)) {
    return "أهلاً بك! أنا المساعد الذكي الخاص بعزام. يمكنني إخبارك عن مهاراته ومشاريعه وخبراته.";
  }

  if (/^(hi|hello|hey|greetings|good morning|good afternoon|good evening)/i.test(query)) {
    return `Hello! I'm Azzam's AI assistant. Ask me about his skills, projects, experience, or education.`;
  }

  if (/thank|thanks|شكرا|تسلم|يعطيك العافية/i.test(query)) {
    return "You're welcome! Feel free to ask about Azzam's work.";
  }

  if (/skill|expertise|technology|technologies|stack|know|مهارات/i.test(query)) {
    return profileData.skills
      .map((group) => `${group.category}: ${group.items.join(", ")}`)
      .join("\n\n");
  }

  if (/experience|work|career|job|company|خبرة/i.test(query)) {
    return profileData.experiences
      .map(
        (item) =>
          `${item.role} at ${item.company} (${item.period})\n${item.details.join(" ")}`
      )
      .join("\n\n");
  }

  if (/project|built|portfolio|مشروع/i.test(query)) {
    return profileData.projects
      .map(
        (project) =>
          `${project.name}: ${project.description}\nTechnologies: ${project.stack.join(", ")}`
      )
      .join("\n\n");
  }

  if (/education|degree|study|university|gpa|تعليم/i.test(query)) {
    return `${profileData.education.degree} at ${profileData.education.institution}. ${profileData.education.specialization}. ${profileData.education.graduation}.`;
  }

  if (/certificate|certification|credential/i.test(query)) {
    return profileData.certifications
      .map((item) => `${item.name} — ${item.issuer}, ${item.year}`)
      .join("\n");
  }

  if (/language|speak|لغة/i.test(query)) {
    return profileData.languages
      .map((language) => `${language.name}: ${language.level}`)
      .join("\n");
  }

  if (/contact|email|reach|hire|connect|تواصل/i.test(query)) {
    return `Azzam is based in ${profileData.location}. You can connect via LinkedIn (${profileData.contactLinks[0].url}) or GitHub (${profileData.contactLinks[1].url}).`;
  }

  if (/who|about|azzam|introduce|yourself|من هو/i.test(query)) {
    return `${profileData.name} is an ${profileData.title}.\n\n${profileData.summary}`;
  }

  return "I can answer questions about Azzam's AI engineering skills, projects, experience, education, and languages. Try asking about one of those topics.";
}
