import { PageBody, PageHeader } from '@kit/ui/page';
import { leerRegistro, escribirRegistro } from './actions'

export default function HomePage() {
  return (
    <>
      <PageHeader title="MI ÁREA DE TRABAJO" description="Probando si esto aparece" />
      
      <PageBody>
        <div className="p-10 border-2 border-dashed border-red-500">
          <h1 className="text-2xl font-bold text-red-600">¡EL ARCHIVO PAGE.TSX ESTÁ VIVO!</h1>
          
          <button 
            className="mt-4 p-4 bg-blue-500 text-white rounded"
            onClick={async () => {
              console.log("Intentando leer...");
              const res = await leerRegistro('50964620-8c65-496d-97ed-3913896316ff');
              console.log("Resultado:", res);
            }}
          >
            LEER REGISTRO
          </button>
        </div>
      </PageBody>
    </>
  )
}
