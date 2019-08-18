$.getJSON('members.json', function(members) {
    members.forEach((member) => {
        $('#Members-grid').append(`
        <div class="Member">
            <img class="Member-photo" src="`+ member.image +`">
            <div class="Member-info">
                <h1>`+ member.name +`</h1>
                <h2>`+ member.role +`</h3>
                <h3>`+ member.hometown +`</h3>
            </div>
        </div>`)
    })
});
