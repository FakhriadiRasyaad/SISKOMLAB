
document.getElementById('whatsapp-submit').addEventListener('click', function() {
    // Get values from form fields
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Create the mailto link
    var recipient = 'labsiskom@365.telkomuniversity.ac.id'; // Your email address
    var subject = 'Contact Form Submission';
    var body = 'Name: ' + name + '%0D%0A' +
               'Email: ' + email + '%0D%0A' +
               'Message: ' + message;

    var mailtoLink = 'mailto:' + recipient + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

    // Redirect to mailto link
    window.location.href = mailtoLink;
});

