
export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4">
      <img src='/logo.svg' alt="Logo" className="h-8" />
      <button>
        <img src='/Primary.svg' alt="Primary" />
      </button>
    </header>
  );
}
