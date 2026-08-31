import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql';
import ejs from 'ejs';
import fs from 'fs';
import Papa from 'papaparse';

const app = express(); 
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { markers: locations, apiKey: 'AIzaSyBzik70UCWAYQ4bj6JInFftQHVF6ssZefE' });
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});

app.use('/icons', express.static('icons'));


// Read the CSV file
const csvFile = fs.readFileSync('defibrillator_v2.csv', 'utf8');

// Parse the CSV data
const results = Papa.parse(csvFile, {
    header: true,  // Assumes the CSV has a header row
    dynamicTyping: true  // Converts numbers/booleans automatically
});

const locations = results.data;

app.get('/', (req, res) => {
    res.render('index', { markers: locations, apiKey: 'AIzaSyBzik70UCWAYQ4bj6JInFftQHVF6ssZefE' });
});