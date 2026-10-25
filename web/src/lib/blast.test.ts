import { describe, expect, it } from 'vitest'
import { proteinBlastpUrl } from './blast'

describe('protein BLAST submission', () => {
  it('builds the default NCBI BLASTP query from a protein translation', () => {
    const url = proteinBlastpUrl('MKTAYIAK\nR')
    expect(url).toBe('https://blast.ncbi.nlm.nih.gov/Blast.cgi?CMD=Put&PROGRAM=blastp&PAGE_TYPE=BlastSearch&DATABASE=clustered_nr&QUERY=MKTAYIAKR')
  })

  it('falls back to the BLAST home page when the sequence is empty', () => {
    expect(proteinBlastpUrl('   \n')).toBe('https://blast.ncbi.nlm.nih.gov/Blast.cgi')
  })
})
