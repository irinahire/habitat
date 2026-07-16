import { PageBody, PageHeader } from '@kit/ui/page';

import { DashboardDemo } from '~/home/_components/dashboard-demo';

import { leerRegistro, escribirRegistro } from './actions'

export default function HomePage() {
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
