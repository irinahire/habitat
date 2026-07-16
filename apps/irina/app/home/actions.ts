'use server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function leerRegistro(ownerId: string) {
  const { data, error } = await supabase
    .from('habitat')
    .select('*')
    .eq('owner_id', ownerId)
    .maybeSingle()
  return { data, error }
}

export async function escribirRegistro(ownerId: string, data: any) {
  const { data: result, error } = await supabase
    .from('habitat')
    .insert([{ owner_id: ownerId, data: data }])
  return { result, error }
}
