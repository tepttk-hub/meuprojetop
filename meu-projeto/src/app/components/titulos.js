export default function Titulo({ texto, nivel = 'h1', className = '' }) {
  const Tag = nivel;

  const baseStyles = {
    h1: 'text-4xl font-bold tracking-tight text-gray-900',
    h2: 'text-2xl font-semibold tracking-tight text-gray-800',
    h3: 'text-xl font-medium text-gray-700',
  };

  return (
    <Tag className={`${baseStyles[nivel]} ${className}`}>
      {texto}
    </Tag>
  );
}