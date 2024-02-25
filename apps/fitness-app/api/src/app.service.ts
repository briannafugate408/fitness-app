import { Injectable } from '@nestjs/common';
import * as data from './db.json';


export interface Workout {
  id: string;
  name: string;
  gifUrl: string;
  bodyPart: string;
  equipment: string;
  target: string;
}

@Injectable()
export class AppService {
  getAllWorkoutData(): Workout[] {
    return data.map((w) => w);
  }
  
  getWorkoutNames(): string[] {
    return data.map((w) => w.name);
  }

  getWorkoutIds(): string[] {
    return data.map((w) => w.id);
  }

  getWorkoutById(queryString: string): Workout {
    return data.find((w) => w.id === queryString);
  }

  getWorkoutByBodyPart(queryString: string): Workout[] {
    return data.filter((w) => w.bodyPart === queryString);
  }
}
