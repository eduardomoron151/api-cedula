
const axios = require('axios');
const cheerio = require('cheerio');

const buscarCedula = async (req, res) => {

    try {
        const { nacionalidad, cedula } = req.params;

        const html = await axios
            .get(`http://www.cne.gob.ve/web/registro_electoral/ce.php?nacionalidad=${nacionalidad}&cedula=${cedula}`, {timeout : 10000});

        const $ = await cheerio.load(html.data);

        const verificarData = await $('td[align="center"]')[1].children[0].children[0].children[0].data;

        if(verificarData === 'ADVERTENCIA') {
            return res.status(400).json({
                msg : 'Esta cédula de identidad no se encuentra registrada'
            })
        }

        const [ uid, nombre ] = [ 
            $('td[align="left"]')[1].children[0].data.replace('V-',''),
            $('td[align="left"]')[3].children[0].children[0].data,
        ];

        const [ estado, municipio, parroquia, centro, direccion ] = [ 
            $('td[align="left"]')[5].children[0].data,
            $('td[align="left"]')[7].children[0].data,
            $('td[align="left"]')[9].children[0].data,
            $('td[align="left"]')[11].children[0].children[0].data,
            $('td[align="left"]')[13].children[0].children[0].data
        ];

        res.status(200).json({
            usuario : {
                uid, nombre
            },
            datosElectorales : {
                estado, municipio, parroquia, centro, direccion
            }
        });
    } catch (error) {
        res.status(500).json({error})
    }
}

module.exports = {
    buscarCedula
}