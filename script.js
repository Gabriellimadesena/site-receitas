/* esccipt voto */
const commentsSection = document.getElementById('comments-section');
const addCommentForm = document.getElementById('add-comment-form');
const commentAuthorNameInput = document.getElementById('comment-author-name');
const commentContentInput = document.getElementById('comment-content');
let votes = {
    bolo_de_chocolate: 5,
    salmao_grelhado: 3,
    pao_de_queijo: 7,
    lasanha_de_frango: 2
};

window.onload = function() {
    displayVotes();
};

function incrementVote(recipe) {
    votes[recipe]++;
    displayVotes();
}

function displayVotes() {
    const resultsDiv = document.getElementById('vote-results');
    resultsDiv.innerHTML = '<p><strong>Resultados da Votação:</strong></p>';
    for (const recipe in votes) {
        resultsDiv.innerHTML += `<p>${recipe}: ${votes[recipe]} votos</p>`;
    }
}   
       
       
/* esccipt voto */    

/* esccipt barra login */
        const sidebarToggle = document.getElementById('sidebarToggle');
        const sidebar = document.getElementById('sidebar');
        const content = document.getElementById('content');

        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            content.classList.toggle('active');
        });

        document.addEventListener('click', (event) => {
            if (!sidebar.contains(event.target) && !sidebarToggle.contains(event.target) && sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
                content.classList.remove('active');
            }
        });
        
/* esccipt barra login */

/* esccipt comentarios */    

        addCommentForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const authorName = commentAuthorNameInput.value;
            const commentText = commentContentInput.value;

            if (authorName.trim() === '' || commentText.trim() === '') {
                alert('Por favor, preencha todos os campos.');
                return;
            }

            const newComment = document.createElement('div');
            newComment.classList.add('comment');
            newComment.innerHTML = `
                <span class="comment-author">${authorName}</span>
                <span class="comment-date">${new Date().toLocaleDateString()}</span>
                <p class="comment-content">${commentText}</p>
            `;
            commentsSection.appendChild(newComment);

            commentAuthorNameInput.value = '';
            commentContentInput.value = '';
        })
 
/* esccipt comentarios */    

       