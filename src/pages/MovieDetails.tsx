import { useParams, Link } from 'react-router-dom';
import { useMovieDetails } from '@/hooks/useMovieDetails';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Calendar, Clock, Star, Trophy, Users, Globe, DollarSign } from 'lucide-react';

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const { movie, loading, notFound } = useMovieDetails(id || null);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground text-lg">Carregando detalhes do filme...</p>
      </div>
    );
  }

  if (notFound || !movie) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-foreground">Filme não encontrado</h1>
          <p className="text-muted-foreground">Os detalhes deste filme não estão disponíveis.</p>
          <Link to="/">
            <Button className="bg-gradient-primary hover:bg-gradient-primary/90 text-primary-foreground">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao catálogo
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-secondary opacity-90" />
        <div className="relative container mx-auto px-4 py-8">
          <Link to="/">
            <Button
              variant="ghost"
              className="mb-6 hover:bg-primary/10 transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao catálogo
            </Button>
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Poster */}
            <div className="lg:col-span-1">
              <Card className="overflow-hidden shadow-hover bg-gradient-card backdrop-blur-sm border-border/50">
                <div className="aspect-[2/3] relative">
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder.svg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                </div>
              </Card>
            </div>

            {/* Movie Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                  {movie.Title}
                </h1>

                <div className="flex flex-wrap gap-3 mb-6">
                  <Badge
                    variant="secondary"
                    className="bg-primary/20 text-primary border-primary/30"
                  >
                    <Calendar className="w-3 h-3 mr-1" />
                    {movie.Year}
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-primary/20 text-primary border-primary/30"
                  >
                    <Clock className="w-3 h-3 mr-1" />
                    {movie.Runtime}
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-primary/20 text-primary border-primary/30"
                  >
                    {movie.Rated}
                  </Badge>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {movie.Genre.split(', ').map((genre) => (
                    <Badge key={genre} variant="outline" className="border-border/50">
                      {genre}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Ratings */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {movie.Ratings?.map((rating) => (
                  <Card
                    key={rating.Source}
                    className="bg-gradient-card backdrop-blur-sm border-border/50"
                  >
                    <CardContent className="p-4 text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Star className="w-5 h-5 text-primary mr-2" />
                        <span className="font-bold text-2xl text-primary">{rating.Value}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{rating.Source}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Plot */}
              <Card className="bg-gradient-card backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">Sinopse</h3>
                  <p className="text-foreground/90 leading-relaxed">{movie.Plot}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Cast & Crew */}
          <Card className="bg-gradient-card backdrop-blur-sm border-border/50 shadow-card">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <Users className="w-6 h-6 mr-3 text-primary" />
                Elenco e Equipe
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Diretor</h4>
                  <p className="text-muted-foreground">{movie.Director}</p>
                </div>

                <Separator className="bg-border/50" />

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Roteirista</h4>
                  <p className="text-muted-foreground">{movie.Writer}</p>
                </div>

                <Separator className="bg-border/50" />

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Elenco Principal</h4>
                  <p className="text-muted-foreground">{movie.Actors}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Production Info */}
          <Card className="bg-gradient-card backdrop-blur-sm border-border/50 shadow-card">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <Globe className="w-6 h-6 mr-3 text-primary" />
                Informações de Produção
              </h3>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">País</h4>
                    <p className="text-muted-foreground">{movie.Country}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Idioma</h4>
                    <p className="text-muted-foreground">{movie.Language}</p>
                  </div>
                </div>

                <Separator className="bg-border/50" />

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Produtora</h4>
                  <p className="text-muted-foreground">{movie.Production}</p>
                </div>

                <Separator className="bg-border/50" />

                <div>
                  <h4 className="font-semibold text-foreground mb-2 flex items-center">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Bilheteria
                  </h4>
                  <p className="text-muted-foreground">{movie.BoxOffice}</p>
                </div>

                <Separator className="bg-border/50" />

                <div>
                  <h4 className="font-semibold text-foreground mb-2 flex items-center">
                    <Trophy className="w-4 h-4 mr-2" />
                    Prêmios
                  </h4>
                  <p className="text-muted-foreground">{movie.Awards}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
