
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
    