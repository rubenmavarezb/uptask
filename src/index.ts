import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
//////////////////////////////
import routes from './routes';
//////////////////////////////

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded( { extended: true } ))

app.set('PORT', 4000);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../views'));

//routes
const { projectsRouter } = routes;

app.use('/', projectsRouter);

//Init app
app.listen(app.get('PORT'), '0.0.0.0', () => {
    console.log(`server is running in ${app.get('PORT')}`)
});