// src/services/db.ts — IndexedDB via idb (sem React)

import { openDB } from 'idb';
import type { Movie } from '../types/movie';

const DB_NAME = 'tmdb-cache';
const DB_VERSION = 1;
const STORE = 'movies';

const getDB = () =>
  openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      db.createObjectStore(STORE);
    },
  });

// ── TODO 3a ────────────────────────────────────────────────────────────────
// Implemente saveMovies: persiste a lista de filmes de uma página no IndexedDB.
//
// Dica: use (await getDB()).put(STORE, movies, `page-${page}`)
// ───────────────────────────────────────────────────────────────────────────
export async function saveMovies(page: number, movies: Movie[]): Promise<void> {
  // TODO 3a
}

// ── TODO 3b ────────────────────────────────────────────────────────────────
// Implemente loadMovies: lê a lista de filmes de uma página do IndexedDB.
// Retorna undefined se não existir cache para essa página.
//
// Dica: return (await getDB()).get(STORE, `page-${page}`)
// ───────────────────────────────────────────────────────────────────────────
export async function loadMovies(page: number): Promise<Movie[] | undefined> {
  // TODO 3b
  return undefined;
}
