import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import axios from 'axios';
import { MovieDetail } from '@/interfaces/movies.ts';

export function useMovieDetails(id: string | null) {
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchMovieDetails = async () => {
      setLoading(true);
      setNotFound(false);

      try {
        const response = await api.get<MovieDetail>(`/movies/${id}/detail`);
        setMovie(response.data);
      } catch (err: unknown) {
        if (axios.isAxiosError(err) && err.response?.status === 404) {
          setNotFound(true);
        } else {
          console.error('Erro ao buscar detalhes do filme:', err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return { movie, loading, notFound };
}
