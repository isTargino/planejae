import { Layout } from "../components/DashboardLayout";

export function Dashboard() {
  return (
    <Layout>
      <div className="mt-8">
        
        <div className="flex gap-8">
          {/* SALDO */}
          <div className="bg-gradient-to-b from-purple-400 to-purple-800 h-32 w-96 rounded-3xl flex flex-col shadow-xl">
            <h1 className="ml-4 mt-4 font-bold text-xl text-white border-b border-white pb-2">
              Saldo
            </h1>

            <p className="text-white text-3xl font-semibold mt-3 ml-4">
              R$5.000,<span className="text-2xl">00</span>
            </p>
          </div>

          {/* ENTRADAS */}
          <div className="bg-gradient-to-b from-white to-green-200 h-32 w-96 rounded-3xl flex flex-col shadow-xl">
            <h1 className="ml-4 mt-4 font-bold text-xl text-green-700 border-b border-green-700 pb-2">
              Entradas
            </h1>

            <p className="text-green-700 text-3xl font-semibold mt-3 ml-4">
              R$7.000,<span className="text-2xl">00</span>
            </p>
          </div>

          {/* SAÍDAS */}
          <div className="bg-gradient-to-b from-white to-red-200 h-32 w-96 rounded-3xl flex flex-col shadow-xl">
            <h1 className="ml-4 mt-4 font-bold text-xl text-red-700 border-b border-red-700 pb-2">
              Saídas
            </h1>

            <p className="text-red-700 text-3xl font-semibold mt-3 ml-4">
              R$7.000,<span className="text-2xl">00</span>
            </p>
          </div>
        </div>

        {/*GRÁFICO*/}

        <div className="bg-white rounded-2xl shadow mt-8 h-[400px] flex flex-col shadow-sm">
            <h1 className="text-xl text-purple-700 font-semibold ml-4 mt-4 border-b border-purple-700 pb-2">Gastos por categoria</h1>
      </div>
      </div>
    </Layout>
  );
}