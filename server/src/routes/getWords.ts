import express, { Request, Response, NextFunction } from 'express';
import * as fs from 'fs';
import path from 'path';

const getWords = express.Router();

// here wer are getting the data from the json file.
const data = fs.readFileSync(path.resolve(__dirname, '../index.json'), {
	encoding: 'utf-8',
	flag: 'r'
});
// then we randomly choose ten items from the wordsList.
const arr = JSON.parse(data)
	['wordList'].sort(() => 0.5 - Math.random())
	.slice(0, 10);

getWords.get('/', (req: Request, res: Response, next: NextFunction) => {
	return res.send(arr);
});

export default getWords;
