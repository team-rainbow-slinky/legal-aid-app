import { config } from 'dotenv';
import { sign, verify } from 'jsonwebtoken';
import { compareSync, hashSync } from 'bcryptjs';

config();

const APP_SECRET = process.env.APP_SECRET;
const EXPIRE_IN = '24h';


export const hash = password => hashSync(password, 8);

export const compare = (password, hash) => compareSync(password, hash);

export const tokenize = payload => sign({ payload }, APP_SECRET, { expiresIn: EXPIRE_IN });

export const untokenize = token => verify(token, APP_SECRET).payload;
