import { Routes } from '@angular/router';
import {CoursesComponent} from "./pages/courses/courses.component";
import {ExercisesComponent} from "./pages/exercises/exercises.component";
import {GameComponent} from "./pages/game/game.component";
import {PokemonComponent} from "./pages/pokemon/pokemon.component";
import {PokemonShowComponent} from "./pages/pokemon-show/pokemon-show.component";

export const routes: Routes = [
  { path: 'cours', component: CoursesComponent },
  { path: 'exercices', component: ExercisesComponent },
  { path: 'games', component: GameComponent },
  { path: 'pokemon', component: PokemonComponent },
  { path: 'pokemon/:name', component: PokemonShowComponent },
];
