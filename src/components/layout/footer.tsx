import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold">Rick Vianen</h3>
            <p className="mt-2 text-sm text-gray-600">
              Coaching &amp; programma&apos;s voor persoonlijke groei.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Links</h4>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li>
                <Link href="/programmas" className="hover:text-gray-900">
                  Programma&apos;s
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/gratis-waarde" className="hover:text-gray-900">
                  Gratis Waarde
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Contact</h4>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li>
                <a
                  href="https://www.linkedin.com/in/rickvianen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Rick Vianen. Alle rechten
          voorbehouden.
        </div>
      </div>
    </footer>
  );
}
