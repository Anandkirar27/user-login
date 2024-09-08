        const onlineIdInput = document.getElementById('online-id');
        const passwordInput = document.getElementById('password');
        const togglePassword = document.getElementById('togglePassword');
        const loginButton = document.getElementById('loginButton');

        function showHidePassword() {
            togglePassword.addEventListener("click",function(){
                if(passwordInput.type == "password"){
                    passwordInput.type = "text";
                    togglePassword.innerText = "Hide";
                }
                else{
                    passwordInput.type = "password";
                    togglePassword.innerText = "Show";
                }
            })
        }
     
        showHidePassword();

        function checkFormFields() {
            if (onlineIdInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
              loginButton.disabled = false;
              loginButton.classList.remove('bg-gray-400', 'cursor-not-allowed');
              loginButton.classList.add('bg-lime-700', 'cursor-pointer');
            } else {
              loginButton.disabled = true;
              loginButton.classList.remove('bg-lime-700', 'cursor-pointer');
              loginButton.classList.add('bg-gray-400', 'cursor-not-allowed');
            }
          }

        onlineIdInput.addEventListener('input', checkFormFields);
        passwordInput.addEventListener('input', checkFormFields);


        loginButton.addEventListener('click', function() {
            const button = this;
            button.innerHTML = '<div class="flex justify-center items-center"><div class="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div></div>';
            button.disabled = true;

            setTimeout(function() {
                button.innerHTML = 'Login';
                button.disabled = false;
            }, 1000);

        });





      
        
       