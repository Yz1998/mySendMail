const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  // host: 'smtp.ethereal.email',
  service: 'QQ', 
  port: 465, // SMTP 端口
  secureConnection: true, // 使用了 SSL
  auth: {
    user: '1004887727@qq.com',
    // 这里密码不是qq密码，是你设置的smtp授权码
    pass: '你猜呀',
  }
});

let mailOptions = {
  from: '"YZ <1004887727@qq.com>', // sender address
  to: 'Yzisgreat@outlook.com', // list of receivers
  subject: 'Hello', // Subject line
  // 发送text或者html格式
  text: 'Hello world?', // plain text body
  //html: '<b>Hello world?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message sent: %s', info.messageId);
  // Message sent: <04ec7731-cc68-1ef6-303c-61b0f796b78f@qq.com>
});