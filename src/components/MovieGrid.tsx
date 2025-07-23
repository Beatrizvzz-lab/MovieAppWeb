import { Movie } from '@/interfaces/movies';
import { MovieCard } from './MovieCard';
import { Search } from 'lucide-react';

interface MovieGridProps {
  movies: Movie[];
  searchTerm: string;
}

export function MovieGrid({ movies, searchTerm }: MovieGridProps) {
  if (movies.length === 0 && searchTerm) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-20 h-20 rounded-full bg-muted/20 flex items-center justify-center mb-6">
          <Search className="w-10 h-10 text-muted-foreground" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Nenhum filme encontrado</h3>
        <p className="text-muted-foreground max-w-md">
          Não encontramos nenhum filme que corresponda à sua busca por "{searchTerm}". Tente usar
          palavras-chave diferentes.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}
