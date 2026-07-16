import { PageBody, PageHeader } from '@kit/ui/page';
import { DashboardDemo } from '~/home/_components/dashboard-demo';
import { leerRegistro, escribirRegistro } from './actions'
// En tu page.tsx, agregá esto temporalmente arriba de todo

export default function HomePage() {
  console.log("¿Tengo URL?:", !!process.env.NEXT_PUBLIC_SUPABASE_URL);
  console.log("¿Tengo KEY?:", !!process.env.SUPABASE_SERVICE_ROLE_KEY);
  return (
    <div>
      <button onClick={async () => {
        const res = await leerRegistro('50964620-8c65-496d-97ed-3913896316ff')
        console.log("Leído:", res)
      }}>LEER REGISTRO</button>

      <button onClick={async () => {
        const res = await escribirRegistro('50964620-8c65-496d-97ed-3913896316ff', { test: "dato nuevo" })
        console.log("Escrito:", res)
      }}>ESCRIBIR REGISTRO</button>
    </div>
  )
}
