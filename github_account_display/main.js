document.addEventListener("DOMContentLoaded", function() {
    const userName = document.getElementById("username");
    const submitBtn = document.getElementById("enter");
    const profileInfo = document.getElementById("profile-info");
  
    submitBtn.addEventListener("click", submit);
  
    async function submit() {
      profileInfo.textContent = "Loading...";  // Display a loading message
      try {
        const response = await fetch(`https://api.github.com/users/${userName.value}`);
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        const data = await response.json();
        display(data);
      } catch (error) {
        console.error(error);  // Debugging: log the error
        profileInfo.textContent = `Error: ${error.message}`;
      }
    }
  
    function display(data) {
      profileInfo.innerHTML = `
        <p>Username: ${data.login}</p>
        <p>Name: ${data.name || "N/A"}</p>
        <p>Bio: ${data.bio || "N/A"}</p>
        <p>Followers: ${data.followers}</p>
        <p>Following: ${data.following}</p>
        <img src="${data.avatar_url}" alt="Avatar" width="100" />
      `;
    }
  });
  