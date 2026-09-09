export const statusLabels: Record<string, string> = {
  concept: 'Concept',
  development: 'In development',
  demo: 'Demo available',
  released: 'Released',
  paused: 'Paused',
};

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
