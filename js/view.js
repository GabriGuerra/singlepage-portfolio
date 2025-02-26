// View.js
const View = (() => {
    const recommendationsContainer = document.querySelector('.recommendations-container');
    const recommendationForm = document.querySelector('#recommendation-form');
    const recommendationName = document.querySelector('#recommendation-name');
    const recommendationText = document.querySelector('#recommendation-text');
    const recommendationSubmitButton = document.querySelector('.btn');

    // Função para renderizar as recomendações na tela
    const renderRecommendations = () => {
        const recommendations = Model.getRecommendations();
        recommendationsContainer.innerHTML = ''; // Limpa as recomendações existentes

        recommendations.forEach((recommendation) => {
            const recommendationElement = document.createElement('div');
            recommendationElement.classList.add('card');
            recommendationElement.innerHTML = `
                <strong>${recommendation.name}</strong>
                <p>${recommendation.text}</p>
            `;
            recommendationsContainer.appendChild(recommendationElement);
        });
    };

    // Função para limpar o formulário após enviar a recomendação
    const clearForm = () => {
        recommendationName.value = '';
        recommendationText.value = '';
    };

    // Função para exibir mensagens de alerta com SweetAlert2
    const displayAlert = (message, type) => {
        Swal.fire({
            icon: type, // 'success' ou 'error'
            title: type === "success" ? 'Success' : 'Error',
            text: message,
            confirmButtonText: 'OK'
        });
    };

    return {
        renderRecommendations,
        clearForm,
        displayAlert,
        recommendationForm,
        recommendationSubmitButton,
        recommendationName,
        recommendationText
    };
})();
