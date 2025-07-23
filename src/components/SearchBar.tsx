import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, X } from 'lucide-react';
import { useState } from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({ value, onChange, placeholder = 'Buscar filmes...' }: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative max-w-2xl mx-auto">
      <div
        className={`relative transition-all duration-300 ${isFocused ? 'transform scale-105' : ''}`}
      >
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />

        <Input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={`pl-12 pr-12 h-14 text-lg bg-card/50 backdrop-blur-sm border-border/50 rounded-2xl transition-all duration-300 focus:shadow-glow focus:border-primary/50 ${
            isFocused ? 'bg-card/80' : ''
          }`}
        />

        {value && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onChange('')}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-destructive/20 transition-colors duration-300"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>

      {isFocused && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-20 blur-xl transition-opacity duration-300" />
      )}
    </div>
  );
}
