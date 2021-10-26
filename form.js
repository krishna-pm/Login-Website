(function () {
    
    
    var firebaseConfig = {
        apiKey: "AIzaSyA2nyTeYOzXCjv24BiN7j5bVrLZjT0bUpw"
    };

    firebase.initializeApp(firebaseConfig);

    
    const txtEmail = document.getElementById("txtEmail");
    const txtPassword = document.getElementById("txtPassword");
    const btnLogin = document.getElementById("btnLogin");
    const btnSignup = document.getElementById("btnSignup");

    
    btnLogin.addEventListener('click', e => {
        const email = txtEmail.value;
        const password = txtPassword.value;

        const auth = firebase.auth();

        
        auth.signInWithEmailAndPassword(email, password).then(user =>{
            alert("Login Successful :)");
        }).catch(err => {
            alert(err.message);
        });
        
    });

    
    btnSignup.addEventListener('click', e => {

        
        const email = txtEmail.value;
        const password = txtPassword.value;

        const auth = firebase.auth();

        
        const promise = auth.createUserWithEmailAndPassword(email, password).then(user => {
            alert("Signup Successful :)")
        }).catch(err => {
            alert(err.message);
        });

    });


}());