import { Routes } from '@angular/router';
import {CoursesComponent} from "./pages/courses/courses.component";
import {ExercisesComponent} from "./pages/exercises/exercises.component";
import {GameComponent} from "./pages/game/game.component";

export const routes: Routes = [
  { path: 'cours', component: CoursesComponent },
  { path: 'exercices', component: ExercisesComponent },
  { path: 'games', component: GameComponent },
];
