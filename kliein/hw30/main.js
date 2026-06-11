 document.getElementById('validateEmail').addEventListener('click', function() {
            const emailInput = document.getElementById('email').value;
            const emailResult = document.getElementById('Emailresult');
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailPattern.test(emailInput)) {
                emailResult.textContent = 'Електронна адреса є валідною.';
                emailResult.style.color = 'green';
            } else {
                emailResult.textContent = 'Електронна адреса є невалідною.';
                emailResult.style.color = 'red';
            }
        });

        document.getElementById('validateURL').addEventListener('click', function() {
            const urlInput = document.getElementById('url').value;
            const urlResult = document.getElementById('urlResult');
            try {
                new URL(urlInput);
                urlResult.textContent = 'URL є валідним.';
                urlResult.style.color = 'green';
            } catch (e) {
                urlResult.textContent = 'URL є невалідним.';
                urlResult.style.color = 'red';
            }
        });
        function validateEmail(email) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(email);
        }

        function validateURL(url) {
            try {
                new URL(url);
                return true;
            } catch (e) {
                return false;
            }
        } 
        


