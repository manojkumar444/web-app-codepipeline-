require('dotenv').config()
var nodemailer = require('nodemailer');
function sendEmail(to,otp) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'manojullagallu@@gmail.com',
            pass: "9182631769@nec"
        }
    });
    // var cc = ["shekhjeel@gmail.com","shekhutsav1111@gmail.com"]
    var str = "your otp = ";
    var a =otp;
    str+=a;
    str += "\notp valid till 2min"
    var mailOptions = {
        from: 'manojullagallu@gmail.com',
        to: to,
        // cc:cc,
        subject: 'Reset Password Quizy!!',
        text: str
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
module.exports = sendEmail