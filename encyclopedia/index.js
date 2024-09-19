const express =  require('express');

const app  = express();
app.use(express.json());
app.use(express.static('./app/dist'));

const port = process.env.PORT || 7080;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
app.use('/*', express.static('./app/dist'));
