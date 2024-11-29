
import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Where To?
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/search"
                className="text-muted-foreground hover:text-primary"
              >
                Search
              </Link>
            </li>
            <li>
              <Link
                href="/map"
                className="text-muted-foreground hover:text-primary"
              >
                Map
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}