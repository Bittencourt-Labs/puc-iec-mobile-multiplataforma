// src/hooks/useFavorites.ts

import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'tmdb-favorites';

function loadIds(): Set<number> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return new Set(raw ? (JSON.parse(raw) as number[]) : []);
  } catch {
    return new Set();
  }
}

function persist(ids: Set<number>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...ids]));
}

// ── TODO 4 ─────────────────────────────────────────────────────────────────
// Após salvar favoritos, atualize o badge do app instalado:
//
//   if ('setAppBadge' in navigator) {
//     navigator.setAppBadge(ids.size);
//   }
//
// O badge aparece no ícone do app quando instalado (Android/desktop).
// Chame isso em toggle() sempre que o Set mudar.
// ───────────────────────────────────────────────────────────────────────────

export function useFavorites() {
  const [ids, setIds] = useState<Set<number>>(loadIds);

  useEffect(() => {
    persist(ids);
    // TODO 4: navigator.setAppBadge(ids.size)
  }, [ids]);

  const toggle = useCallback((id: number) => {
    setIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const isFavorite = useCallback((id: number) => ids.has(id), [ids]);

  return { isFavorite, toggle, count: ids.size };
}
