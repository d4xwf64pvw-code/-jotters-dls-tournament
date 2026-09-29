const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const playerName = form.playerName.value;

    const dlsId = form.dlsId.value;

    const teamName = form.teamName.value;

    const email = form.email.value;

    alert(

        "Registration received!\n\n" +

        "Player: " + playerName + "\n" +

        "DLS ID: " + dlsId + "\n" +

        "Team: " + teamName + "\n" +

        "Email: " + email

    );

    form.reset();

});
