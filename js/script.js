// function changePage() {
//     window.location.href = "popsong.html";
// }

// function changePage2() {
//     window.location.href = "rocksong.html";
// }

// function changePage3() {
//     window.location.href = "newhits.html";
// }

    // const name = document.getElementById("name");
    // const email = document.getElementById("email");
    // const password = document.getElementById("Password");
    

        document.getElementById('Form').addEventListener('submit', function(event) {
            event.preventDefault();
        
            // Collect input values
            const name = document.getElementById('name').value.trim();
            const age = document.getElementById('age').value;
            const password = document.getElementById('password').value;
            const gender = document.getElementById('gender').value;
            const email = document.getElementById('email').value.trim();//trim untuk menghilangkan white spcae
        
            // Name validation
            if (name === '') {
                alert('name is required');
                return;//kalau nama kosong
            }
        
            // Age validation
            if (age === '' || age <= 0) {
                alert('age is required');
                return;//age kosong
            }
        
            // Password validation
            if (password === '' || password.length < 5) {
                alert('Password must be at least 5 character');
                return;
            }
        
            
            if (gender === '') {
                alert('Gender is required');
                return;
            }
        
       
            if (email === ''    ) {
                alert('email is required');
                return;
            }
        
      
            window.location.href = 'nextpage.html';
        });
