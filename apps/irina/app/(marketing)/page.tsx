import { leerRegistro, escribirRegistro } from '../home/actions';
import { withI18n } from '~/lib/i18n/with-i18n';

async function Home() {
  const ownerId = '50964620-8c65-496d-97ed-3913896316ff';
  const { data, error } = await leerRegistro(ownerId);

  return (
    <div style={{ padding: '40px', color: 'black', background: 'white' }}>
      <h1>PRUEBA DE CONEXIÓN</h1>

      <div style={{ margin: '20px 0', padding: '20px', border: '1px solid black' }}>
        <h3>Registro recuperado:</h3>
        {error ? (
          <p style={{ color: 'red' }}>Error: {JSON.stringify(error)}</p>
        ) : (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        )}
      </div>

      <form action={async () => {
        'use server'
        await escribirRegistro(ownerId, { test: "Prueba desde marketing" });
      }}>
        <button type="submit" style={{ padding: '10px 20px', background: 'black', color: 'white' }}>
          ESCRIBIR REGISTRO
        </button>
      </form>
    </div>
  );
}

export default withI18n(Home);
