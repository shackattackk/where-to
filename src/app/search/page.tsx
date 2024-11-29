'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CookieIcon, MagnifyingGlassIcon, LightningBoltIcon} from '@radix-ui/react-icons'


export const mockSuggestions = [
    'Marugame',
    'Yume Ga',
];
export default function FoodSearch() {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)


  const handleSearch = async () => {
    setIsLoading(true)
    setError(null)
    try {
      // This is a placeholder for the actual OpenAI API call
      const response = await fetch('/api/get-suggestions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
      })
      if (!response.ok) throw new Error('Failed to fetch suggestions')
      const data = await response.json()
      setSuggestions(data.suggestions)
    } catch (err) {
      setError('Failed to get suggestions. Please try again.')
    } finally {
      setSuggestions(mockSuggestions);
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-content p-8 bg-gradient-to-br from-purple-700 via-pink-500 to-orange-500">
      <Card className="w-full max-w-2xl mx-auto overflow-hidden shadow-2xl">
        <CardHeader className="bg-gray-900 text-white">
          <CardTitle className="text-3xl font-bold flex items-center gap-2">
            <CookieIcon className="w-8 h-8" />
            Food Finder
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex gap-2">
            <Input
              placeholder="I want to eat udon..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="text-lg"
            />
            <Button onClick={handleSearch} disabled={isLoading} size="lg">
              {isLoading ? <LightningBoltIcon className="w-4 h-4 animate-spin" /> : <MagnifyingGlassIcon className="w-4 h-4" />}
            </Button>
          </div>
          {error && <p className="mt-4 text-red-500">{error}</p>}
          {suggestions.length > 0 && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-3">Suggestions:</h2>
              <ul className="space-y-2">
                {suggestions.map((suggestion, index) => (
                  <li key={index} className="bg-gray-100 p-3 rounded-lg shadow">{suggestion}</li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

