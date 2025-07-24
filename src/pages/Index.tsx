import { useState, useMemo } from 'react';
import { SearchBar } from '@/components/SearchBar';
import { MovieGrid } from '@/components/MovieGrid';
import { Film, Sparkles } from 'lucide-react';
import { useMovies } from '@/hooks/useMovies';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { movies, loading, error } = useMovies();

  const filteredMovies = useMemo(() => {
    if (!searchTerm.trim()) return movies;

    return movies.filter(
      (movie) =>
        movie.Title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.Year.includes(searchTerm) ||
        movie.Type?.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm, movies]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-secondary" />
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffd700' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
                <Film className="w-8 h-8 text-primary-foreground" />
              </div>
              <Sparkles className="w-8 h-8 text-primary animate-pulse" />
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
              Movie
              <span className="bg-gradient-primary bg-clip-text text-transparent"> App</span>
            </h1>

            <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Embarque em uma jornada pela galáxia de Star Wars. Explore filmes épicos, descubra
              curiosidades, pesquise e mergulhe nos detalhes que tornam essa saga inesquecível.
            </p>

            <div className="pt-8">
              <SearchBar
                value={searchTerm}
                onChange={setSearchTerm}
                placeholder="Buscar na galáxia de filmes..."
              />
            </div>

            {loading ? (
              <p className="text-sm text-muted-foreground mt-4">Carregando filmes...</p>
            ) : error ? (
              <p className="text-sm text-red-500 mt-4">{error}</p>
            ) : (
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2" />
                  {movies.length} Disponíveis
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2" />
                  {movies.filter((m) => m.Type === 'movie').length} filmes
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2" />
                  {movies.filter((m) => m.Type === 'series').length} séries
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2" />
                  {movies.filter((m) => m.Type === 'game').length} games
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Movies Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            {searchTerm ? `Resultados para "${searchTerm}"` : 'Todos os Filmes'}
          </h2>
          <p className="text-muted-foreground">
            {filteredMovies.length}{' '}
            {filteredMovies.length === 1 ? 'filme encontrado' : 'filmes encontrados'}
          </p>
        </div>

        <MovieGrid movies={filteredMovies} searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default Index;
