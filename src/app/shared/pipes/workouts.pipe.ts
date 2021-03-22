import { Pipe, PipeTransform } from '@angular/core';
import { Workout } from 'src/app/core/models/workout.model';

@Pipe({
  name: 'appWorkouts',
})
export class WorkoutsPipe implements PipeTransform {
  transform(value: Workout, ...args: unknown[]): unknown {
    if (value.type === 'endurance') {
      return `Distance: ${value.endurance.distance} km, Duration: ${value.endurance.duration} min`;
    }
    if (value.type === 'strength') {
      return `Weight ${value.strength.weight} kg, Reps: ${value.strength.reps}, Sets: ${value.strength.sets}`;
    }
    return '';
  }
}