$.getJSON('alumni.json', function(classes) {
    classes.forEach((memberGroup) => {
        const { year, members } = memberGroup;
        var memberList = '';
        members.forEach((member) => {
            memberList += `<li>`+ member +`</li>`
        })
        console.log(memberList);
        $('#Alumni-classes').append(`
        <ul class="Alumni-class">
            <h2>`+ year +`s</h2>
            `+ memberList +`
        </ul>`)
    })  
});
