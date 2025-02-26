// Model.js
const Model = (() => {
    let skills = [
        { name: "JavaScript", icon: "assets/skill-icons/js.png" },
        { name: "CSS", icon: "assets/skill-icons/css.png" }
    ];

    let projects = [
        { title: "Projeto 1", description: "Descrição 1", link: "https://github.com/GabriGuerra/cwbhouseplants-ecommerce" },
        { title: "Projeto 2", description: "Descrição 2", link: "https://github.com/GabriGuerra/travel-recommendation" },
        { title: "Projeto 3", description: "Descrição 3", link: "https://github.com/GabriGuerra/sistema-juridico" }
    ];

    let recommendations = [
        { name: "João Silva", text: "Gabriel is an excellent developer! He always delivers high-quality projects." },
        { name: "Maria Fernandes", text: "Working with Gabriel was an amazing experience. Professionalism and dedication." },
        { name: "Ricardo Santos", text: "I strongly recommend Gabriel for any web development project!" }
    ];

    return {
        getSkills: () => skills,
        getProjects: () => projects,
        getRecommendations: () => recommendations,
        addRecommendation: (name, text) => {
            recommendations.push({ name, text });
        }
    };
})();
