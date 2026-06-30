// src/repositories/moviesRepository.ts
//
// Aplica as mesmas cache strategies da aula de Service Workers,
// mas na camada de dados com IndexedDB.
//
// Estratégias (igual ao que o SW faz com HTTP):
//   NetworkFirst          — tenta rede; cache como fallback offline
//   CacheFirst            — serve cache; atualiza em background
//   StaleWhileRevalidate  — serve cache imediatamente + atualiza em paralelo

import { fetchPopularMovies } from '../services/tmdb';
import { saveMovies, loadMovies } from '../services/db';
import type { Movie } from '../types/movie';

export type CacheStrategy = 'NetworkFirst' | 'CacheFirst' | 'StaleWhileRevalidate';

// ── TODO 3c ────────────────────────────────────────────────────────────────
// Implemente as três estratégias abaixo.
// Cada uma recebe `page` e retorna `Movie[]`.
//
// NetworkFirst:
//   1. Tenta fetchPopularMovies(page)
//   2. Se OK → saveMovies(page, results) → retorna results
//   3. Se falhar → loadMovies(page) → retorna cache (ou lança se vazio)
//
// CacheFirst:
//   1. Tenta loadMovies(page)
//   2. Se existe → retorna cache (e atualiza em background via fetchPopularMovies)
//   3. Se vazio → fetchPopularMovies(page) → saveMovies → retorna
//
// StaleWhileRevalidate:
//   1. Lê cache (pode ser undefined)
//   2. Dispara fetch em background (não await)
//      → quando resolve: saveMovies + notifica via onRevalidate?
//   3. Retorna cache se existir, senão aguarda o fetch
//
// Referência: slides Aula 4 — "Cache strategies" (mesma lógica, IndexedDB em vez de CacheStorage)
// ───────────────────────────────────────────────────────────────────────────

async function networkFirst(page: number): Promise<Movie[]> {
  // TODO 3c — NetworkFirst
  return [];
}

async function cacheFirst(page: number): Promise<Movie[]> {
  // TODO 3c — CacheFirst
  return [];
}

async function staleWhileRevalidate(
  page: number,
  onRevalidate?: (movies: Movie[]) => void,
): Promise<Movie[]> {
  // TODO 3c — StaleWhileRevalidate
  return [];
}

export const moviesRepository = {
  async getPopularMovies(
    page: number,
    strategy: CacheStrategy = 'NetworkFirst',
    onRevalidate?: (movies: Movie[]) => void,
  ): Promise<Movie[]> {
    switch (strategy) {
      case 'CacheFirst':          return cacheFirst(page);
      case 'StaleWhileRevalidate': return staleWhileRevalidate(page, onRevalidate);
      default:                    return networkFirst(page);
    }
  },
};
