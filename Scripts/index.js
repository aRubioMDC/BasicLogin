//const BASEURL = "http://localhost:8080";
const BASEURL = "http://localhost:8080";

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log(username,password);
    authenticateUser(username, password);
});
  
document.getElementById('registerForm').addEventListener('submit', function(event) {
   event.preventDefault(); // Prevent form submission
    
    const registerName = document.getElementById('registerName').value;
    const registerEmail = document.getElementById('registerEmail').value;
    const registerBirthday = document.getElementById('registerBirthday').value;
    const registerPassword = document.getElementById('registerPassword').value;

    const userObject = (
        {
            name: registerName,
            email: registerEmail,
            password: registerPassword,
            priority: 1
        }
    );

    alert(userObject);
    newUser(userObject);

    return false;
});
  
async function authenticateUser(username, password) {
    try {
        const response = await axios.get(BASEURL + `/authentication/getUserAuth/params?email=${username}&pass=${password}`);

        if (response.status === 200) {
            if (response.data === 1) {
                window.location.href = './Layouts/dashboard.html';
            }
        } else {
            alert('Invalid username or password.');
        }

        return response.data;
    } catch (error) {
        throw error;
    }
}

async function newUser() {
    const registerName = document.getElementById('registerName').value;
    const registerEmail = document.getElementById('registerEmail').value;
    const registerPassword = document.getElementById('registerPassword').value;

    const user = (
        {
            name: registerName,
            email: registerEmail,
            password: registerPassword,
            priority: 1
        }
    );

    try {
        const response = await axios.post(BASEURL + '/user/saveUser', user);

        if (response.status === 200) {
            window.location.href = 'dashboard.html';
        }

        return response.data;
    } catch (error) {
        throw error;
    }
}
  