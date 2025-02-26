// Controller.js
const Controller = (() => {
    const init = () => {
        // Inicializa a exibição das recomendações
        View.renderRecommendations();

        // Lida com o evento de envio do formulário de recomendação
        View.recommendationSubmitButton.addEventListener('click', (e) => {
            e.preventDefault();

            const name = View.recommendationName.value.trim();
            const text = View.recommendationText.value.trim();

            if (name && text) {
                // Adiciona a recomendação no Model
                Model.addRecommendation(name, text);
                // Limpa o formulário
                View.clearForm();
                // Atualiza a exibição das recomendações
                View.renderRecommendations();
                // Exibe mensagem de sucesso usando SweetAlert2
                View.displayAlert("Sua recomendação foi adicionada com sucesso!", "success");
            } else {
                // Exibe mensagem de erro usando SweetAlert2
                View.displayAlert("Por favor, preencha todos os campos.", "error");
            }
        });
    };

    return {
        init
    };
})();

// Inicializa o Controller
Controller.init();
