export function proteinBlastpUrl(sequence: string): string {
  const normalized = sequence.replace(/\s+/g, '').trim()
  const params = new URLSearchParams({
    CMD: 'Put',
    PROGRAM: 'blastp',
    PAGE_TYPE: 'BlastSearch',
    DATABASE: 'clustered_nr',
    QUERY: normalized,
  })
  return normalized ? `https://blast.ncbi.nlm.nih.gov/Blast.cgi?${params.toString()}` : 'https://blast.ncbi.nlm.nih.gov/Blast.cgi'
}
