import express from 'express';
import Route from './route'
import bodyParser from 'express'

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
Route(app)

app.listen(3000)


