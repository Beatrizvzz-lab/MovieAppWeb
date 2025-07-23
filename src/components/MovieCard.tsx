import { Movie } from '@/interfaces/movies';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Film, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useMovieDetails } from '@/hooks/useMovieDetails.ts';

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  const { movie: movieDetails } = useMovieDetails(movie.imdbID);

  const hasDetails = movie.imdbID === movieDetails?.imdbID;

  return (
    <Card className="group relative overflow-hidden bg-gradient-card backdrop-blur-sm border-border/50 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 hover:-translate-y-2">
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

      <div className="relative p-4">
        <div className="aspect-[2/3] relative overflow-hidden rounded-lg mb-4">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/placeholder.svg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <Badge
            variant="secondary"
            className="absolute top-2 right-2 bg-background/90 backdrop-blur-sm border-primary/20"
          >
            <Calendar className="w-3 h-3 mr-1" />
            {movie.Year}
          </Badge>

          <Badge
            variant="outline"
            className="absolute top-2 left-2 bg-background/90 backdrop-blur-sm border-primary/20"
          >
            <Film className="w-3 h-3 mr-1" />
            {movie.Type}
          </Badge>
        </div>

        <div className="space-y-3">
          <h3 className="font-bold text-lg leading-tight text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {movie.Title}
          </h3>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Star className="w-4 h-4 fill-primary text-primary" />
              <span className="text-sm font-medium">IMDb</span>
            </div>

            {hasDetails ? (
              <Link
                to={`/movie/${movie.imdbID}`}
                className="text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-300 relative group/link"
              >
                Ver detalhes
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/link:w-full" />
              </Link>
            ) : (
              <span className="text-sm text-muted-foreground/60">Sem detalhes</span>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
