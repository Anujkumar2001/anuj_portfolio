import skillsData from "../data/skills.json";

export const getSkillsData = ({ category }) => {
    if (!category) {
        console.error("Category is required");
        return [];
    }
    const data = skillsData.skills.filter((el) => el.category == category)
    return data;
};
