const {response} = require('express');
const { db } = require('../../database/config');


const getFront = (req, res = response) => {
    const {id} = req.query;
    const sqlCh = `SELECT vcha_image FROM portada_game WHERE vcha_id = '${id}'`;
    try {
        db.query(sqlCh, async (err, data, fields) => {
            if (err) {
                res.status(400).json({ ok: false, image: 'Error en la consulta sql' })
            } else {
                if (data.length < 1) {
                    res.status(201).json({ ok: false, image: 'Id no encontrado' })
                } else {
                    for (const val of data) {
                        res.status(200).json({ ok: true, image: val.vcha_image })
                    }
                }
            }
        });
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    getFront
}