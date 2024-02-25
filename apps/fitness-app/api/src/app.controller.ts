import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService, Workout } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/all-workouts")
  getAllWorkoutData(): Workout[] {
    return this.appService.getAllWorkoutData();
  }

  @Get("/get-workout-names")
  getWorkoutNames(): string[] {
    return this.appService.getWorkoutNames();
  }

  @Get("/get-workout-ids")
  getWorkoutIds(): string[] {
    return this.appService.getWorkoutIds();
  }

  @Get('workout/:id')
  getWorkoutById(@Param('id') id: string): Workout {
    return this.appService.getWorkoutById(id);
  }

  @Get('workouts/:bodypart')
  getWorkoutsByBodyPart(@Param('bodypart') bodypart: string): Workout[] {
    return this.appService.getWorkoutByBodyPart(bodypart);
  }
}
