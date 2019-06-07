const smsController = {};
const Nexmo = require('nexmo');

const nexmo = new Nexmo({
    apiKey: '78017eeb',
    apiSecret: '3dwz4htqZ1qQeLmh'
});

smsController.enviarMensaje = async (req, res)=>{
    const from = req.body.from;
    const to = req.body.to; //Los numeros deben estar registrados
    const text = req.body.text;
    try{
        const respuesta = await nexmo.message.sendSms(from, to, text);
        console.dir(respuesta);
        res.send({status: 'SMS enviado con éxito'});
    }catch (e) {
        console.log(e);
        res.json({status: 'Error al enviar el mensaje'});
    }
};

module.exports = smsController;