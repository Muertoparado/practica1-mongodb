import { ObjectId } from 'mongodb';
import { con }  from '../db/atlas.js';
import { limitGrt } from '../limit/config.js';
import {Router} from 'express';
const appCampus= Router();