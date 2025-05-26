// tel másolás
function copyTel(event) {
    event.preventDefault();
    const tel = '06205555555';
    navigator.clipboard.writeText(tel).then(() => {
        alert('Telefonszám másolva a vágólapra!');
    }).catch(err => {
        console.error('Hiba történt a másolás során:', err);
    });
}
// Email másolás 

function copyEmail(event) {
    event.preventDefault();
    const email = 'tothgeri@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        alert('Email cím másolva a vágólapra!');
    }).catch(err => {
        console.error('Hiba történt a másolás során:', err);
    });
}

// csaptelep csaba tel
function copyTel2(event) {
        event.preventDefault();
        const tel = '06708008135';
        navigator.clipboard.writeText(tel).then(() => {
            alert('Telefonszám másolva a vágólapra!');
        }).catch(err => {
            console.error('Hiba történt a másolás során:', err, '<br> ');
        });
    }


// termekek.html redirect
function termekekRedirect() {
    window.location.href = "termekeink.html";
}