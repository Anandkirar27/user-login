const onlineIdInput = document.getElementById('online-id');
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
const loginButton = document.getElementById('loginButton');
const logo = document.getElementById('logo');
const leftImage = document.getElementById('leftImage');
const loginContainer = document.getElementById('loginContainer');
const footer = document.querySelector('.footer');
const logoHeading = document.querySelector('.logoHeading');
const otherElements = [logoHeading,loginContainer, footer, document.getElementById('group'), document.querySelector('.newCustomer')];

function showHidePassword() {
    togglePassword.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglePassword.innerText = "Hide";
        } else {
            passwordInput.type = "password";
            togglePassword.innerText = "Show";
        }
    });
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

loginButton.addEventListener('click', function () {
    if (onlineIdInput.value.trim() === '' || passwordInput.value.trim() === '') {
        alert("Please fill out both fields.");
        return;
    }


    onlineIdInput.value = "";
    passwordInput.value = "";
    checkFormFields();
 
    triggerIntroAnimation();
});

// Function to trigger the animation
function triggerIntroAnimation() {
    const timeline = gsap.timeline();

    
    timeline.to(otherElements, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: function () {
            otherElements.forEach(el => el.style.display = 'none');
        }
    });

    timeline.set(logo, { display: 'block', opacity: 1});
    timeline.to(logo, {
        position: 'fixed',
        top: '50%',
        left: '50%',
        xPercent: -80,
        yPercent: -80,
        // backgroundColor: '#fff',
        padding: '20px',
        zIndex: 1000,
        duration: 1,
        ease: 'power2.inOut'
    });

    timeline.to(logo, {
        delay: 0.4, 
        onComplete: function () {
          
            gsap.to(logo, {
                opacity: 0,
                duration: 0.5,
                ease: "power2.inOut"
            });
        }
    });

    
    timeline.to(leftImage, {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        padding: 0,
        margin: 0,
        zIndex: 999,
        backgroundColor: '#fff', 
        duration: 1,
        ease: 'power2.inOut'
    }, '-=1'); 

    
    timeline.fromTo(leftImage, {
        clipPath: 'circle(0% at 50% 50%)'
    }, {
        clipPath: 'circle(150% at 50% 50%)',
        duration: 2,
        ease: 'power2.out'
    });

    
    timeline.to(leftImage, {
        position: 'relative',
        width: '50vw',
        padding:20,
        height: '100vh',
        duration: 1,
        ease: 'power2.inOut',
            onComplete: () => {
                
                otherElements.forEach(el => {
                    
                    
                    el.style.display = 'inline-block';
                    
                    loginContainer.style.display = 'flex';
                    loginContainer.style.alignItems = 'center';
                    loginContainer.style.justifyContent= 'center';

                    footer.style.display = 'flex';
                    footer.style.alignItems = 'center';
                    footer.style.justifyContent= 'center';

                    const h6Element = loginContainer.querySelector('h6');                   
                    el.style.opacity = '1'; // 
                });

               
                loadLoginPageAnimation();
            }
        });
}

// Function to animate the login page
function loadLoginPageAnimation() {

    gsap.from(".logoContainer", {
        x: -50,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        delay: 0.5, // Delay animation for a better effect
    });
    
    gsap.from(".logoHeading", {
        x: -30,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 1,
    });

    gsap.from("#group", {
        x: 50,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        delay: 0.5,
    });

    gsap.from(".newCustomer", {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 1,
    });


    gsap.from("#loginContainer", {
        y: 80,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: 1,
        stagger : 1
    });

    gsap.from(".footer", {
        y: 80,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        delay: 0.7,
        stagger : 1
    });
}
